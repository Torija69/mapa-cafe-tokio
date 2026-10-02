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
