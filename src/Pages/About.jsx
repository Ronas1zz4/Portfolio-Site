import React from "react";
import { backIn } from "framer-motion";
import Pictureone from "../assets/pic-1.png"
import Picturetwo from "../assets/pic-2.png"
import { FlipLink } from "../components/Links";
import { GoArrowDown } from "react-icons/go";

const About = () => {
  return (
    <div
      className="relative about__container md:h-screen p-4 lg:px-16 md:py-8
    lg:py-16 ">
      <div className="container m-auto h-fit ">
      <div className="about__heading flex justify-between ">
        <h3 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[48px] xl:text-[86px]">
          About Me 
        </h3>
        <button className="">
          <a
            href="../assets/Resume.pdf"
            download="Resume.pdf"
            className="flex items-center gap-4 border-b border-black text-[18px] lg:text-[24px] "
          >
           <FlipLink className="text-lowercase">Resume  </FlipLink>
          <GoArrowDown/>
          </a>
        </button>
      </div>
      <div
        className="about__grid grid-cols-2 space-y-8 md:space-y-8 mt-4  sm:mt-6
     md:mt-10 lg:mt-16"
      >
        <div className=" flex flex-col md:flex-row md:border-y md:border-black">
          <div className="h-[264px]  md:h-[36vh] md:w-6/12 lg:w-5/12 00 md:border-r md:border-black w-full flex justify-center items-center lg:py-8">
            <img
              src={Pictureone}
              alt="Ronas Tiwari"
              className=" w-full object-cover 
          h-full  md:h-[260px]  md:w-10/12 "
            />
          </div>
          <div className=" md:w-6/12 lg:w-7/12 md:flex md:justify-center md:items-center">
            <p className="text-[16px] sm:text-[20px]  lg:text-[24px] md:p-10  w-full mt-4 md:mt-0">
              Hi there! I'm Sujan Dhakal, your not-so-average front-end
              developer.I have a “strong interest” in making websites look good
              and function—most of the time.
            </p>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row  md:border-y md:border-black ">
          <div
            className="h-[264px]  md:h-[36vh] md:w-6/12 lg:w-5/12 w-full flex justify-center items-center lg:py-8 md:order-2
          md:border-l md:border-black"
          >
            <img
              src={Picturetwo}
              alt="Ronas Tiwari"
              className=" w-full
          h-full  md:h-[260px]  md:w-10/12 object-cover "
            />
          </div>
          <div className=" md:w-6/12 lg:w-7/12 md:flex md:justify-center md:items-center">
            <p className="text-[16px] sm:text-[20px]  lg:text-[24px] md:p-10  w-full mt-4 md:mt-0">
              You’ll find my collection of work that showcases my knowledge and
              knack for creating ditgital experiences that might just work on
              the first try.
              <br />
              Enjoy your stay.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
