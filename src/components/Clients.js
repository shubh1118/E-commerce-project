
import React from "react";
import "../styles/clients.css";

const Clients = () => {
  const clients = [
    { name: "Netflix", logo: "🎬" },
    { name: "Spotify", logo: "🎵" },
    { name: "Coca-Cola", logo: "🥤" },
    { name: "Nike", logo: "👟" },
    { name: "Amazon", logo: "📦" },
    { name: "Starbucks", logo: "☕" },
  ];

  return (
    <section id="clients" className="clients">
      <h2>Our Clients</h2>
      <p>Trusted by leading brands across industries</p>
      <div className="clients-grid">
        {clients.map((client, index) => (
          <div className="client-card" key={index}>
            <span className="logo">{client.logo}</span>
            <h3>{client.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
