import "../styles/Footer.scss";
import { RefObject } from "react";

interface ContactProps {
  sectionRefs: RefObject<HTMLDivElement | null>;
}
function Contact({ sectionRefs }: ContactProps) {
  return (
    <div className="contact-containe container-fluid" ref={sectionRefs}>
      <div className="row">
        <div className="contact-section-title col-12 col-lg-8 mb-4">
          CONTACT ME
        </div>
        <div className="contact-section-subtitle col-12 col-lg-8 mb-4">
          <p>
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Feel free to reach out to
            me through the following channels:
          </p>
          <ul>
            <li>
              <a href="mailto:artur.zelek.work@gmail.com">Send email</a>
            </li>
            <li>
              {" "}
              <a href="https://www.linkedin.com/in/artur-zelek-775918359/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="">WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
