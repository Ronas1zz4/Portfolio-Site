import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion";
import ExperinceList from "./ExperinceList";

const Experience = () => {
  // Reference for the section we want to animate
  const sectionRef = useRef(null);

  // Track whether the section is in view
  const isInView = useInView(sectionRef, { once: true });

  // Control animations
  const controls = useAnimation();

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // Track from start to end of the viewport
  });

  // Strong parallax effect with larger range of movement
  const titleYTransform = useTransform(scrollYProgress, [0, 1], [100, -200]); // Title moves more
  const contentYTransform = useTransform(scrollYProgress, [0, 1], [50, -100]); // Content moves less

  // Trigger animation when in view
  React.useEffect(() => {
    if (isInView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={sectionRef}
      id="experience"
      className="h-screen flex p-4 relative lg:px-16 w-full"
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
    >
      <div className="relative container">
        {/* Parallax effect on the title */}
        <motion.div style={{ y: titleYTransform }} className="flex w-full">
          <h3 className="text-2xl sm:text-[28px] md:text-[32px] lg:text-[48px] xl:text-[86px] mt-10">
            Experience
          </h3>
        </motion.div>

        {/* Parallax effect on the content */}
        <motion.div style={{ y: contentYTransform }} className="relative">
          <ExperinceList />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;
