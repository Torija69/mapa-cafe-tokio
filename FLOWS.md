# Comprobación de reconciliación v1.2.0

- Referencia: mapa publicado abierto en Comet con sesión del propietario; 22 nodos y pie v1.2.0.
- Recuperar los archivos originales de publicación, no el DOM generado.
- Conservar idénticos `data.js`, `script.js` y `style.css` frente a main anterior.
- Comprobar búsqueda, filtro por grupo y vínculo, capítulos, ficha y conexiones, cierre y reinicio.
- Comprobar tema de ida y vuelta, presentación, leyenda y adaptación escritorio/móvil.
- Verificar integridad y correspondencia de fuentes locales; sin errores nuevos de consola.
- URL definitiva en README y GitHub; mantener el acceso restringido, sin republicar.

## Resultado del 25 de octubre

PASS: validación de 22 nodos, 36 vínculos y 12 capítulos; búsqueda con y sin coincidencias, filtros, capítulos, ficha, conexiones, cierre, selección por teclado, reinicio, tema y presentación. Leyenda comprobada al pasar de escritorio a móvil y de vuelta, sin desbordamiento global ni errores JavaScript. Los seis archivos de fuentes coinciden por SHA256 con los de la publicación autenticada. Sin cambios de datos, motor o estilo base.
