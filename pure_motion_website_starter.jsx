import React, { useState } from "react";

const brand={
  bg:"#020617",
  card:"#0f172a",
  accent:"#22c55e",
  accentSoft:"rgba(34,197,94,0.12)",
  text:"#e5e7eb"
};

const categories=[
  {id:"tracksuits",name:"Tracksuits",img:"/tracksuit1.png"},
  {id:"jerseys",name:"Jerseys",img:"/Jersey.png"},
  {id:"hoodies",name:"Hoodies",img:"/hoodie.png"},
  {id:"dance",name:"Dance",img:"/irishdance.png"},
  {id:"jackets",name:"Jackets",img:"/Jackets.jpg"},
  {id:"sportswear",name:"Sportswear",img:"/SportKits.jpg"}
];

const products={
  tracksuits:[
    {name:"Elite Tracksuit",img:"/tracksuit1.png"},
    {name:"Pro Tracksuit",img:"/tracksuit2.png"}
  ],
  hoodies:[
    {name:"Performance Hoodie",img:"/hoodie.png"},
    {name:"Training Hoodie",img:"/hoodie2.png"}
  ],
  jerseys:[
    {name:"Match Jersey",img:"/Jersey.png"},
    {name:"Club Jersey",img:"/Jersey2.png"}
  ],
  dance:[
    {name:"Irish Dance Dress",img:"/irishdance.png"}
  ],
  jackets:[
    {name:"Performance Jacket",img:"/Jackets.jpg"},
    {name:"Elite Jacket",img:"/Jackets2.jpg"}
  ],
  sportswear:[
    {name:"Sports Kit",img:"/SportKits.jpg"},
    {name:"Training Sportswear",img:"/SportKits2.jpg"}
  ]
};

const sizes=[
  "Kids",
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "2XL",
  "3XL"
];

export default function App(){

  const[page,setPage]=useState("home");
  const[selected,setSelected]=useState(null);
  const[cart,setCart]=useState([]);

  function addToCart(item,size){

    setCart([
      ...cart,
      {
        ...item,
        size
      }
    ]);

    setSelected(null);
  }

  return(

    <div style={wrapper}>

      <Nav setPage={setPage} cartCount={cart.length}/>

      {page==="home" && (
        <>
          <Hero/>
          <CategoryGrid setPage={setPage}/>
          <TrustSection/>
          <FAQSection/>
          <CTASection setPage={setPage}/>
        </>
      )}

      {Object.keys(products).map(cat=>(
        page===cat && (
          <Section title={cat}>
            <ProductGrid items={products[cat]} setSelected={setSelected}/>
          </Section>
        )
      ))}

      {page==="cart" && (

        <Section title="Quote Builder">

          {cart.map((item,i)=>(

            <div key={i} style={cartItem}>

              <img src={item.img} style={{width:60}}/>

              {item.name}

              <span style={{opacity:0.6}}>
                {item.size}
              </span>

            </div>

          ))}

          {cart.length>0 && (

            <a href={`mailto:enquiries@puremotion.com?subject=Quote request&body=Items:%0D%0A${cart.map(p=>p.name+" - "+p.size).join("%0D%0A")}`}>

              <button style={cta}>
                Request Quote
              </button>

            </a>

          )}

        </Section>

      )}

      {selected && (

        <Modal
          item={selected}
          close={()=>setSelected(null)}
          addToCart={addToCart}
        />

      )}

      <Footer setPage={setPage}/>

    </div>

  );

}



function Nav({setPage,cartCount}){

  return(

    <div style={nav}>

      <div style={logoWrap} onClick={()=>setPage("home")}>

        <div style={logoIcon}>
          PM
        </div>

        <div style={logo}>
          PURE MOTION
        </div>

      </div>


      <div style={navLinks}>

        {categories.map(c=>(

          <Btn key={c.id} label={c.name} click={()=>setPage(c.id)}/>

        ))}

        <Btn label={`Quote (${cartCount})`} click={()=>setPage("cart")}/>

      </div>

    </div>

  );

}



function Hero(){

  return(

    <div style={hero}>

      <div>

        <h1 style={heroTitle}>
          Performance Driven Teamwear
        </h1>

        <Mission/>

      </div>

      <img src="/hoodie.png" style={heroImg}/>

    </div>

  );

}



function Mission(){

  return(

    <div style={missionBox}>

      Pure Motion delivers premium custom sportswear designed for teams and athletes.

    </div>

  );

}



function CategoryGrid({setPage}){

  return(

    <div style={section}>

      <h2>Browse Products</h2>

      <div style={grid}>

        {categories.map(cat=>(

          <div key={cat.id} style={cardHover} onClick={()=>setPage(cat.id)}>

            <img src={cat.img} style={img}/>

            {cat.name}

          </div>

        ))}

      </div>

    </div>

  );

}



function TrustSection(){

  return(

    <div style={section}>

      <h2>Why teams choose Pure Motion</h2>

      <div style={grid}>

        <div style={card}>Premium quality materials</div>

        <div style={card}>Custom designs available</div>

        <div style={card}>Affordable pricing</div>

        <div style={card}>Fast turnaround</div>

        <div style={card}>Low minimum orders</div>

        <div style={card}>Wide product range</div>

      </div>

    </div>

  );

}



function FAQSection(){

  return(

    <div style={section}>

      <h2>FAQ</h2>

      <div style={faqBox}>

        <p><strong>Minimum order?</strong><br/>Low minimums available.</p>

        <p><strong>Can we customise colours?</strong><br/>Yes, fully custom designs available.</p>

        <p><strong>Can you add our club logo?</strong><br/>Yes, embroidery or print available.</p>

        <p><strong>Delivery time?</strong><br/>Typically 2–4 weeks.</p>

        <p><strong>Samples available?</strong><br/>Available on request.</p>

      </div>

    </div>

  );

}



function CTASection({setPage}){

  return(

    <div style={ctaBanner}>

      <h2>Start your custom kit today</h2>

      <button style={cta} onClick={()=>setPage("tracksuits")}>
        Browse Products
      </button>

    </div>

  );

}



function ProductGrid({items,setSelected}){

  return(

    <div style={grid}>

      {items.map((p,i)=>(

        <div key={i} style={cardHover} onClick={()=>setSelected(p)}>

          <img src={p.img} style={img}/>

          {p.name}

        </div>

      ))}

    </div>

  );

}



function Modal({item,close,addToCart}){

  const[size,setSize]=useState("");

  return(

    <div style={modalBg} onClick={close}>

      <div style={modal} onClick={(e)=>e.stopPropagation()}>

        <img src={item.img} style={img}/>

        <h2>{item.name}</h2>


        <select
          style={dropdown}
          value={size}
          onChange={(e)=>setSize(e.target.value)}
        >

          <option value="">
            Select size
          </option>

          {sizes.map(s=>(
            <option key={s}>
              {s}
            </option>
          ))}

        </select>


        <button
          style={cta}
          disabled={!size}
          onClick={()=>addToCart(item,size)}
        >

          Add to Quote

        </button>

      </div>

    </div>

  );

}



function Section({title,children}){

  return(

    <div style={section}>

      <h1>{title}</h1>

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



function Footer({setPage}){

  return(

    <div style={footer}>

      PURE MOTION

    </div>

  );

}



const wrapper={

  background:brand.bg,

  color:brand.text,

  minHeight:"100vh",

  fontFamily:"Arial"

};



const nav={

  position:"sticky",

  top:0,

  background:brand.bg,

  padding:"16px 20px",

  borderBottom:"1px solid #111",

  display:"flex",

  justifyContent:"space-between",

  alignItems:"center",

  flexWrap:"wrap"

};



const logoWrap={

  display:"flex",

  alignItems:"center",

  gap:10,

  cursor:"pointer"

};



const logoIcon={

  background:brand.accent,

  color:"#000",

  padding:"6px 10px",

  borderRadius:6,

  fontWeight:800

};



const logo={

  color:brand.accent,

  fontWeight:900,

  fontSize:"22px",

  transform:"skewX(-12deg)"

};



const navLinks={

  display:"flex",

  gap:8,

  flexWrap:"wrap"

};



const navBtn={

  background:brand.accentSoft,

  border:"1px solid rgba(34,197,94,0.25)",

  color:brand.accent,

  padding:"8px 14px",

  borderRadius:20,

  fontSize:"14px",

  cursor:"pointer"

};



const hero={

  padding:40,

  display:"grid",

  gridTemplateColumns:"1fr 1fr",

  gap:40

};



const heroTitle={

  fontSize:46

};



const heroImg={

  width:"100%",

  borderRadius:20

};



const missionBox={

  marginTop:20,

  padding:20,

  background:brand.accentSoft,

  borderRadius:12

};



const section={

  padding:40

};



const grid={

  display:"grid",

  gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",

  gap:20,

  marginTop:20

};



const card={

  background:brand.card,

  padding:16,

  borderRadius:12

};



const cardHover={

  background:brand.card,

  padding:16,

  borderRadius:12,

  cursor:"pointer"

};



const faqBox={

  background:brand.card,

  padding:20,

  borderRadius:12,

  lineHeight:1.6

};



const cartItem={

  display:"flex",

  gap:10,

  alignItems:"center",

  marginTop:10

};



const img={

  width:"100%",

  borderRadius:10

};



const dropdown={

  width:"100%",

  padding:10,

  marginTop:15,

  borderRadius:8,

  border:"1px solid #333",

  background:"#020617",

  color:"#fff"

};



const cta={

  background:brand.accent,

  border:"none",

  padding:"12px 18px",

  borderRadius:8,

  marginTop:15,

  cursor:"pointer",

  width:"100%"

};



const ctaBanner={

  padding:40,

  textAlign:"center",

  background:brand.accentSoft

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

  background:brand.bg,

  padding:30,

  borderRadius:12,

  width:320

};



const footer={

  textAlign:"center",

  padding:40,

  marginTop:40,

  borderTop:"1px solid #111"

};
