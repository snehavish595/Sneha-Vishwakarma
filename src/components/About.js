import React from "react";
import AboutImg from "../assets/about-removebg-preview.png";
import BgImage from "../assets/wave-haikei.svg";

const About = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // You can add more background properties here as needed
  };

  return (
    <section
      className="px-16 pb-36 pt-20 mt-20"
      id="about"
      style={backgroundImageStyle}
    >
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-black pb-2">
            About Me
          </h2>
          <p className="pb-5 text-xl ">
            I'm Sneha Vishwakarma. I am a FullStack Developer.
          </p>
          <p className="pb-5 text-xl">
            I build beautiful websites with MERN Stack and Tailwind CSS.{" "}
          </p>
          <p className="pb-5 text-xl">
            I enjoy building dynamic, creative websites from start to finish.
          </p>
          <p className="pb-5 text-xl">
            I am proficient in Frontend skills like React.js, Tailwind CSS,
            SaSS, Css3, and many more.
          </p>
          <p className="pb-5 text-xl">
            In the backend, I know Node.js, Express.js, Python(Django), MongoDB,
            and Mongoose.
          </p>
          <p className="pb-5 text-xl">
            Focused on developing intuitive experiences that constantly grow and
            improve based on user metrics. Always shipping.{" "}
          </p>
          <p className="pb-5 text-xl">
            I fell in love with programming and I have at least learned
            something, I think… 🤷‍♂️{" "}
          </p>
          <p className="pb-5 text-xl">
            I am fluent in classics like Javascript and Python.{" "}
          </p>
          <p className="pb-5 text-xl">
            My field of Interest is building new Web Technologies and Products.
          </p>
          {/* <p className="pb-5">
            I am proficient in Frontend skills like React.js, Redux, Redux Tool
            Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.
          </p>

          <p>In backend I know Node.js, Express.js, MongoDB, and Mongoose</p>

          <p>
            In my spare time I create YouTube videos and write blogs on my Blog.
            Where I talk about programming theory and build various projects.
          </p> */}
        </div>

        <div className="about-img">
          <img src={AboutImg} alt="coding illustration" className="w-full " />
        </div>
      </div>
    </section>
  );
};

export default About;
