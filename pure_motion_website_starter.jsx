import React, { useState } from "react";

export default function PureMotionWebsite() {
  const [page, setPage] = useState("home");

  const Nav = () => (
    <nav style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px 40px",background:"#020617",borderBottom:"1px solid #0ea5e9"}}>
      <h2 style={{letterSpacing:"2px"}}>PURE MOTION</h2>

      <div style={{display:"flex",gap:"25px"}}>
        {[
          ["Home","home"],
          ["Jerseys","jerseys"],
          ["Tracksuits","tracksuits"],
          ["Dancewear","dance"],
          ["Contact","contact"]
        ].map(([label,value])=>(
          <button key={value} onClick={()=>setPage(value)} style={{background:"none",border:"none",color:"white",cursor:"pointer",fontSize:"15px",opacity:0.8}}>
            {label}
          </button>
        ))}
      </div>
    </nav>
  );

  const Section = ({children}) => (
    <section style={{padding:"70px 20px",maxWidth:"1200px",margin:"auto"}}>
      {children}
    </section>
  );

  const Card = ({img,title,onClick}) => (
    <div onClick={onClick} style={{cursor:"pointer",background:"#020617",borderRadius:"16px",overflow:"hidden",boxShadow:"0 20px 40px rgba(0,0,0,0.6)",transition:"0.3s"}}>
      <img src={img} style={{width:"100%",height:"260px",objectFit:"cover"}} />
      <div style={{padding:"18px"}}>
        <h3>{title}</h3>
      </div>
    </div>
  );

  return (
    <div style={{fontFamily:"Inter, Arial",background:"linear-gradient(180deg,#020617,#071a2f)",color:"white",minHeight:"100vh"}}>

      <Nav />

      {page==="home" && (
        <>
          <section style={{padding:"120px 20px",textAlign:"center",background:"radial-gradient(circle at 30% 20%, #0ea5e9 0%, transparent 40%), radial-gradient(circle at 80% 40%, #22c55e 0%, transparent 40%)"}}>
            <h1 style={{fontSize:"56px",letterSpacing:"2px"}}>PURE MOTION</h1>
            <p style={{opacity:0.8,fontSize:"20px"}}>Performance sportswear built for teams & athletes</p>
          </section>

          <Section>
            <h2 style={{marginBottom:"40px"}}>SHOP BY CATEGORY</h2>

            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"25px"}}>

              <Card
                title="Jerseys"
                img="/Screenshot 2026-04-19 at 17.18.55.png"
                onClick={()=>setPage("jerseys")}
              />

              <Card
                title="Tracksuits"
                img="/Screenshot 2026-04-19 at 17.18.20.png"
                onClick={()=>setPage("tracksuits")}
              />

              <Card
                title="Dancewear"
                img="/Screenshot 2026-04-19 at 17.18.46.png"
                onClick={()=>setPage("dance")}
              />

            </div>
          </Section>
        </>
      )}

      {page==="jerseys" && (
        <Section>
          <h2>Jersey Designs</h2>
          <img src="/Screenshot 2026-04-19 at 17.18.55.png" style={{width:"100%",borderRadius:"16px"}} />
        </Section>
      )}

      {page==="tracksuits" && (
        <Section>
          <h2>Tracksuit Range</h2>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"20px"}}>

            <img src="/Screenshot 2026-04-19 at 17.18.20.png" style={{width:"100%",borderRadius:"16px"}} />

            <img src="/Screenshot 2026-04-19 at 17.18.29.png" style={{width:"100%",borderRadius:"16px"}} />

            <img src="/Screenshot 2026-04-19 at 17.18.37.png" style={{width:"100%",borderRadius:"16px"}} />

          </div>
        </Section>
      )}

      {page==="dance" && (
        <Section>
          <h2>Dance & Fitness Wear</h2>
          <img src="/Screenshot 2026-04-19 at 17.18.46.png" style={{width:"100%",borderRadius:"16px"}} />
        </Section>
      )}

      {page==="contact" && (
        <Section>
          <h2>Request Quote</h2>

          <form style={{display:"grid",gap:"12px",maxWidth:"420px"}}>
            <input placeholder="Name" style={{padding:"12px",borderRadius:"8px",border:"none"}} />
            <input placeholder="Email" style={{padding:"12px",borderRadius:"8px",border:"none"}} />
            <textarea placeholder="Products required" style={{padding:"12px",borderRadius:"8px",border:"none"}} />
            <button style={{padding:"14px",background:"#0ea5e9",border:"none",borderRadius:"8px",color:"white",fontSize:"16px"}}>Send Enquiry</button>
          </form>

        </Section>
      )}

    </div>
  );
}
