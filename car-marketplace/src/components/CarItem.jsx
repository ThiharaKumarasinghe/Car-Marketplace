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
        src={car.image}
        alt={car.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{car.name}</div>
        <p className="text-gray-700 text-base">
          {car.model} - {car.year} | {car.color}
        </p>
        <p className="text-gray-600 text-sm mb-2">
          Fuel Type: {car.fuelType} | Gear Type: {car.gearType}
        </p>
        <p className="text-gray-600 text-sm mb-2">
          Miles: {car.miles} | Location: {car.location}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Type: {car.type}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Price: ${car.price}
        </span>
      </div>
    </div>
  );
};

export default CarItem;
