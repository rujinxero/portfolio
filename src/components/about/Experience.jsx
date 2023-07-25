import React from "react";

const experienceContent = [
  {
    year: "   2016 - Present",
    position: " Sr Software Engineer",
    compnayName: "Oneva Inc",
    details: `  At Oneva, I utilized diverse technologies such as React, Drupal, and Angular, building and maintaining robust web platforms. My code, reliably passing rigorous QA checks, significantly improved system efficiency and user experience.`,
  },
  {
    year: "2013 - 2015",
    position: " Web Developer",
    compnayName: "Decision Counsel",
    details: `In Decision Counsel, I crafted custom, responsive websites using Drupal CMS and Bootstrap framework, catering to high-profile clients. My dedication to quality translated into reliable and highly functional educational platforms, enhancing user interaction and satisfaction.`,
  },
  // {
  //   year: "2005 - 2013",
  //   position: "Consultant",
  //   compnayName: "Videohive",
  //   details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
  //       elit, sed do eiusmod tempor duntt`,
  // },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
