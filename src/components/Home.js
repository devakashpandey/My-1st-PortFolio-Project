import React, { useEffect } from "react";
import { BiRightArrowCircle } from "react-icons/bi";
import Akash from "../assets/akash.jpg";
import "./Home.css";
import { Link } from "react-scroll";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div name="home" className="home">
        <div
          className="max-w-screen-lg mx-auto flex flex-col items-center
                          justify-between h-full px-4 md:flex-row"
        >
          <div className="flex flex-col justify-center h-full description">
            <h2
              className="text-4xl sm:text-6xl font-bold title-txt"
              data-aos="zoom-in"
              data-cursor-text="Front-End Developer"
            >
              I'm a Front-end Developer
            </h2>
            <p className="text-gray-400 py-5 about" data-aos="fade-right">
              I have 1 year of experience bulding and designing websites. I am
              pursing new expressions through experiments and thoughts.I design
              and code beautifully simple things, and I love what I do.
            </p>

            <div data-aos="fade-right">
              <Link to="portfolio" smooth duration={500}>
                <button className="group px-6 py-3 my-2 flex items-center main-btn">
                  Portfolio&nbsp;{" "}
                  <span className="group-hover:rotate-90">
                    <BiRightArrowCircle />
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className="my-pic" data-aos="zoom-in">
            <img
              src={Akash}
              alt="my profile"
              className="rounded-2xl mx-auto w-1/2 md:w-90 pic"
              data-cursor-text="Akash Pandey"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
