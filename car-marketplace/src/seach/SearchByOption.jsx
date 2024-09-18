import Service from "@/Shared/Service";
import { db } from "../../config/index";
import { carImages, CarListing } from "../../config/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Search from "@/components/Search";
import CarItem from "@/components/CarItem";

const SearchByOption = () => {
  const [searchParams] = useSearchParams();
  const [carList, setCarList] = useState();

  const condition = searchParams.get("cars");
  const make = searchParams.get("make");
  const price = searchParams.get("price");

  useEffect(() => {
    getCarList();
  }, []); // only run effect if props change

  const getCarList = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(carImages, eq(CarListing.id, carImages.carListingId))
      .where(condition != null && eq(CarListing.condition, condition))
      .where(make != null && eq(CarListing.make, make))
      .where(price != null && CarListing.sellingPrice < price);

    const respond = Service.FormatResult(result);
    setCarList(respond);
    console.log(respond);
  };

  return (
    <div>
      <Header />
      <div className=" p-16 bg-black flex justify-center">
        <Search />
      </div>

      <div className="  p-10 md:px-20">

        {/* Car List */}
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7">
          {carList?.length > 0
            ? carList.map((item, index) => (
                <div key={index}>
                  <CarItem car={item} />
                </div>
              ))
            : [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                // For loading effect until car loading
                <div className=" h-[300px] rounded-xl bg-slate-200 animate-pulse"></div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default SearchByOption;
