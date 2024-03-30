import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import googleLogo from "../images/googlelogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [showMenu, setShowMenu] = useState("md:hidden");

  const handleToggle = () => setToggle(!toggle);

  return (
    // <header className="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">
    //   <a href="/" className="logo text-2xl font-bold text-accent">
    //     Amrin
    //   </a>

    //   {/* Desktop Nav */}
    //   <nav className="hidden md:block">
    //     <ul className="flex">
    //       <li>
    //         <a href="/#about">About</a>
    //       </li>
    //       <li>
    //         <a href="/#projects">Projects</a>
    //       </li>
    //       <li>
    //         <a href="/#blog">Blog</a>
    //       </li>
    //       <li>
    //         <a href="/#contact">Contact</a>
    //       </li>
    //       <li>
    //         <a href="#resume -link" target="_blank" without rel="noreferrer">
    //           Resume
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>

    //   {/* Mobile Nav */}
    //   <nav
    //     className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
    //   >
    //     <ul className="flex flex-col">
    //       <li>
    //         <a href="/#about">About</a>
    //       </li>
    //       <li>
    //         <a href="/#projects">Projects</a>
    //       </li>
    //       <li>
    //         <a href="/#blog">Blog</a>
    //       </li>
    //       <li>
    //         <a href="/#contact">Contact</a>
    //       </li>
    //       <li>
    //         <a href="/#resume">Resume</a>
    //       </li>
    //     </ul>
    //   </nav>

    //   {/* Toggle button */}
    //   <button onClick={handleToggle} className="block md:hidden">
    //     {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
    //   </button>
    // </header>

    <>
      <div className="text-white font-mont  top-0 left-0 right-0 z-50">
        <div className="bg-[#fff] p-4">
          <div
            className={`container mx-auto flex flex-wrap items-center mt-4 
            md:grid-cols-2 text-center `}
          >
            {/* <!-- Google logo --> */}
            <a to="/" className="mx-auto md:mx-3 md:mb-0 mb-4">
              <img src={googleLogo} alt="Google" className="md:h-8  " />
            </a>

            {/* <!-- Search bar --> */}
            <div
              className=" shadow-custom flex  bg-transparent rounded-full px-6 py-2 shadow-lg mx-auto ml-[-10px] md:ml-8 md:w-[690px] w-[670px] hover:shadow-md"
              style={{ border: "1px solid transparent" }}
            >
              <input
                type="text"
                placeholder="Search Google"
                value="Sneha Vishwakarma"
                className="bg-transparent focus:outline-none pr-8 text-black"
              />

              <button className="ml-[335px] text-gray-600 focus:outline-none">
                <FontAwesomeIcon icon={faTimes} size="xl" />
              </button>

              <button className="ml-4 text-blue-600 focus:outline-none">
                <FontAwesomeIcon icon={faSearch} size="lg" />
              </button>
            </div>

            <FaBars
              onClick={() => {
                if (showMenu == "md:hidden") {
                  setShowMenu("");
                } else {
                  setShowMenu("md:hidden");
                }
              }}
              className="lg:hidden xl:hidden 2xl:hidden md:flex cursor-pointer"
            />

            {/* <!-- Navigation links --> */}
            <nav className="space-x-4 flex justify-end text-sm items-center ml-auto mr-6 md:flex sm:hidden lg:hidden ">
              <a href="#" className="text-black hover:underline">
                Gmail
              </a>
              <a href="#" className="text-black hover:underline">
                Images
              </a>
              {/* <!-- Add more navigation links as needed --> */}
            </nav>
          </div>
        </div>

        <div className="bg-white pb-3">
          <div class="menu bg-white py-2 ml-20" style={{ width: "91%" }}>
            <div class="container  flex  items-center text-blue-500 mx-12">
              <a
                href="#home"
                class="menu-item border border-gray-600 px-4 py-2 rounded-full text-sm mx-4"
              >
                Home
              </a>
              <a
                href="#about"
                class="menu-item border border-gray-600 px-4 py-2 rounded-full text-sm mx-4"
              >
                About
              </a>
              <a
                href="#projects"
                class="menu-item border border-gray-600 px-4 py-2 rounded-full text-sm mx-4"
              >
                Projects
              </a>
              {/* <a
                href="#portfolio"
                class="menu-item border border-gray-600 px-4 py-2 rounded-full text-sm mx-4"
              >
                Portfolio
              </a> */}
              <a
                href="#contact"
                class="menu-item border border-gray-600 px-4 py-2 rounded-full text-sm mx-4"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <hr className=" bg-[#dadce0]" />
      </div>
    </>
  );
};

export default Header;
