import ShowCards from "../cardSection/Card";
import "./services.css";

const services = [
  {
    title: "GST Services",
    description:
      "Comprehensive GST registration, filing, compliance, and advisory services. We ensure accurate GST returns and help you navigate complex GST regulations with ease.",
    icon: "📋",
  },
  {
    title: "TDS Compliance",
    description:
      "Expert TDS computation, deduction, payment, and return filing services. Stay compliant with TDS regulations and avoid penalties with our professional guidance.",
    icon: "💰",
  },
  {
    title: "Accounting Services",
    description:
      "Complete bookkeeping, financial statement preparation, and accounting solutions. We maintain accurate records and provide insights for better financial decision-making.",
    icon: "📊",
  },
  {
    title: "Internal Control Pre-Audit",
    description:
      "Thorough evaluation of your internal controls and processes before audits. We identify weaknesses and recommend improvements to strengthen your control environment.",
    icon: "🔍",
  },
  {
    title: "Internal Audit",
    description:
      "Independent and objective internal audit services to assess operations, identify risks, and improve governance. We provide actionable recommendations for operational excellence.",
    icon: "✓",
  },
  {
    title: "Company Secretarial",
    description:
      "Professional company registration, statutory compliance, ROC filings, and corporate governance services to keep your business legally compliant.",
    icon: "📁",
  },
];

const Services = () => {
  return (
    <div className="services" id="service">
      <section className="services-intro">
        <h1>Our Services</h1>
        <p>
          At <strong>Acclaw Professionals LLP</strong>, we offer comprehensive
          financial, taxation, and secretarial services tailored to meet your
          business needs. Our experienced team is committed to delivering
          perfection through professionals.
        </p>
      </section>

      <ShowCards dataArray={services} />
    </div>
  );
};

export default Services;
