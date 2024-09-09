import ShowCards from "../cardSection/Card";
import "./about.css";

const values = [
  {
    title: "Integrity",
    description: "Upholding the highest ethical standards in all our dealings.",
    icon: "📈",
  },
  {
    title: "Excellence",
    description: "Striving for excellence in every case we handle.",
    icon: "💪",
  },
  {
    title: "Client-Centered",
    description:
      "Prioritizing our clients' needs and interests above all else.",
    icon: "👥",
  },
  {
    title: "Commitment",
    description:
      "Dedicated to achieving the best possible outcomes for our clients.",
    icon: "💼",
  },
];

const About = () => {
  return (
    <div className="about" id="about">
      <section className="about-intro">
        <h1>About Us</h1>
        <h2>
          Welcome to our all-in-one platform, meticulously designed to simplify
          and manage legal, secretarial, taxation, and other critical business
          functions.
        </h2>
        <p>
          We are experts in Company Registration, GST, Income Tax Returns (ITR),
          Trademark Services, Accounting, and an extensive range of legal and
          taxation solutions, ensuring that your business remains fully
          compliant with all regulatory requirements. Our motto, "Perfection
          through Professionals," underscores our commitment to helping startups
          and established businesses navigate the complexities of running their
          operations while adhering to legal frameworks. We provide end-to-end
          solutions for all your business needs, be it legal compliance,
          secretarial services, taxation, or accounting. At the core of our
          services is a dedication to delivering highly efficient, personalized
          solutions, leveraging our deep industry knowledge and expertise. We
          create innovative, customized offerings that align with your business
          strategies and objectives. Our team holds integrity and
          confidentiality in the highest regard, ensuring a professional and
          trustworthy partnership for every client and project.
        </p>
      </section>

      {/* <section className="about-history">
        <h2>Our History</h2>
        <p>
          Established in [Year], <strong>[Law Firm Name]</strong> has been at
          the forefront of legal excellence in the region. Over the years, we
          have built a reputation for delivering outstanding legal solutions and
          building lasting relationships with our clients.
        </p>
      </section> */}

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member flex items-center flex-col">
            <img src="/path-to-image1.jpg" alt="Team Member 1" />
            <h3>John Doe</h3>
            <p>Senior Partner</p>
            <p>
              John is renowned for his expertise in corporate law and his
              successful track record in handling complex cases.
            </p>
          </div>
          <div className="team-member flex items-center flex-col">
            <img src="/path-to-image2.jpg" alt="Team Member 2" />
            <h3>Jane Smith</h3>
            <p>Associate Attorney</p>
            <p>
              Jane specializes in family law with a compassionate approach and
              dedication to client advocacy.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ShowCards dataArray={values} />
      </section>
    </div>
  );
};

export default About;
