import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GoArrowRight } from "react-icons/go";
import Toxic from "../../assets/Firstpic.png";
import ProjectCard from "./ProjectCard";
import MarqueeSlider from "../../components/MarqueeSlider";
import { motion, useScroll, useTransform } from "framer-motion";

const Projects = () => {

  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  
  const headingY = useTransform(scrollYProgress, [0, 1], [0, -50]); // 
  const carouselY = useTransform(scrollYProgress, [0, 1], [50, -120]); // 
  const marqueeY = useTransform(scrollYProgress, [0, 1], [0, -100]); // 

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 460, min: 0 },
      items: 1,
    },
  };

  const projectData = [
    {
      id: 1,
      image: Toxic,
      name: "Toxic Comment Classifier",
      icon: <GoArrowRight />,
    },
    {
      id: 2,
      image: Toxic,
      name: "Flappy Bird",
      icon: <GoArrowRight />,
    },
    {
      id: 3,
      image: Toxic,
      name: "SignaLink",
      icon: <GoArrowRight />,
    },
    {
      id: 4,
      image: Toxic,
      name: "Associate",
      icon: <GoArrowRight />,
    },
  ];

  const project = projectData.map((item) => (
    <ProjectCard
      key={item.id}
      name={item.name}
      image={item.image}
      icon={item.icon}
    />
  ));

  const ButtonGroup = ({ next, previous, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;

    return (
      <div className="carousel-button-group flex justify-between w-full lg:px-16 px-4 p-1 mt-4 md:mt-6 lg:mt-10 container">
        <button
          className={`text-[12px] md:text-[16px] lg:py-3 px-5 font-customDraper border border-black ${
            currentSlide === 0 ? "disabled" : ""
          }`}
          onClick={() => previous()}
          disabled={currentSlide === 0}
        >
          Back
        </button>
        <button
          className="text-[12px] md:text-[16px] py-3 px-5 border border-black font-customDraper"
          onClick={() => next()}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <>
      <motion.section
        ref={sectionRef}
        id="projects"
        className="relative h-fit lg:h-screen  xl:my-0 w-full "
      >
        <div>
          {/* Parallax for Heading */}
          <motion.h3
            style={{ y: headingY }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[48px] xl:text-[86px] p-4 lg:px-16 md:py-8 lg:py-16 container"
          >
            Projects
          </motion.h3>

          {/* Parallax for Carousel */}
          <motion.div style={{ y: carouselY }} className="lg:mt-10">
            <Carousel
              responsive={responsive}
              additionalTransfrom={0}
              arrows={false}
              infinite={true}
              renderButtonGroupOutside={true}
              customButtonGroup={<ButtonGroup />}
              autoPlaySpeed={3000}
              draggable={false}
              centerMode={false}
              dotListClass=""
              className="w-full"
              focusOnSelect={false}
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {project}
            </Carousel>
          </motion.div>

          <motion.div style={{ y: marqueeY }} className="mt-10 lg:mt-20">
            <MarqueeSlider />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Projects;
