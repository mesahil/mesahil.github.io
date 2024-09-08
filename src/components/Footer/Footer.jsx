import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>
            <strong>ACCLAW PROFESSIONALS LLP</strong>
            <br />
            F-2141, 12th Avenue Gaur City-II
            <br />
            Greater Noida 201318
            <br />
            <a href="tel:+919716661654">+91 9716661654</a>
            <br />
            <a href="tel:+919582534575">+91 9582534575</a>
            <br />
            <a href="mailto:acclawprofessionals@gmail.com">
              acclawprofessionals@gmail.com
            </a>
          </p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon facebook"
            >
              Facebook
            </a>
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
        <div className="footer-section legal">
          <h3>Legal</h3>
          <a href="/">Privacy Policy</a>
          <br />
          <a href="/">Terms of Service</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 AccLaw Professionals LLP - All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
