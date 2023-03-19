import React, { useEffect } from "react";
import "./About.css";
import Aos from "aos";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div name="about" className="main-about w-full h-full">
        <div className="max-w-screen-lg p-4 mx-auto about-descrip">
          <div className="pb-8" data-aos="fade-right">
            <p className="about-txt" data-cursor-text="About">
              About
            </p>
          </div>

          <p className="text-xl mt-8" data-aos="fade-right">
            Hey!,
            <br /> <br />
            I'm{" "}
            <span className="name" data-cursor-img="akash.jpg">
              Akash Pandey
            </span>{" "}
            but you can call me <span className="name">Akky</span>. A passionate
            Front-end developer with experience of 1 year and on the way of
            learning MERN stack development. I love to work on web application &
            making new designs using technologies like Figma, Javascript, React
            Js, Material UI & Redux.
          </p>

          <br />

          <p className="text-xl" data-aos="fade-right">
            I love web designing & programming as well as, taking photos and
            learning new things.Feel free to get in touch or take a look at my
            past work below.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
