import React from "react";
import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT Us</h1>
        <p>If you are looking for a getaway from the commotion of the city, 
            breathe in the air in a manner nature meant it to be, find an opportunity to wind down and break from the mundaneness of daily life, and just find time to be with your own self, we would like to offer you a rejuvenating experience with us</p>
        <p>Our philosophy is to offer a unique warm, intimate and informal homely ambiance, 
            without compromising on comfort, service, hygiene & food quality, whilst employing local talent and endeavouring to be a green & sustainable property.
        </p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
              <h3>Let's connect</h3>
              <div>
                <p>Phone</p>
                <span>+999 999 9999</span>
              </div>
              <div>
                <p>Email</p>
                <span>imperialRealty@gmail.com</span>
              </div>
              <div>
                <p>Address</p>
                <span>House No.123 Sector A-1</span>
              </div>
              <ul>
                <Link to={"/"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;