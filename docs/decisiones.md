# Registro de decisiones — mapa-cafe-tokio

| Fecha | Decisión | Motivo | Alternativas descartadas |
|---|---|---|---|
| 2026-10-23 | Aplicar Torija 1.0.0 en una capa de presentación y modificar solo el HTML de plantilla necesario | Petición expresa; conservar byte a byte los datos, el motor y la paleta original | Reescribir el motor, recolorear capítulos y ciudades, modificar todas las plantillas del catálogo |
| 2026-10-23 | Leyenda fuera del lienzo e introducción desplegable | Evitar que la información auxiliar tape personajes, especialmente en móvil | Reducir el texto hasta hacerlo ilegible |
| 2026-10-23 | Conservar el modo oscuro ya existente y fijar D3 con SRI | Evitar regresiones y mantener reproducibilidad | Eliminar el selector de tema o dejar una versión flotante de D3 |
| 2026-10-01 | Incorporar el proyecto al catálogo común (patrón «Mapa de relaciones de un libro») | Aplicar ASDLC: contexto y reglas versionadas junto al código | — |
| 2026-10-02 | Pasar a la plantilla única de mapa de libro | Un solo motor para todos los mapas: las mejoras se hacen una vez en el catálogo y se copian; el libro queda solo en `data.js` | Mantener un `script.js` con valores fijos por libro |
