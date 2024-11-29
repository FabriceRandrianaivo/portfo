import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";
import me from "../assets/modele/ia-rm.png";
import About from "../pages/about";
import Portfolio from "../pages/portfo";
import Contact from "../pages/contact";
const Hero: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <div className="home-container">
      <section id="hero" className="hero">        
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            particles: {
              color: { value: "#fff" },
              links: { enable: true, color: "#fff", distance: 150 },
              move: { enable: true, speed: 1 },
              size: { value: 3 },
            },
          }}
        />
        <motion.div className="hero-image-container">
          <img src={me} alt="Hero background" className="hero-image" />
        </motion.div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -50 }} // L'état initial avant animation
          animate={{ opacity: 1, y: 0 }} // L'état final après animation
          transition={{ duration: 3 }} // La durée de l'animation
        >
          <h1>
            FullStack <span>Developer</span>
          </h1>
          <p> I am a creative front-end developer passionate about building modern, user-friendly web interfaces.</p>
        </motion.div>

      </section>
{/* 
      <section id="about" className="about">
        <About />
      </section>

      <section id="portfolio" className="portfolio">
        <Portfolio />
      </section>

      <section id="contact" className="contact">
        <Contact />
      </section> */}

    </div>
  );
};

export default Hero;
