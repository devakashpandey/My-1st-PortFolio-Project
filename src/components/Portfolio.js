import React, { useEffect } from "react";
import "./Portfolio.css";
import PortCard from "./PortCard";
import Aos from "aos";

function Portfolio() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div name="portfolio" className="main-portfolio">
        <div className="max-w-screen-lg p-4 mx-auto port2">
          <div className="pb-8 port">
            <p
              className="port-p"
              data-aos="fade-right"
              data-cursor-text="Portfolio"
            >
              Portfolio
            </p>
            <p className="py-6 text-xl" data-aos="fade-right">
              Check out some of my work right here.{" "}
            </p>
          </div>

          {/* portfolio card start !!*/}

          <PortCard />

          {/* portfolio card end !!!*/}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
