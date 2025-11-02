import ShowCards from "../cardSection/Card";
import "./about.css";

const values = [
  {
    title: "Integrity",
    description: "Upholding the highest ethical standards and maintaining confidentiality in all our professional dealings.",
    icon: "🛡️",
  },
  {
    title: "Excellence",
    description: "Delivering superior quality services through continuous improvement and professional expertise.",
    icon: "⭐",
  },
  {
    title: "Client-Focused",
    description:
      "Prioritizing client needs with personalized solutions aligned to business objectives.",
    icon: "👥",
  },
  {
    title: "Compliance",
    description:
      "Ensuring 100% regulatory compliance and adherence to all statutory requirements.",
    icon: "✓",
  },
];

const About = () => {
  return (
    <div className="about" id="about">
      <section className="about-intro">
        <h1>About Acclaw Professionals</h1>
        <div className="about-subtitle">
          Your Trusted Partner for Financial, Taxation & Secretarial Excellence
        </div>
        <div className="about-content-grid">
          <div className="about-main-text">
            <p>
              <strong>Acclaw Professionals LLP</strong> is a leading financial services
              firm dedicated to providing comprehensive accounting, taxation, audit,
              and company secretarial services. With our motto <em>"Perfection through
              Professionals,"</em> we deliver end-to-end solutions that help startups
              and established businesses navigate complex regulatory landscapes with confidence.
            </p>
            <p>
              Our expertise spans GST compliance, TDS management, accounting services,
              internal audit, internal control evaluation, and statutory filings. We combine
              deep industry knowledge with innovative approaches to deliver personalized
              solutions aligned with your business strategies and objectives.
            </p>
          </div>
          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Our Mission</h3>
              <p>
                To empower businesses through professional excellence, ensuring
                complete compliance and financial soundness.
              </p>
            </div>
            <div className="highlight-card">
              <h3>Our Approach</h3>
              <p>
                Client-focused, efficient, and transparent services backed by
                experienced professionals and cutting-edge practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="leadership-section">
        <h2>Meet Our Leadership</h2>
        <p className="leadership-intro">
          Driven by expertise, guided by experience
        </p>
        <div className="leadership-card">
          <div className="leader-image-placeholder">
            <span className="leader-initials">R</span>
          </div>
          <div className="leader-content">
            <h3 className="leader-name">Rahul</h3>
            <p className="leader-title">Co-Founder & Principal Consultant</p>
            <div className="leader-credentials">
              <span className="credential-badge">B.Com</span>
              <span className="credential-badge">CA Inter</span>
              <span className="credential-badge">MBA</span>
              <span className="credential-badge">10+ Years Experience</span>
            </div>
            <p className="leader-bio">
              With over 10 years of experience, Rahul specializes in GST, TDS, accounting,
              books finalisation, internal audit, statutory audit, ICFR testing, and pre-audit
              services. He delivers proactive compliance, risk management, and advisory solutions
              to clients across diverse sectors, ensuring robust financial controls and transparent
              audit processes.
            </p>
            <p className="leader-bio">
              His strong academic background, combined with hands-on expertise, supports businesses
              in achieving tax efficiency, regulatory compliance, and sustainable growth.
            </p>
            <div className="leader-expertise">
              <h4>Core Expertise</h4>
              <div className="expertise-tags">
                <span className="expertise-tag">GST Compliance</span>
                <span className="expertise-tag">TDS Management</span>
                <span className="expertise-tag">Accounting & Books Finalisation</span>
                <span className="expertise-tag">Internal Audit</span>
                <span className="expertise-tag">Statutory Audit</span>
                <span className="expertise-tag">ICFR Testing</span>
                <span className="expertise-tag">Pre-Audit Services</span>
                <span className="expertise-tag">Risk Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <h2>Our Core Values</h2>
        <p className="values-intro">
          Guided by principles that drive every decision and action we take
        </p>
        <ShowCards dataArray={values} />
      </section>
    </div>
  );
};

export default About;
