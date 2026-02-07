'use client';

import { useState } from "react";

const FAQ = () => {


  const faqs = [
  {
    id: 1,
    question: "Q1. What services does Agrimart offer?",
    answer:
      "Agrimart specializes in providing innovative solutions, including digital transformation, product development, and business consulting. We focus on delivering reliable and customer-centric results."
  },
  {
    id: 2,
    question: "Q2. What industries does Agrimart serve?",
    answer:
      "We serve a wide range of industries, including Farming and Agriculture, Horticulture, Agri-business, and Greenhouses and Nurseries, etc.."
  },
  {
    id: 3,
    question: "Q3. How can I collaborate with Agrimart?",
    answer:
      "You can collaborate with Agrimart by contacting us through our website's partnership form or emailing us directly. We welcome collaborations that support the growth and development of the agricultural sector."
  },
  {
    id: 4,
    question: "Q4. What makes Agrimart unique?",
    answer:
      "We offer a comprehensive range of high-quality agricultural products, from fertilizers and seeds to advanced farming equipment, all sourced from trusted suppliers."
  },
 
];


  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="max-w-screen-xl mx-auto mb-8">
      <h1 className="text-4xl font-bold text-center mb-10">FAQ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`border rounded-lg w-full shadow-md transition-all duration-300 ease-in-out ${
              openFAQ === faq.id ? "p-6 h-auto" : "p-4 h-16"
            }`}
            onClick={() => toggleFAQ(faq.id)}
          >
            <div className="flex justify-between items-center cursor-pointer">
              <h2 className="font-medium">{faq.question}</h2>
              <span className="text-gray-500">
                {openFAQ === faq.id ? "▲" : "▼"}
              </span>
            </div>
            {openFAQ === faq.id && (
              <div className="mt-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;


