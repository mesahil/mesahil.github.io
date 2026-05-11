import { useState } from "react";
import "./contact.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqvaovp";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({
    type: null,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (formStatus.type) {
      setFormStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormStatus({ type: null, message: "" });

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "",
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setFormStatus({
          type: "success",
          message:
            "Thank you for contacting us! We will get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        const errMsg =
          data?.errors?.map((err) => err.message).join(" ") ||
          data?.error ||
          "Something went wrong. Please try again.";
        setFormStatus({ type: "error", message: errMsg });
      }
    } catch {
      setFormStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setSubmitting(false);
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
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
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
                  rows="5"
                  className="form-input form-textarea"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary submit-btn"
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Send Message"}
              </button>
              {formStatus.type && (
                <p
                  className={`contact-form-status ${formStatus.type}`}
                  role="status"
                >
                  {formStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
