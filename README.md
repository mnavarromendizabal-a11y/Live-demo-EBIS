# Hack IA Madrid — landing page

Implementación en Next.js (App Router + TypeScript) del diseño en
`../extracted/hackathon-de-ia-madrid/project/Hack IA Madrid.dc.html`.

## Requisitos

Node.js no está instalado en la máquina donde se generó este proyecto, así
que el código no se ha podido instalar (`npm install`) ni ejecutar
(`npm run dev`) para verificarlo en el navegador. Antes de usarlo:

```bash
npm install
npm run dev
```

y abre `http://localhost:3000`.

## Estructura

- `app/layout.tsx` — fuentes (Sora + JetBrains Mono vía `next/font/google`) y estilos globales.
- `app/globals.css` — reset, animaciones (`fadeUp`, `glowPulse`, `scrollCode`, `blink`) y clases de scroll-reveal.
- `app/page.tsx` — ensambla las secciones en orden.
- `components/` — una sección por archivo: `Hero`, `About`, `Agenda`, `Prizes`, `Sponsors`, `Pricing`, `Registration`, `Faq`, `Footer`, más `Reveal` (wrapper con `IntersectionObserver` para el fade-in al hacer scroll).

## Notas de implementación

- El formulario de inscripción (`Registration.tsx`) reproduce la validación del prototipo (nombre, email, tipo de entrada y aceptación de términos) y solo simula el envío: no hay backend ni llamada a ningún servicio externo.
- El acordeón de FAQ y el formulario son los únicos componentes client (`"use client"`); el resto son server components estáticos.
