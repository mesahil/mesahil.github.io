// import { NavLink } from "react-router-dom";
// import "./header.css";
// const Header = () => {
//   const linkArr = [
//     {
//       to: "/",
//       name: "Home",
//     },
//     {
//       to: "#about",
//       name: "About",
//     },
//     {
//       to: "#service",
//       name: "Services",
//     },
//     {
//       to: "#footer",
//       name: "Contact Us",
//     },
//   ];
//   return (
//     <header className="header-container">
//       <div className="flex items-center justify-between p-4 bg-white">
//         <div className="flex items-center cursor-pointer">
//           <div className="relative mr-4">
//             <img
//               src="/logo.png"
//               alt="AccLaw Professionals Logo"
//               width={100}
//               height={100}
//               style={{
//                 objectFit: "contain",
//                 filter: "contrast(1.1) saturate(1.2)",
//               }}
//             />
//           </div>
//           <div className="flex flex-col">
//             <h1 className="text-2xl font-bold text-gray-800">
//               AccLaw Professionals
//             </h1>
//             <p className="text-sm font-medium text-pink-600">
//               PERFECTION THROUGH PROFESSIONALS
//             </p>
//           </div>
//         </div>
//         <div className="flex justify-between gap-10 pr-2 text-2xl">
//           {linkArr?.map((link, index) => (
//             <NavLink
//               key={index}
//               to={link.to}
//               className={({ isActive, isPending }) =>
//                 `${isPending ? "nav-link pending" : "nav-link"} ${
//                   isActive ? "active" : ""
//                 }`
//               }
//             >
//               {link.name}
//             </NavLink>
//           ))}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// ************************************************************************************************

import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkArr = [
    { to: "/", name: "Home" },
    { to: "#about", name: "About" },
    { to: "#service", name: "Services" },
    { to: "#footer", name: "Contact Us" },
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
