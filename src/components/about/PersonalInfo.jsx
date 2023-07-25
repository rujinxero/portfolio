import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Ronald" },
  { meta: "last name", metaInfo: "Colombo" },
  { meta: "Age", metaInfo: "40 Years" },
  { meta: "Nationality", metaInfo: "Filipino" },
  // { meta: "Freelance", metaInfo: "Available" },
  // { meta: "Address", metaInfo: "Tunis" },
  { meta: "phone", metaInfo: "+19255506275" },
  { meta: "Email", metaInfo: "rcolombojr@gmail.com" },
  // { meta: "Skype", metaInfo: " steve.milner" },
  { meta: "langages", metaInfo: "English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
