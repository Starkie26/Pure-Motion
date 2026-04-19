import React, { useState } from "react";

const brand = {
  bg: "#020617",
  card: "#0f172a",
  accent: "#22c55e",
  text: "#e5e7eb"
};

const products = {

  tracksuits: [
    { name: "Elite Tracksuit", img: "/tracksuit1.png" },
    { name: "Pro Tracksuit", img: "/tracksuit2.png" }
  ],

  hoodies: [
    { name: "Performance Hoodie", img: "/hoodie.png" },
    { name: "Training Hoodie", img: "/hoodie2.png" }
  ],

  jerseys: [
    { name: "Match Jersey", img: "/Jersey.png" },
    { name: "Club Jersey", img: "/Jersey2.png" }
  ],

  dance: [
    { name: "Irish Dance Dress", img: "/irishdance.png" }
  ],

  jackets: [
    { name: "Performance Jacket", img: "/Jackets.jpg" },
    { name: "Elite Jacket", img: "/Jackets2.jpg" }
  ],

  sportswear: [
    { name: "Sports Kit", img: "/SportKits.jpg" },
    { name: "Training Sportswear", img: "/SportKits2.jpg" }
  ]

};


export default function App() {

  const [page, setPage] = useState("home");
  const [selected, setSelected] = useState(null);

  return (
    <div style={wrapper}>

      <Nav setPage={setPage}/>


      {page === "home" && (

        <div style={hero}>

          <div>

            <h1 style={heroTitle}>
              Elite Teamwear &
              <span style={{color:brand.accent}}> Custom Performance</span>
            </h1>

            <p style={intro}>
              Custom kits, tracksuits and performance apparel designed for teams, clubs and athletes.
            </p>


            <Mission/>


            <button style={cta} onClick={() => setPage("tracksuits")}>
              View Collection
            </button>

          </div>


          <img src="/hoodie.png" style={heroImg}/>

        </div>

      )}



      {page === "tracksuits" && (
        <Section title="Tracksuits">
          <ProductGrid items={products.tracksuits} setSelected={setSelected}/>
        </Section>
      )}


      {page === "jerseys" && (
        <Section title="Jerseys">
          <ProductGrid items={products.jerseys} setSelected={setSelected}/>
        </Section>
      )}


      {page === "dance" && (
        <Section title="Dance & Performance">
          <ProductGrid items={products.dance} setSelected={setSelected}/>
        </Section>
      )}


      {page === "hoodies" && (
        <Section title="Hoodies">
          <ProductGrid items={products.hoodies} setSelected={setSelected}/>
        </Section>
      )}


      {page === "jackets" && (
        <Section title="Jackets">
          <ProductGrid items={products.jackets} setSelected={setSelected}/>
        </Section>
      )}


      {page === "sportswear" && (
        <Section title="Sportswear">
          <ProductGrid items={products.sportswear} setSelected={setSelected}/>
        </Section>
      )}


      {page === "club" && (
        <Section title="Club Shop">

          <p style={desc}>
            Dedicated online shops for sports clubs and teams.
          </p>

          <button style={cta} onClick={() => setPage("contact")}>
            Request Club Shop
          </button>

        </Section>
      )}


      {page === "custom" && (
        <Section title="Custom Kit Design">

          <p style={desc}>
            Fully customised teamwear built to your branding.
          </p>

          <button style={cta} onClick={() => setPage("contact")}>
            Start Design
          </button>

        </Section>
      )}


      {page === "contact" && (
        <Section title="Contact">
          enquiries@puremotion.com
        </Section>
      )}



      {selected && (
        <Modal item={selected} close={()=>setSelected(null)}/>
      )}


      <Footer/>

    </div>
  );
}




function Nav({setPage}) {

  return (

    <div style={nav}>

      <div style={logo} onClick={()=>setPage("home")}>
        PURE MOTION
      </div>


      <div>

        <Btn label="Tracksuits" click={()=>setPage("tracksuits")}/>

        <Btn label="Jerseys" click={()=>setPage("jerseys")}/>

        <Btn label="Dance" click={()=>setPage("dance")}/>

        <Btn label="Hoodies" click={()=>setPage("hoodies")}/>

        <Btn label="Jackets" click={()=>setPage("jackets")}/>

        <Btn label="Sportswear" click={()=>setPage("sportswear")}/>

        <Btn label="Club Shop" click={()=>setPage("club")}/>

        <Btn label="Custom Kit" click={()=>setPage("custom")}/>

        <Btn label="Contact" click={()=>setPage("contact")}/>

      </div>

    </div>

  );

}




function Mission() {

  return (

    <div style={missionBox}>

      <h3 style={{color:brand.accent}}>
        Our Mission
      </h3>

      <p>
        Pure Motion exists to make high-quality custom teamwear accessible to every club, team, and athlete.
      </p>

      <p>
        We design and produce premium custom kits, tracksuits, and performance apparel that combine professional-level quality with affordable pricing.
      </p>

      <p>
        Our goal is to give grassroots clubs the same level of design and finish typically reserved for elite teams.
      </p>

    </div>

  );

}




function ProductGrid({items,setSelected}) {

  return (

    <div style={grid}>

      {items.map((p,i)=>(
        <div key={i} style={card} onClick={()=>setSelected(p)}>

          <img src={p.img} style={img}/>

          <h3>{p.name}</h3>

        </div>
      ))}

    </div>

  );

}




function Modal({item,close}) {

  return (

    <div style={modalBg} onClick={close}>

      <div style={modal}>

        <img src={item.img} style={img}/>

        <h2>{item.name}</h2>

        <button style={cta}>
          Request Info
        </button>

      </div>

    </div>

  );

}




function Section({title,children}) {

  return (

    <div style={section}>

      <h1>{title}</h1>

      {children}

    </div>

  );

}




function Btn({label,click}) {

  return (

    <button onClick={click} style={navBtn}>

      {label}

    </button>

  );

}




function Footer() {

  return (

    <div style={footer}>

      PURE MOTION ©

    </div>

  );

}




const wrapper = {

  background:"#020617",

  color:"#e5e7eb",

  minHeight:"100vh",

  fontFamily:"Arial"

};


const nav = {

  padding:20,

  borderBottom:"1px solid #111",

  display:"flex",

  justifyContent:"space-between",

  flexWrap:"wrap"

};


const logo = {

  color:"#22c55e",

  fontWeight:700,

  cursor:"pointer"

};


const navBtn = {

  marginLeft:20,

  background:"transparent",

  border:"none",

  color:"#e5e7eb",

  cursor:"pointer"

};


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


const heroImg = {

  width:"100%",

  borderRadius:20

};


const intro = {

  opacity:0.85,

  maxWidth:500

};


const missionBox = {

  marginTop:25,

  padding:20,

  border:"1px solid #1f2937",

  borderRadius:10

};


const grid = {

  display:"grid",

  gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",

  gap:20,

  marginTop:20

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


const cta = {

  background:"#22c55e",

  border:"none",

  padding:"12px 18px",

  borderRadius:8,

  marginTop:20,

  cursor:"pointer"

};


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


const section = {

  padding:40

};


const footer = {

  textAlign:"center",

  padding:40,

  marginTop:40,

  borderTop:"1px solid #111"

};


const desc = {

  opacity:0.8

};
