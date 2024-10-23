import { React, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { Links } from "./Links";
import Logo from '../assets/logo.png'
import { FlipLink } from "./Links";
import ScrollReveal from "./ScrollReveal";

const navLinks = [
  { title: "About", href: "/" },
  { title: "Projects", href: "/" },
  { title: "Experience", href: "/" },
  { title: "Contact", href: "/" },
];


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
    <header className="bg-black h-screen w-full  text-center p-4 lg:p-8 xl">
      <nav className="flex justify-between items-center py-8 lg:py-6   container m-auto w-full   px-10 bg-white-0  b bg-clip-padding bg-opacity-0 bg-gray-700 ">
        
        <div className="flex items-center text-white">
          <img src={Logo} alt="" className="w-20" />
        </div>
        <div className="lg:flex hidden gap-12 text-white font-customNeue ">
          <Links />
        </div>
        <div
          className="cursor-pointer lg:hidden text-md text-black"
          onClick={toggleMenu}
        >
          <CiMenuFries className="text-2xl xl:text-3xl text-white" />
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mobscreen fixed left-0 top-0 w-full h-screen origin-top   text-black p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-end">
                <p
                  className="cursor-pointer text-md text-black font-customDraper"
                  onClick={toggleMenu}
                >
                  <IoIosClose className="text-5xl" />
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center  items-center gap-10 "
              >
                {navLinks.map((link, index) => {
                  return (
                    <div
                      key={index}
                      className="overflow-hidden font-customNeue text-[30px]"
                    >
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
        
          </motion.div>
         
        )}
        </AnimatePresence>
   
      <motion.div
        className="header__text w-full h-[calc(100vh-164px)] flex justify-center items-center"
      >
        <h1 className="text-white leading-none text-[24px] sm:text-4xl md:text-[44px] lg:text-[56px] xl:text-[64px] 2xl:text-[68px] md:leading-none  w-full">
          <span className="text-[24px] sm:text-4xl md:text-[40px] lg:text-[52px] xl:text-[60px] 2xl:text-[68px]">
            Hello I'm Sujan
          </span>
          <br />
          <span className="2xl:text-[84px]">Code, Break, Repeat</span>
        </h1>
      </motion.div>
      
    </header>
    </>
  )
};

export default Navbar;

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 1,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: .7,
    },
  },
};

const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-2xl uppercase text-black"
    >
      <FlipLink href={href}>{title}</FlipLink>
    </motion.div>
  );
};
