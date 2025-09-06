import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>"ПРАВОВЕД"</h1>
            <span>ЮРИДИЧЕСКОЕ СООБЩЕСТВО</span>
          </Link>
        </div>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <ul className="nav-list">
            <li>
              <Link to="/services" onClick={() => setIsMenuOpen(false)}>
                Услуги
              </Link>
            </li>
            <li>
              <Link to="/reviews" onClick={() => setIsMenuOpen(false)}>
                Отзывы
              </Link>
            </li>
            {/* <li><Link to="/team" onClick={() => setIsMenuOpen(false)}>Сотрудники</Link></li> */}
            <li>
              <Link to="/contacts" onClick={() => setIsMenuOpen(false)}>
                Контакты
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-contact">
          <a href="tel:+79275423546" className="phone">
            +7 (927) 542-35-46
          </a>
        </div>

        <button
          className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
