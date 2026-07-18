"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const FAQ_DATA = [
  {
    q: "¿Necesito llevar equipo formado?",
    a: "Puedes venir con tu equipo ya formado (hasta el tamaño máximo permitido) o inscribirte de forma individual y formar equipo el primer día durante la sesión de team building.",
  },
  {
    q: "¿Qué incluye la inscripción?",
    a: "La inscripción incluye acceso al espacio de trabajo durante los días contratados, comidas y bebidas, mentorías técnicas y acceso a las sesiones y al pitch final.",
  },
  {
    q: "¿Hay alojamiento?",
    a: "El evento no incluye alojamiento. Publicaremos recomendaciones de hoteles cercanos al venue antes del evento para quienes lo necesiten.",
  },
  {
    q: "¿Cómo se elige al ganador?",
    a: "Un jurado técnico evaluará los proyectos en el pitch final según criterios de innovación, viabilidad técnica y calidad de la ejecución en el tiempo disponible.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Reveal id="faq" style={{ maxWidth: 820, margin: "0 auto", padding: "100px 24px" }}>
      <p
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          color: "#39ff8a",
          fontSize: 13,
          letterSpacing: "0.08em",
          margin: "0 0 10px",
        }}
      >
        07 · FAQ
      </p>
      <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, margin: "0 0 40px" }}>
        Preguntas frecuentes
      </h2>
      {FAQ_DATA.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.q}
            style={{ borderBottom: "1px solid #1c211e", padding: "22px 0", cursor: "pointer" }}
            onClick={() => setOpenIndex(open ? null : i)}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: 17,
                fontWeight: 600,
              }}
            >
              {item.q}
              <span style={{ fontFamily: "var(--font-jetbrains-mono), monospace", color: "#39ff8a" }}>
                {open ? "−" : "+"}
              </span>
            </div>
            {open && (
              <p style={{ color: "#a8b3ac", fontSize: 15, lineHeight: 1.7, margin: "14px 0 0" }}>
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </Reveal>
  );
}
