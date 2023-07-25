import React from "react";

const educationContent = [
  {
    year: "PRESENT",
    degree: "WEB DEVELOPMENT COURSES",
    institute: "UDEMY",
    details: `  At Udemy, I deepened my technical prowess through comprehensive courses on the MEAN stack and React. Each course offered a rich, practical exploration of tools and technologies, bolstering my proficiency and enabling me to deliver superior web solutions.`,
  },
  {
    year: "2011",
    degree: "GAME AND SIMULATION PROGRAMMING",
    institute: "DEVRY UNIVERSITY",
    details: `At Devry University, I studied Game and Simulation Programming, honing my skills in C++, DirectX, SDL, and OpenGL. Collaborative projects, like creating Bejeweled with a team, ignited my passion for programming and fostered my capacity for teamwork.`,
  },
  // {
  //   year: "2009",
  //   degree: "BACHELOR DEGREE ",
  //   institute: "TUNIS HIGH SCHOOL",
  //   details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
  //       elit, sed do eiusmod tempor duntt`,
  // },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
