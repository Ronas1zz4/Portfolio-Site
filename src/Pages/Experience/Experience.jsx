import React from "react";
import ExperinceList from "./ExperinceList";

const Experience = () => {
  return (
    <div className="h-screen flex p-4  relative lg:px-16  w-full 
   ">
    <div className="relatiev container">
      <div className="flex w-full">
        <h3 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[48px] xl:text-[86px] mt-10 ">
          Experience
        </h3>
      </div >
      <div className="relative"> 
      <ExperinceList/>
      </div>
    </div>
    </div>
  );
};

export default Experience;
