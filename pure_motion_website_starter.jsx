import React from "react";

export default function PureMotionWebsite() {

  const products = [
    {
      title:"Jerseys",
      img:"https://images.unsplash.com/photo-1518091043644-c1d4457512c6"
    },

    {
      title:"Tracksuits",
      customImages:[
        "https://images.unsplash.com/photo-1520975922284-8b456906c813",
        "https://images.unsplash.com/photo-1556906781-9a412961c28c",
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
      ]
    },

    {
      title:"Dance & Fitness",
      img:"https://images.unsplash.com/photo-1518611012118-696072aa579a",
      extra:"irish-dance"
    },

    {
      title:"Training Wear",
      img:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
    }
  ];

  return (
    <div style={{fontFamily:"Inter, Arial",background:"linear-gradient(180deg,#020617,#071a2f)",color:"white",minHeight:"100vh"}}>
      
      {/* HERO */}
      <section style={{padding:"90px 20px",textAlign:"center",background:"radial-gradient(circle at 20% 20%, #0ea5e9 0%, transparent 40%), radial-gradient(circle at 80% 30%, #22c55e 0%, transparent 40%)"}}>
        <h1 style={{fontSize:"52px",letterSpacing:"2px",marginBottom:"10px"}}>PURE MOTION</h1>
        <p style={{opacity:0.85,fontSize:"20px",maxWidth:"650px",margin:"0 auto"}}>
          Premium Custom Sportswear – Jerseys, Kits, Tracksuits, Dancewear & Performance Apparel
        </p>
      </section>

      {/* PRODUCTS */}
      <section style={{padding:"60px 20px",maxWidth:"1150px",margin:"auto"}}>
        <h2 style={{textAlign:"center",marginBottom:"40px"}}>PRODUCT RANGE</h2>

        {/* Jerseys */}
        <div style={{marginBottom:"50px"}}>
          <h3>Jerseys</h3>
          <img src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6" style={{width:"100%",maxHeight:"320px",objectFit:"cover",borderRadius:"14px"}} />
        </div>

        {/* Tracksuits */}
        <div style={{marginBottom:"50px"}}>
          <h3>Tracksuits</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"20px"}}>

            <img src="https://images.unsplash.com/photo-1520975922284-8b456906c813" style={{width:"100%",borderRadius:"14px"}} />

            <img src="https://images.unsplash.com/photo-1556906781-9a412961c28c" style={{width:"100%",borderRadius:"14px"}} />

            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff" style={{width:"100%",borderRadius:"14px"}} />

          </div>
        </div>

        {/* Dance */}
        <div>
          <h3>Dance & Fitness</h3>
          <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a" style={{width:"100%",maxHeight:"320px",objectFit:"cover",borderRadius:"14px"}} />
        </div>

      </section>

      {/* CTA */}
      <section style={{padding:"80px 20px",textAlign:"center"}}>
        <h2>START YOUR ORDER</h2>
        <p>Email: info@puremotion.com</p>
      </section>

    </div>
  );
}
