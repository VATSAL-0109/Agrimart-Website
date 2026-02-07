"use client";
import React, { useState } from 'react';
import './Support.css';

const faqs = [
  {
    question: 'How can I track my order?',
    answer: 'You can track your order from the “My Orders” section in your account. You’ll also receive tracking updates on your registered phone/email.',
  },
  {
    question: 'Can I return a damaged product?',
    answer: 'Yes, damaged products can be returned within 7 days of delivery. Please raise a return request from your order page.',
  },
  {
    question: 'Do you offer support in regional languages?',
    answer: 'Yes, our support team is trained to assist you in major Indian regional languages.',
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept UPI, debit/credit cards, net banking, and COD (Cash on Delivery) in selected areas.',
  },
];

const Support = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="support-wrapper">
      <header className="support-hero">
        <div className="overlay">
          <h1>We're Here to Help!</h1>
          <p>Need assistance? Browse our FAQs or reach out to our team.</p>
        </div>
      </header>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">{faq.question}</div>
              <div className="faq-answer">{faq.answer}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <h2>Contact Support</h2>
        <form className="contact-form">
          <label for="name">Name:</label>
          <input type="text" id="name" placeholder="Your Name" required />
          
          <label for="email">Email:</label>
          <input type="email" id="email" placeholder="Your Email" required />
          
          <label for="message">Message:</label>
          <textarea id="message" rows="5" placeholder="How can we assist you?" required></textarea>
          
          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="chat-section">
        <h2>Need Instant Assistance?</h2>
        <div className="chat-widget">
          <p>Chat with us live! <span>(Coming soon!)</span></p>
        </div>
      </section>
    </div>
  );
};

export default Support;
