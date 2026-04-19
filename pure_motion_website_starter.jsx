import React, { useState } from "react";

const brand = {
  bg: "#020617",
  card: "#0f172a",
  accent: "#22c55e",
  accentGlow: "#4ade80",
  text: "#e5e7eb"
};

const products = {
  tracksuits: [
    { img: "/tracksuit1.png", name: "Elite Performance Tracksuit" },
    { img: "/tracksuit2.png", name: "Pro Training Tracksuit" }
  ],
  dance: [
    { img: "/irishdance.png", name: "Irish Dance Performance Wear" }
  ],
  hoodies: [
    { img: "/hoodie.png", name: "Pure Motion Hoodie" }
  ],
  jerseys: [
    { img: "/neonlogo.png", name: "Neon Performance Jersey" }
  ]
};

function Card({ item }) {
  return (
    <div style={{
      background: brand.card,
      padding: 16,
      borderRadius: 14,
      transition: "0.3s",
      cursor: "pointer",
      border: "1px solid #1f2937"
    }}
    onMouseOver={e => e.currentTarget.style.transform = "translateY(-6px)"}
    onMouseOut={e => e.currentTarget.style.transform = "translateY(0px)"}
    >
      <img
        src={item.img}
        style={{
          width: "100%",
          borderRadius: 10,
          marginBottom: 12
        }}
      />
      <div style={{ fontWeight: 600 }}>{item.name}</div>
    </div>
  );
}

export default function App() {
  const [section, setSection] = useState("home");

  const NavButton = ({ id, label }) => (
    <button
      onClick={() => setSection(id)}
      style={{
        background: "transparent",
        border: "none",
        color: brand.text,
        marginRight: 20,
        cursor: "pointer",
        fontWeight: 500
      }}
    >
      {label}
    </button>
  );

  const Grid = ({ items }) => (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
      gap: 20
    }}>
      {items.map((p, i) => <Card key={i} item={p} />)}
    </div>
  );

  return (
    <div style={{
      fontFamily: "Inter, Arial",
      background: brand.bg,
      color: brand.text,
      minHeight: "100vh"
    }}>

      {/* NAVBAR */}
      <div style={{
        padding: 24,
        borderBottom: "1px solid #111827",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>

        <div style={{
          fontSize: 24,
          fontWeight: 700,
          color: brand.accent
        }}>
          PURE MOTION
        </div>

        <div>
          <NavButton id="home" label="Home"/>
          <NavButton id="tracksuits" label="Tracksuits"/>
          <NavButton id="jerseys" label="Jerseys"/>
          <NavButton id="dance" label="Dance & Fitness"/>
          <NavButton id="hoodies" label="Hoodies"/>
        </div>

      </div>


      {/* HERO */}
      {section === "home" && (
        <div style={{ padding: 40 }}>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 40,
            alignItems: "center"
          }}>

            <div>

              <h1 style={{
                fontSize: 52,
                marginBottom: 20
              }}>
                Performance
                <span style={{ color: brand.accent }}> Driven</span>
              </h1>

              <p style={{
                opacity: 0.8,
                marginBottom: 30,
                lineHeight: 1.6
              }}>
                Premium teamwear, custom jerseys and elite performance apparel designed for clubs, athletes and teams.
              </p>

              <button
                onClick={() => setSection("tracksuits")}
                style={{
                  background: brand.accent,
                  border: "none",
                  padding: "14px 22px",
                  borderRadius: 8,
                  fontWeight: 600,
                  cursor: "pointer"
                }}
              >
                Browse Collection
              </button>

            </div>

            <img
              src="/hoodie.png"
              style={{
                width: "100%",
                borderRadius: 18
              }}
            />

          </div>


          <h2 style={{ marginTop: 60 }}>Shop Categories</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 20,
            marginTop: 20
          }}>

            <div onClick={() => setSection("tracksuits")} style={categoryCard}>
              Tracksuits
            </div>

            <div onClick={() => setSection("jerseys")} style={categoryCard}>
              Jerseys
            </div>

            <div onClick={() => setSection("dance")} style={categoryCard}>
              Dance & Fitness
            </div>

            <div onClick={() => setSection("hoodies")} style={categoryCard}>
              Hoodies
            </div>

          </div>

        </div>
      )}


      {/* TRACKSUITS */}
      {section === "tracksuits" && (
        <Page title="Tracksuits">
          <Grid items={products.tracksuits}/>
        </Page>
      )}


      {/* JERSEYS */}
      {section === "jerseys" && (
        <Page title="Jerseys">
          <Grid items={products.jerseys}/>
        </Page>
      )}


      {/* DANCE */}
      {section === "dance" && (
        <Page title="Dance & Fitness Wear">
          <Grid items={products.dance}/>
        </Page>
      )}


      {/* HOODIES */}
      {section === "hoodies" && (
        <Page title="Hoodies">
          <Grid items={products.hoodies}/>
        </Page>
      )}


      {/* FOOTER */}
      <div style={{
        marginTop: 80,
        padding: 30,
        borderTop: "1px solid #111827",
        textAlign: "center",
        opacity: 0.6
      }}>
        enquiries@puremotion.com
      </div>

    </div>
  );
}


function Page({ title, children }) {
  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ marginBottom: 30 }}>{title}</h1>
      {children}
    </div>
  );
}

const categoryCard = {
  padding: 30,
  borderRadius: 14,
  background: "#020617",
  border: "1px solid #1f2937",
  cursor: "pointer",
  textAlign: "center",
  fontWeight: 600
};
