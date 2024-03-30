import React, { useEffect, useState } from "react";
import HeroImg from "../assets/contact-1.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
// import axios from "axios";

import {
  AiOutlineTwitter,
  AiOutlineYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";

const Hero = () => {
  const [title, setTitle] = useState("");
  const [index, setIndex] = useState(0);

  const roles = [
    "Full Stack Developer",
    "Web Developer",
    "Software Developer",
    "UI/UX Designer",
    "Frontend Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle((prevTitle) => {
        setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        return roles[index];
      });
    }, 2000); // Change role every 2 seconds (2000 milliseconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [index]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // <section className="bg-primary px-5 text-white py-32">
    //   <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
    //     <div className="hero-info pb-5 md:pb-0">
    //       <h1 className="text-4xl lg:text-6xl">
    //         Hi, <br />I am <span className="text-accent">a</span>mrin <br />
    //         Frontend Developer
    //       </h1>

    //       <p className="py-5">
    //         I am proficient in JavaScript, React.js and Tailwind CSS
    //       </p>

    //       <div className="flex py-5 ">
    //         <a
    //           href="https://twitter.com/CoderAmrin"
    //           className="pr-4 inline-block text-accent hover:text-white"
    //         >
    //           {" "}
    //           <AiOutlineTwitter size={40} />{" "}
    //         </a>
    //         <a
    //           href="https://www.youtube.com/@coderamrin"
    //           className="pr-4 inline-block text-accent hover:text-white"
    //         >
    //           {" "}
    //           <AiOutlineYoutube size={40} />{" "}
    //         </a>
    //         <a
    //           href="https://www.facebook.com/CoderAmrin/"
    //           className="pr-4 inline-block text-accent hover:text-white"
    //         >
    //           {" "}
    //           <AiOutlineFacebook size={40} />{" "}
    //         </a>
    //       </div>

    //       <a
    //         href="/#projects"
    //         className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
    //       >
    //         See Projects
    //       </a>
    //     </div>

    //     <div className="hero-img">
    //       <img
    //         src={HeroImg}
    //         alt="coding illustration"
    //         className="lgw-[80%] ml-auto"
    //       />
    //     </div>
    //   </div>
    // </section>

    <div className="mb-[-24px]">
      {/* <Header /> */}

      <div className="flex-wrap mx-auto px-12 space-between h-1/2 grid md:grid-cols-2">
        {/* left section starts */}
        <div className="left flex-1 my-auto mx-8 p-4">
          <h1 className="text-4xl font-bold mb-4 text-blue-500 text-left">
            Hi There!👋🏻
          </h1>
          <h2 className="text-5xl font-semibold mb-4 text-blue-500">
            I'M SNEHA VISHWAKARMA
          </h2>
          <h3 className="text-3xl font-semibold mb-4 mt-8 text-blue-600">
            {title} {/* Dynamic role/title */}
            <span className="ml-2 text-blue-500 animate-pulse">|</span>{" "}
            {/* Optional: Pulse animation */}
          </h3>
        </div>
        {/* left section ends */}

        {/* right section starts */}
        <div className="right flex-1 text-center">
          <img src={HeroImg} className="object-fill w-3/4 mx-auto " />
        </div>
        {/*right section ends */}
      </div>

      {/* freelance and contact section starts */}
      {/* <div className="bg-blue-200 flex flex-wrap py-24"> */}
      {/* left starts */}
      {/* <div className="text-center m-auto">
          <div className="text-4xl text-blue-700 font-semibold mb-8">
            Available for select freelance opportunities
          </div>
          <div className="text-2xl font-medium">
            Have an existing project? <br></br>Send me an email
          </div>
        </div> */}
      {/* left ends */}

      {/* right starts */}
      {/* <div></div> */}
      {/* right ends */}
      {/* </div> */}
      {/* freelance and contact section ends */}

      {/* <Contact /> */}

      {/* <Footer /> */}
    </div>
  );
};

export default Hero;
