import './Hero.css';
import CodeImage from '../assets/Code.jpg';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            We build modern, user-focused digital experiences for brands and businesses.
          </h1>
          <p className="hero-subtext">
            A creative freelancing team crafting websites, dashboards, mobile apps, and automation tools.
          </p>
          <div className="hero-cta">
            <button 
              className="btn btn-primary" 
              onClick={() => scrollToSection('projects')}
            >
              View Our Work
            </button>
            <button 
              className="btn btn-secondary" 
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <img src={CodeImage} alt="Codepikto Studio" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

