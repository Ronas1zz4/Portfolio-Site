import React from "react";
import Toxic from "../../assets/Firstpic.png";
import { GoArrowRight } from "react-icons/go";



const ProjectCard = (props) => {
  return (
    <div className="relative project_card p-0 group  w-full h-[320px] lg:w-full  xl:h-[300px] border border-black border-r-0 group-hover:duration-1000 ">
      <img
        src={props.img}
        alt=""
        className="duration-1000  transition group-hover:duration-1000 ease-in-out object-cover"
      />
      <div className="absolute bottom-0 w-full flex justify-between  items-center z-1 py-2 lg:px-4 px-8">
        <h1 className="group-hover:text-white text-white  lg:text-black duration-700 xl:text-2xl text-[16px] cursor-pointer">
          {props.name}
        </h1>
        <div>
        <GoArrowRight className="h-fit transition duration-500 p-2 border text-[40px] rounded-full group-hover:-rotate-45 border-customGrey" />
        </div>
       
      </div>
    </div>
  );
};

export default ProjectCard;
