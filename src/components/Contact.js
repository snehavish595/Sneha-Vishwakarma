import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFontAwesome,
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section className="bg-[#EA4335] px-5 py-32 mt-28" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-white pb-2">
          Contact Me
        </h2>
        <p>
          I am currently open for a fulltime Frontend Developer role, Backend
          Developer role and Fullstack Developer role. If you want to discuss
          about that feel free to email me.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> snehavish595@gmail.com
        </p>
      </div>

      <div className="text-center mt-12">
        <div className="mb-8">
          <div className="text-3xl text-white mb-2  text-bold font-bold">
            FIND ME ON
          </div>
          <div className="text-xl text-white">Feel free to connect with me</div>
        </div>

        <div className="icons">
          <div>
            <a
              href="https://www.facebook.com/your-profile-url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="3x"
                height="40px"
                className="text-white mx-3"
                style={{ borderRadius: "50%" }} // Apply border radius inline
              />
            </a>
            <a
              href="https://www.facebook.com/your-profile-url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="3x"
                height="40px"
                className="text-white mx-3"
                style={{ borderRadius: "50%" }} // Apply border radius inline
              />
            </a>
            <a
              href="https://www.facebook.com/your-profile-url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="3x"
                height="40px"
                className="text-white mx-3"
                style={{ borderRadius: "50%" }} // Apply border radius inline
              />
            </a>
            <a
              href="https://www.facebook.com/your-profile-url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                size="3x"
                height="40px"
                className="text-white mx-3"
                style={{ borderRadius: "50%" }} // Apply border radius inline
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
