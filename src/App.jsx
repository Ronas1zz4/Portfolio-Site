import React, { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import { Links } from "./components/Links";
import ScrollReveal from "./components/ScrollReveal";
import Projects from "./Pages/Project/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact/Contact";
import Lenis from "lenis";
import Experience from "./Pages/Experience/Experience";
import { useScroll } from "framer-motion";

const App = () => {


const containers = useRef();
const {scrollYProgress}=useScroll({
  target:containers,
  offset:["start start","end end"]
})

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <div ref={containers} className="relative h-[200vh]  gap-0">
        <Navbar scrollYProgress={scrollYProgress}/>
        <About scrollYProgress={scrollYProgress}/>
        <Projects/>
<Experience/>
<Contact/>  
      </div>
    </>
  );
};

export default App;
