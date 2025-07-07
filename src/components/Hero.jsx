import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/hero.css';
import profile from '../assets/rishi.jpg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import instagram from '../assets/instagram.jpeg';

const Hero = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <section id="hero" className="hero-section d-flex align-items-center">
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6" data-aos="fade-down">
            <img src={profile} alt="Profile" className="img-fluid rounded-circle hero-img mb-4" />
          </div>
          <div className="col-lg-8" data-aos="fade-up">
            <h1 className="display-4 fw-bold">HI,</h1>
            <h2 className="display-5 fw-bold">I'm <span style={{ color: 'red' }}>Rishikeshwaran</span></h2>
            <h3 className="display-6 fw-bold">Electronics & Instrumentation Student</h3>
            
          </div>
          <div className="col d-flex justify-content-center gap-3 mt-4" data-aos="fade-left">
            <a href="https://www.linkedin.com/in/rishikeshwaran-m-87b969291/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://github.com/rishikeshwaran/" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
