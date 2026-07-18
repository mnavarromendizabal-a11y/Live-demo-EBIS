import Reveal from "./Reveal";

const JURY_PLACEHOLDERS = [
  "Jurado por confirmar",
  "Jurado por confirmar",
  "Jurado por confirmar",
  "Jurado por confirmar",
];

export default function Prizes() {
  return (
    <Reveal id="premios" style={{ maxWidth: 1180, margin: "0 auto", padding: "100px 24px" }}>
      <p
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          color: "#39ff8a",
          fontSize: 13,
          letterSpacing: "0.08em",
          margin: "0 0 10px",
        }}
      >
        03 · PREMIOS Y JURADO
      </p>
      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 700,
          margin: "0 0 40px",
          maxWidth: 700,
        }}
      >
        El proyecto ganador no se queda en Madrid.
      </h2>

      <div
        style={{
          border: "1px solid rgba(57,255,138,0.4)",
          borderRadius: 12,
          padding: 48,
          background:
            "linear-gradient(135deg, rgba(57,255,138,0.08), rgba(57,255,138,0.02))",
          textAlign: "center",
          marginBottom: 56,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 13,
            color: "#39ff8a",
            letterSpacing: "0.1em",
            marginBottom: 14,
          }}
        >
          PREMIO PRINCIPAL
        </div>
        <div
          style={{
            fontSize: "clamp(24px, 4vw, 38px)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 14,
          }}
        >
          Presenta tu proyecto en el
          <br />
          <span style={{ color: "#39ff8a" }}>
            Mobile World Congress de Almería
          </span>
        </div>
        <p style={{ color: "#a8b3ac", fontSize: 15, maxWidth: 560, margin: "0 auto" }}>
          El equipo ganador tendrá la oportunidad de mostrar su proyecto ante
          la industria en uno de los grandes escaparates tecnológicos del año.
        </p>
      </div>

      <h3
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 16,
          color: "#e7ede9",
          margin: "0 0 20px",
        }}
      >
        Jurado
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
        }}
      >
        {JURY_PLACEHOLDERS.map((name, i) => (
          <div
            key={i}
            style={{
              border: "1px dashed #2a2f2c",
              borderRadius: 8,
              padding: 28,
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "#14201a",
                border: "1px solid #2a2f2c",
                margin: "0 auto 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#39ff8a",
                fontFamily: "var(--font-jetbrains-mono), monospace",
              }}
            >
              ?
            </div>
            <div style={{ fontSize: 14, color: "#a8b3ac" }}>{name}</div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
