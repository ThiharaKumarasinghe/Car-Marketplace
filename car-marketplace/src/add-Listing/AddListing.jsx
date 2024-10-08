import Header from "@/components/Header";
import React, { useState } from "react";
import { Form, useNavigate, useSearchParams } from "react-router-dom";
import carDetails from "../Shared/carDetails.json";
import features from "../Shared/features.json";
import InputField from "./components/InputField";
import DroupdownField from "./components/DroupdownField";
import TextAreaField from "./components/TextAreaField";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { db } from "../../config/index";
import { carImages, CarListing } from "../../config/schema";
import IconField from "./components/IconField";
import UploadImagesField from "./components/UploadImagesField";
import { BiLoader } from "react-icons/bi";
// import { toast } from "../components/ui/sonner";
import { toast } from "sonner"
import { useUser } from "@clerk/clerk-react";
import moment from "moment";
import { useEffect } from "react";
import { desc, eq } from "drizzle-orm";
import Service from "@/Shared/Service";


const AddListing = () => {
  const [formData, setFormData] = useState([]);
  const [featuresData, setFeaturesData] = useState([]);
  const [triggerUploadImages, setTriggerUploadImages] = useState();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const {user} = useUser();
  const [searchParams] = useSearchParams();
  const [carInfo, setCarInfo]=useState();

  const mode = searchParams.get('mode');
  const recordID = searchParams.get('id');

  useEffect(() => {
    if(mode=='edit'){
      getListingDetails();
    }

  },[])


  const getListingDetails = async()=>{
    const result = await db
        .select()
        .from(CarListing)
        .innerJoin(carImages, eq(CarListing.id, carImages.carListingId))
        .where(eq(CarListing.id, recordID));

        const respond = Service.FormatResult(result);
        setCarInfo(respond[0]);
        setFormData(respond[0]);
        setFeaturesData(respond[0].features);
  }

  // To capture use data input
  const handleInputChange = (nameH, value) => {
    setFormData((preData) => ({
      ...preData,
      [nameH]: value,
    }));
  };

  // To capture feature data input
  const handleFeatureChange = (nameH, value) => {
    setFeaturesData((preData) => ({
      ...preData,
      [nameH]: value,
    }));
    console.log(featuresData);
  };

  const onSubmit = async (e) => {
    setLoader(true);
    toast("Please Wait...");    

    if(mode=='edit'){

      // update the vales
      const result = await db.update(CarListing)
      .set({
        ...formData,
          features: featuresData,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          postedOn: moment().format('DD/MM/YYYY'),
      })
      .where(eq(CarListing.id, recordID))
      .returning({id:CarListing.id});

      console.log(result);
      setLoader(false);
      navigate('/profile');

    }else{
      e.preventDefault();
    // console.log(formData);
    try {
      const result = await db
        .insert(CarListing)
        .values({
          ...formData,
          features: featuresData,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          userName: user?.fullName,
          userImageUrl: user?.imageUrl,
          postedOn: moment().format('DD/MM/YYYY'),
        })
        .returning({ id: CarListing.id });
      if (result) {
        console.log("data saved");
        setTriggerUploadImages(result[0]?.id);
        setLoader(false);
        navigate('/profile');
      }
    } catch (error) {
      console.log("Error: ", error);
    }

    }

    
  };

  return (
    <div>
      <Header />

      <div className="px-10 md:px-20 my-10">
        <h2 className="text-4xl font-bold">Add New Listing</h2>

        <form className=" p-10 border rounded-xl mt-10">
          {/* Car dettails */}
          <div>
            <h2 className=" font-medium text-xl mb-6">Car Details</h2>
            <div className=" grid grid-col-1 md:grid-cols-2 gap-5">
              {carDetails.carDetails.map((item, index) => (
                <div key={index}>
                  <label className=" text-sm flex items-center gap-2 mb-2">
                    <IconField icon={item.icon} />
                    {item.label}
                    {item.required ? (
                      <span className=" text-red-600">*</span>
                    ) : null}
                  </label>
                  {item.fieldType == "text" || item.fieldType == "number" ? (
                    <InputField
                      item={item}
                      handleInputChange={handleInputChange}
                      carInfo={carInfo}
                    />
                  ) : item.fieldType == "dropdown" ? (
                    <DroupdownField
                      item={item}
                      handleInputChange={handleInputChange}
                      carInfo={carInfo}
                    />
                  ) : item.fieldType == "textarea" ? (
                    <TextAreaField
                      item={item}
                      handleInputChange={handleInputChange}
                      carInfo={carInfo}                   
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <Separator className=" my-6" />
          {/* Feature List */}
          <div>
            <h2 className=" font-medium text-xl mb-6">Features</h2>
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-3">
              {features.features.map((feature, index) => (
                <div key={index} className=" flex gap-2 items-center">
                  <Checkbox
                    onCheckedChange={(value) =>
                      handleFeatureChange(feature.name, value)
                    }
                    checked = {featuresData?.[feature.name]}
                  />
                  <h2>{feature.label}</h2>
                </div>
              ))}
            </div>
          </div>

          <Separator className=" my-6" />
          {/* Car Image */}
          <h2 className=" font-medium text-xl mb-6">Upload Car Images</h2>
          <UploadImagesField
            mode ={mode}
            carInfo={carInfo}
            triggerUploadImages={triggerUploadImages}
            setLoader={(v) => {
              setLoader(v);
              navigate("/profile");
            }}
          />

          <Separator className=" my-6" />
          <div className=" mt-10 flex justify-end">
            <Button
              type="submit"
              onClick={(e) => onSubmit(e)}
              disabled={loader}
            >
              {!loader ? (
                "Submit"
              ) : (
                <BiLoader className=" animate-spin text-lg" />
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
