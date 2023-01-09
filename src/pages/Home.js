import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiRedux, SiMaterialui } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My name is Venkatesh</h2>
        <div className="prompt">
          <p>A Software Developer with a passion for learning and creating.</p>
          <div className="button-wrapper">
            <a
              className="button"
              href="https://www.linkedin.com/in/venkatesh-krishna-093956b9/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              className="button"
              href="mailto:venkateshkrishnaashok@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon />
            </a>
            <a
              className="button"
              href="https://github.com/venkasa"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1 className="skills-header">Skills</h1>
        <ol className="list">
          <li className="item">
            <h2 className="skill-title">Front-End</h2>
            <h3 className="skill-list">
              <AiFillHtml5 /> HTML5
              <br />
              <DiCss3 /> CSS3
              <br />
              <SiJavascript /> Javascript
              <br />
              <FaReact /> ReactJS
              <br />
              <SiRedux /> Redux
              <br />
              <SiMaterialui /> MaterialUI
              <br />
            </h3>
          </li>
        </ol>
        <ol className="list">
          <li className="item">
            <h2 className="skill-title">Design</h2>
            <h3 className="skill-list">
              <FiFigma /> Figma
              <br />
            </h3>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
