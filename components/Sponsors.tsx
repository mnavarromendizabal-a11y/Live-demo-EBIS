import Reveal from "./Reveal";

const SPONSORS = [
  { name: "Close", highlight: "AI" },
  { name: "Distop", highlight: "IA" },
  { name: "A", highlight: "Ir", suffix: " LLM" },
];

export default function Sponsors() {
  return (
    <Reveal
      id="patrocinadores"
      style={{
        background: "#0c0e0d",
        borderTop: "1px solid #1c211e",
        borderBottom: "1px solid #1c211e",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "100px 24px" }}>
        <p
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            color: "#39ff8a",
            fontSize: 13,
            letterSpacing: "0.08em",
            margin: "0 0 10px",
          }}
        >
          04 · PATROCINADORES
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 700,
            margin: "0 0 48px",
            textAlign: "center",
          }}
        >
          Hacen posible este evento
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            marginBottom: 44,
          }}
        >
          {SPONSORS.map((sponsor) => (
            <div
              key={sponsor.name}
              style={{
                border: "1px solid #1c211e",
                borderRadius: 10,
                padding: "44px 24px",
                textAlign: "center",
                background: "#08090b",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontWeight: 800,
                  fontSize: 26,
                  letterSpacing: "-0.01em",
                }}
              >
                {sponsor.name}
                <span style={{ color: "#39ff8a" }}>{sponsor.highlight}</span>
                {sponsor.suffix}
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", color: "#a8b3ac", fontSize: 15 }}>
          ¿Quieres que tu empresa esté aquí?{" "}
          <a href="mailto:patrocinios@hackiamadrid.com">
            Conviértete en patrocinador
          </a>
        </p>
      </div>
    </Reveal>
  );
}
