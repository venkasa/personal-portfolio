import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My name is Venkatesh</h2>
        <div className="prompt">
          <p>A Software Developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/venkatesh-krishna-093956b9/">
            <LinkedInIcon />
          </a>
          <a href="mailto:venkateshkrishnaashok@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://github.com/venkasa">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1>skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End:</h2>
            <h5>HTML,CSS,JavaScript,ReactJS,Redux and MaterialUI</h5>
          </li>
          <li className="item">
            <h2>Design:</h2>
            <h5>Figma</h5>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
