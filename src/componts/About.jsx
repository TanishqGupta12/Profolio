import React from "react";
import logo from "../photo.jpeg";
const About = () => {
  return (
    <>
      <section class="about-box" id="about">
        <div className="header-text">
          <h1 className="h1"> About ME </h1>
        </div>
        <div className="about">
          <div className="img-box-left">
            <img src={logo} alt="logo" />
          </div>

          <div className="text-box-right">
            <p>
              I'm Tanishq Gupta, a passionate software developer with expertise
              in MERN stack and Flutter development. With a keen eye for detail
              and a strong desire to create intuitive and user-friendly
              applications, I strive to deliver high-quality solutions that meet
              the needs of both clients and end-users. <br/>In the MERN stack, I
              bring extensive experience in building full-stack web
              applications. I utilize MongoDB as the database to store and
              manage data efficiently. Express.js powers my backend development,
              enabling me to create robust and scalable APIs. With React as my
              go-to frontend library, I craft dynamic and interactive user
              interfaces that provide seamless experiences. And of course,
              Node.js serves as the backbone of my applications, allowing for
              efficient server-side operations and real-time communication.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
