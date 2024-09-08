import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const linkArr = [
    { to: "/", name: "Home" },
    { to: "/#about", name: "About" },
    { to: "/#service", name: "Services" },
    { to: "/#contactUs", name: "Contact Us" },
  ];

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-container">
          <img
            src="/logo.png"
            alt="AccLaw Professionals Logo"
            width={100}
            height={100}
            style={{
              objectFit: "contain",
              filter: "contrast(1.1) saturate(1.2)",
            }}
          />
          <div className="logo-text">
            <h1 className="firm-name">AccLaw Professionals</h1>
            <p className="firm-tagline">PERFECTION THROUGH PROFESSIONALS</p>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          {linkArr?.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              className={({ isActive, isPending }) =>
                `${isPending ? "nav-link pending" : "nav-link"} ${
                  isActive ? "active" : ""
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div
          className="mobile-menu-icon"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={isMobileMenuOpen ? "icon open" : "icon"}></span>
          <span className={isMobileMenuOpen ? "icon open" : "icon"}></span>
          <span className={isMobileMenuOpen ? "icon open" : "icon"}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
