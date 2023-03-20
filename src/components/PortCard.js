import React, { useEffect } from "react";
import "./Portcard.css";
import expenseTracker from "../assets/portfolio/expensetracker.png";
import crypto from "../assets/portfolio/crypto.png";
import tictactoe from "../assets/portfolio/tictactoe.png";
import todoList from "../assets/portfolio/todo.png";
import weatherApp from "../assets/portfolio/weather.png";
import Aos from "aos";

const PortCard = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const portCards = [
    {
      id: 1,
      src: expenseTracker,
      githubLink: "https://github.com/devakashpandey/Expense-Tracker",
      projectLink: "https://the-expense-tracker-app.netlify.app",
    },
    {
      id: 2,
      src: crypto,
      githubLink:
        "https://github.com/devakashpandey/Crypto-Currency-Tracker-LOGIN",
      projectLink: "https://live-crypto-currency-tracker.netlify.app",
    },
    {
      id: 3,
      src: tictactoe,
      githubLink: "https://github.com/devakashpandey/TicTacToe-ReactJS",
      projectLink: "https://new-tic-tac-toe-game-by-akash.netlify.app",
    },
    {
      id: 4,
      src: todoList,
      githubLink: "https://github.com/devakashpandey/TODO-LIST-ReactJS",
      projectLink: "https://todo-list-by-akash.netlify.app",
    },
    {
      id: 5,
      src: weatherApp,
      githubLink: "https://github.com/devakashpandey/Weather-App",
      projectLink: "https://weather-checker-by-akash.netlify.app",
    },
  ];

  return (
    <>
      {/* portfolio card start !!*/}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 sm:px-0 gap-8 px-12 ">
        {portCards.map(({ id, src, githubLink, projectLink }) => {
          return (
            <div key={id} className="port-card" data-aos="zoom-in">
              <img
                src={src}
                alt="expenseTracker"
                className="port-img duration-300"
              ></img>

              <div className="buttons">
                <a href={projectLink} target="_blank">
                  <button>Demo</button>
                </a>
                <a href={githubLink} target="_blank">
                  <button>Code</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* portfolio card end !!!*/}
    </>
  );
};

export default PortCard;
