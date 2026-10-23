# Especificación — mapa-cafe-tokio

## Objetivo

Mostrar un mapa interactivo de las relaciones entre los personajes de «Mis tardes en el pequeño café de Tokio», de Michiko Aoyama, organizado por capítulos.

## Usuarios y uso

- Un lector de la novela, en el navegador del ordenador o del móvil.
- Se usa abriendo `index.html`, sin servidor ni dependencias.

## Funcionalidades

- [x] Grafo de personajes y relaciones.
- [x] Capítulos: Cada capítulo corresponde a un personaje y a un color de la novela (por ejemplo, «Cacao los jueves», en marrón).
- [x] Lugares de la historia y leyenda de colores.
- [x] Leyenda colapsable en el móvil para no tapar el grafo, espaciado del grafo ajustado.

## Fuera de alcance

- Edición de datos desde la interfaz: se editan en `data.js`.

## Datos

- `data.js` contiene `CONFIG` (textos de la página, lugares y colores de anillo, grupos, leyenda, icono y fuentes), `CHAPTERS`, `NODES` y `EDGES`. `comprobar_mapa.js` valida que las referencias sean coherentes. Las fuentes son reseñas públicas (educafuturo.cl, bleisatz.blog, forums.learnnatively.com y reseñas en inglés y francés). No hay datos personales.

## Patrón

Mapa de relaciones de un libro (ver `catalogo-proyectos/componentes.md`), basado en la plantilla `catalogo-proyectos/plantillas/mapa-libro/`: `index.html` y `script.js` son los de la plantilla y no se tocan; lo propio de este libro está en `data.js` y la paleta en `style.css`.

## Criterios de aceptación

- Cada capítulo de la novela tiene su personaje y su color en el mapa.
- En el móvil, la leyenda no tapa el grafo.

## Adaptación Torija v1.2.0

- Adopción expresa de Torija 1.0.0, sin modificar contenido ni reglas del mapa.
- Excepción al HTML de plantilla: marco de presentación con recursos Torija locales. El motor `script.js`, la paleta base `style.css` y `data.js` se conservan byte a byte.
- Introducción completa desplegable; leyenda bajo el lienzo, abierta en escritorio y cerrada inicialmente en móvil.
- Mantener modo oscuro y colores narrativos; teclado para nodos, capítulos y conexiones.
- D3 7.9.0 con SRI requiere Internet; no hay servidor de aplicación ni base de datos.
- Se entrega vista previa del mapa existente; publicación y main pendientes de aprobación.
