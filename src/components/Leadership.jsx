import '../styles/leadership.css';

const Leadership = () => {
  return (
    <section id="leadership" className="leadership container mt-5 text-center">
      <h3 className="fw-bold mb-4" style={{ color: '#007bff' }} data-aos="fade-down">
        Leadership & Events
      </h3>
      <div className="d-flex justify-content-center">
        <ul className="list-unstyled text-center" data-aos="fade-up">
          <li className="mb-3">🎓 Class Representative, 2023–2024</li>
          <li className="mb-3">🧠 Board Member, EIE Association DYCON (2024–2025)</li>
          <li className="mb-3">📅 Events Organized: Eareyes 2k24 at KEC</li>
          <li className="mb-3">🤝 Rotract Club Member, KEC (2024–2025)</li>
          <li className="mb-3">📅 Events Organized: Sensonics 2k24 at KEC</li>
          
        </ul>
      </div>
    </section>
  );
};

export default Leadership;
