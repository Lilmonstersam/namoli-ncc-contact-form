import React from 'react'

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      {/* Trust Badges */}
      <div className="sidebar-card">
        <h4>Industry Certified</h4>
        <div className="trust-badges-sidebar">
          <div className="trust-badge-item">
            <img src="https://www.namoli.com.au/wp-content/uploads/2022/06/issa-member-logo-converted.png" alt="ISSA Member" />
            <span>ISSA Member</span>
          </div>
          <div className="trust-badge-item">
            <img src="https://www.namoli.com.au/wp-content/uploads/2021/10/FCA-Member-logo-CMYK-300x169.jpg" alt="FCA Member" />
            <span>FCA Member</span>
          </div>
          <div className="trust-badge-item">
            <img src="https://www.namoli.com.au/wp-content/uploads/2022/06/bscaa-300x152.png" alt="BSCAA Member" />
            <span>BSCAA Member</span>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="testimonial-card">
        <div className="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
        <p className="testimonial-text">"Namoli understand our business and just get the job done. They scale up when required and there is clear communication between the franchise cleaners and Namoli."</p>
        <div className="testimonial-author">Peter Walsh</div>
        <div className="testimonial-role">CFO, Australia Wool Testing Authority</div>
      </div>

      {/* What Happens Next */}
      <div className="sidebar-card">
        <h4>What Happens Next?</h4>
        <div className="process-steps">
          <div className="process-step">
            <span className="process-step-num">1</span>
            <span>We review your enquiry and call to discuss your needs.</span>
          </div>
          <div className="process-step">
            <span className="process-step-num">2</span>
            <span>We arrange a free on-site assessment of your facility.</span>
          </div>
          <div className="process-step">
            <span className="process-step-num">3</span>
            <span>You receive a detailed, no-obligation proposal.</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
