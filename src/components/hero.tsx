import React, { useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";
import me from "../assets/modele/ia-rm.png";
import About from "../pages/about";
import aboutImage from "../assets/modele/1.jpg";
import Portfolio from "../pages/portfo";
import Contact from "../pages/contact";

import img1 from "../assets/modele/1.jpg";
import img2 from "../assets/modele/2.jpg";
import img3 from "../assets/modele/3.jpg";
import img4 from "../assets/modele/4.jpg";

const projects = [
  { id: 1, title: "Project One", image: img1 },
  { id: 2, title: "Project Two", image: img2 },
  { id: 3, title: "Project Three", image: img3 },
  { id: 4, title: "Project four", image: img4 },
  { id: 5, title: "Project five", image: img3 },
  { id: 6, title: "Project six", image: img2 },

];

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
          <h1>
            FullStack <span>Developer</span>
          </h1>
          <p> I am a creative front-end developer passionate about building modern, user-friendly web interfaces.</p>
        </motion.div>

      </section>

      <section id="about" className="about">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I am a creative front-end developer passionate about building modern, user-friendly web interfaces.
          </p>
        </div>
        <img src={aboutImage} alt="About" className="about-image" />
      </section>

      <section id="portfolio" className="portfolio">
        <h2>My Projects</h2>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item">
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
          />
          <button type="submit">Send</button>
        </form>
      </section>

    </div>
  );
};

export default Hero;
