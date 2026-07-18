import type { Metadata } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hack_IA.Madrid — Hackathon de Inteligencia Artificial",
  description:
    "48 horas. Reto libre. Nivel técnico alto. 100 plazas para los equipos que quieran llevar su idea de IA de cero a demo funcional. 25–26 julio 2026, Madrid.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${sora.variable} ${jetbrainsMono.variable}`}>
      <body style={{ fontFamily: "var(--font-sora), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
