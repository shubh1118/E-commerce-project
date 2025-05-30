// 📁 src/components/Services.js
import React from "react";
import "../styles/services.css";

const Services = () => {
  const services = [
    {
      title: "Social Media Marketing",
      description: "Boost your brand’s online presence with strategic content and engagement.",
      icon: "📱",
    },
    {
      title: "Event Management",
      description: "From planning to execution, we manage unforgettable events.",
      icon: "🎉",
    },
    {
      title: "Advertising & Branding",
      description: "Creative campaigns to elevate your brand’s identity.",
      icon: "📢",
    },
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <span className="icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
