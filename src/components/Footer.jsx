import React from 'react';
import './Footer.css';
import { useText } from '../hooks/useText';

const Footer = () => {
  const t = useText;
  return (
    <footer className="slide footer">
      <div className="container footer-content">
        <div className="footer-left">
          <h3>{t('FOOTER_NAME')}</h3>
          <p className="footer-role">{t('FOOTER_ROLE')}</p>
        </div>
        
        <div className="footer-right">
          <div className="contact-info">
            <a href="mailto:soulty321@gmail.com">soulty321@gmail.com</a>
            <div className="social-links">              
              <a href="https://drive.google.com/file/d/1MFm1f84o-mzyDQAwBWjqkONlpHa122_N/view?usp=sharing" target="_blank" rel="noopener noreferrer">{t('FOOTER_RESUME')}</a>
            </div>
          </div>
          <p className="copyright">{t('FOOTER_COPYRIGHT')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
