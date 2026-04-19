import React, { useState } from "react";

const brand = {
  bg: "#020617",
  card: "#0f172a",
  accent: "#22c55e",
  text: "#e5e7eb"
};

const products = {
  tracksuits: [
    { name: "Elite Tracksuit", img: "/tracksuit1.png", desc: "High performance training wear" },
    { name: "Pro Tracksuit", img: "/tracksuit2.png", desc: "Premium team tracksuit" }
  ],
  hoodies: [
    { name: "Performance Hoodie", img: "/hoodie.png", desc: "Comfort & performance" }
  ],
  dance: [
    { name: "Irish Dance Dress", img: "/irishdance.png", desc: "Competition ready design" }
  ],
  jerseys: [
    { name: "Neon Jersey", img: "/neonlogo.png", desc: "Custom club jerseys" }
  ]
};

export default function App() {

  const [page, setPage] = useState("home");
  const [selected, setSelected] = useState(null);

  const Nav = () => (
    <div style={navStyle}>

      <div style={logoStyle} onClick={() => setPage("home")}>
        PURE MOTION
      </div>

      <div>
        <NavBtn label="Tracksuits" click={() => setPage("tracksuits")}/>
        <NavBtn label="Jerseys" click={() => setPage("jerseys")}/>
        <NavBtn label="Dance & Fitness" click={() => setPage("dance")}/>
        <NavBtn label="Hoodies" click={() => setPage("hoodies")}/>
        <NavBtn label="Club Shop" click={() => setPage("club")}/>
        <NavBtn label="Custom Kit" click={() => setPage("custom")}/>
        <NavBtn label="Contact" click={() => setPage("contact")}/>
      </div>

    </div>
  );

  const ProductGrid = ({ items }) => (
    <div style={grid}>
      {items.map((p,i) => (
        <div
          key={i}
          style={card}
          onClick={() => setSelected(p)}
        >
          <img src={p.img} style={img}/>
          <h3>{p.name}</h3>
        </div>
      ))}
    </div>
  );


  return (
    <div style={wrapper}>

      <Nav/>

      {page === "home" && (
        <div style={hero}>

          <div>

            <h1 style={heroTitle}>
              Elite Teamwear &
              <span style={{color:brand.accent}}> Custom Performance</span>
            </h1>

            <p style={{opacity:0.8}}>
              Custom kits, tracksuits and performance apparel designed for teams, clubs and athletes.
            </p>

            <button style={cta} onClick={() => setPage("tracksuits")}>
              View Collection
            </button>

          </div>

          <img src="/hoodie.png" style={{width:"100%", borderRadius:20}}/>

        </div>
      )}


      {page === "tracksuits" && <Section title="Tracksuits"><ProductGrid items={products.tracksuits}/></Section>}

      {page === "jerseys" && <Section title="Jerseys"><ProductGrid items={products.jerseys}/></Section>}

      {page === "dance" && <Section title="Dance & Fitness"><ProductGrid items={products.dance}/></Section>}

      {page === "hoodies" && <Section title="Hoodies"><ProductGrid items={products.hoodies}/></Section>}

      {page === "club" && (
        <Section title="Club Shop">

          <p style={desc}>
            We build dedicated online shops for sports clubs, dance schools and organisations.
          </p>

          <ul>
            <li>Club branded kits</li>
            <li>Member ordering portal</li>
            <li>Bulk pricing</li>
            <li>Personalisation options</li>
          </ul>

          <button style={cta} onClick={() => setPage("contact")}>
            Request Club Shop
          </button>

        </Section>
      )}


      {page === "custom" && (
        <Section title="Custom Kit Design">

          <p style={desc}>
            Fully custom jerseys, teamwear and performance clothing built to your colours and branding.
          </p>

          <ul>
            <li>Unlimited design revisions</li>
            <li>Professional mockups</li>
            <li>Premium materials</li>
            <li>Fast production</li>
          </ul>

          <button style={cta} onClick={() => setPage("contact")}>
            Start Design
          </button>

        </Section>
      )}


      {page === "contact" && (
        <Section title="Contact">

          <p style={desc}>
            Email us to start your custom project or request pricing.
          </p>

          <div style={{marginTop:20}}>
            enquiries@puremotion.com
          </div>

        </Section>
      )}



      {selected && (
        <div style={modalBg} onClick={()=>setSelected(null)}>

          <div style={modal}>

            <img src={selected.img} style={{width:"100%", borderRadius:12}}/>

            <h2>{selected.name}</h2>

            <p style={{opacity:0.8}}>
              {selected.desc}
            </p>

            <button style={cta}>
              Request Info
            </button>

          </div>

        </div>
      )}


      <footer style={footer}>
        PURE MOTION ©
      </footer>

    </div>
  );
}



const wrapper = {
  background:"#020617",
  color:"#e5e7eb",
  minHeight:"100vh",
  fontFamily:"Arial"
};

const navStyle = {
  padding:20,
  borderBottom:"1px solid #111",
  display:"flex",
  justifyContent:"space-between"
};

const logoStyle = {
  color:"#22c55e",
  fontWeight:700,
  cursor:"pointer"
};

const NavBtn = ({label,click}) => (
  <button onClick={click} style={{
    marginLeft:20,
    background:"transparent",
    border:"none",
    color:"#e5e7eb",
    cursor:"pointer"
  }}>
    {label}
  </button>
);


const hero = {
  padding:40,
  display:"grid",
  gridTemplateColumns:"1fr 1fr",
  gap:40,
  alignItems:"center"
};

const heroTitle = {
  fontSize:48
};

const cta = {
  background:"#22c55e",
  border:"none",
  padding:"12px 18px",
  borderRadius:8,
  marginTop:20,
  cursor:"pointer"
};

const grid = {
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
  gap:20
};

const card = {
  background:"#0f172a",
  padding:16,
  borderRadius:12,
  cursor:"pointer"
};

const img = {
  width:"100%",
  borderRadius:10
};

const footer = {
  textAlign:"center",
  padding:40,
  marginTop:40,
  borderTop:"1px solid #111"
};

const Section = ({title,children}) => (
  <div style={{padding:40}}>
    <h1>{title}</h1>
    <div style={{marginTop:20}}>
      {children}
    </div>
  </div>
);


const modalBg = {
  position:"fixed",
  inset:0,
  background:"rgba(0,0,0,0.7)",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
};

const modal = {
  background:"#020617",
  padding:30,
  borderRadius:12,
  width:320
};

const desc = {
  opacity:0.8,
  maxWidth:500
};
