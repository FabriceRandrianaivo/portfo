import React from "react";
import img1 from "../assets/modele/1.jpg";
import img2 from "../assets/modele/2.jpg";
import img3 from "../assets/modele/3.jpg";
import img4 from "../assets/modele/4.jpg";


const projects = [
  { id: 1, title: "Project One", image:  img1},
  { id: 2, title: "Project Two", image:  img2},
  { id: 3, title: "Project Three", image: img3},
  { id: 4, title: "Project four", image: img4 },
  { id: 5, title: "Project five", image:  img3},
  { id: 6, title: "Project six", image: img2 },
];

const Portfolio: React.FC = () => {
  return (
    <section className="portfolio">
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
  );
};

export default Portfolio;
