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

window.history.pushState({page:newPage}, "", newPage==="home"?"/":"/"+newPage);

setFade(false);

setTimeout(()=>{
setPageState(newPage);
setFade(true);
window.scrollTo({top:0,behavior:"smooth"});
},120);

}

function openProduct(item){

window.history.pushState({modal:true},"");

setSelected(item);

}

function closeProduct(){

window.history.back();

}

useEffect(()=>{

window.onpopstate=(event)=>{

if(selected){
setSelected(null);
return;
}

setPageState(getPage());

};

},[selected]);

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
<ProductGrid items={products[cat]} openProduct={openProduct}/>
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
close={closeProduct}
addToCart={addToCart}
/>

)}

<Footer/>

</div>

);

}



function ProductGrid({items,openProduct}){

return(

<div style={grid}>

{items.map((p,i)=>(

<div key={i} style={cardHover} onClick={()=>openProduct(p)}>

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
