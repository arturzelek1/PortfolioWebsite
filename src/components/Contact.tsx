import "../styles/AboutMe.scss";
import { RefObject } from "react";

interface ContactProps {
  sectionRefs: RefObject<HTMLDivElement | null>;
}
function Contact({ sectionRefs }: ContactProps) {
  return (
    <div className="contact-container" ref={sectionRefs}>
      <div className="about-me">
        Crafting intuitive solutions, designed with users in mind.
      </div>
    </div>
  );
}

export default Contact;
