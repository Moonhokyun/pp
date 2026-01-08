import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="slide footer">
      <div className="container footer-content">
        <div className="footer-left">
          <h3>Moon Ho-gyun</h3>
          <p className="footer-role">Product Designer</p>
        </div>
        
        <div className="footer-right">
          <div className="contact-info">
            <a href="mailto:soulty321@gmail.com">soulty321@gmail.com</a>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Notion Resume</a>
            </div>
          </div>
          <p className="copyright">© 2026 Moon Ho-gyun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
