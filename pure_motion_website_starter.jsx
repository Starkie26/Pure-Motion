import React from "react";

export default function PureMotionWebsite() {
  return (
    <div style={{fontFamily:"Inter, Arial",background:"linear-gradient(180deg,#020617,#071a2f)",color:"white",minHeight:"100vh"}}>
      
      {/* HERO */}
      <section style={{padding:"80px 20px",textAlign:"center",background:"radial-gradient(circle at 20% 20%, #0ea5e9 0%, transparent 40%), radial-gradient(circle at 80% 30%, #22c55e 0%, transparent 40%)"}}>
        <h1 style={{fontSize:"48px",letterSpacing:"2px",marginBottom:"10px"}}>PURE MOTION</h1>
        <p style={{opacity:0.8,fontSize:"20px",maxWidth:"600px",margin:"0 auto"}}>
          Performance Sportswear Designed For Teams, Athletes & Studios
        </p>
        <button style={{marginTop:"30px",padding:"14px 28px",background:"#0ea5e9",border:"none",borderRadius:"8px",color:"white",fontSize:"16px",cursor:"pointer"}}>
          Get Quote
        </button>
      </section>

      {/* PRODUCTS */}
      <section style={{padding:"60px 20px",maxWidth:"1100px",margin:"auto"}}>
        <h2 style={{textAlign:"center",marginBottom:"40px"}}>OUR RANGE</h2>

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"20px"}}>

          {[
            {title:"Football Kits",img:"https://images.unsplash.com/photo-1517649763962-0c623066013b"},
            {title:"Teamwear",img:"https://images.unsplash.com/photo-1520975922284-8b456906c813"},
            {title:"Hoodies & Sweats",img:"https://images.unsplash.com/photo-1520974735194-3d5c1f0bb6c6"},
            {title:"Dance & Fitness",img:"https://images.unsplash.com/photo-1518611012118-696072aa579a"}
          ].map((p)=>(
            <div key={p.title} style={{background:"#020617",borderRadius:"14px",overflow:"hidden",boxShadow:"0 10px 30px rgba(0,0,0,0.4)"}}>
              <img src={p.img} style={{width:"100%",height:"200px",objectFit:"cover"}}/>
              <div style={{padding:"18px"}}>
                <h3>{p.title}</h3>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* BRAND */}
      <section style={{padding:"80px 20px",textAlign:"center",background:"#020617"}}>
        <h2>ELEVATE YOUR TEAM IMAGE</h2>
        <p style={{opacity:0.8,maxWidth:"600px",margin:"auto"}}>
          High quality custom kits, training wear and performance apparel at competitive pricing.
        </p>
      </section>

      {/* CONTACT */}
      <section style={{padding:"80px 20px",textAlign:"center"}}>
        <h2>REQUEST A QUOTE</h2>
        <p>Email: info@puremotion.com</p>
      </section>

    </div>
  );
}
