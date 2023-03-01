import React, { useEffect } from "react";
import "./Skills.css";
import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import git from "../assets/git.png";
import reduxImg from "../assets/redux.png";
import mui from "../assets/mui.png";
import figma from "../assets/figma.png";
import firebase from "../assets/firebase.png";
import Aos from "aos";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1300 });
  }, []);
  return (
    <>
      <div name="skills" className="main-experience">
        <div className="max-w-screen-lg mx-auto p-4 my-exp">
          <div>
            <p
              className="exp-text"
              data-aos="fade-left"
              data-cursor-text="Skills"
            >
              Skills
            </p>
            <p className="text-xl py-7" data-aos="fade-right">
              These are the technologies i have worked with.
            </p>
          </div>

          <div
            className="w-full grid grid-cols-2 sm:grid-cols-3 gap-10
           text-center py-8 px-12 sm:px-0"
          >
            <div className="exp-img py-2 html" data-aos="fade-right">
              <img src={html} alt="html" className="w-20 mx-auto py-2"></img>
              <p className="mt-4">HTML</p>
            </div>

            <div className="exp-img py-2 css" data-aos="zoom-in">
              <img src={css} alt="css" className="w-20 mx-auto py-2"></img>
              <p className="mt-4">CSS</p>
            </div>

            <div className="exp-img py-2 bootstrap" data-aos="fade-left">
              <img
                src={bootstrap}
                alt="bootstrap"
                className="w-20 mx-auto py-2"
              ></img>
              <p className="mt-4">BOOTSTRAP</p>
            </div>

            <div className="exp-img py-2 javascript" data-aos="fade-right">
              <img
                src={javascript}
                alt="javascript"
                className="w-20 mx-auto py-2"
              ></img>
              <p className="mt-4">JAVASCRIPT</p>
            </div>

            <div className="exp-img py-2 react" data-aos="zoom-in">
              <img
                src={reactImage}
                alt="react"
                className="w-20 mx-auto py-2"
              ></img>
              <p className="mt-4">REACT</p>
            </div>

            <div className="exp-img py-2 github" data-aos="fade-left">
              <img
                src={github}
                alt="github"
                className="w-20 mx-auto py-2"
              ></img>
              <p className="mt-4">GITHUB</p>
            </div>

            <div className="exp-img py-2 tailwind" data-aos="fade-right">
              <img
                src={tailwind}
                alt="tailwind"
                className="w-20 mx-auto py-3"
              ></img>
              <p className="mt-4">TAILWIND</p>
            </div>

            <div className="exp-img py-2 git" data-aos="zoom-in">
              <img src={git} alt="git" className="w-20 mx-auto py-3"></img>
              <p className="mt-4">GIT</p>
            </div>

            <div className="exp-img py-2 mui" data-aos="fade-left">
              <img src={mui} alt="mui" className="w-20 mx-auto py-3"></img>
              <p className="mt-4">MATERIAL UI</p>
            </div>

            <div className="exp-img py-2 figma" data-aos="fade-right">
              <img src={figma} alt="figma" className="w-20 mx-auto py-3"></img>
              <p className="mt-4">FIGMA</p>
            </div>

            <div className="exp-img py-2 redux" data-aos="zoom-in">
              <img
                src={reduxImg}
                alt="redux"
                className="w-20 mx-auto py-3"
              ></img>
              <p className="mt-4">REDUX</p>
            </div>

            <div className="exp-img py-2 firebase" data-aos="fade-left">
              <img
                src={firebase}
                alt="html"
                className="w-20 mx-auto py-2"
              ></img>
              <p className="mt-4">FIREBASE</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
