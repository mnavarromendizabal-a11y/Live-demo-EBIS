export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #1c211e", background: "#0c0e0d" }}>
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "60px 24px 40px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 32,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontWeight: 700,
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            &gt; Hack<span style={{ color: "#39ff8a" }}>_</span>IA
            <span style={{ color: "#39ff8a" }}>.</span>Madrid
          </div>
          <p style={{ color: "#7a8580", fontSize: 13, maxWidth: 320, lineHeight: 1.6 }}>
            Hackathon presencial de Inteligencia Artificial. 25–26 julio 2026,
            Madrid.
          </p>
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 13,
              color: "#a8b3ac",
              marginBottom: 12,
            }}
          >
            CONTACTO
          </div>
          <a
            href="mailto:info@hackiamadrid.com"
            style={{ display: "block", fontSize: 14, textDecoration: "none", marginBottom: 8 }}
          >
            info@hackiamadrid.com
          </a>
          <a
            href="mailto:patrocinios@hackiamadrid.com"
            style={{ display: "block", fontSize: 14, textDecoration: "none" }}
          >
            patrocinios@hackiamadrid.com
          </a>
        </div>
        <div>
          <div
            style={{
              fontFamily: "var(--font-jetbrains-mono), monospace",
              fontSize: 13,
              color: "#a8b3ac",
              marginBottom: 12,
            }}
          >
            SÍGUENOS
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            {["X", "IG", "in"].map((label) => (
              <span
                key={label}
                style={{
                  width: 36,
                  height: 36,
                  border: "1px solid #2a2f2c",
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-jetbrains-mono), monospace",
                  fontSize: 12,
                  color: "#a8b3ac",
                }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid #1c211e",
          padding: "20px 24px",
          textAlign: "center",
          color: "#7a8580",
          fontSize: 13,
        }}
      >
        © 2026 Hack IA Madrid. Todos los derechos reservados.
      </div>
    </footer>
  );
}
