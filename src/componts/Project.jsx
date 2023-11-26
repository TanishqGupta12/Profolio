import React from "react";

import restro from "./Photo/logo.png";
import logo1 from "./Photo/bubble.jpg";
import logo2 from "./Photo/images.jpg";
import logo3 from "./Photo/Untitled.jpg";

const Project = () => {
  return (
    <div className="Projects" id="Projects">
      <h1 className="h1" style={{ color: "aliceblue" }}>
        Project
      </h1>
      <div className="ProjectSub">
        <div>
          <img src={restro} class="card-img-top" alt="ImageAltText" />
          <h5 class="card-title">Restro website </h5>
        </div>
        <div>
          <img src={logo1} class="card-img-top" alt="ImageAltText" />
          <h5 class="card-title">Real Live Chat App</h5>
        </div>
        <div>
          <img src={logo2} class="card-img-top" alt="ImageAltText" />
          <h5 class="card-title">Movie Recommendation System</h5>
        </div>
        <div>
          <img src={logo3} class="card-img-top" alt="ImageAltText" />
          <h5 class="card-title">
            E-Commerce
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Project;
