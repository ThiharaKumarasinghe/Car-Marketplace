import React, { useEffect } from "react";
import FakeData from "../Shared/FakeData";
import CarItem from "./CarItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { db } from "../../config/index";
import { carImages, CarListing } from "../../config/schema";
import { desc, eq } from "drizzle-orm";
import Service from "@/Shared/Service";
import { useState } from "react";


const MostSearchCar = () => {
  // console.log(FakeData.carList);

  const [carList, setCarList] = useState([]);

  useEffect(()=>{
    getPopularCarList();

  },[]);

  const getPopularCarList = async() => {
    const result = await db
        .select()
        .from(CarListing)
        .leftJoin(carImages, eq(CarListing.id, carImages.carListingId))
        .limit(10);

        const respond = Service.FormatResult(result);
        console.log(respond);
        setCarList(respond);

  };

  return (
    <div className=" px-24 py-10">
      <h2 className=" font-bold text-3xl text-center my-16">Most Search Car</h2>

      <Carousel>
        <CarouselContent>
          {carList.map((car, index) => (
            <CarouselItem key={index} className="basis-1/4">
                <CarItem car={car} key={index} />
            </CarouselItem>
            
          ))}

          
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MostSearchCar;
