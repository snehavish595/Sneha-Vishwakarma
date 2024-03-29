import React from "react";
import medicalstore from "../assets/medical-store.png";
import expense from "../assets/expense.png";
// import getInspirred from "../assets/get-inspirred.png";
// import uilogs from "../assets/uilogs.png";

const Projects = () => {
  const projects = [
    {
      img: expense,
      title: "Expense Tracker",
      desc: " A Expense Tracker. Built with Python(Django), JavaScript, React, and Tailwind CSS ",
      live: "https://github.com/snehavish595/Expense-Tracker",
      code: "https://github.com/snehavish595/Expense-Tracker",
    },
    {
      img: medicalstore,
      title: "Medical Store",
      desc: "A Medical Store. Built with HTML, CSS, JavaScript, jQuery and Bootstrap",
      live: "https://snehavish595.github.io/Medical-Store/",
      code: "https://github.com/snehavish595/Medical-Store",
    },
    // {
    // img: cssProjects,
    // title: "css projects",
    // desc: "Frontend Mentor challange directory, solved with vanilla CSS",
    // live: "https://build-10-css-projects.netlify.app/",
    // code: "https://github.com/Coderamrin/build-10-css-projects",
    // },
    // {
    // img: getInspirred,
    // title: "get Inspirred",
    // desc: "Quote search app. Used Quotable API for the quotes and React, Redux on the frontend",
    // live: "https://get-inspirred.netlify.app/",
    // code: "https://github.com/Coderamrin/get-inspired",
    // },
  ];

  return (
    <section
      className="bg-[#FBBC04] text-white px-16 py-32 mt-28"
      id="projects"
    >
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[160px] border-white pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with React,
            Python(Django), Bootstrap, Tailwind CSS, MERN and vanilla CSS. Check
            them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} className="h-80" />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
