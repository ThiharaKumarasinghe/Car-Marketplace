import { Separator } from "@radix-ui/react-select";
import React from "react";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { IoSpeedometerSharp } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";

const CarItem = ({ car }) => {
  // console.log(car.name)

  return (
    <div className="max-w-sm rounded-t-xl overflow-hidden shadow-lg bg-white">
      <img
        className="w-full h-48 object-cover"
        src={car?.images?.[0]?.imageUrl || "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcar%2F&psig=AOvVaw0ZxrHD8fkAecSPf0HHduMB&ust=1726469047648000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCTwcasxIgDFQAAAAAdAAAAABAE"} // Provide a fallback URL
        alt={car?.name || "Car Image"} // Provide a fallback alt text
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{car.listingTitle}</div>
        <p className="text-gray-700 text-base">
          {car.model} - {car.year} | {car.color}
        </p>
        <p className="text-gray-600 text-sm mb-2">
          Fuel Type: {car.fuelType} | Gear Type: {car.transmission}
        </p>
        <p className="text-gray-600 text-sm mb-2">
          Miles: {car.mileage} | Posted On: {car.postedOn}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Type: {car.category}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Price: ${car.sellingPrice}
        </span>
      </div>
    </div>
  );
};

export default CarItem;
