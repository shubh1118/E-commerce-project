
import React from "react";
import "../styles/team.css";

const Team = () => {
  const teamMembers = [
    { name: "Ananya Sharma", role: "Creative Director", emoji: "🎨" },
    { name: "Raj Mehta", role: "Marketing Head", emoji: "📈" },
    { name: "Sara Khan", role: "Event Manager", emoji: "🎤" },
    { name: "Arjun Patel", role: "Digital Strategist", emoji: "💻" },
  ];

  return (
    <section id="team" className="team">
      <h2>Meet the Team</h2>
      <p>Passionate. Creative. Committed.</p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="avatar">{member.emoji}</div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
