import React from "react";
import { SlCalender } from "react-icons/sl";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LuFuel } from "react-icons/lu";
import { GiGearStick } from "react-icons/gi";

const DetailsHeader = ({ carDetails }) => {
  return (
    <div>
      {carDetails?.listingTitle ? (
        <div>
          <h1 className=" font-bold text-3xl">{carDetails?.listingTitle}</h1>
          <p className=" text-sm">{carDetails?.tagline}</p>

          <div className=" flex gap-2 mt-3">
            <div className=" flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3">
              <SlCalender className=" w-5 h-5 text-primary" />
              <h2 className=" text-primary text-sm">{carDetails?.year}</h2>
            </div>

            <div className=" flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3">
              <IoSpeedometerOutline className=" w-5 h-5 text-primary" />
              <h2 className=" text-primary text-sm">{carDetails?.mileage}</h2>
            </div>

            <div className=" flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3">
              <GiGearStick className=" w-5 h-5 text-primary" />
              <h2 className=" text-primary text-sm">
                {carDetails?.transmission}
              </h2>
            </div>

            <div className=" flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3">
              <LuFuel className=" w-5 h-5 text-primary" />
              <h2 className=" text-primary text-sm">{carDetails?.fuelType}</h2>
            </div>
          </div>
        </div>
      ) : (
        <div className=" w-full rounded-xl h-[200px] bg-slate-200 animate-pulse"></div>
      )}
      
    </div>
  );
};

export default DetailsHeader;
