import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { MenuButton } from "../MenuButton/MenuButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="header bg-black max-h-screen w-full flex flex-col text-center p-4 lg:p-6">
     
        <nav className= "h-[84px] w-full ">
          <div className="flex justify-between items-center relative 2xl:container m-auto bg-black ">
            <div className="nav__logo">
              <img src={Logo} alt="" width="84px" />
            </div>
            <div className="nav__links">
              <button className="text-white " onClick={toggleMenu}>
                <MenuButton/>
              </button>
            </div>
          </div>
          
          {isMenuOpen ? (
            <div className="bg-black duration-100000 text-white text-center relative h-[calc(100vh-120px)] flex flex-col justify-center transition dura">
              <h1 className="text-5xl md:text-6xl lg:text-[72px] 2xl:text-[80px]">Menu</h1>
              <ul className="text-4xl mt-4 md:text-5xl lg:text-[56px] 2xl:text-[64px] flex flex-col sm:gap-2 hover:bg-red-500 hover:duration-1000">
                <li className="mt-5">
                  <a href="">About</a>
                </li>
                <li className="mt-5">
                  <a href="">Projects</a>
                </li>
                <li className="mt-5">
                  <a href="">Experience</a>
                </li>
                <li className="mt-5">
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
          ) : null}  
        </nav>
        <div
          className="header__text w-full h-screen flex justify-center items-center">
          <h1 className="text-white leading-none text-[24px] sm:text-4xl md:text-[44px] lg:text-[56px] xl:text-[64px] 2xl:text-[68px] md:leading-none  w-full"><span className="text-[24px] sm:text-4xl md:text-[40px] lg:text-[52px] xl:text-[60px] 2xl:text-[68px]">Hello I'm Ronas </span> <br/><span className="2xl:text-[84px]">Code, Break, Repeat</span> </h1>
        </div>

      </header>
    </>
  );
};

export default Navbar;
