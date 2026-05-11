import { useState } from "react";
import "./contact.css";

const FORMSPREE_FORM_ID =
  process.env.REACT_APP_FORMSPREE_FORM_ID?.trim() || "xaqvaovp";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitStatus !== "idle") setSubmitStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!FORMSPREE_FORM_ID) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch(
        `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            _replyto: formData.email,
            _subject: formData.subject,
            phone: formData.phone || "(not provided)",
            subject: formData.subject,
            message: formData.message,
          }),
        }
      );

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        if (process.env.NODE_ENV === "development" && data?.errors) {
          // eslint-disable-next-line no-console
          console.error("Formspree:", data.errors);
        }
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contactUs">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>
            Have questions or need professional assistance? Reach out to us and
            we'll be happy to help.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h3>Address</h3>
                <p>
                C-52 Mayfield garden, 
                  <br />
                  Gurgaon-122018
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-text">
                <h3>Phone</h3>
                <p>
                  <a href="tel:+919716661654">+91 9716661654</a>
                  <br />
                  <a href="tel:+918826133233">+91 8826133233</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-text">
                <h3>Email</h3>
                <p>
                  <a href="mailto:info@acclawprofessionals.com">
                  info@acclawprofessionals.com
                  </a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div className="info-text">
                <h3>Business Hours</h3>
                <p>
                  Monday - Saturday: 10:00 AM - 6:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Send Us a Message</h2>
            {!FORMSPREE_FORM_ID ? (
              <p className="form-config-notice">
                This form is not configured yet. Please use the phone number or
                email on the left to reach us.
              </p>
            ) : null}
            {submitStatus === "success" ? (
              <p className="form-message form-message--success" role="status">
                Thank you for your message. We will get back to you soon.
              </p>
            ) : null}
            {submitStatus === "error" ? (
              <p className="form-message form-message--error" role="alert">
                Something went wrong. Please try again or contact us by phone or
                email.
              </p>
            ) : null}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={!FORMSPREE_FORM_ID || isSubmitting}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={!FORMSPREE_FORM_ID || isSubmitting}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={!FORMSPREE_FORM_ID || isSubmitting}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={!FORMSPREE_FORM_ID || isSubmitting}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={!FORMSPREE_FORM_ID || isSubmitting}
                  className="form-input form-textarea"
                />
              </div>

              <button
                type="submit"
                className="btn-primary submit-btn"
                disabled={!FORMSPREE_FORM_ID || isSubmitting}
              >
                {isSubmitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
