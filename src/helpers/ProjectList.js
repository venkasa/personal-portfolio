import customade from "../assets/customade.jpg";
import slamfitness from "../assets/slamfitness.JPEG";
import weatherapp from "../assets/weatherapp.PNG";
import yaadkarbiriyani from "../assets/yaadkarbiriyani.jpg";

export const skills = {
  HTML: "HTML 5",
  CSS: "CSS 5",
  JS: "JavaScript",
  REACT: "ReactJS",
  REDUX: "ReduxJS",
  MATERIAL: "Material UI",
};

export const ProjectList = [
  {
    name: "Custo Made",
    image: customade,
    Skills: [skills.HTML, skills.CSS, skills.JS, skills.REACT],
  },
  {
    name: "Slam Fitness Kodambakkam",
    image: slamfitness,
    Skills: [skills.HTML, skills.CSS, skills.JS, skills.REACT, skills.MATERIAL],
  },
  {
    name: "Weather App",
    image: weatherapp,
    Skills: [skills.HTML, skills.CSS, skills.JS, skills.REACT, skills.MATERIAL],
  },
  {
    name: "Yaadkar Biriyani",
    image: yaadkarbiriyani,
    Skills: [skills.HTML, skills.CSS, skills.JS, skills.REACT],
  },
];
