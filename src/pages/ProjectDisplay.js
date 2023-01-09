import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList, skills } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiRedux, SiMaterialui } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="" />
      <p>
        <b>Tech Stack</b>
        <h5 className="skill-list">
          {project.Skills.map((skill) => {
            switch (skill) {
              case skills.HTML:
                return (
                  <span className="skill-item">
                    <AiFillHtml5 className="skill-icon" /> {skills.HTML}
                  </span>
                );
              case skills.CSS:
                return (
                  <span className="skill-item">
                    <DiCss3 className="skill-icon" /> {skills.CSS}
                  </span>
                );
              case skills.JS:
                return (
                  <span className="skill-item">
                    <SiJavascript className="skill-icon" /> {skills.JS}
                  </span>
                );
              case skills.REACT:
                return (
                  <span className="skill-item">
                    <FaReact className="skill-icon" /> {skills.REACT}
                  </span>
                );
              case skills.REDUX:
                return (
                  <span className="skill-item">
                    <SiRedux className="skill-icon" /> {skills.REDUX}
                  </span>
                );
              case skills.MATERIAL:
                return (
                  <span className="skill-item">
                    <SiMaterialui className="skill-icon" /> {skills.MATERIAL}
                  </span>
                );
              default:
                return <>skill</>;
            }
          })}
        </h5>
      </p>
    </div>
  );
}

export default ProjectDisplay;
