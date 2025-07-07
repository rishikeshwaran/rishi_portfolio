import resume from '../assets/rishi_resume.pdf';
import '../styles/resume.css';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h3>My Resume</h3>
      <br />
      <a className="resume-button" href={resume} download>
        📄 Download Resume
      </a>
    </section>
  );
};

export default Resume;