import "../styles/AboutMe.scss";
import { RefObject } from "react";

interface AboutMeProps {
  sectionRefs: RefObject<HTMLDivElement | null>;
}
function AboutMe({ sectionRefs }: AboutMeProps) {
  return (
    <div className="about-me-container container-fluid" ref={sectionRefs}>
      <div className="row">
        <div className="about-me-title col-12 col-md-12 col-lg-8">
          Software Engineer, who judges book by its cover.
        </div>
      </div>
      <div className="row">
        <div className="about-me-name col-12 col-md-6 col-lg-4">
          <div className="about-me-name">Hi, I'm Artur.</div>
        </div>
        <div className="about-me-description col-12 col-md-6 col-lg-4">
          Software Engineer with a strong foundation in full-stack development,
          specializing in C# (.NET), JavaScript (React), and Python (Django).
          With a passion for building scalable, high-performance applications, I
          focus on integrating innovative solutions that address real-world
          problems. My experience spans across various domains, including game
          development with Unity and mobile applications using Android. I thrive
          in environments that challenge me to learn new technologies and
          techniques. Each project is approached individually, ensuring tailored
          solutions that meet specific goals, requirements, and user needs.
          Eager to continuously grow and stay on the cutting edge of software
          engineering, I am always excited to take on new challenges and
          contribute to impactful projects.
        </div>
      </div>

      <div className="about-me-skills">
        <div className="about-me-skills-title">FRONTEND</div>
        <div className="about-me-skills-list">
          <ul>
            <li>
              <img src="/public/assets/StackIcons/Frontend/js.png" />
              JavaScript
            </li>
            <li>
              <img src="/public/assets/StackIcons/Frontend/typescript.png" />
              TypeScript
            </li>
            <li>
              <img src="/public/assets/StackIcons/Frontend/physics.png" />
              React
            </li>
            <li>
              <img src="/public/assets/StackIcons/Frontend/bootstrap.png" />
              Bootstrap5
            </li>
            <li>
              <img src="/public/assets/StackIcons/Frontend/tailwind-css-icon.png" />
              Tailwind CSS
            </li>
            <li>
              <img src="/public/assets/StackIcons/Frontend/framermotion.png" />
              Framer Motion
            </li>
          </ul>
        </div>
        <div className="about-me-skills-title">BACKEND</div>
        <div className="about-me-skills-list">
          <ul>
            <li>
              <img src="/public/assets/StackIcons/Backend/net-framework.png" />
              .NET
            </li>
            <li>
              <img src="/public/assets/StackIcons/Backend/node-js.png" />
              Node.JS
            </li>
            <li>
              <img src="/public/assets/StackIcons/Backend/django.png" />
              Django
            </li>
          </ul>
        </div>
        <div className="about-me-skills-title">DATABASE</div>{" "}
        <div className="about-me-skills-list">
          <ul>
            <li>
              <img src="/public/assets/StackIcons/Database/postgresql.png" />
              PostgreSQL
            </li>
            <li>
              <img src="/public/assets/StackIcons/Database/MongoDB.png" />
              MongoDB
            </li>
            <li>
              <img src="/public/assets/StackIcons/Database/firebase.png" />
              Firebase
            </li>
          </ul>
        </div>
        <div className="about-me-skills-title">TOOLS</div>{" "}
        <div className="about-me-skills-list">
          <ul>
            <li>
              <img src="/public/assets/StackIcons/Tools/git.png" />
              Git
            </li>
            <li>
              <img src="/public/assets/StackIcons/Tools/ubuntu.png" />
              Ubuntu
            </li>
            <li>
              <img src="/public/assets/StackIcons/Tools/docker.png" />
              Docker
            </li>
            <li>
              <img src="/public/assets/StackIcons/Tools/figma.png" />
              Figma
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
