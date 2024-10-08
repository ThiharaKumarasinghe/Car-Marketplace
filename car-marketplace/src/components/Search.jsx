import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoIosSearch } from "react-icons/io";
import { Separator } from "@/components/ui/separator";
import Data from "@/Shared/Data";
import { Link } from "react-router-dom";

const carCondition = ["New", "Used"];
const CarMakers = ["Toyota", "Ford", "BMW", "Mercedes-Benz", "Honda", "Tesla", "Volkswagen", "Ferrari"];


const Search = () => {

  const [cars, setCars]= useState(null);
  const [make, setMake]= useState(null);
  const [price, setPrice]= useState(null);


  return (
    <div className=" p-2 bg-white rounded-md md:rounded-full md:flex flex-col md:flex-row gap-10 px-5 items-center w-full md:w-[60%] md:p-4">

      {/* Cars */}
      <Select onValueChange={(value)=> setCars(value)}>
        <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Cars" />
        </SelectTrigger>
        <SelectContent>
          {carCondition.map((carCondition, index) => (
            <SelectItem value={carCondition}>{carCondition}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className=" hidden md:block" />

      {/* Car Makers  */}
      <Select onValueChange={(value)=> setMake(value)}>
        <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Car Makers" />
        </SelectTrigger>
        <SelectContent>
            {
                Data.carMakers.map((carMakers,index)=>(
                    <SelectItem value={carMakers.name}>{carMakers.name}</SelectItem>
                ))
            }
    
        </SelectContent>
      </Select>

      <Separator orientation="vertical" className=" hidden md:block" />

      {/* Car Price */}
      <Select onValueChange={(value)=> setPrice(value)}>
        <SelectTrigger className=" outline-none md:border-none w-full shadow-none text-lg">
          <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
            {
                Data.pricing.map((price,index)=>(
                    <SelectItem value={price.price}>{price.price}</SelectItem>
                ))
            }
        </SelectContent>
      </Select>

      {/* Search Button */}
      <Link to={'/search?cars='+cars+'&make='+make+'&price='+price}>
      <div>
        <IoIosSearch className=" text-[50px] bg-primary rounded-full p-4 text-white hover:scale-105 transition-all cursor-pointer" />
      </div>
      </Link>
      
    </div>
  );
};

export default Search;
