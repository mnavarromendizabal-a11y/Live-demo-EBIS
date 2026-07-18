import Reveal from "./Reveal";

const STATS = [
  { value: "2", label: "días de desarrollo continuo" },
  { value: "20", label: "equipos, aforo limitado" },
  { value: "100", label: "personas como máximo" },
  { value: "∞", label: "reto: totalmente libre" },
];

export default function About() {
  return (
    <Reveal id="sobre" style={{ maxWidth: 1180, margin: "0 auto", padding: "100px 24px" }}>
      <p
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          color: "#39ff8a",
          fontSize: 13,
          letterSpacing: "0.08em",
          margin: "0 0 10px",
        }}
      >
        01 · SOBRE EL EVENTO
      </p>
      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 700,
          margin: "0 0 20px",
          maxWidth: 680,
          lineHeight: 1.2,
        }}
      >
        Un hackathon sin guion, para equipos que ya saben construir.
      </h2>
      <p
        style={{
          fontSize: 17,
          lineHeight: 1.7,
          color: "#a8b3ac",
          maxWidth: 720,
          margin: "0 0 48px",
        }}
      >
        Hack IA Madrid es un hackathon presencial de dos días dedicado por
        completo a la Inteligencia Artificial. No hay un reto impuesto: cada
        equipo elige el problema que quiere resolver y construye una solución
        de IA funcional desde cero. Está pensado para perfiles técnicos
        avanzados — no es una introducción a la IA, es un espacio para llevar
        al límite lo que ya sabes hacer.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: 20,
        }}
      >
        {STATS.map((stat) => (
          <div
            key={stat.label}
            style={{
              border: "1px solid #1c211e",
              borderRadius: 8,
              padding: 28,
              background: "#0c0e0d",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontSize: 32,
                fontWeight: 700,
                color: "#39ff8a",
              }}
            >
              {stat.value}
            </div>
            <div style={{ color: "#a8b3ac", fontSize: 14, marginTop: 6 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
