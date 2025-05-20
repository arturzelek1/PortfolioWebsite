import "../styles/Projects.scss";
import { RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ProjectsProps {
  sectionRefs: RefObject<HTMLDivElement | null>;
}

interface Project {
  number: string;
  title: string;
  image: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "Travel Site Web Application",
    image: "/assets/Projects/TravelSiteWeb/LongPage.png",
  },
  {
    number: "02",
    title: "Event Management System",
    image: "/assets/Projects/Django/LongPage.png",
  },
  {
    number: "03",
    title: "Unity Motion Game",
    image: "/assets/Projects/Unity/FirstPhoto.jpg",
  },
  {
    number: "04",
    title: "WPF Shop Application",
    image: "/assets/Projects/WPF/LongPage.png",
  },
];

function Projects({ sectionRefs }: ProjectsProps) {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  return (
    <div className="projects-container container-fluid" ref={sectionRefs}>
      <div className="row">
        <div className="projects-section-title col-12 col-lg-8 mb-4">
          SELECTED PROJECTS
        </div>
      </div>

      <div className="row">
        <div className="col-lg-7">
          <ol className="custom-number-list">
            {projects.map((project) => (
              <li key={project.number}>
                <div className="row align-items-center mb-4">
                  <div className="projects-number col-8">
                    <span className="number col-12 col-md-12 col-lg-8">
                      {project.number}.
                    </span>
                  </div>
                  <div
                    className="projects-title col-12 col-md-12 col-lg-7"
                    onMouseEnter={() => setHoveredProject(project)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {project.title}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="col-lg-3 position-relative d-none d-lg-block">
          <AnimatePresence>
            {hoveredProject && (
              <motion.img
                key={hoveredProject.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="hover-preview"
                src={hoveredProject.image}
                alt={`Preview for ${hoveredProject.title}`}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Projects;
