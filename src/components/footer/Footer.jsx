import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="f-container container">
        <div className="left-side">
          <img src="./imgs/logo2.png" alt=""></img>
          <p>
            Our vision is to make all people
            <br></br> the best place to live for them.
          </p>
        </div>
        <div className="right-side">
            <h1>Information</h1>
            <p>145 New York, FL 5467, USA</p>
            <ul>
                <li>Property</li>
                <li>Services</li>
                <li>Product</li>
                <li>About Us</li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
