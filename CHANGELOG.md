# Changelog — mapa-cafe-tokio

## 1.2.0 — 2026-10-23

- Sistema Torija 1.0.0 en marco, tipografía y controles, con fuentes locales.
- Introducción desplegable y leyenda fuera del lienzo para no tapar personajes.
- Nodos y conexiones activables con teclado y etiquetas de filtros/tema accesibles; texto del distintivo de grupo con contraste adaptado.
- Modo oscuro preexistente conservado; capítulos, ciudades, vínculos, datos y motor originales intactos.
- D3 fijado a 7.9.0 con SRI, paquete web mínimo y pruebas de integridad.
- Publicación autorizada por el usuario tras revisar la vista previa; conservar el enlace existente.

## 1.1.0 — 2026-10-02

- Usa la plantilla única de mapa de libro del catálogo: `index.html` y `script.js` genéricos y toda la configuración del libro en `CONFIG` dentro de `data.js`. El mapa se ve y funciona igual (comprobado elemento a elemento).
- Nuevo `comprobar_mapa.js`, que valida ids y referencias de `data.js`; se ejecuta también en las comprobaciones de GitHub.

## 2026-10-01

- Añadidos AGENTS.md y docs/ (spec y decisiones) según el catálogo común.
