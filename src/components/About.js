import React from "react";
import { FaJs, FaHtml5, FaCss3, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { SiJquery, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const About = () => {
  return (
    <section>
      <h1 className="main-headers">About</h1>
      <div className="container">
        <p className="main-p">
          Software Engineer with Certificate in Full-Stack Web Development from
          UCR Boot Camp and a Bachelor's Degree in Information Management.
          Recent experience in JavaScript, CSS, Node.js, React.js, MySQL, API
          Interaction and responsive web design. Detail oriented and hardworking
          teammate, focused on completing projects on time and above
          expectation. I love to keep learning, continue challenging myself, and
          do interesting things that matter. I applied aspects of MVC paradigm,
          Handlebars.js and Sequelize in a recent project where I collaborated
          in a team of three to develop an application that generates NFTs. It
          takes an image URL attaches metadata in JSON format and uses an NPM
          Package to create the NFT on the Ethereum Block Chain. I am a fast
          learner, able to pick up new skills and eager to utilize my skill sets
          and experience in a full application lifecycle.
        </p>
      </div>
      <h1 className="main-headers">Technical Skills</h1>
      <div className="skills-grid">
        <div>
          <a className="skills" href="/">
            <FaJs /> JavaScript
          </a>
        </div>
        <div>
          <a className="skills" href="/">
            <SiJquery /> jQuery
          </a>
        </div>
        <div>
          <a className="skills" href="/">
            <FaHtml5 /> HTML
          </a>
        </div>
        <div>
          <a className="skills" href="/">
            <FaCss3 /> CSS
          </a>
        </div>
        <div>
          <a className="skills" href="/">
            <FaBootstrap /> Bootstrap
          </a>
        </div>
        <div>
          <a className="skills" href="/">
            <FaNodeJs /> Node.js
          </a>
        </div>
        <div>
          <a className="skills" href="/">
            <GrMysql /> MySQL
          </a>
        </div>
        <div>
          <a className="skills" href="/">
            <SiMongodb /> mongoDB
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
