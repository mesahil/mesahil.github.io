import ShowCards from "../cardSection/Card";
import "./services.css";

const services = [
  {
    title: "Corporate Law",
    description:
      "Expert legal services for businesses including mergers, acquisitions, and corporate governance.",
    icon: "🏢",
  },
  {
    title: "Family Law",
    description:
      "Compassionate legal support in family matters such as divorce, child custody, and property settlements.",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    title: "Criminal Defense",
    description:
      "Strong defense strategies to protect your rights and achieve favorable outcomes in criminal cases.",
    icon: "⚖️",
  },
  {
    title: "Personal Injury",
    description:
      "Dedicated representation for personal injury claims to help you receive fair compensation for your losses.",
    icon: "🚑",
  },
];

const Services = () => {
  return (
    <div className="services" id="service">
      <section className="services-intro">
        <h1>Our Services</h1>
        <p>
          At <strong>[Law Firm Name]</strong>, we offer a wide range of legal
          services tailored to meet your needs. Our experienced team is
          committed to providing exceptional service and achieving the best
          possible outcomes for our clients.
        </p>
      </section>

      <ShowCards dataArray={services} />
    </div>
  );
};

export default Services;
