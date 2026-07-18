import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <Reveal id="precios" style={{ maxWidth: 1180, margin: "0 auto", padding: "100px 24px" }}>
      <p
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          color: "#39ff8a",
          fontSize: 13,
          letterSpacing: "0.08em",
          margin: "0 0 10px",
        }}
      >
        05 · PRECIOS
      </p>
      <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, margin: "0 0 48px" }}>
        Elige tu tarifa
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
          maxWidth: 800,
        }}
      >
        <div
          style={{
            border: "1px solid #2a2f2c",
            borderRadius: 12,
            padding: 40,
            background: "#0c0e0d",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              color: "#a8b3ac",
              fontSize: 14,
              marginBottom: 10,
            }}
          >
            1 DÍA
          </div>
          <div style={{ fontSize: 44, fontWeight: 800, marginBottom: 18 }}>
            700€
          </div>
          <ul
            style={{
              color: "#a8b3ac",
              fontSize: 14,
              lineHeight: 2,
              paddingLeft: 18,
              margin: 0,
            }}
          >
            <li>Acceso a una jornada completa</li>
            <li>Comidas y bebidas incluidas</li>
            <li>Networking y mentorías</li>
          </ul>
        </div>
        <div
          style={{
            border: "1px solid #39ff8a",
            borderRadius: 12,
            padding: 40,
            background:
              "linear-gradient(135deg, rgba(57,255,138,0.08), transparent)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -12,
              right: 24,
              background: "#39ff8a",
              color: "#08090b",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 11,
              fontWeight: 700,
              padding: "4px 10px",
              borderRadius: 100,
            }}
          >
            RECOMENDADA
          </div>
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              color: "#39ff8a",
              fontSize: 14,
              marginBottom: 10,
            }}
          >
            2 DÍAS · COMPLETA
          </div>
          <div style={{ fontSize: 44, fontWeight: 800, marginBottom: 18 }}>
            1000€
          </div>
          <ul
            style={{
              color: "#a8b3ac",
              fontSize: 14,
              lineHeight: 2,
              paddingLeft: 18,
              margin: 0,
            }}
          >
            <li>Acceso completo a los 2 días</li>
            <li>Comidas y bebidas incluidas</li>
            <li>Networking y mentorías</li>
            <li>Opción a presentar en la final</li>
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
