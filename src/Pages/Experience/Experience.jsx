import React from "react";
import ExperinceList from "./ExperinceList";

const Experience = () => {
  return (
    <div className=" container  p-4  relative lg:px-16  
   ">
      <div className="flex w-full">
        <h3 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[48px] xl:text-[72px] ">
          Experience
        </h3>
      </div>
      <ExperinceList/>
    </div>
  );
};

export default Experience;
