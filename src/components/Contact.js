import React from "react";
import { FaLinkedinIn, FaGithub, FaStackOverflow } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = ({ onAdd }) => {
  return (
    <div>
      <h1 className="main-headers">Contact</h1>
      <ContactForm onAdd={onAdd} />
      <div className="contact-div">
        <div className="info-style">
          <a href="mailto:israelm.riosjr@gmail.com" className="code">
            IsraelM.RiosJr@GMail.com
          </a>
          <a className="code" href="/">
            951.496.2702
          </a>
        </div>
        <div className="info-style react-icons">
          <a
            href="https://www.linkedin.com/in/israel-m-rios-93a81a38/"
            target="_blank"
            rel="noreferrer"
            className="code"
          >
            <FaLinkedinIn className="contact-icons" />
          </a>
          <a
            href="https://github.com/israelmrios"
            target="_blank"
            rel="noreferrer"
            className="code"
          >
            <FaGithub />
          </a>
          {/* <a
            href="./assets/img/Israel Rios' Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="code"
          >
            <span className="resume">
              <i className="far fa-file-pdf fa-2x"></i>
              <span>Resume</span>
            </span>
          </a> */}
          <a
            href="https://stackoverflow.com/users/16478510/israel-rios"
            target="_blank"
            rel="noreferrer"
            className="code"
          >
            <FaStackOverflow />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
