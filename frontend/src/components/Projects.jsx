import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'LMS Dashboard & Mobile App',
    description: 'A complete learning management system built for retail store staff. It includes training videos, assessments, progress tracking, and an admin dashboard to manage employee training efficiently. Designed with clean UI, mobile-first accessibility, and real-time insights for better training outcomes.'
  },
  {
    id: 2,
    title: 'Store Insights Tool',
    description: 'A cluster-wise reporting tool that gives a complete view of store performance in a single screen. Users can track store status, identify what\'s working, and quickly spot operational issues. Designed for clarity, speed, and effortless decision-making with insightful visual reports.'
  },
  {
    id: 3,
    title: 'Ecommerce Website + Renting',
    description: 'A modern ecommerce website and admin dashboard built for a lifestyle brand. It supports product sales and renting options with a clean, minimal, and highly user-friendly design. Created for easy navigation, smooth checkout, and brand consistency across all pages.'
  },
  {
    id: 4,
    title: 'Brand Website',
    description: 'A visually aligned brand website built using brand colors, identity, and SEO best practices. Designed to communicate the story, services, and value of the brand while maintaining speed, accessibility, and clean modern aesthetics.'
  },
  {
    id: 5,
    title: 'RootFin – Store-wise Finance Software',
    description: 'RootFin is a financial management solution that simplifies cash and bank tracking for every store. It provides real-time insights, accuracy, and automated daily reconciliation. Built to eliminate manual errors and give decision-makers clear visibility into their financial flows.'
  },
  {
    id: 6,
    title: 'Websites Delivered (3 Total)',
    description: 'We have created three fully responsive, high-performance websites for brands and a company—each crafted with custom UI, SEO optimization, modern layouts, and mobile-friendly design.'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-subtitle">
            Showcasing our best work and successful collaborations
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-number">0{project.id}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-footer">
                <span className="project-tag">Completed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

