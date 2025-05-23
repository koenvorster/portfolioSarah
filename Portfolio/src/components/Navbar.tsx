import { FC, useState } from "react";
import { Link } from "react-router-dom";
import "@/main.css";


const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <nav className="nav">
        <div className="nav-container">
          {/* Logo */}
          <div className="logo">
            <Link to="/" className="nav-logo">
              <img
                src= "/assets/img/foto/logo/LogoSJ_white.png"
                alt="Logo"
                className="logo-image"
              />
            </Link>
          </div>

          {/* Hamburger Icon */}
            <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>

</button>
          {/* Navigation Links */}
          <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/projects" className="nav-link" onClick={closeMenu}>
              Projects
            </Link>
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              About
            </Link>
            <Link to="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </Link>
            <Link to="/BlogOverview" className="nav-link" onClick={closeMenu}>
              Blog
            </Link>
          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;