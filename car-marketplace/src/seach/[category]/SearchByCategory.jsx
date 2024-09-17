import Header from "@/components/Header";
import Search from "@/components/Search";
import { db } from "../../../config/index";
import { carImages, CarListing } from "../../../config/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Service from "@/Shared/Service";
import CarItem from "@/components/CarItem";

const SearchByCategory = () => {
  const { category } = useParams();
  const [carList, setCarList] = useState([]);

  useEffect(() => {
    getCarList();
  }, []);

  const getCarList = async () => {
    const result = await db
      .select()
      .from(CarListing)
      .innerJoin(carImages, eq(CarListing.id, carImages.carListingId))
      .where(eq(CarListing.category, category));

    const respond = Service.FormatResult(result);
    setCarList(respond);
  };
  return (
    <div>
      <Header />
      <div className=" p-16 bg-black flex justify-center">
        <Search />
      </div>

      <div className="  p-10 md:px-20">
        <h2 className=" font-bold text-4xl">{category}</h2>

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

export default SearchByCategory;
