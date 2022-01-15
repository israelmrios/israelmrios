import React from "react";
import icon from '../img/imr-icon.png'

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header-h1"><img src={icon} alt="Icon with Initials" className="Icon" /> 
        ISRAEL RIOS
      </h1>
      <nav>
            <ul>
                <li className="code">
                    <a href="#about">About</a>
                </li>
                <li className="code">
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li className="code">
                    <a href="#contact">Contact</a>
                </li>
                <li className="code">
                    <a href="./assets/img/Israel Rios' Resume.pdf" target="_blank" className="code">Resume</a>
                </li>
            </ul>
        </nav>
    </div>
  );
};

export default Header;
