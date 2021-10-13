import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from '../assets/images/logo-dark.png';
import './Navbar.css';
function Navbar() {
  const [menuClick, setMenuClick] = useState(false);
  const [langClick, setLangClick] = useState(false);
  
  const handleMenuClick = () => {
    setMenuClick(!menuClick);
    setLangClick(false);
  }

  const handleLangClick = () => {
    setLangClick(!langClick);
    setMenuClick(false);
  }
  
  const closeMenuClick = () => {
    setMenuClick(false);  
    setLangClick(false);
  };

  const closeLangClick = () => {
    setLangClick(false);
    setMenuClick(false);
  };
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenuClick}>
            <img className="logo-image" src={logo} alt="Logo" width="192" />
          </Link>
          <div className="menu-icon">
            <div className="menu-lang-icon" onClick={handleLangClick}>
              <i className="fas fa-globe"></i>
            </div>
            <div className="menu-nav-icon" onClick={handleMenuClick}>
              <i className={menuClick ? "fas fa-times" : "fas fa-bars"} />
            </div>
          </div>
          <div className="menu-container light-theme">
            <div className="menu-nav-container">
              <ul className={menuClick ? "nav-menu active" : "nav-menu"}>
                <li className="nav-menu-item active">
                  <AnchorLink href="/" offset='120' className="nav-menu-links" onClick={closeMenuClick}>
                    HOME
                  </AnchorLink>
                </li>
                <li className="nav-menu-item">
                  <AnchorLink href="#services" offset='120' className="nav-menu-links"  onClick={closeMenuClick}>
                    SERVICES
                  </AnchorLink>
                </li>
                <li className="nav-menu-item">
                  <AnchorLink href="#news" offset='120' className="nav-menu-links" onClick={closeMenuClick}>
                    NEWS
                  </AnchorLink>
                  
                </li>
                <li className="nav-menu-item">
                  <AnchorLink href="#contacts" offset='120' className="nav-menu-links" onClick={closeMenuClick}>
                    CONTACTS
                  </AnchorLink>
                </li>
              </ul>
            </div>
            <div className="menu-lang-container">
              <ul className={langClick ? "lang-menu active":"lang-menu"}>
                <li className="lang-menu-item active">
                  <span className="lang-menu-links" onClick={closeLangClick}>EN</span>
                </li>
                <li className="lang-menu-item">
                  <span className="lang-menu-links" onClick={closeLangClick}>DE</span>
                </li>
                <li className="lang-menu-item">
                  <span className="lang-menu-links" onClick={closeLangClick}>AR</span>
                </li>
                <li className="lang-menu-item">
                  <span className="lang-menu-links" onClick={closeLangClick}>RU</span>
                </li>
              </ul>
            </div>
          </div> 
        </div>
      </nav>
    </>
  )
}

export default Navbar