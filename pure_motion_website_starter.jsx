import React, { useState } from "react";

const brand={
  bg:"#020617",
  card:"#0f172a",
  accent:"#22c55e",
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


export default function App(){

  const[page,setPage]=useState("home");
  const[selected,setSelected]=useState(null);
  const[cart,setCart]=useState([]);

  function addToCart(item){

    setCart([...cart,item]);
    setSelected(null);

  }

  return(

    <div style={wrapper}>

      <Nav setPage={setPage} cartCount={cart.length}/>


      {page==="home" && (

        <>

          <Hero/>

          <CategoryGrid setPage={setPage}/>

        </>

      )}


      {Object.keys(products).map(cat=>(

        page===cat && (

          <Section title={cat}>

            <ProductGrid
              items={products[cat]}
              setSelected={setSelected}
            />

          </Section>

        )

      ))}


      {page==="cart" && (

        <Section title="Quote Builder">

          {cart.length===0 && <p>No products added yet</p>}

          {cart.map((item,i)=>(

            <div key={i} style={cartItem}>

              <img src={item.img} style={{width:60}}/>

              {item.name}

            </div>

          ))}


          {cart.length>0 && (

            <a
              href={`mailto:enquiries@puremotion.com?subject=Quote request&body=I would like pricing for ${cart.map(p=>p.name).join(", ")}`}
            >

              <button style={cta}>

                Request Quote

              </button>

            </a>

          )}

        </Section>

      )}


      {page==="contact" && (

        <Section title="Contact Us">

          <p>
            Email or WhatsApp us for pricing and design enquiries.
          </p>


          <a href="mailto:enquiries@puremotion.com">

            <button style={cta}>
              Email Us
            </button>

          </a>


          <a href="https://wa.me/" target="_blank">

            <button style={whatsappBtn}>
              WhatsApp
            </button>

          </a>

        </Section>

      )}


      {selected && (

        <Modal
          item={selected}
          close={()=>setSelected(null)}
          addToCart={addToCart}
        />

      )}


      <Footer/>

    </div>

  );

}



function Nav({setPage,cartCount}){

  return(

    <div style={nav}>

      <div style={logo} onClick={()=>setPage("home")}>
        PURE MOTION
      </div>


      <div style={{display:"flex",flexWrap:"wrap"}}>

        {categories.map(c=>(

          <Btn key={c.id} label={c.name} click={()=>setPage(c.id)}/>

        ))}


        <Btn label={`Quote (${cartCount})`} click={()=>setPage("cart")}/>

        <Btn label="Contact" click={()=>setPage("contact")}/>

      </div>

    </div>

  );

}



function Hero(){

  return(

    <div style={hero}>

      <div>

        <h1 style={heroTitle}>
          Premium Custom Teamwear
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

      <h3 style={{
        color:"#22c55e",
        marginBottom:10
      }}>
        Our Mission
      </h3>


      <p style={{opacity:0.9,lineHeight:1.6}}>
        Pure Motion exists to make high-quality custom teamwear accessible to every club, team, and athlete.
      </p>


      <p style={{opacity:0.75,lineHeight:1.6,marginTop:10}}>
        We design and produce premium custom kits, tracksuits, and performance apparel that combine professional-level quality with affordable pricing.
      </p>


      <p style={{opacity:0.75,lineHeight:1.6,marginTop:10}}>
        Our aim is to bring quality design, strong finishing, and a wide range of products to grassroots clubs, ensuring high performance is not only achieved — but visible.
      </p>

    </div>

  );

}



function CategoryGrid({setPage}){

  return(

    <div style={section}>

      <h2>Browse Products</h2>


      <div style={grid}>

        {categories.map(cat=>(

          <div key={cat.id}

               style={card}

               onClick={()=>setPage(cat.id)}

          >

            <img src={cat.img} style={img}/>

            {cat.name}

          </div>

        ))}

      </div>

    </div>

  );

}



function ProductGrid({items,setSelected}){

  return(

    <div style={grid}>

      {items.map((p,i)=>(

        <div key={i}

             style={card}

             onClick={()=>setSelected(p)}

        >

          <img src={p.img} style={img}/>

          {p.name}

        </div>

      ))}

    </div>

  );

}



function Modal({item,close,addToCart}){

  return(

    <div style={modalBg} onClick={close}>

      <div style={modal} onClick={(e)=>e.stopPropagation()}>

        <img src={item.img} style={img}/>

        <h2>{item.name}</h2>


        <button
          style={cta}
          onClick={()=>addToCart(item)}
        >
          Add to Quote
        </button>


        <a href={`mailto:enquiries@puremotion.com?subject=Enquiry about ${item.name}`}>

          <button style={cta}>
            Email
          </button>

        </a>


        <a href={`https://wa.me/?text=I am interested in ${item.name}`}>

          <button style={whatsappBtn}>
            WhatsApp
          </button>

        </a>

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
  gap:40
};

const heroTitle={
  fontSize:44
};

const heroImg={
  width:"100%",
  borderRadius:20
};

const missionBox={
  marginTop:20,
  padding:20,
  border:"1px solid #1f2937",
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
  background:"#0f172a",
  padding:16,
  borderRadius:12,
  cursor:"pointer"
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

const cta={
  background:"#22c55e",
  border:"none",
  padding:"12px 18px",
  borderRadius:8,
  marginTop:10,
  cursor:"pointer",
  width:"100%"
};

const whatsappBtn={
  background:"#25D366",
  border:"none",
  padding:"12px 18px",
  borderRadius:8,
  marginTop:10,
  cursor:"pointer",
  width:"100%"
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

const footer={
  textAlign:"center",
  padding:40,
  marginTop:40,
  borderTop:"1px solid #111"
};
