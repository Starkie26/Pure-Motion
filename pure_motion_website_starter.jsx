import React, { useState } from "react";

const brand = {
  bg: "#020617",
  card: "#0f172a",
  accent: "#22c55e",
  text: "#e5e7eb"
};

const categories = [
  { id:"tracksuits", name:"Tracksuits", img:"/tracksuit1.png" },
  { id:"jerseys", name:"Jerseys", img:"/Jersey.png" },
  { id:"hoodies", name:"Hoodies", img:"/hoodie.png" },
  { id:"dance", name:"Dance", img:"/irishdance.png" },
  { id:"jackets", name:"Jackets", img:"/Jackets.jpg" },
  { id:"sportswear", name:"Sportswear", img:"/SportKits.jpg" }
];

const products = {

  tracksuits: [
    { name:"Elite Tracksuit", img:"/tracksuit1.png" },
    { name:"Pro Tracksuit", img:"/tracksuit2.png" }
  ],

  hoodies: [
    { name:"Performance Hoodie", img:"/hoodie.png" },
    { name:"Training Hoodie", img:"/hoodie2.png" }
  ],

  jerseys: [
    { name:"Match Jersey", img:"/Jersey.png" },
    { name:"Club Jersey", img:"/Jersey2.png" }
  ],

  dance: [
    { name:"Irish Dance Dress", img:"/irishdance.png" }
  ],

  jackets: [
    { name:"Performance Jacket", img:"/Jackets.jpg" },
    { name:"Elite Jacket", img:"/Jackets2.jpg" }
  ],

  sportswear: [
    { name:"Sports Kit", img:"/SportKits.jpg" },
    { name:"Training Sportswear", img:"/SportKits2.jpg" }
  ]

};


export default function App(){

  const [page,setPage]=useState("home");
  const [selected,setSelected]=useState(null);

  return(

    <div style={wrapper}>

      <Nav setPage={setPage}/>


      {page==="home" && (

        <div>

          <Hero setPage={setPage}/>

          <CategoryGrid setPage={setPage}/>

        </div>

      )}


      {Object.keys(products).map(cat => (

        page===cat && (

          <Section title={cat}>

            <ProductGrid items={products[cat]} setSelected={setSelected}/>

          </Section>

        )

      ))}


      {selected && <Modal item={selected} close={()=>setSelected(null)}/>}

      <Footer/>

    </div>

  );

}



function Nav({setPage}){

  return(

    <div style={nav}>

      <div style={logo} onClick={()=>setPage("home")}>
        PURE MOTION
      </div>


      <div style={{display:"flex",flexWrap:"wrap"}}>

        {categories.map(c=>(
          <Btn key={c.id} label={c.name} click={()=>setPage(c.id)}/>
        ))}

      </div>

    </div>

  );

}



function Hero({setPage}){

  return(

    <div style={hero}>

      <div>

        <h1 style={heroTitle}>
          Elite Teamwear &
          <span style={{color:brand.accent}}> Custom Performance</span>
        </h1>


        <p style={intro}>
          Premium custom kits designed for clubs, teams and athletes.
        </p>


        <Mission/>


        <button style={cta} onClick={()=>setPage("tracksuits")}>
          Browse Collection
        </button>

      </div>


      <img src="/hoodie.png" style={heroImg}/>

    </div>

  );

}



function CategoryGrid({setPage}){

  return(

    <div style={categorySection}>

      <h2>Browse Categories</h2>

      <div style={grid}>

        {categories.map(cat=>(

          <div key={cat.id} style={categoryCard} onClick={()=>setPage(cat.id)}>

            <img src={cat.img} style={img}/>

            <div style={{marginTop:10,fontWeight:600}}>
              {cat.name}
            </div>

          </div>

        ))}

      </div>

    </div>

  );

}



function Mission(){

  return(

    <div style={missionBox}>

      <h3 style={{color:brand.accent}}>
        Our Mission
      </h3>

      <p>
        Pure Motion exists to make high-quality custom teamwear accessible to every club, team, and athlete.
      </p>

      <p>
        Premium custom kits combining professional design with affordable pricing.
      </p>

      <p>
        Helping grassroots clubs achieve elite level identity and performance.
      </p>

    </div>

  );

}



function ProductGrid({items,setSelected}){

  return(

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



function Modal({item,close}){

  const [sent,setSent]=useState(false);

  return(

    <div style={modalBg} onClick={close}>

      <div style={modal} onClick={(e)=>e.stopPropagation()}>

        <img src={item.img} style={img}/>

        <h2>{item.name}</h2>

        {!sent ? (

          <form
            onSubmit={(e)=>{
              e.preventDefault();
              setSent(true);
            }}
          >

            <input placeholder="Name" required style={input}/>

            <input placeholder="Email" required style={input}/>

            <textarea
              placeholder={"Message about "+item.name}
              rows="4"
              style={input}
            />

            <button style={cta}>
              Send Enquiry
            </button>

          </form>

        ) : (

          <div>

            <p>Enquiry ready ✔</p>

            <p style={{opacity:0.7}}>
              Next step we connect email sending.
            </p>

          </div>

        )}

      </div>

    </div>

  );

}



function Section({title,children}){

  return(

    <div style={section}>

      <h1 style={{textTransform:"capitalize"}}>
        {title}
      </h1>

      {children}

    </div>

  );

}



function Btn({label,click}){

  return(

    <button onClick={click} style={navBtn}>
      {label}
    </button>

  );

}



function Footer(){

  return(

    <div style={footer}>
      PURE MOTION
    </div>

  );

}



const wrapper={
  background:"#020617",
  color:"#e5e7eb",
  minHeight:"100vh",
  fontFamily:"Arial"
};


const nav={
  position:"sticky",
  top:0,
  background:"#020617",
  padding:20,
  borderBottom:"1px solid #111",
  display:"flex",
  justifyContent:"space-between",
  zIndex:10
};


const logo={
  color:"#22c55e",
  fontWeight:700,
  cursor:"pointer"
};


const navBtn={
  marginLeft:15,
  background:"transparent",
  border:"none",
  color:"#e5e7eb",
  cursor:"pointer"
};


const hero={
  padding:40,
  display:"grid",
  gridTemplateColumns:"1fr 1fr",
  gap:40,
  alignItems:"center"
};


const heroTitle={
  fontSize:48
};


const heroImg={
  width:"100%",
  borderRadius:20
};


const intro={
  opacity:0.8,
  maxWidth:500
};


const missionBox={
  marginTop:25,
  padding:20,
  border:"1px solid #1f2937",
  borderRadius:12
};


const categorySection={
  padding:40
};


const grid={
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
  gap:20,
  marginTop:20
};


const categoryCard={
  background:"#0f172a",
  padding:16,
  borderRadius:12,
  cursor:"pointer"
};


const card={
  background:"#0f172a",
  padding:16,
  borderRadius:12,
  cursor:"pointer"
};


const img={
  width:"100%",
  borderRadius:10
};


const input={
  width:"100%",
  marginTop:10,
  padding:10,
  borderRadius:6,
  border:"1px solid #1f2937",
  background:"#020617",
  color:"#e5e7eb"
};


const cta={
  background:"#22c55e",
  border:"none",
  padding:"12px 18px",
  borderRadius:8,
  marginTop:20,
  cursor:"pointer"
};


const modalBg={
  position:"fixed",
  inset:0,
  background:"rgba(0,0,0,0.7)",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
};


const modal={
  background:"#020617",
  padding:30,
  borderRadius:12,
  width:320
};


const section={
  padding:40
};


const footer={
  textAlign:"center",
  padding:40,
  marginTop:40,
  borderTop:"1px solid #111"
};
