import React from "react";

import Reacts from "./Photo/React.png";
import Python from "./Photo/Python.png";
import nodejs from "./Photo/png-transparent-green-grass-nodejs-javascript-react-mean-angularjs-logo-symbol-thumbnail.png";
import js from "./Photo/js.png";
import MOngdb from "./Photo/mongodb.png";
import Mysql from "./Photo/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png";
import flutter from "./Photo/Untitled-removebg-preview.png";
import java from "./Photo/removebg-preview.png";

const Skill = () => {
  return (
    <section className="skill-box" id="skill-box">
      <h1 className="h1" style={{ color: "aliceblue" }}>
        Skill
      </h1>
      <h5 className="h5" style={{ color: "aliceblue" }}>
        {" "}
        what I Provide
      </h5>
      <ul className="skill_card">
        <li className="card">
          <img src={Reacts} alt="" />
        </li>
        <li className="card">
          {" "}
          <img src={Python} alt="" />
        </li>
        <li className="card">
          <img src={nodejs} alt="" />
        </li>
        <li className="card">
          <img src={java} alt="" />
        </li>
      </ul>
      <ul className="skill_card">
        <li className="card">
          <img src={js} alt="" />
        </li>
        <li className="card">
          {" "}
          <img src={MOngdb} alt="" />
        </li>
        <li className="card">
          <img src={Mysql} alt="" />
        </li>
        <li className="card">
          <img src={flutter} alt="" />
        </li>
      </ul>
    </section>
  );
};

export default Skill;
