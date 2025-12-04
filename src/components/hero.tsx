import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";
import me from "../assets/modele/me.png";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import cvPdf from "../assets/modele/pdf/FabriceRandrianaivo_JS_2025_CV.pdf";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "FullStack Developer",
    "Data Scientist",
    "UI/UX Designer",
    "Problem Solver"
  ];

  const navigate = useNavigate();
  const handleViewProjects = () => navigate('/project');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="hero-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#64ffda" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#64ffda",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true
            }
          },
          retina_detect: true
        }}
      />

      <section id="hero" className="hero">
        <motion.div
          className="hero-content-wrapper"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-text-section">
            <motion.div variants={itemVariants} className="greeting">
              <span className="wave">👋</span> Hello, I'm
            </motion.div>

            <motion.h1 variants={itemVariants} className="name">
              <span className="first-name">Fabrice</span>
              <span className="last-name">Randrianaivo</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="title-container">
              <span className="static-text">I'm a </span>
              <span className="dynamic-text">
                {texts[currentText]}
              </span>
              <span className="cursor">|</span>
            </motion.div>

            <motion.p variants={itemVariants} className="description">
              Passionate about creating innovative digital solutions and turning ideas into reality.
              I specialize in full-stack development, data science, and building user-centric applications.
            </motion.p>

            <motion.div variants={itemVariants} className="cta-buttons">
              <Button
                variant="gradient"
                size="lg"
                asChild
              >
                <a href={cvPdf} target="_blank" rel="noopener noreferrer" download>
                  <FaDownload className="mr-2" />
                  Download CV
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleViewProjects}
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
              >
                View Projects
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="social-links">
              <a href="https://github.com/FabriceRandrianaivo" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/fabrice-randrianaivo" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
              <a href="mailto:fabrice-randrianaivo8@gmail.com" className="social-link">
                <FaEnvelope />
              </a>
              <a href="https://wa.me/+261328454355" className="social-link">
                <FaWhatsapp />
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-image-section"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="image-container">
              <img src={me} alt="Fabrice Randrianaivo" className="hero-image" />
              <div className="image-background"></div>
              <div className="floating-card">
                <div className="card-content">
                  <span className="card-icon">🚀</span>
                  <span className="card-text">Available for new opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
