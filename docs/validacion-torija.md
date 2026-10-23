# Validación Torija v1.2.0

23 de octubre de 2026. Vista previa, sin publicar.

## Integridad

- Comparado con https://mistardecafetokio.pplx.app/ en navegador: 22 nodos, 36 vínculos y 12 capítulos. Nombres, biografías, colores, grupos, ciudades y relaciones idénticos.
- `data.js`, `script.js` y `style.css` conservados byte a byte; las pruebas verifican sus SHA-256 anteriores.
- Se reutilizan Torija 1.0.0 y la misma capa de presentación de Matcha; no se modifica la plantilla general ni aplicaciones ajenas.

## Navegador

- Escritorio 1440×1000, móvil375×900 y retorno a escritorio, sin desbordamiento global.
- Introducción abrir/cerrar; capítulo, nodo y conexión por teclado; cerrar ficha.
- Búsqueda única e inexistente, reinicio, cinco filtros de grupo y tres de relación con los recuentos esperados.
- Zoom con rueda, arrastre de nodo y reinicio.
- Temas claro/oscuro/regreso; leyenda bajo el grafo, plegable sin tapar nodos.
- Contraste mínimo medido en los controles y textos muestreados:5.46:1 en claro y8.63:1 en oscuro. Distintivos de grupo con texto elegido para al menos4.5:1.
- Fuentes Cabinet Grotesk/Satoshi cargadas localmente; sin errores JavaScript.

## Entrega

- Seis pruebas automatizadas por proyecto y comprobación de datos/enlaces.
- Paquete de15 recursos de ejecución en `dist/public/`, sin documentación interna.
- Vista previa alojada verificada en un contexto nuevo: datos idénticos, ficha, teclado, filtros, búsqueda, temas, móvil y leyenda sin superposición ni errores.
- Publicación e integración en main requieren aprobación del usuario.
