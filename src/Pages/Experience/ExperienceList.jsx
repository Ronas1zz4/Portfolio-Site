import React from "react";

const ExperienceList = (props) => {
  return (
    <>
    <div className="relative group  transition-translate duration-100
    ">
      <div
        className="w-12/12  group m-auto h-[96px] lg:h-[120px] xl:h-[140px] flex justify-between items-center px-3 sm:px-4 border border-black  bg-white  mt-4  sm:mt-6
     lg:mt-16 duration-1000  hover:bg-black hover:text-white "
      >
        <div className="flex items-center  gap-2 sm:gap-6">
          <p className="p-2 sm:py-2 sm:px-3 bg-black text-white text-[12px] xl:text-[20px] duration-1000 group-hover:bg-white group-hover:text-black">
          {props.index}
          </p>
          <div>
            <h4 className="lg:text-xl xl:text-[24px] ">{props.name}</h4>
            <p className="text-[12px] lg:text-[16px] xl:text-[20px]">
             {props.company}
            </p>
          </div>
        </div>
        <div className="">
          <p className="border-l group-hover:duration-100 group-hover:border-white border-black pl-1 sm:pl-3 py-2 text-[12px]  lg:text-[16px] xl:text-[20px] ">
            DURATION - {props.duration}
          </p>
        </div>
      </div>
   
      </div>
    </>
  );
};

export default ExperienceList;
