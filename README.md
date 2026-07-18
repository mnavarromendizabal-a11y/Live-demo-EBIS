# Hack IA Madrid — landing page

Implementación en Next.js (App Router + TypeScript) del diseño en
`../extracted/hackathon-de-ia-madrid/project/Hack IA Madrid.dc.html`.

## Requisitos

```bash
npm install
npm run dev
```

y abre `http://localhost:3000`.

## Supabase

El formulario de inscripción guarda los envíos en Supabase (proyecto
`prueba-vivo-ebis`, región `eu-west-3`), tabla `public.registrations`
(`name`, `email`, `company`, `ticket`, `terms_accepted`, `created_at`). La
tabla tiene Row Level Security activado con una única política que permite
`insert` al rol `anon`; nadie puede leer los envíos con la clave pública.

Copia `.env.example` a `.env.local` y rellena:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

`.env.local` está en `.gitignore` y no se sube al repositorio.

## Estructura

- `app/layout.tsx` — fuentes (Sora + JetBrains Mono vía `next/font/google`) y estilos globales.
- `app/globals.css` — reset, animaciones (`fadeUp`, `glowPulse`, `scrollCode`, `blink`) y clases de scroll-reveal.
- `app/page.tsx` — ensambla las secciones en orden.
- `components/` — una sección por archivo: `Hero`, `About`, `Agenda`, `Prizes`, `Sponsors`, `Pricing`, `Registration`, `Faq`, `Footer`, más `Reveal` (wrapper con `IntersectionObserver` para el fade-in al hacer scroll).

## Notas de implementación

- El formulario de inscripción (`Registration.tsx`) reproduce la validación del prototipo (nombre, email, tipo de entrada y aceptación de términos) y al enviarse inserta la fila en Supabase mediante `lib/supabaseClient.ts`.
- El acordeón de FAQ y el formulario son los únicos componentes client (`"use client"`); el resto son server components estáticos.
