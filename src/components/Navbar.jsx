import '../styles/navbar.css';
import { useEffect } from 'react';

const Navbar = () => {
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute('data-theme');
    document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const nav = document.querySelector('.navbar');
    nav.classList.add('slide-in-down');
  }, []);

  return (
    <nav className="navbar">
      <h1 className="logo">Rishikeshwaran</h1>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#leadership">Leadership</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button onClick={toggleTheme} className="theme-toggle">🌓</button>
    </nav>
  );
};

export default Navbar;
