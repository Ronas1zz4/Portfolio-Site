import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import FirstPic from "../../assets/FirstPic.png";
import SecondPic from "../../assets/SecondPic.png";
import { backIn } from "framer-motion";

const About = () => {
  return (
    <div className="about__container container m-auto h-screen p-4 lg:px-8 md:py-8
    lg:py-12 ">
      <div className="about__heading flex justify-between ">
        <h3 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[48px] xl:text-[64px]">About Me</h3>
        <button className="">
          <a
            href="../assets/Resume.pdf"
            download="Resume.pdf"
            className="flex items-center gap-2 border-b border-black text-[20px] lg:text-[24px] "
          >
            Resume <FaArrowDownLong />
          </a>
        </button>
      </div>
      <div className="about__grid grid-cols-2 space-y-8 md:space-y-8 mt-4  sm:mt-6
       relative md:mt-10 lg:mt-10">
        <div className=" flex flex-col md:flex-row md:border-y md:border-black">
          <div className="h-[264px]  md:h-[36vh] md:w-6/12 lg:w-5/12 00 md:border-r md:border-black w-full flex justify-center items-center lg:py-8">
            <img src="" alt="Ronas Tiwari"  className=" w-full
          h-full  md:h-[260px]  md:w-10/12 "/>
          </div>
          <div className=" md:w-6/12 lg:w-7/12 md:flex md:justify-center md:items-center">
            <p className="sm:text-[20px]  lg:text-[24px] md:p-10  w-full mt-4 md:mt-0">Hi there! I'm Ronas Tiwari, your not-so-average front-end developer.I have a “strong interest” in making websites look good and function—most of the time.</p>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row  md:border-y md:border-black ">
          <div className="h-[264px]  md:h-[36vh] md:w-6/12 lg:w-5/12 w-full flex justify-center items-center lg:py-8 md:order-2
          md:border-l md:border-black">
            <img src="" alt="Ronas Tiwari"  className=" w-full
          h-full  md:h-[260px]  md:w-10/12 "/>
          </div>
          <div className=" md:w-6/12 lg:w-7/12 md:flex md:justify-center md:items-center">
            <p className="sm:text-[20px]  lg:text-[24px] md:p-10  w-full mt-4 md:mt-0">You’ll find my collection of work that showcases my knowledge and knack for creating ditgital experiences that might just work on the first try. 
            <br /> 
Enjoy your stay.</p>
          </div>
        </div>
          
        </div>
      </div>
  );
};

export default About;
