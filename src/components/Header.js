import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom'
import icon from '../img/imr-icon.png'

const Header = () => {
  // Current Component selected
  const [selectedTab, setSelectedTab] = useState('')

  return (
    <header className="header">
      <Link to="/israelmrios" className="code" onClick={() =>{setSelectedTab('')}} >
      <h1><img src={icon} alt="Icon with Initials" className="icon" /> 
        ISRAEL RIOS
      </h1>
      </Link>
      <nav>
            <ul>
                <li className={selectedTab === 'about' ? "code-dark" : "code"} onClick={() =>{setSelectedTab('about')}} >
                    <Link to="/about">About</Link>
                </li>
                <li className={selectedTab === 'portfolio' ? "code-dark" : "code"} onClick={() =>{setSelectedTab('portfolio')}} >
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className={selectedTab === 'contact' ? "code-dark" : "code"} onClick={() =>{setSelectedTab('contact')}} >
                    <Link to="/contact">Contact</Link>
                </li>
                <li className={selectedTab === 'resume' ? "code-dark" : "code"} onClick={() =>{setSelectedTab('resume')}} >
                    <Link to="/resume">Resume</Link>
                    {/* <a href="./assets/img/Israel Rios' Resume.pdf" target="_blank" className="code">Resume</a> */}
                </li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;
