import '../styles/skills.css';
import html from '../assets/html.png';
import css from '../assets/css-3.png';
import js from '../assets/js.png';
import python from '../assets/python.jpeg';
import iot from '../assets/iot.png';
import embedded from '../assets/embedded.png';
import instrumentation from '../assets/instrumentation.png';

const Skills = () => {
  const skills = [
    { name: "HTML5 ", value: "95%", icon: html },
    { name: "CSS ", value: "92%", icon: css },
    { name: "JavaScript ", value: "90%", icon: js },
    { name: "Python ", value: "85%", icon: python },
    { name: "IoT & Sensors ", value: "90%", icon: iot },
    { name: "Embedded Systems ", value: "88%", icon: embedded },
    { name: "Industrial Instrumentation ", value: "92%", icon: instrumentation }
  ];

  return (
    <section id="skills" className="skills-section container mt-5">
      <div className="text-center">
        <h2 className="fw-bold mb-4" style={{ color: '#007bff' }} data-aos="fade-down">Skills</h2>
      </div>
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-md-10 mx-auto">

          <h4 className="fw-bold mb-3" data-aos="fade-down">Professional Skills</h4>
          <p data-aos="fade-left">
            I have a solid understanding of both theoretical concepts and practical applications across web and embedded technologies.
            My experience spans frontend development, IoT systems, and embedded systems aligned with real-world projects.
          </p>

          {skills.map((skill, idx) => (
            <div className="skill mb-3" key={idx} data-aos="fade-right">
              <div className="d-flex justify-content-between align-items-center">
                <span>
                  {skill.icon && <img src={skill.icon} alt={skill.name} className="icon me-2" />}
                  {skill.name}
                </span>
                <span>{skill.value}</span>
              </div>
              <div className="progress-bg">
                <div className="progress-fill" style={{ width: skill.value }}></div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;
