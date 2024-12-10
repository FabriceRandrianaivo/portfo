import React from "react";
import { SkeletonColor } from "../components/ui/skeletonColor";
import Maintenance from "./maintenance";
// import aboutImage from "../assets/modele/1.jpg";

const About: React.FC = () => {
  return (
    <section className="about">
      {/* <div className="about-content"> */}
        {/* <h2>About Me</h2>
        <p>
          I am a creative front-end developer passionate about building modern, user-friendly web interfaces.
        </p> */}
        {/* <div className="maintenance">
          <h1>Actuellement en maintenance ...</h1>
          
        </div> */}

          <Maintenance/>

      {/* </div> */}
      {/* <img src={aboutImage} alt="About" className="about-image" /> */}
    </section>
  );
};

export default About;
