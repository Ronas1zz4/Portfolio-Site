import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";

const About = () => {
  return (
    <div className="about__container container m-auto h-screen">
      <div className="about__heading flex justify-between border border-b-black">
        <h3>About Me</h3>
        <button className="">
          <a
            href="../assets/Resume.pdf"
            download="Resume.pdf"
            className="flex items-center gap-2"
          >
            Resume <FaArrowDownLong />{" "}
          </a>
        </button>
      </div>
      <div className="grid-cols-2 bg-red-500 h-[400px] space-y-2">
        <div className="border inline-block w-full">
          <div className="float-left bg-yellow-300 w-[50%]">1</div>
          <div className="float-left bg-green-400 w-[50%] ">2</div>
        </div>
        <div className="border inline-block w-full">
        <div className="float-left bg-yellow-300 w-[50%]">1</div>
          <div className="float-left bg-green-400 w-[50%] ">2</div>
        </div>
      </div>
    </div>
  );
};

export default About;
