import "../styles/AboutMe.scss";
import { RefObject } from "react";

interface ProjectsProps {
  sectionRefs: RefObject<HTMLDivElement | null>;
}
function Projects({ sectionRefs }: ProjectsProps) {
  return (
    <div className="about-me-container" ref={sectionRefs}>
      <div className="about-me">SELECTED PROJECTS</div>
    </div>
  );
}

export default Projects;
