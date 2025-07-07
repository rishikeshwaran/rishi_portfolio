import '../styles/about.css';
import aboutPic from '../assets/rishi.jpg';

const About = () => {
  return (
    <section id="about" className="about-section container mt-5">
      <div className="text-center">
        <h2 className="fw-bold mb-4" style={{ color: '#007bff' }} data-aos="fade-down">About</h2>
      </div>
      <br />
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-md-6 mb-4" data-aos="fade-up">
          <img src={aboutPic} alt="About" className="img-fluid about-img mx-auto d-block" />
        </div>
        <div className="col-md-8 mx-auto" data-aos="fade-left">
          <p className="fw-bold text-center">
            Hi! I'm Rishikeshwaran, an Electronics & Instrumentation Engineering student passionate about embedded systems,
            instrumentation, and full-stack web development. I enjoy solving real-world problems through code and innovation.
            <br /><br />
            With a focus on clean, efficient design, I strive to create impactful projects in health tech, IoT, and sustainability domains.
            I constantly learn and improve my technical and leadership skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
