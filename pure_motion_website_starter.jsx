import React, { useState } from "react";

export default function PureMotionWebsite() {
  const [page, setPage] = useState("home");

  const Nav = () => (
    <nav style={{display:"flex",gap:"20px",padding:"20px",justifyContent:"center",background:"#020617",borderBottom:"1px solid #0ea5e9"}}>
      {[
        ["Home","home"],
        ["Jerseys","jerseys"],
        ["Tracksuits","tracksuits"],
        ["Dancewear","dance"],
        ["Contact","contact"]
      ].map(([label,value])=>(
        <button key={value} onClick={()=>setPage(value)} style={{background:"none",border:"none",color:"white",cursor:"pointer",fontSize:"16px"}}>
          {label}
        </button>
      ))}
    </nav>
  );

  const Section = ({children}) => (
    <section style={{padding:"60px 20px",maxWidth:"1100px",margin:"auto"}}>
      {children}
    </section>
  );

  return (
    <div style={{fontFamily:"Inter, Arial",background:"linear-gradient(180deg,#020617,#071a2f)",color:"white",minHeight:"100vh"}}>

      <Nav />

      {page==="home" && (
        <Section>
          <h1 style={{fontSize:"48px"}}>PURE MOTION</h1>
          <p>Premium custom sportswear for teams, gyms and studios</p>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"20px",marginTop:"40px"}}>

            <div onClick={()=>setPage("jerseys")} style={{cursor:"pointer"}}>
              <img src="/images/hoodie.png" style={{width:"100%",borderRadius:"12px"}} />
              <h3>Jerseys</h3>
            </div>

            <div onClick={()=>setPage("tracksuits")} style={{cursor:"pointer"}}>
              <img src="/images/tracksuit1.png" style={{width:"100%",borderRadius:"12px"}} />
              <h3>Tracksuits</h3>
            </div>

            <div onClick={()=>setPage("dance")} style={{cursor:"pointer"}}>
              <img src="/images/irishdance.png" style={{width:"100%",borderRadius:"12px"}} />
              <h3>Dancewear</h3>
            </div>

          </div>
        </Section>
      )}

      {page==="jerseys" && (
        <Section>
          <h2>Jerseys</h2>
          <img src="/images/neonlogo.png" style={{width:"100%",borderRadius:"12px"}} />
        </Section>
      )}

      {page==="tracksuits" && (
        <Section>
          <h2>Tracksuits</h2>

          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"20px"}}>
            <img src="/images/tracksuit1.png" style={{width:"100%",borderRadius:"12px"}} />
            <img src="/images/tracksuit2.png" style={{width:"100%",borderRadius:"12px"}} />
            <img src="/images/tracksuit3.png" style={{width:"100%",borderRadius:"12px"}} />
          </div>

        </Section>
      )}

      {page==="dance" && (
        <Section>
          <h2>Dance & Fitness</h2>
          <img src="/images/irishdance.png" style={{width:"100%",borderRadius:"12px"}} />
        </Section>
      )}

      {page==="contact" && (
        <Section>
          <h2>Request Quote</h2>

          <form style={{display:"grid",gap:"10px",maxWidth:"400px"}}>
            <input placeholder="Name" style={{padding:"10px"}} />
            <input placeholder="Email" style={{padding:"10px"}} />
            <textarea placeholder="What products do you need?" style={{padding:"10px"}} />
            <button style={{padding:"12px",background:"#0ea5e9",border:"none",color:"white"}}>Send</button>
          </form>

        </Section>
      )}

    </div>
  );
}
