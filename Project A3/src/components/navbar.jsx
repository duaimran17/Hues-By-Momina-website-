import React from 'react';
import { Link } from "react-router-dom";
import { FaInstagram, FaPinterest, FaWhatsapp, FaUser } from 'react-icons/fa';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid px-4 navbar-content"> 
        
        <div className="social-links-nav d-none d-lg-flex"> 
            <a href="https://www.instagram.com/huesbymomina/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://pinterest.com/HuesByMomina" target="_blank" rel="noopener noreferrer" aria-label="Pinterest"><FaPinterest /></a>
            <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>

        <Link className="navbar-brand mx-auto" to="/">
          <img src="/images/logo.jpeg" alt="Logo" /> Hues by Momina
        </Link>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center"> 
            
            <li className="nav-item"><Link className="nav-link nav-item-underline" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link nav-item-underline" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link nav-item-underline" to="/products">Products</Link></li>
            
            <li className="nav-item nav-icon-item">
                <Link className="nav-link" to="/login" title="Login / Account">
                    <FaUser className="nav-icon" /> 
                </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;