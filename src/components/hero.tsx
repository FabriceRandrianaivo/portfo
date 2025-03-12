import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";
import me from "../assets/modele/ia-rm.png";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Hero: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
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
          <h2>
            I'am <b>Fabrice</b><span> Randrianaivo</span>
          </h2>
          <h1>
            FullStack <span>Developer</span>
          </h1>
          <p>
            Passionate about web development and artificial intelligence, I create modern, high-performance and optimized applications. My expertise also covers the integration of AI models .
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
