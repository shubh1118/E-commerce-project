import React from "react";
import "../styles/testimonials.css";

const Testimonials = () => {
  const reviews = [
    { name: "Alice", text: "Amazing service! Highly recommend." },
    { name: "Bob", text: "Helped my brand grow rapidly." },
    { name: "Charlie", text: "Creative and professional team." },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-list">
        {reviews.map((review, index) => (
          <div key={index} className="testimonial">
            <p>"{review.text}"</p>
            <h4>- {review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;