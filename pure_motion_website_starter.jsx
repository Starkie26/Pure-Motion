import React, { useState, useEffect } from "react";

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
{name:"Elite Tracksuit",img:"/tracksuit1.png",badge:"Popular"},
{name:"Pro Tracksuit",img:"/tracksuit2.png"}
],
hoodies:[
{name:"Performance Hoodie",img:"/hoodie.png",badge:"Best Seller"},
{name:"Training Hoodie",img:"/hoodie2.png"}
],
jerseys:[
{name:"Match Jersey",img:"/Jersey.png",badge:"Customisable"},
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

const getPage=()=>{
const path=window.location.pathname.replace("/","");
return path||"home";
};

const[page,setPageState]=useState(getPage());
const[selected,setSelected]=useState(null);
const[cart,setCart]=useState([]);
const[fade,setFade]=useState(true);

function setPage(newPage){

window.history.pushState({}, "", newPage==="home"?"/":"/"+newPage);

setFade(false);

setTimeout(()=>{
setPageState(newPage);
setFade(true);
window.scrollTo({top:0,behavior:"smooth"});
},120);

}

useEffect(()=>{
window.onpopstate=()=>{
setPageState(getPage());
window.scrollTo({top:0});
};
},[]);

function addToCart(item){

setCart([...cart,item]);
setSelected(null);

}

return(

<div style={wrapper}>

<Nav setPage={setPage} cartCount={cart.length} active={page}/>

<div style={{opacity:fade?1:0,transition:"0.2s"}}>

{page==="home"&&(
<>

<Hero/>

<CategoryGrid setPage={setPage}/>

<TrustSection/>

<FAQSection/>

<ContactSection/>

</>
)}

{Object.keys(products).map(cat=>(
page===cat&&(
<Section title={cat}>
<ProductGrid items={products[cat]} setSelected={setSelected}/>
</Section>
)
))}

{page==="cart"&&(

<Section title="Quote Builder">

{cart.length===0&&<p>No products added yet</p>}

{cart.map((item,i)=>(
<div key={i} style={cartItem}>
<img src={item.img} style={{width:60}}/>
{item.name}
</div>
))}

{cart.length>0&&(

<a href={`mailto:enquiries@puremotion.com?subject=Quote request&body=${cart.map(p=>p.name).join(", ")}`}>

<button style={cta}>
Request Quote
</button>

</a>

)}

</Section>

)}

</div>

{selected&&(

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



function Hero(){

return(

<div style={hero}>

<div>

<div style={bigLogo}>
PURE MOTION
</div>

<h1 style={heroTitle}>
Elite Teamwear & Custom Performance
</h1>

<Mission/>

<Impact/>

</div>

<img src="/hoodie.png" style={heroImg}/>

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
We design and produce premium custom kits, tracksuits, and performance apparel that combine professional-level quality with affordable pricing.
</p>

<p>
Our aim is to bring quality design, strong finishing, and a wide range of products to grassroots clubs, ensuring high performance is not only achieved but visible.
</p>

</div>

);

}



function Impact(){

return(

<div style={impactBox}>

<div style={impactGrid}>

<div style={impactCard}>
Professional finish
</div>

<div style={impactCard}>
Designed for clubs
</div>

<div style={impactCard}>
Custom colours available
</div>

<div style={impactCard}>
Affordable pricing
</div>

</div>

</div>

);

}



function CategoryGrid({setPage}){

return(

<div style={section}>

<h2>Browse Range</h2>

<div style={grid}>

{categories.map(cat=>(

<div style={cardHover} onClick={()=>setPage(cat.id)}>

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

<div key={i} style={cardHover} onClick={()=>setSelected(p)}>

<div style={{position:"relative"}}>

{p.badge&&(
<div style={badge}>
{p.badge}
</div>
)}

<img src={p.img} style={img}/>

</div>

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

<p>
Custom colours available • logo printing • bulk pricing available
</p>

<button style={cta} onClick={()=>addToCart(item)}>
Add to Quote
</button>

<a href={`mailto:enquiries@puremotion.com?subject=Enquiry about ${item.name}`}>

<button style={cta}>
Email Enquiry
</button>

</a>

<a href={`https://wa.me/?text=I am interested in ${item.name}`} target="_blank">

<button style={whatsappBtn}>
WhatsApp Enquiry
</button>

</a>

</div>

</div>

);

}



function ContactSection(){

return(

<div style={section}>

<h2>Request Information</h2>

<div style={form}>

<input placeholder="Name" style={input}/>

<input placeholder="Club / Team" style={input}/>

<input placeholder="Email" style={input}/>

<textarea placeholder="What products do you need?" style={input}/>

<button style={cta}>
Send Enquiry
</button>

</div>

</div>

);

}



function TrustSection(){

return(

<div style={section}>

<h2>Why choose Pure Motion</h2>

<div style={grid}>

<div style={card}>Premium materials</div>

<div style={card}>Custom designs</div>

<div style={card}>Affordable pricing</div>

<div style={card}>Fast turnaround</div>

<div style={card}>Low minimum orders</div>

<div style={card}>Wide range</div>

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

<p><strong>Custom colours?</strong><br/>Yes.</p>

<p><strong>Add club logo?</strong><br/>Yes.</p>

<p><strong>Delivery time?</strong><br/>2–4 weeks.</p>

<p><strong>Samples?</strong><br/>Available.</p>

</div>

</div>

);

}



function Nav({setPage,cartCount,active}){

return(

<div style={nav}>

<div style={logoWrap} onClick={()=>setPage("home")}>

<div style={logoIcon}>PM</div>

<div style={logo}>PURE MOTION</div>

</div>

<div style={navLinks}>

{categories.map(c=>(
<Btn label={c.name} click={()=>setPage(c.id)} active={active===c.id}/>
))}

<Btn label={`Quote (${cartCount})`} click={()=>setPage("cart")} active={active==="cart"}/>

</div>

</div>

);

}



function Btn({label,click,active}){

return(

<button onClick={click} style={{...navBtn,background:active?brand.accent:"#111",color:active?"#000":brand.text}}>

{label}

</button>

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



function Footer(){

return(

<div style={footer}>

PURE MOTION

<br/><br/>

enquiries@puremotion.com

</div>

);

}



const wrapper={background:brand.bg,color:brand.text,minHeight:"100vh",fontFamily:"Arial"};

const nav={position:"sticky",top:0,background:brand.bg,padding:"16px",display:"flex",justifyContent:"space-between",flexWrap:"wrap",zIndex:10};

const logoWrap={display:"flex",gap:10,cursor:"pointer"};

const logoIcon={background:brand.accent,padding:"6px 10px",borderRadius:6,color:"#000",fontWeight:800};

const logo={color:brand.accent,fontWeight:900,fontSize:"22px",transform:"skewX(-12deg)"};

const navLinks={display:"flex",gap:8,flexWrap:"wrap"};

const navBtn={padding:"8px 14px",borderRadius:20,border:"none",cursor:"pointer"};

const hero={padding:40,display:"grid",gridTemplateColumns:"1fr 1fr",gap:40};

const heroTitle={fontSize:42};

const heroImg={width:"100%",borderRadius:20};

const missionBox={marginTop:20,padding:20,background:brand.accentSoft,borderRadius:12};

const bigLogo={
fontSize:54,
fontWeight:900,
color:brand.accent,
letterSpacing:3,
transform:"skewX(-14deg)",
textShadow:"0 0 22px rgba(34,197,94,0.4)",
marginBottom:10
};

const impactBox={
marginTop:20,
background:brand.card,
padding:20,
borderRadius:14
};

const impactGrid={
display:"grid",
gridTemplateColumns:"repeat(2,1fr)",
gap:12
};

const impactCard={
background:brand.accentSoft,
padding:14,
borderRadius:10,
textAlign:"center",
fontWeight:600
};

const section={padding:40};

const grid={display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:20,marginTop:20};

const card={background:brand.card,padding:16,borderRadius:12};

const cardHover={background:brand.card,padding:16,borderRadius:12,cursor:"pointer"};

const img={width:"100%",borderRadius:10};

const badge={position:"absolute",top:10,left:10,background:brand.accent,color:"#000",padding:"4px 8px",borderRadius:6,fontSize:12};

const form={display:"grid",gap:10,maxWidth:400};

const input={padding:10,borderRadius:6,border:"1px solid #333",background:"#020617",color:"#fff"};

const faqBox={background:brand.card,padding:20,borderRadius:12};

const cartItem={display:"flex",gap:10,marginTop:10};

const cta={background:brand.accent,border:"none",padding:"12px 18px",borderRadius:8,marginTop:10,width:"100%",cursor:"pointer"};

const whatsappBtn={background:"#25D366",border:"none",padding:"12px 18px",borderRadius:8,width:"100%",marginTop:10,cursor:"pointer"};

const modalBg={position:"fixed",inset:0,background:"rgba(0,0,0,0.7)",display:"flex",justifyContent:"center",alignItems:"center"};

const modal={background:brand.bg,padding:30,borderRadius:12,width:320};

const footer={padding:40,textAlign:"center",borderTop:"1px solid #111",marginTop:40};
