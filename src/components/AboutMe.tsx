import "../styles/AboutMe.scss";
import { RefObject } from "react";

interface AboutMeProps {
  sectionRefs: RefObject<HTMLDivElement | null>;
}
function AboutMe({ sectionRefs }: AboutMeProps) {
  return (
    <div className="about-me-container" ref={sectionRefs}>
      <div className="about-me">
        Crafting intuitive solutions, designed with users in mind.
      </div>
      <div className="about-me">Hi, I'm Artur Zelek,</div>
      <div className="about-me">
        Software Engineer with a strong foundation in full-stack development,
        specializing in C# (.NET), JavaScript (React) and Python (Django).
        Passionate about building scalable applications and integrating
        innovative solutions. Experienced in game development with Unity and
        Android applications. Always eager to learn and tackle new challenges in
        software engineering.
      </div>
    </div>
  );
}

export default AboutMe;
