import Reveal from "./Reveal";

const DAY1 = [
  { time: "09:00", label: "Kickoff y bienvenida" },
  { time: "10:00", label: "Formación de equipos y definición de reto" },
  { time: "11:00", label: "Desarrollo" },
  { time: "14:00", label: "Comida" },
  { time: "15:00", label: "Desarrollo + mentorías técnicas" },
];

const DAY2 = [
  { time: "09:00", label: "Desarrollo (sprint final)" },
  { time: "13:00", label: "Cierre de código" },
  { time: "14:00", label: "Comida" },
  { time: "15:30", label: "Pitch final" },
  { time: "18:00", label: "Entrega de premios y clausura" },
];

function AgendaColumn({
  title,
  items,
}: {
  title: string;
  items: { time: string; label: string }[];
}) {
  return (
    <div>
      <h3
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 17,
          color: "#39ff8a",
          margin: "0 0 20px",
        }}
      >
        {title}
      </h3>
      {items.map((item) => (
        <div
          key={item.time}
          style={{
            display: "flex",
            gap: 16,
            padding: "14px 0",
            borderBottom: "1px solid #1c211e",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              color: "#7a8580",
              fontSize: 14,
              minWidth: 70,
            }}
          >
            {item.time}
          </div>
          <div style={{ fontSize: 15, color: "#dde5e1" }}>{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function Agenda() {
  return (
    <Reveal
      id="agenda"
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
          02 · AGENDA
        </p>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 700,
            margin: "0 0 8px",
          }}
        >
          Esquema orientativo
        </h2>
        <p style={{ color: "#a8b3ac", fontSize: 15, margin: "0 0 48px" }}>
          El horario detallado se confirmará antes del evento y puede sufrir
          cambios.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 32,
          }}
        >
          <AgendaColumn title="DÍA 1 — 25 JULIO" items={DAY1} />
          <AgendaColumn title="DÍA 2 — 26 JULIO" items={DAY2} />
        </div>
      </div>
    </Reveal>
  );
}
