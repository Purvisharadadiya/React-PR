import React from "react";
import "./BrandSection.css";
import { Container } from "react-bootstrap";

const BrandSection = () => {
  return (
    <Container>
    <section className="brand-section">
      <img
        src="./src/img/b-img.png" 
        alt="Tommy Hilfiger Banner"
        className="brand-image"
      />
     
    </section>
    </Container>
  );
};

export default BrandSection;
