import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import DetailsHeader from "./components/DetailsHeader";
import { carImages, CarListing } from "../../../config/schema";
import { eq } from "drizzle-orm";
import Service from "@/Shared/Service";
import { db } from "../../../config/index";
import { useParams } from "react-router-dom";
import ImageGalary from "./components/ImageGalary";
import Description from "./components/Description";
import Features from "./components/Features";

const ListingDetails = () => {

    const {id} = useParams();
    const [carDetails, setCarDetails] = useState();
    const features = carDetails?.features;

    useEffect(() => {
        getCarDetails();
    }, []);

    const getCarDetails = async()=>{
        const result = await db.select().from(CarListing)
        .innerJoin(carImages, eq(CarListing.id, carImages.carListingId))
        .where(eq(CarListing.id, id));

        const respond = Service.FormatResult(result);
        setCarDetails(respond[0]);
        console.log(respond);
    }
  return (
    <div>
      <Header />
      <div className=" p-10 md:px-20">
        {/* Header details components */}
        <DetailsHeader carDetails={carDetails}/>

        <div className=" grid grid-cols-1 md:grid-cols-3 w-full gap-5 mt-8">
            {/* Left side */}
            <div className=" md:col-span-2 ">
                {/* Image Galary */}
                <ImageGalary carDetails={carDetails}/>

                {/* Description  */}
                <Description carDetails={carDetails}/>

                {/* Feature List */}
                <Features features={features}/>


            </div>


            {/* Right side */}

            <div className=" ">
                {/* Pricing */}

                {/* Car Properties */}

                {/* Owner Details */}
            </div>
        </div>

      </div>
    </div>
  );
};

export default ListingDetails;
