import '../styles/projects.css';

const Projects = () => {
  const papers = [
    {
      title: "📝 Paper: Low-Cost Roadside Air Purifier",
      place: "KEC, Erode",
      description:
        "🥈 Won 2nd Prize for presenting a paper on building a budget-friendly roadside air purification system integrated with a real-time pollution indicator."
    },
    {
      title: "📝 Paper: Nanobots to Nanocures",
      place: "Srishti’24, PSGCT, Coimbatore",
      description:
        "Presented a conceptual paper on futuristic nanomedicine applications, detailing the transition from micro-scale bots to advanced therapeutic nanocures."
    },
    {
      title: "📝 Paper: Plastic to Power",
      place: "IGNUZ’24, KPRIET, Coimbatore",
      description:
        "Demonstrated the potential of converting plastic waste to energy using pyrolysis, addressing sustainability and environmental benefits."
    },
    {
      title: "📝 Paper: Hydrovent",
      place: "VYNFEST’25, KPRIET, Coimbatore",
      description:
        "Introduced an innovative hydro-mechanical ventilation system aimed at enhancing indoor air quality in low-resource environments."
    }
  ];

  const projects = [
    {
      title: "💡 Project: Plastic to Power",
      place: "KEC Ideathon",
      description:
        "An innovative waste-to-energy project that converts non-recyclable plastic into usable fuel or electricity. Focused on solving plastic pollution and energy demand simultaneously using pyrolysis-based methods."
    },
    {
      title: "⚙️ Project: Automated Riser Removal",
      place: "SSN College of Engineering",
      description:
        "Designed a mechanical automation system for foundries to safely and efficiently remove metal risers from castings, reducing manual labor and improving production consistency."
    }
  ];

  return (
    <section id="projects" className="projects container mt-5 text-center">
      <h3 className="fw-bold mb-4" style={{ color: '#007bff' }} data-aos="fade-down">
        Papers Presented
      </h3>
      <div className="d-flex justify-content-center">
        <ul className="list-unstyled text-center" data-aos="fade-up">
          {papers.map((paper, idx) => (
            <li className="mb-4" key={idx}>
              <strong>{paper.title}</strong> - {paper.place}<br />
              <small className="text-muted">{paper.description}</small>
            </li>
          ))}
        </ul>
      </div>

      <h3 className="fw-bold mb-4 mt-5" style={{ color: '#007bff' }} data-aos="fade-down">
        Projects
      </h3>
      <div className="d-flex justify-content-center">
        <ul className="list-unstyled text-center" data-aos="fade-up">
          {projects.map((project, idx) => (
            <li className="mb-4" key={idx}>
              <strong>{project.title}</strong> - {project.place}<br />
              <small className="text-muted">{project.description}</small>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
