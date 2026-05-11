import ShowCards from "../cardSection/Card";
import "./services.css";

const services = [
  {
    title: "Company Incorporation & Registration",
    description:
      "Comprehensive incorporation services for Indian entities including Private Limited Company, Public Limited Company, One Person Company, Limited Liability Partnership, Partnership Firm, and Proprietorship. For foreign investors, we handle FDI compliances including Company Registration with FDI, Branch Office, Project Office, and Liaison Office setup.",
    icon: "🏢",
    subServices: [
      "Private Limited Company",
      "Public Limited Company",
      "One Person Company",
      "Limited Liability Partnership",
      "Partnership Firm",
      "Proprietorship",
      "FDI Company Registration",
      "Branch/Project/Liaison Office"
    ]
  },
  {
    title: "Business Registrations & Licenses",
    description:
      "End-to-end support for various business registrations and licensing requirements to ensure your operations are fully compliant and authorized.",
    icon: "📜",
    subServices: [
      "Startup India Registration",
      "MSME Registration",
      "Shops & Establishment Registration",
      "Professional Tax Registration",
      "Import Export Code",
      "FSSAI Registration",
      "ISO Registration",
      "ESIC Registration",
      "Provident Fund Registration"
    ]
  },
  {
    title: "MCA ROC Compliance",
    description:
      "Complete Ministry of Corporate Affairs and Registrar of Companies compliance services ensuring your company meets all statutory requirements and filings.",
    icon: "⚖️",
    subServices: [
      "Pre & Post Secretarial Compliances",
      "Secretarial Audit of all Companies",
      "Strike off of Companies",
      "Conversion of Public Company into Private Company",
      "Conversion of Public/Private Company into LLP",
      "Conversion of LLP into Company",
      "Updating of Secretarial Records as per Companies Act",
      "Certification of Forms & Returns",
      "Condonation of Delay and Compounding with NCLT and RD",
      "Change of Registered office from one State to another",
      "Stamping of Share Certificates",
      "Annual Filing",
      "XBRL Filing",
      "Other relevant Compliances"
    ]
  },
  {
    title: "Government Liaison Services",
    description:
      "Professional liasoning services to facilitate smooth approvals and interactions with various government departments and regulatory authorities.",
    icon: "🤝",
    subServices: [
      "Registrar of Companies (ROC)",
      "National Company Law Tribunal (NCLT)",
      "Regional Directors (RD)",
      "Reserve Bank of India (RBI)",
      "Securities & Exchange Board of India (SEBI)",
      "Income Tax Department",
      "GST Department",
      "Excise Department"
    ]
  },
  {
    title: "Corporate Compliance & Advisory",
    description:
      "Strategic corporate compliance and advisory services covering secretarial audits, due diligence, insolvency matters, mergers, and corporate restructuring.",
    icon: "📋",
    subServices: [
      "Secretarial Audit",
      "Due Diligence Report",
      "Quarterly and Monthly Reports",
      "Insolvency and Bankruptcy Code (IBC)",
      "Merger & Amalgamation",
      "Dissolution of Companies",
      "Disqualification of Directors",
      "Winding up of Companies",
      "Restructuring of Capital",
      "Demerger"
    ]
  },
  {
    title: "GST & Tax Services",
    description:
      "Comprehensive GST and income tax services covering registration, compliance, returns, refunds, and dispute resolution to keep you tax-compliant and efficient.",
    icon: "💰",
    subServices: [
      "Accounting & Book Keeping",
      "GST Registration",
      "GST Returns & Compliances",
      "GST Invoice & E-Way Bill",
      "GST Audit",
      "GST Refunds",
      "Income tax Return Filing (ITR)",
      "Advance Payment of Income Tax",
      "Tax Deduction at Source",
      "Tax Collection at Source",
      "Assessments/Appeals",
      "Income Tax Refund"
    ]
  },
  {
    title: "Intellectual Property Services",
    description:
      "Protection and management of your intellectual property assets including trademarks, designs, copyrights, and patents to safeguard your innovations and brand identity.",
    icon: "©️",
    subServices: [
      "Trademark Registration & Protection",
      "Design Registration",
      "Copyright Protection",
      "Patent Filing & Prosecution",
      "IP Due Diligence",
      "License Agreements",
      "IP Enforcement & Litigation Support"
    ]
  },
  {
    title: "Other Entity Registrations",
    description:
      "Specialized registration services for trusts, societies, and other special entities under various regulatory frameworks.",
    icon: "📁",
    subServices: [
      "Trust Registration",
      "Society Registration",
      "Section 8 Company",
      "Nidhi Company",
      "Producer Company"
    ]
  }
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
