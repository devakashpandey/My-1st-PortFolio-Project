import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer px-4">
        <div className="info">
          Copyright © 2023 - All Rights Reserved
          <Link className="myname" to="home" smooth duration={500}>
            <center>Akash Pandey</center>
          </Link>
          <div className="icon">
            <a
              title="Linkedin"
              href="https://www.linkedin.com/in/devakashpandey/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            &nbsp;
            <a
              title="Github"
              href="https://github.com/devakashpandey"
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
