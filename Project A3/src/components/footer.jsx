import React from 'react';
import { FaInstagram, FaPinterest } from 'react-icons/fa';
import '../styles/footer.css'; 

function Footer() {
  return (
    <footer>
      <div className="social-links">
        
        {/* Instagram */}
        <a 
          href="https://www.instagram.com/huesbymomina/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram"
        >
          <FaInstagram /> 
        </a>

        {/* Pinterest */}
        <a 
          href="https://pinterest.com/HuesByMomina" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Pinterest"
        >
          <FaPinterest /> 
        </a>
      </div>
      <p>&copy; 2025 Hues by Momina. All rights reserved.</p>
    </footer>
  );
}

export default Footer;