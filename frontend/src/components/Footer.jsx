import './Footer.css';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">C</span>
              <span className="logo-text">Codepikto Studio</span>
            </div>
            <p className="footer-description">
              Building modern, user-focused digital experiences for brands and businesses.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Navigation</h4>
              <button className="footer-link" onClick={() => scrollToSection('home')}>
                Home
              </button>
              <button className="footer-link" onClick={() => scrollToSection('services')}>
                Services
              </button>
              <button className="footer-link" onClick={() => scrollToSection('projects')}>
                Projects
              </button>
              <button className="footer-link" onClick={() => scrollToSection('contact')}>
                Contact
              </button>
            </div>
            <div className="footer-column">
              <h4>Services</h4>
              <span className="footer-link">Web Development</span>
              <span className="footer-link">Mobile Apps</span>
              <span className="footer-link">Dashboards</span>
              <span className="footer-link">Automation Tools</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Codepikto Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

