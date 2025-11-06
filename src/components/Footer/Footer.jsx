import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact">
          <h3>Acclaw Professionals LLP</h3>
          <p>
            Your trusted partner for comprehensive financial, taxation, and
            secretarial services. Delivering perfection through professionals.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="social">
            <a href="/#about">About Us</a>
            <a href="/#service">Our Services</a>
            <a href="/#contactUs">Contact</a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon twitter"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon linkedin"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Acclaw Professionals LLP - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
