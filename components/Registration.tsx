"use client";

import { useState, FormEvent } from "react";
import Reveal from "./Reveal";

type FormState = {
  name: string;
  email: string;
  company: string;
  ticket: string;
  terms: boolean;
};

type Errors = {
  name?: boolean;
  email?: boolean;
  ticket?: boolean;
  general?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputStyle: (hasError?: boolean) => React.CSSProperties = (hasError) => ({
  width: "100%",
  padding: "14px 16px",
  background: "#08090b",
  border: `1px solid ${hasError ? "#ff6b6b" : "#2a2f2c"}`,
  borderRadius: 6,
  color: "#e7ede9",
  fontSize: 15,
});

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-jetbrains-mono), monospace",
  fontSize: 13,
  color: "#a8b3ac",
  marginBottom: 8,
};

export default function Registration() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    ticket: "",
    terms: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs: Errors = {};
    if (!form.name.trim()) errs.name = true;
    if (!EMAIL_RE.test(form.email)) errs.email = true;
    if (!form.ticket) errs.ticket = true;
    if (!form.terms)
      errs.general = "Debes aceptar los términos y la política de privacidad.";
    if (Object.keys(errs).length) {
      if (!errs.general && (errs.name || errs.email)) {
        errs.general = "Revisa los campos obligatorios marcados.";
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <Reveal
      id="registro"
      style={{
        background: "#0c0e0d",
        borderTop: "1px solid #1c211e",
        borderBottom: "1px solid #1c211e",
      }}
    >
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "100px 24px" }}>
        <p
          style={{
            fontFamily: "var(--font-jetbrains-mono), monospace",
            color: "#39ff8a",
            fontSize: 13,
            letterSpacing: "0.08em",
            margin: "0 0 10px",
            textAlign: "center",
          }}
        >
          06 · INSCRIPCIÓN
        </p>
        <h2
          style={{
            fontSize: "clamp(26px, 4vw, 36px)",
            fontWeight: 700,
            margin: "0 0 40px",
            textAlign: "center",
          }}
        >
          Reserva tu plaza
        </h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div>
              <label style={labelStyle}>Nombre completo *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                placeholder="Ada Lovelace"
                style={inputStyle(errors.name)}
              />
            </div>
            <div>
              <label style={labelStyle}>Email *</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                placeholder="ada@empresa.com"
                style={inputStyle(errors.email)}
              />
            </div>
            <div>
              <label style={labelStyle}>Empresa</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))}
                placeholder="Opcional"
                style={inputStyle(false)}
              />
            </div>
            <div>
              <label style={labelStyle}>Tipo de inscripción *</label>
              <select
                value={form.ticket}
                onChange={(e) => setForm((s) => ({ ...s, ticket: e.target.value }))}
                style={inputStyle(false)}
              >
                <option value="">Selecciona una opción</option>
                <option value="1día">1 día — 700€</option>
                <option value="2días">2 días completa — 1000€</option>
              </select>
              {errors.ticket && (
                <div style={{ color: "#ff6b6b", fontSize: 13, marginTop: 6 }}>
                  Selecciona un tipo de inscripción.
                </div>
              )}
            </div>
            <label
              style={{
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
                fontSize: 14,
                color: "#a8b3ac",
                lineHeight: 1.5,
              }}
            >
              <input
                type="checkbox"
                checked={form.terms}
                onChange={(e) => setForm((s) => ({ ...s, terms: e.target.checked }))}
                style={{ marginTop: 3 }}
              />
              Acepto los términos y condiciones y la política de privacidad. *
            </label>
            {errors.general && (
              <div style={{ color: "#ff6b6b", fontSize: 14 }}>{errors.general}</div>
            )}
            <button
              type="submit"
              style={{
                fontFamily: "var(--font-jetbrains-mono), monospace",
                fontWeight: 700,
                fontSize: 15,
                background: "#39ff8a",
                color: "#08090b",
                padding: 16,
                border: "none",
                borderRadius: 6,
                cursor: "pointer",
                marginTop: 8,
              }}
            >
              Confirmar inscripción →
            </button>
          </form>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              border: "1px solid #39ff8a",
              borderRadius: 12,
              background: "rgba(57,255,138,0.05)",
            }}
          >
            <div style={{ fontSize: 40, marginBottom: 16, color: "#39ff8a" }}>✓</div>
            <h3 style={{ fontSize: 22, margin: "0 0 12px" }}>¡Inscripción recibida!</h3>
            <p style={{ color: "#a8b3ac", fontSize: 15, margin: 0 }}>
              Hemos registrado tu solicitud para {form.ticket}. Te enviaremos
              los detalles de pago y logística a {form.email} en los próximos
              días.
            </p>
          </div>
        )}
      </div>
    </Reveal>
  );
}
