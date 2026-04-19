import React from "react";

export default function App() {
  return (
    <div style={{
      fontFamily: "Arial",
      background: "#0b1220",
      color: "white",
      minHeight: "100vh",
      padding: "40px"
    }}>
      
      <h1 style={{fontSize:"42px"}}>
        PURE MOTION
      </h1>

      <p style={{fontSize:"18px", opacity:0.8}}>
        Premium Teamwear & Performance Apparel
      </p>

      <hr style={{margin:"30px 0", opacity:0.2}} />

      <h2>Our Range</h2>

      <ul>
        <li>Football Kits</li>
        <li>Teamwear</li>
        <li>Tracksuits</li>
        <li>Hoodies & Training Wear</li>
        <li>Dance & Fitness Wear</li>
        <li>Club Merchandise</li>
      </ul>

      <hr style={{margin:"30px 0", opacity:0.2}} />

      <h2>Get a Quote</h2>

      <p>Email: info@puremotion.com</p>

    </div>
  );
}
