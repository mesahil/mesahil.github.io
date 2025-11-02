import "./hero.css";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            Professional Financial & Secretarial Services
          </div>
          <h1 className="hero-title">
            Expert Solutions for Your
            <span className="hero-title-highlight"> Business Growth</span>
          </h1>
          <p className="hero-description">
            Acclaw Professionals LLP provides comprehensive accounting, taxation,
            GST, TDS, internal audit, and secretarial services. We deliver
            perfection through professionals, ensuring your business remains
            compliant and financially sound.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Clients Served</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Compliance Rate</div>
            </div>
          </div>
          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => scrollToSection("#contactUs")}
            >
              Get Started
            </button>
            <button
              className="btn-secondary"
              onClick={() => scrollToSection("#service")}
            >
              Our Services
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop"
              alt="Professional business team"
              className="hero-main-image"
            />
            <div className="hero-image-overlay">
              <div className="overlay-badge">
                <span className="badge-icon">✓</span>
                <span className="badge-text">Trusted by 500+ Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
