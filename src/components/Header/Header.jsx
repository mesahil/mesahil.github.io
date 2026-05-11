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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkArr = [
    { to: "/", name: "Home" },
    { to: "/#about", name: "About" },
    { to: "/#service", name: "Services" },
    { to: "/#contactUs", name: "Contact Us" },
  ];

  return (
    <header className="header-container">
      <div className="header-content">
        <NavLink
          to="/"
          end
          className="logo-container cursor-pointer"
          onClick={() => {
            setMobileMenuOpen(false);
            scrollToTop();
          }}
        >
          <img
            src="/logo.png"
            alt="AccLaw Professionals Logo"
            className="logo-image"
          />
          <div className="logo-text">
            <h1 className="firm-name">AccLaw Professionals</h1>
            <p className="firm-tagline">PERFECTION THROUGH PROFESSIONALS</p>
          </div>
        </NavLink>

        {/* Desktop Links */}
        <nav className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          {linkArr?.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive, isPending }) =>
                `${isPending ? "nav-link pending" : "nav-link"} ${
                  isActive ? "active" : ""
                }`
              }
              onClick={() => {
                setMobileMenuOpen(false);
                if (link.to === "/") {
                  scrollToTop();
                }
              }}
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
