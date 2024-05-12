import React from "react";
import AboutComponentMini from "../../subComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>At our establishment, your peace of mind is our top priority. We strive to create an environment where you can relax and unwind, knowing that every detail is taken care of with the utmost care and attention.</p>
          <p>From our attentive staff to our meticulously designed spaces, we are dedicated to providing you with an experience that exceeds your expectations. Whether you're here for business or leisure, rest assured that we are committed to ensuring your comfort and satisfaction throughout your stay. </p>
          <p>Your well-being is at the heart of everything we do, and we look forward to welcoming you with warmth and hospitality.</p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;