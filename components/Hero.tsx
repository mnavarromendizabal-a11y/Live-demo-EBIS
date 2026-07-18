import Nav from "./Nav";

const CODE_LINE =
  "const model = await train(data);\nif (accuracy > threshold) deploy();\n// build something real\n";
const CODE_LINES = CODE_LINE.repeat(30);

export default function Hero() {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(57,255,138,0.12), transparent), #08090b",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          opacity: 0.1,
          pointerEvents: "none",
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 13,
          lineHeight: 1.6,
          color: "#39ff8a",
          whiteSpace: "pre",
        }}
      >
        <div style={{ animation: "scrollCode 40s linear infinite" }}>
          {CODE_LINES}
          {CODE_LINES}
        </div>
      </div>

      <Nav />

      <section
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 900,
          margin: "0 auto",
          padding: "70px 24px 100px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-jetbrains-mono), monospace",
            fontSize: 13,
            color: "#39ff8a",
            border: "1px solid rgba(57,255,138,0.35)",
            padding: "7px 14px",
            borderRadius: 100,
            marginBottom: 28,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#39ff8a",
              boxShadow: "0 0 8px #39ff8a",
            }}
          />
          25–26 JULIO 2026 · MADRID · PRESENCIAL
        </div>
        <h1
          style={{
            fontSize: "clamp(38px, 7vw, 74px)",
            lineHeight: 1.04,
            fontWeight: 800,
            margin: "0 0 22px",
            letterSpacing: "-0.02em",
          }}
        >
          Construye lo que otros
          <br />
          solo van a{" "}
          <span
            style={{
              color: "#39ff8a",
              textShadow: "0 0 24px rgba(57,255,138,0.5)",
            }}
          >
            prompt
          </span>
          ear.
        </h1>
        <p
          style={{
            fontSize: 19,
            lineHeight: 1.6,
            color: "#a8b3ac",
            maxWidth: 620,
            margin: "0 auto 40px",
          }}
        >
          48 horas. Reto libre. Nivel técnico alto. 100 plazas para los
          equipos que quieran llevar su idea de IA de cero a demo funcional —
          sin red.
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#registro"
            style={{
              textDecoration: "none",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontWeight: 700,
              fontSize: 15,
              background: "#39ff8a",
              color: "#08090b",
              padding: "16px 32px",
              borderRadius: 4,
              animation: "glowPulse 3s ease-in-out infinite",
            }}
          >
            Inscríbete ahora →
          </a>
          <a
            href="#sobre"
            style={{
              textDecoration: "none",
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontWeight: 500,
              fontSize: 15,
              border: "1px solid #2a2f2c",
              color: "#e7ede9",
              padding: "16px 32px",
              borderRadius: 4,
            }}
          >
            Ver detalles
          </a>
        </div>
      </section>
    </div>
  );
}
