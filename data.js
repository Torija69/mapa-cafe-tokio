/* ============================================================
   Datos del mapa de relaciones — "Mis tardes en el pequeño
   café de Tokio" (Michiko Aoyama)
   Cada personaje corresponde a un capítulo/color de la novela.
   Fuentes usadas para reconstruir personajes y conexiones:
   - educafuturo.cl (reseña)
   - bleisatz.blog (reseña alemana)
   - forums.learnnatively.com (lista de personajes por capítulo)
   - bookishelf.com / booktrib.com / queenoftreasures.com (reseñas en inglés)
   - japan-glossy.fr / danslabibliothequedanne.com (reseñas francesas)
   ============================================================ */

const CHAPTERS = [
  { n: 1, title: "Cacao los jueves", color: "#6b4226", colorName: "Marrón", place: "tokio", charId: "wataru" },
  { n: 2, title: "El serio rollo de tortilla", color: "#e0b23c", colorName: "Amarillo", place: "tokio", charId: "asami" },
  { n: 3, title: "Nuestro crecimiento", color: "#e8a0bf", colorName: "Rosa", place: "tokio", charId: "ena" },
  { n: 4, title: "El camino de la justa", color: "#4a7ba6", colorName: "Azul", place: "tokio", charId: "yasuko" },
  { n: 5, title: "El encuentro", color: "#b23a48", colorName: "Rojo", place: "sidney", charId: "risa" },
  { n: 6, title: "Amor de medio siglo", color: "#8b8b8b", colorName: "Gris", place: "sidney", charId: "misako" },
  { n: 7, title: "Cuenta atrás", color: "#4a8a5c", colorName: "Verde", place: "sidney", charId: "yu" },
  { n: 8, title: "El mejor día de Ralph", color: "#d97b29", colorName: "Naranja", place: "sidney", charId: "ralph" },
  { n: 9, title: "El regreso de la hechicera", color: "#2fa8a0", colorName: "Turquesa", place: "sidney", charId: "cindy" },
  { n: 10, title: "Si no te hubiera conocido", color: "#2b2b2b", colorName: "Negro", place: "sidney", charId: "atsuko" },
  { n: 11, title: "La promesa tricolor", color: "#7a4fa3", colorName: "Morado", place: "sidney", charId: "mary" },
  { n: 12, title: "Carta de amor", color: "#e9e6da", colorName: "Blanco", place: "tokio", charId: "maco" },
];

/* Grupos: cafe (círculo íntimo), tokio (red expandida en Tokio),
   puente (conectan Tokio-Sídney), sidney (red expandida en Sídney), lugar (hubs físicos) */

const NODES = [
  // --- Lugares (hubs físicos) ---
  {
    id: "cafe", name: "Café Marble", type: "place", group: "lugar", place: "tokio",
    color: "#a9744f", role: "El pequeño café bajo los cerezos",
    bio: "Diminuto local de tres mesas de madera escondido al final de una hilera de cerezos, junto a un río de Tokio. Es el corazón de la novela: casi todos los hilos narrativos nacen o regresan aquí."
  },
  {
    id: "jardin", name: "Real Jardín Botánico de Sídney", type: "place", group: "lugar", place: "sidney",
    color: "#2f8f7a", role: "El espejo de Sídney",
    bio: "Jardín junto al puerto de Sídney donde confluyen varios personajes de la segunda mitad del libro: es el equivalente australiano del Café Marble, el lugar donde la novela 'respira' al otro lado del mundo."
  },

  // --- Círculo del café ---
  {
    id: "maestro", name: "El Maestro", type: "person", group: "cafe", place: "ambos",
    color: "#c79a3e", chapter: null, role: "Dueño del Café Marble y mecenas de arte",
    bio: "Hombre enigmático con un lunar en medio de la frente. Contrató a Wataru por pura intuición, sin entrevista, y reaparece en cafés, galerías y aeropuertos de Tokio y Sídney moviendo hilos invisibles para empujar a otros hacia sus sueños. Es el verdadero tejido conectivo de la novela: sin nombre propio, sin capítulo propio, pero presente en casi todos."
  },
  {
    id: "wataru", name: "Wataru", type: "person", group: "cafe", place: "tokio",
    color: "#6b4226", chapter: 1, role: "Camarero del Café Marble · Cap. 1 Marrón",
    bio: "Joven de 23 años a quien el Maestro dio trabajo y las llaves del café sin preguntas. Enamorado en secreto de una clienta habitual a la que apoda 'Chocolate caliente'. Su mirada abre la novela y su historia se cierra en el capítulo final."
  },
  {
    id: "maco", name: "Maco", type: "person", group: "cafe", place: "ambos",
    color: "#8a6d3b", chapter: 12, role: "'Chocolate caliente' · Cap. 12 Blanco",
    bio: "Clienta que cada jueves pide un chocolate caliente y escribe largas cartas en inglés. Fue estudiante de intercambio en Sídney; luego se convierte en profesora de conversación en inglés y colaboradora de la revista CANVAS. Es, junto con el Maestro, el hilo que cose Tokio con Sídney: sus cartas y su historia son el motivo del capítulo que cierra el círculo."
  },

  // --- Red expandida en Tokio ---
  {
    id: "ena", name: "Ena", type: "person", group: "tokio", place: "tokio",
    color: "#e8a0bf", chapter: 3, role: "Maestra de guardería · Cap. 3 Rosa",
    bio: "Prima de Maco y maestra de guardería insegura tras solo 18 meses de docencia, bajo la dirección de una directora estricta (Yasuko). Su historia conecta el mundo escolar de Asami y Takumi con el círculo familiar de Maco."
  },
  {
    id: "asami", name: "Asami", type: "person", group: "tokio", place: "tokio",
    color: "#e0b23c", chapter: 2, role: "Madre trabajadora · Cap. 2 Amarillo",
    bio: "Publicista brillante y madre de Takumi, casada con Teruya. Se siente insuficiente en su papel de madre mientras su carrera florece; una llamada para pedirle ayuda con una tortilla enrollada reconstruye su relación con su marido."
  },
  {
    id: "teruya", name: "Teruya", type: "person", group: "tokio", place: "tokio",
    color: "#c9a86b", chapter: null, role: "Padre en casa y pintor",
    bio: "Esposo de Asami y padre de Takumi. Es amo de casa y pintor; el Maestro organiza una exposición de su obra en Kioto, el gesto que lo entrelaza con la trama artística que reaparece más adelante en Sídney."
  },
  {
    id: "takumi", name: "Takumi", type: "person", group: "tokio", place: "tokio",
    color: "#d9cba0", chapter: null, role: "Hijo de Asami y Teruya",
    bio: "Niño de cinco años en la guardería de Ena. Es el eje silencioso que une a su madre, su padre y su maestra en el segundo y tercer capítulo."
  },
  {
    id: "yasuko", name: "Yasuko", type: "person", group: "tokio", place: "tokio",
    color: "#4a7ba6", chapter: 4, role: "Maestra veterana · Cap. 4 Azul",
    bio: "Colega de Ena con quince años en la misma guardería; su carácter rígido se ablanda al reencontrarse con su amiga de infancia Risa en el Café Marble para hablar de la boda de esta."
  },

  // --- Puente Tokio-Sídney ---
  {
    id: "risa", name: "Risa", type: "person", group: "puente", place: "ambos",
    color: "#b23a48", chapter: 5, role: "Recién casada · Cap. 5 Rojo",
    bio: "Amiga de infancia de Yasuko. Se casa con Hiroyuki y, en su luna de miel en Sídney, conoce a una pareja que celebra sus 50 años de matrimonio: el encuentro que traslada la novela de Tokio a Sídney."
  },
  {
    id: "hiroyuki", name: "Hiroyuki", type: "person", group: "puente", place: "ambos",
    color: "#c97a83", chapter: null, role: "Esposo de Risa",
    bio: "Marido de Risa; juntos protagonizan el viaje de novios en Sídney que hace de bisagra entre la mitad tokiota y la mitad australiana del libro."
  },
  {
    id: "shinichiro", name: "Shinichiro", type: "person", group: "puente", place: "sidney",
    color: "#9a8f7a", chapter: null, role: "Esposo de Misako",
    bio: "Con Misako lleva cincuenta años casado. Su pareja, encontrada por Risa y Hiroyuki en Sídney, inaugura la serie de historias australianas."
  },
  {
    id: "misako", name: "Misako", type: "person", group: "puente", place: "ambos",
    color: "#8b8b8b", chapter: 6, role: "Cincuenta años de matrimonio · Cap. 6 Gris",
    bio: "Esposa de Shinichiro y madre de Hiroko. Durante un viaje a Tokio visitó el Café Marble y conversó con Wataru, notando su enamoramiento silencioso por su clienta habitual: un guiño que conecta Sídney de vuelta al café."
  },
  {
    id: "hiroko", name: "Hiroko ('Pii-chan')", type: "person", group: "puente", place: "tokio",
    color: "#c76b8a", chapter: null, role: "Hija de Misako · dueña de una boutique de lencería",
    bio: "Hija de Misako y Shinichiro, nacida cuando su madre tenía 36 años. Regenta una tienda de lencería junto al mismo río que el Café Marble —donde Yasuko compró ropa interior— y es amiga de infancia de Atsuko, con quien mantiene el vínculo Tokio-Sídney."
  },

  // --- Red expandida en Sídney ---
  {
    id: "yu", name: "Yu (優)", type: "person", group: "sidney", place: "sidney",
    color: "#4a8a5c", chapter: 7, role: "Working holiday en Sídney · Cap. 7 Verde",
    bio: "Joven japonesa de vacaciones-trabajo en Sídney, entrevistada para la revista CANVAS —donde escribe Maco—. En una galería de Kioto había visto un cuadro verde del Jardín Botánico pintado por un amigo del Maestro; en Sídney descubre que ese jardín es real."
  },
  {
    id: "ralph", name: "Ralph", type: "person", group: "sidney", place: "sidney",
    color: "#d97b29", chapter: 8, role: "Ex banquero, sandwichería · Cap. 8 Naranja",
    bio: "Antiguo banquero que abrió una pequeña sandwichería de delantal naranja junto al Real Jardín Botánico. Su historia de amor no confesado con Cindy da título al capítulo."
  },
  {
    id: "cindy", name: "Cindy", type: "person", group: "sidney", place: "sidney",
    color: "#2fa8a0", chapter: 9, role: "De vuelta del Reino Unido · Cap. 9 Turquesa",
    bio: "Tras tres años en el Reino Unido, regresa a Sídney a buscar a Ralph. Aprende sobre plantas y aromaterapia con Grace y toma clases de conversación en inglés con Maco."
  },
  {
    id: "grace", name: "Grace", type: "person", group: "sidney", place: "sidney",
    color: "#6fae7c", chapter: null, role: "Aromaterapeuta que se cree bruja",
    bio: "Experta en plantas y aromaterapia, convencida —con total sinceridad— de ser una bruja. Mantiene correspondencia con Atsuko, quien traduce sus escritos, tejiendo otro hilo entre Sídney y el resto de la red."
  },
  {
    id: "atsuko", name: "Atsuko", type: "person", group: "sidney", place: "sidney",
    color: "#2b2b2b", chapter: 10, role: "Traductora · Cap. 10 Negro",
    bio: "Traductora, amiga de infancia de Hiroko y corresponsal de Grace. Casada con Mark, cierra buena parte de la red australiana antes de que la novela regrese a Tokio."
  },
  {
    id: "mark", name: "Mark", type: "person", group: "sidney", place: "sidney",
    color: "#5a6b78", chapter: null, role: "Esposo de Atsuko, coleccionista",
    bio: "Marido de Atsuko. Compra un cuadro pintado por Yu, enlazando el mundo del arte —impulsado por el Maestro— con la vida cotidiana de la comunidad japonesa en Sídney."
  },
  {
    id: "mary", name: "Mary", type: "person", group: "sidney", place: "sidney",
    color: "#7a4fa3", chapter: 11, role: "Hermana de acogida de Maco · Cap. 11 Morado",
    bio: "Fue la hermana de acogida de Maco durante su intercambio escolar en Sídney y sigue recibiendo sus cartas en inglés. Su capítulo, justo antes del cierre, revela por fin quién ha estado al otro lado de la correspondencia que abrió la novela."
  },
];

const EDGES = [
  { source: "maestro", target: "cafe", type: "explicit", chapter: "Cap. 1", label: "Es el propietario del Café Marble." },
  { source: "maestro", target: "wataru", type: "explicit", chapter: "Cap. 1 · Marrón", label: "Lo contrata por pura intuición, sin entrevista ni preguntas." },
  { source: "maestro", target: "teruya", type: "explicit", chapter: "Cap. 2 · Amarillo", label: "Organiza en Kioto la exposición de arte de Teruya." },
  { source: "maestro", target: "yu", type: "explicit", chapter: "Cap. 7 · Verde", label: "Yu descubre en una galería de Kioto un cuadro que él expuso, pintado en Sídney." },
  { source: "maestro", target: "jardin", type: "implicit", chapter: "Cap. 7", label: "Su labor como mecenas de arte se extiende hasta Sídney." },

  { source: "wataru", target: "maco", type: "explicit", chapter: "Cap. 1 · Marrón", label: "Enamorado en secreto de ella; la apoda 'Chocolate caliente'." },
  { source: "maco", target: "cafe", type: "explicit", chapter: "Cap. 1", label: "Va cada jueves a escribir sus cartas junto a la ventana." },
  { source: "maco", target: "mary", type: "explicit", chapter: "Cap. 1 y 11", label: "Le escribe largas cartas en inglés cada semana desde Tokio." },
  { source: "maco", target: "ena", type: "explicit", chapter: "Cap. 3 · Rosa", label: "Son primas." },
  { source: "maco", target: "yu", type: "implicit", chapter: "Cap. 7 · Verde", label: "Yu es entrevistada para la revista CANVAS, donde Maco colabora." },
  { source: "maco", target: "cindy", type: "explicit", chapter: "Cap. 9 · Turquesa", label: "Es su profesora de conversación en inglés en Sídney." },

  { source: "ena", target: "takumi", type: "explicit", chapter: "Cap. 2-3", label: "Es su maestra en la guardería." },
  { source: "takumi", target: "asami", type: "explicit", chapter: "Cap. 2 · Amarillo", label: "Es su madre." },
  { source: "takumi", target: "teruya", type: "explicit", chapter: "Cap. 2 · Amarillo", label: "Es su padre." },
  { source: "asami", target: "teruya", type: "explicit", chapter: "Cap. 2 · Amarillo", label: "Están casados." },
  { source: "ena", target: "yasuko", type: "explicit", chapter: "Cap. 3-4", label: "Son colegas en la misma guardería." },

  { source: "yasuko", target: "risa", type: "explicit", chapter: "Cap. 4 · Azul", label: "Amigas de infancia desde niñas." },
  { source: "yasuko", target: "cafe", type: "implicit", chapter: "Cap. 4", label: "Se reúne con Risa en el Café Marble para hablar de la boda." },
  { source: "yasuko", target: "hiroko", type: "implicit", chapter: "Cap. 4 y 6", label: "Compra ropa interior en la boutique de Hiroko, junto al mismo río que el café." },
  { source: "risa", target: "hiroyuki", type: "explicit", chapter: "Cap. 4-5", label: "Se casan." },
  { source: "risa", target: "shinichiro", type: "explicit", chapter: "Cap. 5 · Rojo", label: "En su luna de miel en Sídney conocen a la pareja que celebra 50 años de casados." },
  { source: "hiroyuki", target: "shinichiro", type: "explicit", chapter: "Cap. 5 · Rojo", label: "Comparte con Risa el encuentro con esta pareja en Sídney." },

  { source: "shinichiro", target: "misako", type: "explicit", chapter: "Cap. 5-6", label: "Casados desde hace cincuenta años." },
  { source: "misako", target: "hiroko", type: "explicit", chapter: "Cap. 6 · Gris", label: "Es su madre; la tuvo a los 36 años." },
  { source: "misako", target: "wataru", type: "implicit", chapter: "Cap. 6 · Gris", label: "Durante una visita a Tokio, charló con él en el Café Marble y notó su amor secreto." },
  { source: "misako", target: "cafe", type: "implicit", chapter: "Cap. 6", label: "Recuerda haber visitado el café durante un viaje a Tokio." },
  { source: "hiroko", target: "atsuko", type: "explicit", chapter: "Cap. 10 · Negro", label: "Amigas de infancia." },

  { source: "yu", target: "jardin", type: "explicit", chapter: "Cap. 7 · Verde", label: "Pasea y trabaja junto al Real Jardín Botánico de Sídney." },
  { source: "yu", target: "ralph", type: "implicit", chapter: "Cap. 7-8", label: "Compra sándwiches en el puesto de Ralph, junto al jardín." },
  { source: "yu", target: "mark", type: "explicit", chapter: "Cap. 10 · Negro", label: "Mark compra un cuadro pintado por ella." },

  { source: "ralph", target: "jardin", type: "explicit", chapter: "Cap. 8 · Naranja", label: "Su sandwichería está junto al Real Jardín Botánico." },
  { source: "ralph", target: "cindy", type: "explicit", chapter: "Cap. 8-9", label: "Ella vuelve del Reino Unido buscando reencontrarse con él." },
  { source: "cindy", target: "grace", type: "explicit", chapter: "Cap. 9 · Turquesa", label: "Aprende con ella sobre plantas y aromaterapia." },
  { source: "grace", target: "atsuko", type: "explicit", chapter: "Cap. 9-10", label: "Se cartean; Atsuko traduce sus escritos sobre aromaterapia." },
  { source: "atsuko", target: "mark", type: "explicit", chapter: "Cap. 10 · Negro", label: "Están casados." },

  { source: "mary", target: "jardin", type: "implicit", chapter: "Cap. 11 · Morado", label: "Vive en Sídney, en la misma red de historias que rodea al jardín." },
];
