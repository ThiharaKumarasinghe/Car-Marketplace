import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { db } from "../../../config/index";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { carImages, CarListing } from "../../../config/schema";
import { desc, eq } from "drizzle-orm";
import Service from "@/Shared/Service";
import { FaTrashAlt } from "react-icons/fa";

import CarItem from "@/components/CarItem";

const MyListing = () => {
  const { user } = useUser();
  const [carList, setCarList] = useState([]);



  const getUserCarListing = async () => {
    try {
      const result = await db
        .select()
        .from(CarListing)
        .leftJoin(carImages, eq(CarListing.id, carImages.carListingId))
        .where(eq(CarListing.createdBy, user?.primaryEmailAddress.emailAddress))
        .orderBy(desc(CarListing.id));

        const respond = Service.FormatResult(result);

      console.log(respond);
      setCarList(respond);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    user && getUserCarListing();
  }, [user]);

  return (
    <div className=" mt-6">
      <div className=" flex justify-between items-center">
        <h2 className=" font-bold text-4xl">My Listing</h2>
        <Link to={"/add-listing"}>
          <Button> + Add New Listing</Button>
        </Link>
      </div>

      {/* For display */}
      <div className=" grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4 mt-7">

        {
            carList.map((item, index)=>(
                <div key={index}>
                    <CarItem car={item} />
                    <div className=" p-2 bg-gray-50 rounded-lg flex justify-between gap-4">
                      <Button variant="outline" className=" w-full">Edit</Button>
                      <Button variant="destructive"><FaTrashAlt/></Button>

                    </div>
                </div>
            ))
        }


      </div>
    </div>
  );
};

export default MyListing;
