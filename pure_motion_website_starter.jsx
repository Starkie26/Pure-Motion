import React from "react";

export default function PureMotionWebsite() {
  const products = [
    {title:"Jerseys",img:"https://images.unsplash.com/photo-1518091043644-c1d4457512c6"},
    {title:"Football Kits",img:"https://images.unsplash.com/photo-1517649763962-0c623066013b"},
    {title:"Tracksuits",img:"https://images.unsplash.com/photo-1520975922284-8b456906c813"},
    {title:"Hoodies",img:"https://images.unsplash.com/photo-1520974735194-3d5c1f0bb6c6"},
    {title:"Dance & Fitness",img:"https://images.unsplash.com/photo-1518611012118-696072aa579a"},
    {title:"Training Wear",img:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438"}
  ];

  return (
    <div style={{fontFamily:"Inter, Arial",background:"linear-gradient(180deg,#020617,#071a2f)",color:"white",minHeight:"100vh"}}>
      
      {/* HERO */}
      <section style={{padding:"90px 20px",textAlign:"center",background:"radial-gradient(circle at 20% 20%, #0ea5e9 0%, transparent 40%), radial-gradient(circle at 80% 30%, #22c55e 0%, transparent 40%)"}}>
        <h1 style={{fontSize:"52px",letterSpacing:"2px",marginBottom:"10px"}}>PURE MOTION</h1>
        <p style={{opacity:0.85,fontSize:"20px",maxWidth:"650px",margin:"0 auto"}}>
          Premium Custom Sportswear – Jerseys, Kits, Tracksuits, Dancewear & Performance Apparel
        </p>
        <button style={{marginTop:"30px",padding:"14px 32px",background:"#0ea5e9",border:"none",borderRadius:"8px",color:"white",fontSize:"16px",cursor:"pointer"}}>
          Request Quote
        </button>
      </section>

      {/* PRODUCT GRID */}
      <section style={{padding:"60px 20px",maxWidth:"1150px",margin:"auto"}}>
        <h2 style={{textAlign:"center",marginBottom:"40px",letterSpacing:"1px"}}>PRODUCT RANGE</h2>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"22px"}}>
          {products.map((p)=>(
            <div key={p.title} style={{background:"#020617",borderRadius:"16px",overflow:"hidden",boxShadow:"0 15px 35px rgba(0,0,0,0.5)"}}>
              <img src={p.img} style={{width:"100%",height:"210px",objectFit:"cover"}}/>
              <div style={{padding:"20px"}}>
                <h3>{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BRAND STATEMENT */}
      <section style={{padding:"90px 20px",textAlign:"center"}}>
        <h2 style={{fontSize:"30px"}}>DESIGNED FOR PERFORMANCE</h2>
        <p style={{opacity:0.8,maxWidth:"650px",margin:"20px auto"}}>
          Pure Motion apparel is designed using modern athletic cuts, premium fabrics and bold colour combinations inspired by elite sports brands.
        </p>
      </section>

      {/* CONTACT */}
      <section style={{padding:"80px 20px",textAlign:"center",background:"#020617"}}>
        <h2>START YOUR ORDER</h2>
        <p>Email: info@puremotion.com</p>
      </section>

    </div>
  );
}
