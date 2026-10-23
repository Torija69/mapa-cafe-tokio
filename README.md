# mapa-cafe-tokio

Mapa de relaciones de Mis tardes en el pequeño café de Tokio (Michiko Aoyama)

- Plantilla: `catalogo-proyectos/plantillas/mapa-libro/` (para cambiar el contenido, edita solo `data.js`)
- Comprobar los datos: `node comprobar_mapa.js`
- Reglas para agentes: `AGENTS.md`
- Especificación: `docs/spec.md`

## Vista previa Torija v1.2.0

Diseño Torija 1.0.0: cabecera carbón, controles lima, marfil y fuentes Cabinet Grotesk/Satoshi locales. Los colores de capítulos y ciudades y el modo oscuro preexistente se conservan. La introducción es desplegable y la leyenda está debajo del lienzo para no tapar nodos.

`data.js`, `script.js` y `style.css` permanecen intactos. El marco visual y los ajustes de accesibilidad se comparten con el mapa de Matcha mediante `styles/mapa-torija.css` y `torija-ui.js`; la plantilla general del catálogo no se modifica.

- Abrir `index.html` o servir el directorio con un servidor estático.
- Preparar el paquete web: `python3 scripts/preparar_web.py` (solo runtime en `dist/public/`).
- Pruebas: `python3 -m unittest discover -s tests` y `node comprobar_mapa.js`.
- Dependencia: D3 7.9.0 desde jsDelivr, con integridad SRI. Las fuentes no realizan conexiones externas.
- Web vigente: https://mistardecafetokio.pplx.app/ . La candidata no se integra en main ni se publica hasta aprobación.
