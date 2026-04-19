{page === "home" && (
  <div style={hero}>

    <div>

      <h1 style={heroTitle}>
        Elite Teamwear &
        <span style={{color:brand.accent}}> Custom Performance</span>
      </h1>

      <p style={{
        opacity:0.85,
        lineHeight:1.6,
        maxWidth:520
      }}>
        Custom kits, tracksuits and performance apparel designed for teams, clubs and athletes.
      </p>


      {/* MISSION STATEMENT */}
      <div style={{
        marginTop:30,
        padding:24,
        background:"#020617",
        border:"1px solid #1f2937",
        borderRadius:12
      }}>

        <h3 style={{
          marginBottom:12,
          color:"#22c55e"
        }}>
          Our Mission
        </h3>

        <p style={{
          opacity:0.85,
          lineHeight:1.6,
          fontSize:15
        }}>
          Pure Motion exists to make high-quality custom teamwear accessible to every club, team, and athlete.
        </p>

        <p style={{
          opacity:0.75,
          lineHeight:1.6,
          marginTop:10
        }}>
          We design and produce premium custom kits, tracksuits, and performance apparel that combine professional-level quality with affordable pricing.
        </p>

        <p style={{
          opacity:0.75,
          lineHeight:1.6,
          marginTop:10
        }}>
          Our goal is to give grassroots clubs the same level of design, finish, and product choice typically reserved for elite teams — ensuring performance is not only felt, but seen.
        </p>

      </div>


      <button style={cta} onClick={() => setPage("tracksuits")}>
        View Collection
      </button>

    </div>


    <img
      src="/hoodie.png"
      style={{
        width:"100%",
        borderRadius:20
      }}
    />

  </div>
)}
