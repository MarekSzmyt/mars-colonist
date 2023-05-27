import React from "react";
import "../scss/components/_Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="Footer-container">
        <div className="Footer-title">
          <p>station <strong>Terra Nova</strong></p>
        </div>
        <div className="Footer-title">
          <p>connection <strong>online</strong></p>
        </div>
        <div className="Footer-title">
          <p>software engineer <strong>Marek Szmyt</strong></p>
          <p>current version <strong>1.1</strong></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
