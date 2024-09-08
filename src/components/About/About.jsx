import "./about.css";

const About = () => {
  return (
    <div className="about" id="about">
      <section className="about-intro">
        <h1>About Us</h1>
        <p>
          At <strong>[Law Firm Name]</strong>, we are committed to providing
          exceptional legal services with the highest level of professionalism
          and integrity. Our experienced team is dedicated to achieving the best
          outcomes for our clients, navigating complex legal matters with
          expertise and care.
        </p>
      </section>

      <section className="about-history">
        <h2>Our History</h2>
        <p>
          Established in [Year], <strong>[Law Firm Name]</strong> has been at
          the forefront of legal excellence in the region. Over the years, we
          have built a reputation for delivering outstanding legal solutions and
          building lasting relationships with our clients.
        </p>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/path-to-image1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Senior Partner</p>
            <p>
              John is renowned for his expertise in corporate law and his
              successful track record in handling complex cases.
            </p>
          </div>
          <div className="team-member">
            <img src="/path-to-image2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Associate Attorney</p>
            <p>
              Jane specializes in family law with a compassionate approach and
              dedication to client advocacy.
            </p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <div className="values-list">
          <div className="value-item">
            <span className="icon">&#x1F4C8;</span>
            <h3>Integrity</h3>
            <p>Upholding the highest ethical standards in all our dealings.</p>
          </div>
          <div className="value-item">
            <span className="icon">&#x1F4AA;</span>
            <h3>Excellence</h3>
            <p>Striving for excellence in every case we handle.</p>
          </div>
          <div className="value-item">
            <span className="icon">&#x1F4C5;</span>
            <h3>Client-Centered</h3>
            <p>Prioritizing our clients' needs and interests above all else.</p>
          </div>
          <div className="value-item">
            <span className="icon">&#x1F4B0;</span>
            <h3>Commitment</h3>
            <p>
              Dedicated to achieving the best possible outcomes for our clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
