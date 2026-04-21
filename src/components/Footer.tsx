import React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Namoli</div>
            <p className="footer-tagline">We are a community of cleaning experts who want you to experience the satisfaction of a great clean, without having to lift a finger.</p>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <a href="https://www.namoli.com.au/medical-cleaning-services/">Medical Cleaning</a>
            <a href="https://www.namoli.com.au/office-cleaning/">Office Cleaning</a>
            <a href="https://www.namoli.com.au/school-childcare-cleaning-services/">School &amp; Childcare</a>
            <a href="https://www.namoli.com.au/warehouse-cleaning-services/">Industrial Cleaning</a>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <a href="https://www.namoli.com.au/about-us/">Our Approach</a>
            <a href="https://www.namoli.com.au/our-standards/">Our Standards</a>
            <a href="https://www.namoli.com.au/franchise-opportunities/">Franchise</a>
            <a href="https://www.namoli.com.au/blog/">Care Blog</a>
          </div>
          <div className="footer-col">
            <h5>Get In Touch</h5>
            <a href="tel:1300626654">1300 626 654</a>
            <a href="mailto:info@namoli.com.au">info@namoli.com.au</a>
            <a href="https://www.namoli.com.au/commercial-cleaning-brisbane/">Brisbane</a>
            <a href="https://www.namoli.com.au/commercial-cleaning-melbourne/">Melbourne</a>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {currentYear} Namoli Commercial. All rights reserved. | <a href="https://www.namoli.com.au/privacy-policy/">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
