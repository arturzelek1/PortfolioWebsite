import "../styles/Footer.scss";
import { RefObject } from "react";

interface ContactProps {
  sectionRefs: RefObject<HTMLDivElement | null>;
}
function Contact({ sectionRefs }: ContactProps) {
  return (
    <div className="contact-container container-fluid" ref={sectionRefs}>
      <div className="content">
        <div className="row">
          <div className="contact-section-title col-12 col-lg-8 mb-4">
            FEEL FREE TO CONTACT ME
          </div>
          <div className="contact-section-subtitle col-12 col-lg-8 mb-4">
            <a href="mailto:artur.zelek.work@gmail.com">
              artur.zelek.work@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
