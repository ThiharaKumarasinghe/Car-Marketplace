import IconField from "@/add-Listing/components/IconField";
import React from "react";
import CarSpecification from ".././../../../src/shared/CarSpecification";
import { Separator } from "@/components/ui/separator";

const Specification = ({ carDetails }) => {
  return (
    <div>
      {carDetails ? (
        <div className=" p-5 rounded-xl bg-white shadow-md mt-6 border">
          <h2 className=" my-2 font-medium text-2xl">Car Specifications</h2>
          <Separator className="mb-4"/>

          {CarSpecification.map((item, index) => (
            <div key={index} className=" flex gap-2 items-center my-2 justify-between">
              <div className=" flex items-center">
                <IconField icon={item.icon} />
                <h2 className=" text-sm">{item.label}</h2>
              </div>

              <h2 className=" text-sm">{carDetails[item.name]}</h2>
            </div>
          ))}

          {/* {
                [carDetails]?.map((carItem, index)=>(
                    <div>
                        <IconField icon={CarSpecification[index]}/>

                    </div>
                ))
            } */}
        </div>
      ) : (
        <div className=" w-full rounded-xl h-[550px] bg-slate-200 animate-pulse mt-1"></div>
      )}
    </div>
  );
};

export default Specification;
