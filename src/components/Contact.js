import React, { useState, useEffect } from "react";
import "./Contact.css";
import Aos from "aos";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <div name="contact" className="main-contact">
        <div className="max-w-screen-lg mx-auto p-4 my-exp contact">
          <div className="pb-8 contact-2">
            <p
              className="contact-text "
              data-aos="fade-right"
              data-cursor-text="Contact"
            >
              Contact
            </p>
            <p className="text-xl py-6" data-aos="fade-left">
              Submit the form below to get in touch with me.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <form
              action="https://getform.io/f/9a2266b4-d907-45d9-99de-bf1be16fd011"
              method="POST"
              className="md:w-1/2 w-full form"
            >
              <input
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
                name="name"
                placeholder="Enter your name"
                className="p-2"
                value={name}
                data-aos="zoom-in"
              />

              <input
                type="mail"
                required
                onChange={(e) => setMail(e.target.value)}
                name="mail"
                placeholder="Enter your email"
                className="p-2 my-4"
                autoComplete="off"
                value={mail}
                data-aos="zoom-in"
              />

              <textarea
                name="message"
                required
                onChange={(e) => setMessage(e.target.value)}
                rows="10"
                className="p-2"
                placeholder="Write your message here"
                value={message}
                data-aos="zoom-in"
              ></textarea>

              <button
                type="submit"
                className="w-fit my-8 mx-auto contact-btn"
                data-aos="fade-right"
              >
                Say Hello 👋
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
