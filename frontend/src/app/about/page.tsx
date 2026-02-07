import React from 'react';
import './About.css';
import { FaTractor, FaSeedling, FaShippingFast, FaHeadset } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Agrimart</h1>
          <p className="hero-subtitle">Your trusted partner in modern farming solutions</p>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <h2 className="section-title" style={{ color: '#2e7d32' }}>Who We Are</h2>
        <p className="section-desc" style={{ color: '#555' }}>
          Agrimart is India's leading digital marketplace dedicated to agriculture. We connect farmers with trusted suppliers, offering everything from quality seeds and tools to advanced machinery and smart agri-solutions.
        </p>
      </section>

      {/* Values Section */}
      <section className="section" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="values-grid">
          {[
            { icon: <FaSeedling />, title: 'Sustainable Farming', desc: 'Eco-friendly products that care for your land.' },
            { icon: <FaTractor />, title: 'Modern Equipment', desc: 'Latest tools to boost productivity and reduce labor.' },
            { icon: <FaShippingFast />, title: 'Fast Delivery', desc: 'Pan-India shipping with real-time tracking.' },
            { icon: <FaHeadset />, title: 'Expert Support', desc: 'Talk to agri-specialists in your regional language.' },
          ].map((item, index) => (
            <div className="card" key={index}>
              <div className="card-icon">{item.icon}</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h3>Have Questions or Need Help?</h3>
        <p>📧 Agrimart@gmail.com &nbsp; | &nbsp; 📞 +91-12345-67890</p>
      </section>
    </div>
  );
};

export default About;
