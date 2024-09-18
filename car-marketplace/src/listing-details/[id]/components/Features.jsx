import React from "react";
import { ImCheckboxChecked } from "react-icons/im";


const Features = ({ features }) => {
  console.log(features);
  return (
    <div className=" my-3">
      {features ? (
        <div className=" p-5 rounded-xl bg-white shadow-md mt-6 border">
          <h2 className=" my-2 font-medium text-2xl">Features</h2>

          <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(features).map(([features, value]) => (
              <div key={features} className=" flex gap-1 items-center my-2">
                <ImCheckboxChecked className=" text-md rounded-full text-primary"/>
                <h2 className=" text-md">{features}</h2>
              
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className=" w-full rounded-xl h-[150px] bg-slate-200 animate-pulse"></div>
      )}
    </div>
  );
};

export default Features;
