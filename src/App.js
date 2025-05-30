import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <Clients />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
