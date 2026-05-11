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

const leadershipMembers = [
  {
    name: "Rohit",
    title: "Corporate Governance Professional",
    initials: "R",
    credentials: ["Registered Trade Mark Agent", "8+ Years Experience"],
    bio: [
      "Rohit is a corporate governance professional with 8+ years of specialised experience in corporate laws, regulatory compliance, and strategic business advisory. He is also a Registered Trade Mark Agent, representing clients in Trademark & Design registrations, prosecution, and enforcement.",
      "With deep exposure to cross-border structuring, brand protection and intellectual property management, he partners with businesses to secure their legal foundation, safeguard intangible assets, and support their expansion journey.",
      "Recognised for his ethical approach, transparency and value-focused advisory, Rohit is committed to strengthening corporate governance systems, enhancing stakeholder trust, and guiding organisations in building sustainable, compliant, and future-ready business frameworks."
    ],
    expertise: [
      "Corporate Law & Secretarial Compliance",
      "SEBI & Listing Regulations",
      "Capital Market Compliances",
      "Secretarial Audit & Due Diligence",
      "Industrial Design registration",
      "FEMA advisory & RBI filings",
      "Trademark filings & brand protection",
      "Corporate structuring & LLP advisory"
    ]
  },
  {
    name: "Rahul",
    title: "Co-Founder & Principal Consultant",
    initials: "R",
    credentials: ["B.Com", "CA Inter", "MBA", "10+ Years Experience"],
    bio: [
      "With over 10 years of experience, Rahul specializes in GST, TDS, accounting, books finalisation, internal audit, statutory audit, ICFR testing, and pre-audit services. He delivers proactive compliance, risk management, and advisory solutions to clients across diverse sectors, ensuring robust financial controls and transparent audit processes.",
      "His strong academic background, combined with hands-on expertise, supports businesses in achieving tax efficiency, regulatory compliance, and sustainable growth."
    ],
    expertise: [
      "GST Compliance",
      "TDS Management",
      "Accounting & Books Finalisation",
      "Internal Audit",
      "Statutory Audit",
      "ICFR Testing",
      "Pre-Audit Services",
      "Risk Management"
    ]
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
        {leadershipMembers.map((member, index) => (
          <div className="leadership-card" key={index}>
            <div className="leader-image-placeholder">
              <span className="leader-initials">{member.initials}</span>
            </div>
            <div className="leader-content">
              <h3 className="leader-name">{member.name}</h3>
              <p className="leader-title">{member.title}</p>
              <div className="leader-credentials">
                {member.credentials.map((credential, credIndex) => (
                  <span className="credential-badge" key={credIndex}>{credential}</span>
                ))}
              </div>
              {member.bio.map((paragraph, bioIndex) => (
                <p className="leader-bio" key={bioIndex}>
                  {paragraph}
                </p>
              ))}
              <div className="leader-expertise">
                <h4>Core Expertise</h4>
                <div className="expertise-tags">
                  {member.expertise.map((skill, skillIndex) => (
                    <span className="expertise-tag" key={skillIndex}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
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
