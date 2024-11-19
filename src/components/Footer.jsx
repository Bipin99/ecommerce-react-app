
import React from "react";
import "../styles/Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li><a href="/about" className="footer-link">About Us</a></li>
            <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
            <li><a href="/terms" className="footer-link">Terms of Service</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
          </ul>
        </div>
        <div className="social-media">
          <a href="https://facebook.com" className="social-icon"><i className="fab fa-facebook"></i></a>
          <a href="https://twitter.com" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com" className="social-icon"><i className="fab fa-instagram"></i></a>
          <a href="https://linkedin.com" className="social-icon"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
      <div className="footer-partners">
        <h3>Our Partners</h3>
        <div className="partner-logos">
          <img src="https://via.placeholder.com/120x50?text=Company+1" alt="Partner 1" />
          <img src="https://via.placeholder.com/120x50?text=Company+2" alt="Partner 2" />
          <img src="https://via.placeholder.com/120x50?text=Company+3" alt="Partner 3" />
          <img src="https://via.placeholder.com/120x50?text=Company+4" alt="Partner 4" />
        </div>
      </div>
      <div className="footer-testimonials">
        <h3>What Our Clients Say</h3>
        <div className="testimonial">
          <p>"This platform has revolutionized our business! Highly recommended!"</p>
          <span>- John Doe, CEO of XYZ Corp</span>
        </div>
        <div className="testimonial">
          <p>"Incredible service and seamless integration. We're very happy with it!"</p>
          <span>- Sarah Lee, Product Manager at ABC Ltd.</span>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
        <button className="back-to-top" onClick={() => window.scrollTo(0, 0)}>Back to Top</button>
      </div>
    </footer>
  );
};

export default Footer;
