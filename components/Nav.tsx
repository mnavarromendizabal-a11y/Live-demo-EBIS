export default function Nav() {
  return (
    <nav
      style={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: 1180,
        margin: "0 auto",
        padding: "22px 24px",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontWeight: 700,
          fontSize: 16,
          letterSpacing: "0.02em",
          color: "#e7ede9",
        }}
      >
        &gt; Hack<span style={{ color: "#39ff8a" }}>_</span>IA
        <span style={{ color: "#39ff8a" }}>.</span>Madrid
      </div>
      <a
        href="#registro"
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: 13,
          textDecoration: "none",
          border: "1px solid #39ff8a",
          color: "#39ff8a",
          padding: "9px 16px",
          borderRadius: 2,
        }}
      >
        Inscríbete
      </a>
    </nav>
  );
}
