# Retro-Future Arcade — Starter

Sitio estático de 3 páginas (sin build tools) con estilo Neo Brutalism x 8 Bit para un museo/bar de arcades retro.

## Cómo correr localmente

1. Clona o descarga este repo.
2. Abre `index.html` en tu navegador (doble clic o desde un servidor local simple).
	- Opcional: en VS Code usa Live Server o `python -m http.server` en la carpeta raíz.

## Estructura

- `index.html` — Inicio con héroe, horarios y destacados.
- `games.html` — Tabla de gabinetes + galería.
- `join.html` — Formulario de membresía con CSS interno específico.
- `style.css` — Estilos globales (bordes gruesos, neón, flex/grid, selectores variados).
- `script.js` — Reloj en footer que actualiza cada segundo.
- `assets/` — SVGs de placeholder listos para reemplazar por fotos reales.

## Reparto de tareas (sugerido)

- **Hugo:** Maquetado HTML y semántica accesible; navegación y estructura.
- **Ian:** Diseño en `style.css` (paleta neón, bordes, flex/grid, estados hover/focus) y assets SVG.
- **Ernesto:** Interactividad ligera en `script.js`, pruebas manuales, checklist de QA y contenidos.

## Checklist de requisitos

- [x] Máximo 3 páginas: `index`, `games`, `join`.
- [x] Estilo "Neo Brutalism x 8 Bit": alto contraste, bordes negros gruesos, acentos neón, tipografía monospace.
- [x] HTML5 semántico con `header`, `nav`, `main`, `section`, `article`, `footer`.
- [x] Inicio: héroe con texto + imagen local, párrafo informativo y lista de horarios.
- [x] Colección: tabla con columnas Nombre/Año/Fabricante/Precio y galería con imágenes locales.
- [x] Contacto/Membresía: formulario con nombre, email, select, checkbox, textarea, submit + footer con links.
- [x] Tres métodos de CSS: externo (`style.css`), interno (en `join.html`), inline (aviso "No se permite la entrada a menores después de las 22:00").
- [x] Selectores demostrados: elemento, clase, id, atributo, pseudo-clases `:hover/:focus`, pseudo-elemento `::before` en navegación.
- [x] Layout con Flexbox y CSS Grid en distintas secciones.
- [x] Imágenes locales en `assets/` (SVG placeholders marcados para reemplazo).
- [x] JS simple: reloj en footer (actualiza cada segundo).

## Notas

- Los valores de precio son placeholders de colección.
- Reemplaza los SVG en `assets/` por fotos reales cuando estén disponibles.