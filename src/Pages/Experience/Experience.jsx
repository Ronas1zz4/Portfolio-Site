import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimation,
} from "framer-motion";
import ExperienceList from "./ExperienceList";

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const controls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleYTransform = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const contentYTransform = useTransform(scrollYProgress, [0, 1], [50, -100]);

  React.useEffect(() => {
    if (isInView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [isInView, controls]);

  const experienceData = [
    {
      id: 1,
      index:"01",
      name: "Intern",
      company: "SpydersLab, Kathmandu",
      duration: "6 Months",
    },
    {
      id: 2,
      index:"02",
      name: "Intern",
      company: "The MangoByte, Kathmandu",
      duration: "3 Months",
    },
    {
      id: 3,
      index:"03",
      name: "IT Help Desk",
      company: "University of Lousiana,Monroe",
      duration: "3 Months",
    },
    {
      id: 4,
      index:"04",
      name: "Teaching Assistant",
      company: "University of Lousiana,Monroe",
      duration: "Present",
    },
  ];

  const experiences = experienceData.map((item) => (
    <ExperienceList
      key={item.id}
      index={item.index}
      name={item.name}
      company={item.company}
      duration={item.duration}
    />
  ));

  return (
    <motion.div
      ref={sectionRef}
      id="experience"
      className="min-h-screen flex flex-col justify-center p-4 relative lg:px-16 w-full mobscreen"
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
    >
      <div className="relative container">
        <motion.div style={{ y: titleYTransform }} className="flex w-full">
          <h3 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[48px] xl:text-[86px] mt-10">
            Experience
          </h3>
        </motion.div>

        <motion.div style={{ y: contentYTransform }} className="relative">
          {experiences}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
