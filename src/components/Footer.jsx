import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-black text-white pt-5 pb-3">
      <div className="container text-center">
        <h2 className="fw-bold mb-3" data-aos="fade-up">Thank You For Visiting My Portfolio</h2>
        <p className="mb-4" data-aos="fade-up">I appreciate your time. Feel free to reach out to me for any collaboration or queries.</p>

        <h5 className="text-uppercase mb-3" data-aos="fade-up">For More Details</h5>
        <ul className="list-unstyled" data-aos="fade-up">
          <li className="mb-2">
            <i className="bi bi-telephone-fill me-2"></i>
            <span>+91 9715708810</span>
          </li>
          <li>
            <i className="bi bi-envelope-fill me-2"></i>
            <span>rishikeshwaranmsr3106@gmail.com</span>
          </li>
        </ul>

        <hr className="border-top border-secondary my-4" style={{ opacity: 0.3 }} />
        <p className="small">&copy;2025 - Rishikeshwaran <br />
        All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;