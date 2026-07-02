---
layout: slide-01-portada
---

::title::
Diseño de Interfaces

::week::
Semana 7

::date::
Junio 19 de 2026

<!--
Notas del presentador:
Bienvenidos a la Open Class de la semana 7 del curso Diseño de Interfaces. Esta sesión está orientada a conectar los conceptos de interfaz gráfica vistos durante el curso con la construcción de estructuras adaptables para aplicaciones de escritorio, web y móviles. El punto de partida será reconocer que una interfaz no es solamente una colección de botones, menús, colores o ventanas; es un sistema de comunicación entre una persona y un programa. Por eso, cada elemento visual debe tener una intención: orientar, permitir una acción, entregar retroalimentación, prevenir errores o facilitar la comprensión de la información. En esta semana se abordarán componentes clásicos de interfaz como barras de menú, barras de herramientas, ventanas, paneles, campos de entrada, botones, indicadores de estado, barras de progreso, áreas de texto, enlaces de navegación y pies de página. También se hará una transición conceptual hacia HTML, CSS, modelo de cajas y Bootstrap, con el propósito de comprender cómo los mismos principios de organización visual pueden aplicarse en plataformas web y dispositivos móviles. Durante la clase se trabajará con un enfoque práctico: primero se activarán saberes previos mediante una actividad breve; luego se desarrollarán conceptos centrales sobre usabilidad, accesibilidad, adaptabilidad, jerarquía visual y retroalimentación; después se relacionarán estos elementos con la evaluación y el foro de la semana; finalmente se realizará una práctica guiada en Java Swing para construir una interfaz sencilla, funcional y comentada. La intención no es memorizar componentes aislados, sino entender cómo se toman decisiones de diseño basadas en el perfil de usuario, los objetivos de uso, la legibilidad, el contraste, la navegación y los eventos de interacción. Esta sesión también busca preparar al estudiante para argumentar mejor sus participaciones en el foro y para responder con criterio técnico las preguntas de evaluación asociadas a iconos, gráficos, barras de progreso, botones, navegación, indicadores de estado, menús, pie de página, alto contraste, retroalimentación positiva y legibilidad del texto.
-->

---
layout: slide-02-titulo
---

::title::
Estructuras adaptables web y móviles

::content::
Curso: Diseño de Interfaces
Semana: 7
Duración: 90 minutos
Público: Ingeniería de Software

Propósito de la sesión: comprender, analizar y aplicar estructuras gráficas adaptables mediante principios de usabilidad, accesibilidad, retroalimentación visual y programación orientada a eventos.

<!--
Notas del presentador:
En esta diapositiva se presenta el encuadre general de la clase. Es importante explicar que la semana 7 funciona como un puente entre la construcción de interfaces gráficas tradicionales y el diseño de estructuras adaptables para entornos web y móviles. Hasta este punto del curso, los estudiantes han revisado conceptos de interfaz gráfica, paradigmas de diseño, componentes visuales, eventos de usuario y criterios de usabilidad. Ahora se espera que integren esas ideas para reconocer cómo una misma lógica de interacción puede expresarse en diferentes plataformas. Por ejemplo, una aplicación de escritorio puede usar una barra de menú superior, una barra de herramientas, un panel central de trabajo y una zona inferior de estado; mientras que una aplicación web o móvil puede reorganizar esos mismos elementos mediante una barra de navegación, tarjetas, formularios, botones de acción y secciones responsivas. El énfasis de la sesión está en que el diseño de interfaces no debe depender únicamente de la apariencia, sino de la función comunicativa de cada componente. Una interfaz efectiva permite que el usuario comprenda qué puede hacer, dónde se encuentra, qué información es importante, qué acción acaba de ejecutar y qué resultado obtuvo. Desde la perspectiva de la ingeniería de software, esto implica traducir requerimientos de usuario en estructuras visuales, componentes programables y eventos. También implica tomar decisiones responsables frente a accesibilidad, legibilidad, contraste, jerarquía visual y adaptabilidad. Durante la clase, se debe mantener un tono práctico: cada concepto debe conectarse con una situación real, como un formulario de registro, un panel administrativo, una aplicación de seguimiento académico, un sistema de inventario o una plataforma educativa. De esta manera, el estudiante puede comprender que diseñar interfaces es una actividad técnica, comunicativa y ética, porque afecta directamente la forma en que las personas acceden, entienden y utilizan los sistemas digitales.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Comunicación, función y experiencia

::image:: 
<img src="/imagenes/disenointerfaces_semana7_01_interfaces_adaptables.png" alt="Imagen de apoyo sobre interfaces adaptables en escritorio web y móvil" />

::content::
La interfaz gráfica es el punto de encuentro entre el usuario y el sistema:

* Componentes clásicos de interfaz.
* Adaptabilidad para web y dispositivos móviles.
* Usabilidad y accesibilidad como criterios de calidad.

Una buena interfaz no solo “se ve bien”; permite comprender, actuar, corregir y avanzar.

<!--
Notas del presentador:
La contextualización inicial debe ayudar a los estudiantes a ubicar la semana dentro del recorrido del curso. Se puede iniciar con una pregunta sencilla: ¿cuántas interfaces han usado hoy antes de entrar a esta clase? Probablemente han usado una plataforma educativa, una aplicación de mensajería, un navegador, un correo electrónico, una billetera digital o una herramienta de videoconferencia. Todas esas experiencias tienen algo en común: presentan información, ofrecen acciones y responden a eventos del usuario. A partir de esta idea, conviene enfatizar que una interfaz gráfica no es un elemento superficial del software, sino una capa fundamental para que el sistema sea comprensible y utilizable. Un sistema puede tener una lógica interna correcta, una base de datos bien diseñada y funciones completas, pero si la interfaz no comunica adecuadamente, el usuario puede cometer errores, abandonar la tarea o percibir el sistema como difícil. En esta semana se estudiarán estructuras clásicas como menús, barras de herramientas, paneles, ventanas, campos de entrada, botones, áreas de texto, indicadores de estado y barras de progreso. También se revisará cómo estos elementos cambian cuando se trasladan a un entorno web o móvil. Por ejemplo, una barra de menú tradicional puede transformarse en un menú lateral, una barra inferior de navegación o un menú colapsable. Un panel de escritorio puede convertirse en una tarjeta responsiva. Una ventana modal puede convertirse en un diálogo adaptado al tamaño de pantalla. Lo esencial es mantener una experiencia coherente: el usuario debe reconocer qué puede hacer, cuál es el estado del sistema y cómo continuar. Esta diapositiva debe cerrar con la idea de que el diseño de interfaces combina criterio visual, comprensión de usuarios, estructura técnica y programación de eventos. Por ello, el futuro ingeniero de software debe diseñar pensando en personas reales, tareas concretas, limitaciones de acceso y diversidad de dispositivos.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Actividad de integración · Diagnóstico visual rápido

::left::
Para estudiantes:

1. Observe una interfaz cotidiana que use con frecuencia.
2. Identifique tres componentes visibles.
3. Explique qué acción o información permite cada componente.
4. Señale una mejora de accesibilidad o legibilidad.

::right::
Para el docente:

* Solicitar respuestas breves por chat o micrófono.
* Agrupar aportes por tipo de componente.
* Conectar las respuestas con la sesión.
* Evitar evaluar respuestas como correctas o incorrectas en esta fase.

Cierre: ¿qué componente ayuda más a evitar errores?

<!--
Notas del presentador:
Esta actividad corta tiene el propósito de activar saberes previos y lograr participación rápida de todos los estudiantes. Se sugiere pedirles que piensen en una interfaz cotidiana: la plataforma del aula virtual, una app bancaria, una tienda en línea, WhatsApp Web, un formulario de inscripción, un sistema de notas, una aplicación de transporte o un panel de administración. Luego deben identificar tres componentes visibles. Por ejemplo, pueden mencionar un botón de enviar, una barra de navegación, un campo de búsqueda, un ícono de notificación, una barra de progreso, un menú lateral, una tarjeta de producto, un mensaje de error, una lista desplegable o un pie de página. Lo importante no es nombrar el componente de forma perfecta, sino explicar su función. Si un estudiante dice “hay un botón verde”, el docente puede orientar preguntando: ¿qué acción ejecuta?, ¿cómo sabe el usuario que es importante?, ¿qué pasaría si el botón no tuviera texto?, ¿cómo se confirma que la acción se realizó? De esta forma, la actividad empieza a transformar observaciones visuales en razonamiento de diseño. Luego se pide que propongan una mejora de accesibilidad o legibilidad. Algunas respuestas pueden ser aumentar el contraste, agrandar el texto, usar etiquetas claras, evitar depender solo del color, mejorar el orden de navegación, agregar mensajes de ayuda, incluir confirmaciones o simplificar el diseño. El docente debe recoger las respuestas y conectarlas con los temas centrales: componentes, jerarquía, retroalimentación, accesibilidad y adaptabilidad. Esta actividad no debe extenderse más de diez a quince minutos. Si hay muchos estudiantes, se puede pedir que respondan en una frase por el chat. El cierre sugerido, “¿qué componente ayuda más a evitar errores?”, permite abrir el desarrollo conceptual sobre botones, mensajes, validaciones, indicadores y retroalimentación visual inmediata. También prepara la práctica en Java Swing, donde se implementará una validación básica y un área de estado.
-->

---
layout: slide-08-titulo-texto
---

::title::
Términos clave para el diseño de interfaces

::content::
- Una **interfaz gráfica de usuario** es el conjunto organizado de elementos visuales mediante los cuales una persona interactúa con un sistema. Incluye ventanas, menús, botones, campos de entrada, paneles, iconos, barras de progreso, mensajes, enlaces, listas y áreas de contenido. Su valor no está solo en la apariencia, sino en la capacidad de orientar la acción del usuario.

- La **usabilidad** se refiere a la facilidad con la que una persona puede comprender, aprender y completar una tarea dentro de una interfaz. Una interfaz usable reduce dudas, previene errores y ofrece caminos claros. La accesibilidad amplía este principio al considerar usuarios con distintas capacidades visuales, motoras, cognitivas o tecnológicas.

- La **adaptabilidad** implica que la estructura visual pueda reorganizarse según dispositivo, tamaño de pantalla y contexto de uso. 

- La **responsividad** es una forma concreta de adaptabilidad en interfaces web: el contenido se ajusta para conservar legibilidad, jerarquía y facilidad de interacción.

- La **retroalimentación visual inmediata** informa al usuario que una acción fue recibida, procesada o rechazada. Puede expresarse mediante mensajes, cambios de color, indicadores, barras de progreso o actualización de información. Sin retroalimentación, el usuario pierde confianza en el sistema.

<!--
Notas del presentador:
Esta diapositiva contiene una explicación amplia de términos fundamentales y debe ser trabajada con calma, porque servirá como base conceptual para el resto de la sesión. Conviene iniciar explicando que una interfaz gráfica de usuario no debe entenderse como una “pantalla bonita”, sino como una estructura comunicativa y funcional. Cada componente debe responder a una necesidad: mostrar información, permitir una entrada, activar una operación, indicar estado, facilitar navegación o confirmar una acción. Por ejemplo, un campo de texto sin etiqueta puede generar ambigüedad; un botón sin jerarquía visual puede pasar desapercibido; una barra de progreso ausente puede hacer que el usuario piense que el sistema se congeló; un mensaje de error poco claro puede impedir que el usuario corrija una tarea. Luego se debe presentar la usabilidad como una medida de facilidad de uso. Una interfaz usable permite que el usuario logre sus objetivos con eficiencia, comprensión y bajo nivel de frustración. Sin embargo, la usabilidad no puede separarse de la accesibilidad. Una interfaz puede parecer clara para un usuario con buena visión, pantalla grande y experiencia tecnológica, pero resultar difícil para alguien con baja visión, daltonismo, limitación motora, conexión lenta o dispositivo pequeño. Por eso, el diseño debe considerar contraste, tamaño de texto, etiquetas, navegación por teclado, mensajes claros y compatibilidad con tecnologías de asistencia. Después se debe introducir adaptabilidad y responsividad. En escritorio, los elementos pueden distribuirse en áreas amplias; en móvil, deben reorganizarse, priorizar acciones esenciales y evitar saturación. Esto conecta con HTML, CSS, modelo de cajas y Bootstrap, porque estas herramientas permiten estructurar interfaces que cambian según el espacio disponible. Finalmente, se debe explicar la retroalimentación visual inmediata. Cuando el usuario hace clic, escribe, envía o selecciona, espera una respuesta del sistema. Esa respuesta puede confirmar éxito, advertir error, mostrar progreso o actualizar un resumen. En programación orientada a eventos, esa respuesta se implementa mediante manejadores de eventos que transforman la acción del usuario en comportamiento observable.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Anatomía de una interfaz gráfica

::image:: 
<img src="/imagenes/disenointerfaces_semana7_02_componentes_gui.png" alt="Imagen de apoyo sobre componentes clásicos de interfaz gráfica" />

::content::
Componentes frecuentes:

* **Barra de menú**: organiza opciones principales.
* **Barra de herramientas**: ofrece accesos rápidos.
* **Paneles**: agrupan funciones o información.
* **Campos de entrada**: capturan datos.
* **Botones**: ejecutan acciones específicas.
* **Indicadores de estado**: comunican situación actual.
* **Barras de progreso**: muestran avance de tareas.
* **Pie de página**: contiene información complementaria.

<!--
Notas del presentador:
La anatomía de una interfaz debe explicarse como la organización de piezas con funciones diferenciadas. Una buena estrategia es comparar la interfaz con un espacio físico organizado: una recepción, una biblioteca o un laboratorio. En cada espacio, los elementos se ubican de acuerdo con su función, frecuencia de uso e importancia. En una interfaz ocurre algo similar. La barra de menú suele ubicarse en la parte superior porque organiza las funciones principales del sistema en categorías reconocibles. En aplicaciones de escritorio, puede contener opciones como archivo, edición, ayuda o configuración. La barra de herramientas ofrece accesos rápidos a operaciones comunes, por ejemplo guardar, buscar, imprimir, actualizar o crear un registro. Los paneles permiten agrupar información relacionada y evitar que toda la pantalla se convierta en una lista desordenada de controles. Los campos de entrada capturan datos del usuario y deben estar acompañados por etiquetas claras, formatos esperados y validaciones. Los botones de acción son fundamentales porque conectan intención y ejecución: guardar, enviar, cancelar, consultar, calcular o limpiar. Los indicadores de estado informan si el sistema está listo, si hay errores, si se guardaron cambios o si falta completar información. Las barras de progreso son útiles cuando una tarea toma tiempo, porque reducen incertidumbre y evitan que el usuario repita acciones innecesariamente. El pie de página suele contener información secundaria: derechos de autor, enlaces adicionales, contacto o políticas. En el contexto de la evaluación de la semana, varios de estos componentes aparecen como preguntas directas. Sin embargo, el objetivo no es que los estudiantes memoricen respuestas, sino que comprendan la función de cada componente. Se puede pedir un ejemplo rápido: ¿dónde han visto una barra de progreso?, ¿qué pasa cuando un botón no se distingue?, ¿qué mensaje debería aparecer si un formulario está incompleto? Estas preguntas ayudan a convertir la anatomía visual en razonamiento de diseño.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Del escritorio a la web y al móvil

::left::
Aplicación de escritorio:

* Ventanas persistentes.
* Menús superiores.
* Barras de herramientas.
* Paneles amplios.
* Mayor precisión con mouse y teclado.
* Eventos como clic, escritura y selección.

::right::
Web y móvil:

* Diseño responsivo.
* Navegación adaptable.
* Botones táctiles.
* Contenido por secciones.
* Jerarquía visual más estricta.
* Eventos como toque, desplazamiento y validación en tiempo real.

<!--
Notas del presentador:
Esta diapositiva permite analizar cómo cambia la estructura de una interfaz según la plataforma. En una aplicación de escritorio, el usuario suele tener una pantalla más amplia, mouse, teclado y posibilidad de trabajar con varias ventanas. Por ello, es común encontrar barras de menú en la parte superior, barras de herramientas, paneles laterales, áreas centrales de trabajo y barras de estado inferiores. En este contexto, Java Swing o JavaFX permiten construir interfaces con ventanas, contenedores, etiquetas, botones, campos, listas y eventos. Sin embargo, cuando se diseña para web o móvil, el espacio cambia y también cambian los patrones de interacción. En una pantalla pequeña, no es viable mostrar todas las opciones al mismo tiempo. Es necesario priorizar, agrupar, ocultar elementos secundarios, usar menús colapsables, reorganizar columnas, aumentar áreas táctiles y mantener textos legibles. Aquí aparecen HTML, CSS, modelo de cajas y Bootstrap como herramientas para estructurar contenido y adaptar la presentación a diferentes tamaños de pantalla. Es importante aclarar que adaptabilidad no significa simplemente “que quepa en la pantalla”. Una interfaz adaptable conserva el sentido de la tarea, la jerarquía de la información y la facilidad de acción aunque cambie el dispositivo. Por ejemplo, un formulario de registro puede estar en dos columnas en escritorio, pero en una sola columna en móvil. Un menú superior puede convertirse en menú desplegable. Una barra lateral puede desplazarse al final o convertirse en navegación inferior. Un panel de resumen puede convertirse en una tarjeta. En todos los casos, el usuario debe seguir entendiendo qué debe hacer, qué información es importante y cómo avanzar. Esta comparación también ayuda a comprender que los eventos de usuario cambian: en escritorio predominan clic, doble clic, teclado y foco; en móvil aparecen toque, deslizamiento, orientación y gestos. El futuro ingeniero de software debe diseñar considerando estas diferencias desde el inicio, no como una corrección tardía.
-->

---
layout: slide-08-titulo-texto
---

::title::
Modelo de cajas en CSS y estructura visual

::content::
En una interfaz web, cada elemento puede entenderse como una caja: contenido, relleno, borde y margen.

El modelo de cajas permite controlar:

* Separación entre elementos.
* Tamaño visible de botones, tarjetas y formularios.
* Espacios de lectura.
* Agrupación visual de información.
* Coherencia entre secciones.
* Adaptación a diferentes pantallas.

Bootstrap facilita esta organización mediante contenedores, filas, columnas, espaciados y componentes reutilizables.

Idea clave: la estructura visual guía la atención antes de que el usuario lea el contenido.

<!--
Notas del presentador:
El modelo de cajas en CSS es un concepto fundamental para comprender cómo se organiza una interfaz web. Aunque la clase incluye una práctica en Java Swing, la semana también introduce HTML, CSS y Bootstrap, por lo que conviene explicar este tema de forma conceptual y aplicada. En CSS, cada elemento puede visualizarse como una caja compuesta por contenido, relleno interno, borde y margen externo. El contenido puede ser texto, una imagen, un botón, un campo o una tarjeta. El relleno separa el contenido del borde y permite que el elemento respire visualmente. El borde delimita el elemento, aunque no siempre sea visible. El margen separa una caja de otras cajas. Esta estructura aparentemente sencilla tiene un impacto enorme en usabilidad. Cuando los elementos están demasiado juntos, el usuario puede confundirse o tocar el botón equivocado. Cuando los espacios son inconsistentes, la interfaz parece desordenada. Cuando un formulario no tiene agrupación visual, el usuario no sabe qué campos pertenecen a una misma tarea. Cuando los botones no tienen suficiente tamaño o separación, se afecta la interacción, especialmente en dispositivos móviles. Bootstrap ayuda a resolver parte de esta organización porque ofrece contenedores, filas, columnas, utilidades de espaciado y componentes predefinidos. Sin embargo, debe aclararse que usar Bootstrap no garantiza automáticamente una buena interfaz. La herramienta ofrece recursos, pero el criterio de diseño sigue siendo responsabilidad del desarrollador. Un estudiante puede usar una tarjeta, un botón o una columna de Bootstrap de manera incorrecta si no comprende jerarquía, contraste, legibilidad y flujo de tarea. La idea central es que la estructura visual comunica incluso antes de que el usuario lea. El tamaño, la posición, el espacio y la agrupación indican importancia y relación. Por eso, en el diseño de interfaces, la disposición de los elementos no es decorativa; es una forma de guiar la atención, reducir carga cognitiva y facilitar la acción del usuario.
-->

---
layout: slide-05-titulo-superior-texto-derecha
---

::title::
Accesibilidad, legibilidad y alto contraste

::image:: 
<img src="/imagenes/disenointerfaces_semana7_03_accesibilidad_contraste.png" alt="Imagen de apoyo sobre accesibilidad visual y modo de alto contraste" />

::content::
Criterios esenciales:

* Texto claro y suficiente tamaño.
* Contraste adecuado entre texto y fondo.
* No depender solo del color.
* Etiquetas visibles en campos.
* Mensajes comprensibles.
* Navegación consistente.
* Compatibilidad con distintos dispositivos.
* Modo de alto contraste para mejorar lectura.

<!--
Notas del presentador:
La accesibilidad debe presentarse como una responsabilidad técnica y ética del diseño de interfaces. Una interfaz accesible permite que más personas puedan utilizar un sistema con autonomía, incluyendo usuarios con baja visión, daltonismo, dificultades motoras, limitaciones cognitivas, dispositivos pequeños, pantallas de baja calidad o contextos de uso complejos. La legibilidad del texto es uno de los aspectos más importantes, porque buena parte de la interacción depende de leer instrucciones, etiquetas, botones, mensajes y resultados. Si el texto es demasiado pequeño, tiene bajo contraste o usa una fuente difícil de leer, el usuario puede no comprender la tarea. En la evaluación de la semana aparece una pregunta sobre la importancia de la legibilidad del texto, y la respuesta correcta se relaciona con facilitar la lectura y comprensión del contenido. El modo de alto contraste es una característica orientada a mejorar la percepción visual mediante combinaciones más marcadas entre texto, fondo y componentes. No debe entenderse como un modo “más bonito” o “más complejo”, sino como una ayuda para usuarios que necesitan distinguir mejor la información. También es importante explicar que el color no debe ser el único medio para comunicar un estado. Por ejemplo, si un error se muestra solo en rojo, un usuario con dificultad para distinguir colores podría no reconocerlo. Es mejor combinar color con texto, icono y ubicación clara. Las etiquetas de campos también son esenciales: un placeholder que desaparece al escribir no reemplaza una etiqueta visible cuando el usuario necesita revisar qué dato está ingresando. La navegación consistente ayuda a que el usuario anticipe dónde encontrar opciones y cómo volver a pasos anteriores. En interfaces web, las pautas WCAG del W3C/WAI son una referencia internacional para hacer contenidos más accesibles para personas con discapacidades, incluyendo criterios de contraste, navegación, texto y estructura. Esta perspectiva permite que los estudiantes comprendan que accesibilidad no es un requisito adicional al final del proyecto, sino una condición de calidad desde el diseño inicial.
-->

---
layout: slide-06-titulo-superior-texto-izquierda
---

::title::
Retroalimentación visual inmediata

::image:: 
<img src="/imagenes/disenointerfaces_semana7_04_retroalimentacion_visual.png" alt="Imagen de apoyo sobre retroalimentación visual en una interfaz" />

::content::
La retroalimentación visual informa que el sistema recibió, procesó o rechazó una acción.

Ejemplos:

* Mensaje de éxito al guardar.
* Alerta cuando falta un campo obligatorio.
* Cambio de color en un botón activo.
* Barra de progreso durante una carga.
* Indicador de estado en la parte inferior.
* Resumen actualizado después de validar datos.

Sin retroalimentación, el usuario duda.

<!--
Notas del presentador:
La retroalimentación visual inmediata es uno de los principios más visibles de una buena experiencia de usuario. Se recomienda iniciar con un ejemplo cotidiano: cuando una persona presiona el botón “Enviar” en un formulario y no ocurre nada, puede pensar que el sistema falló, que su internet está lento, que no hizo clic correctamente o que debe presionar varias veces. Esta incertidumbre puede generar errores duplicados, frustración o abandono. La retroalimentación resuelve esa incertidumbre porque informa al usuario que el sistema recibió la acción y está respondiendo. Puede adoptar muchas formas: un mensaje de éxito, un mensaje de error, un cambio de color, una animación, una barra de progreso, un indicador de carga, una actualización de datos o una confirmación. En la evaluación de la semana aparece una pregunta sobre la retroalimentación positiva, entendida como indicadores visuales de acciones correctas. Es importante explicar que la retroalimentación positiva no significa felicitar exageradamente al usuario; significa confirmar de forma clara que una acción fue completada correctamente. También debe abordarse la retroalimentación ante errores. Un buen mensaje no debe culpar al usuario ni ser ambiguo. En lugar de decir “Error”, debería decir “Ingrese un nombre antes de guardar” o “El correo debe contener @”. Desde la programación orientada a eventos, la retroalimentación se implementa dentro del manejador del evento. Por ejemplo, cuando el usuario hace clic en un botón, el programa captura los datos, los valida y actualiza una etiqueta, un área de texto o un cuadro de diálogo. En Java Swing, esto suele realizarse mediante ActionListener en botones o mediante DocumentListener en campos de texto si se desea validar mientras se escribe. Esta diapositiva conecta directamente con la práctica guiada, donde se construirá una interfaz que recibe datos, valida campos, muestra mensajes emergentes y actualiza un indicador de estado. El énfasis final debe ser que toda acción importante del usuario debe tener una respuesta visible, oportuna y comprensible.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Jerarquía visual

::rightTitle::
Adaptabilidad y responsividad

::left::
Permite destacar lo más importante mediante:

* Tamaño.
* Posición.
* Contraste.
* Espaciado.
* Agrupación.
* Orden de lectura.
* Peso visual de botones.

::right::
Permite conservar la experiencia cuando cambian:

* Pantalla.
* Dispositivo.
* Orientación.
* Método de entrada.
* Cantidad de información.
* Contexto de uso.
* Necesidades del usuario.

<!--
Notas del presentador:
La jerarquía visual y la adaptabilidad deben explicarse como dos dimensiones complementarias del diseño. La jerarquía visual responde a la pregunta: ¿qué debe ver primero el usuario? No todos los elementos de una interfaz tienen la misma importancia. Un título principal, una instrucción crítica, un botón de acción primaria o un mensaje de error deben destacarse más que información secundaria. Para lograrlo, se utilizan tamaño, posición, contraste, espaciado, agrupación y orden de lectura. Por ejemplo, en un formulario, el título indica la tarea; las etiquetas orientan la captura de datos; el botón principal ejecuta la acción; los mensajes de error deben aparecer cerca del campo correspondiente; el estado del sistema puede ubicarse en una zona estable, como la parte inferior. Si todos los elementos tienen el mismo peso visual, el usuario debe esforzarse más para decidir dónde mirar y qué hacer. La adaptabilidad, por su parte, responde a la pregunta: ¿cómo se conserva la experiencia cuando cambia el contexto? Una interfaz puede verse ordenada en un monitor grande y volverse confusa en un celular si no fue pensada para reorganizarse. La responsividad web es una manifestación técnica de esta adaptabilidad: columnas que se apilan, menús que se colapsan, imágenes que se ajustan, botones que aumentan su área táctil y textos que mantienen legibilidad. Sin embargo, adaptabilidad también implica considerar usuarios con distintas capacidades, niveles de experiencia y condiciones de acceso. En esta diapositiva se puede pedir a los estudiantes que imaginen una misma interfaz en tres escenarios: un computador de escritorio, un celular y una pantalla con modo de alto contraste. Luego se pregunta: ¿qué debería cambiar y qué debería permanecer igual? La respuesta esperada es que puede cambiar la disposición, pero no debe perderse la claridad de la tarea, la jerarquía de información ni la facilidad para actuar. Esta idea será clave para responder el foro de la semana, especialmente las preguntas sobre perfil demográfico, características de usuarios, jerarquía de textos, contraste, colores, sombras y principio de adaptabilidad.
-->

---
layout: slide-08-titulo-texto
---

::title::
Componentes y principios esenciales:

::content::

* **Iconos y gráficos**: representan acciones o funciones.
* **Barras de progreso**: indican avance de una tarea.
* **Botones de acción**: ejecutan acciones específicas.
* **Retroceso y avance**: facilitan navegación.
* **Indicadores de estado**: comunican situación del sistema.
* **Barra de menú**: suele ubicarse en la parte superior.
* **Pie de página**: contiene información complementaria.
* **Alto contraste**: mejora legibilidad.
* **Retroalimentación positiva**: confirma acciones correctas.
* **Legibilidad**: facilita comprensión del contenido.

<!--
Notas del presentador:
Esta diapositiva conecta directamente la clase con la evaluación de la semana. Es importante presentar los temas de la evaluación no como una lista de respuestas para memorizar, sino como una síntesis de conceptos funcionales. Los iconos y gráficos en una interfaz suelen representar funciones comunes o acciones específicas, dependiendo del contexto. Un icono de lupa comunica búsqueda, un icono de papelera comunica eliminar, un icono de disquete o nube puede comunicar guardar, y un icono de campana comunica notificaciones. Sin embargo, se debe advertir que los iconos no siempre son universales; por eso conviene acompañarlos de texto, etiquetas o ayuda contextual cuando puedan generar ambigüedad. Las barras de progreso cumplen una función de reducción de incertidumbre: indican cuánto falta, si el proceso avanza y si el usuario debe esperar. Los botones de acción permiten realizar operaciones específicas; su diseño debe dejar claro qué acción ejecutan y cuál es su importancia. La navegación hacia atrás y adelante en interfaces web se facilita mediante enlaces o botones de retroceso y avance, que ayudan al usuario a mantener control sobre su recorrido. Los indicadores de estado suelen ubicarse en zonas estables, frecuentemente en la parte inferior o en áreas visibles de la interfaz, para comunicar si el sistema está listo, procesando, guardado o con errores. La barra de menú tradicional se ubica normalmente en la parte superior, porque allí se organizan las opciones principales. El pie de página contiene información complementaria como derechos de autor, enlaces adicionales, contacto o políticas. El modo de alto contraste mejora la legibilidad al ajustar la relación visual entre texto y fondo. La retroalimentación positiva proporciona señales visuales de acciones correctas, y la legibilidad del texto facilita la lectura y comprensión del contenido. Se recomienda explicar que cada pregunta de evaluación apunta a reconocer la función de un componente. Si el estudiante entiende la función, puede responder correctamente incluso cuando cambie el ejemplo o la forma visual del componente.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Foro: Pautas en el diseño de la interfaz

::left::
Preguntas centrales:

* Perfil demográfico y características de usuarios.
* Legibilidad y accesibilidad.
* Retroalimentación visual inmediata.
* Jerarquía de textos, contraste, colores y sombras.
* Adaptabilidad y responsividad.
* Estrategias para destacar información importante.

::right::
Participación en equipo:

* Integrante 1: aporte principal.
* Integrantes 2 y 3: retroalimentación.
* Integrante 4: conclusión.
* Todos deben participar.
* La estructura puede ajustarse según número de integrantes.

<!--
Notas del presentador:
El foro de la semana requiere que los estudiantes argumenten sobre pautas de diseño de interfaz desde una perspectiva aplicada. Esta diapositiva permite orientar la participación antes de que ingresen a la plataforma. La primera pregunta aborda el perfil demográfico y las características específicas de los usuarios. Se debe explicar que diseñar para estudiantes universitarios, adultos mayores, niños, usuarios expertos o usuarios ocasionales implica decisiones diferentes. Cambian el lenguaje, el tamaño de texto, la complejidad de navegación, el tipo de ayuda, el nivel de detalle y la forma de retroalimentación. La segunda pregunta se relaciona con legibilidad y accesibilidad. Aquí los estudiantes pueden mencionar contraste, tamaño de fuente, etiquetas claras, navegación por teclado, no depender solo del color, mensajes comprensibles y diseño compatible con diferentes dispositivos. La tercera pregunta pide analizar la retroalimentación visual inmediata. Se debe orientar a los estudiantes para que incluyan ejemplos concretos: confirmaciones, errores, barras de progreso, cambios de estado o mensajes de validación. La cuarta pregunta aborda jerarquía de textos, contraste, colores y sombras. Es importante advertir que estos recursos deben usarse para organizar la información, no para decorar sin criterio. La quinta pregunta pregunta por adaptabilidad y responsividad; aquí pueden explicar que una interfaz debe ajustarse a distintos tamaños de pantalla, métodos de entrada y necesidades del usuario sin perder claridad. La sexta pregunta pide estrategias para establecer jerarquía visual. Se pueden mencionar títulos, subtítulos, agrupaciones, espacios, botones primarios, contraste, orden de lectura y proximidad entre elementos relacionados. También se debe explicar la dinámica de participación en equipo. No basta con que una persona publique; todos deben intervenir. La retroalimentación debe complementar, preguntar, ampliar o contrastar el aporte principal, no limitarse a decir “estoy de acuerdo”. La conclusión debe sintetizar acuerdos, aprendizajes y criterios aplicables al diseño de interfaces. Esta orientación ayuda a mejorar la calidad académica del foro y evita respuestas superficiales.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Formulario de registro académico

::image:: 
<img src="/imagenes/disenointerfaces_semana7_05_formulario_academico_swing.png" alt="Imagen de apoyo sobre formulario académico usable y accesible" />

::content::
Caso: una interfaz para registrar estudiantes en una actividad académica.

Debe incluir:

* Título claro.
* Campos con etiquetas visibles.
* Botón principal de registro.
* Botón secundario para limpiar.
* Validación de campos obligatorios.
* Resumen de datos ingresados.
* Mensaje de estado.
* Retroalimentación visual inmediata.

<!--
Notas del presentador:
El ejemplo aplicado del formulario de registro académico permite aterrizar la teoría en una situación cercana al estudiante universitario. Se puede plantear el caso de una actividad académica, un seminario, una tutoría o una práctica de laboratorio. El usuario necesita ingresar su nombre, programa académico, correo y seleccionar una modalidad de participación. Desde el diseño de interfaz, la primera decisión es definir la tarea principal: registrar correctamente a una persona. Todo lo demás debe apoyar esa tarea. El título debe indicar con claridad qué se está haciendo. Los campos deben tener etiquetas visibles, no solo texto provisional dentro del campo, porque el usuario necesita reconocer qué dato corresponde a cada entrada incluso después de escribir. El botón principal debe destacarse y expresar la acción concreta, por ejemplo “Registrar”. El botón secundario puede ser “Limpiar”, pero debe tener menor peso visual para evitar que el usuario lo presione por error. La validación de campos obligatorios evita registros incompletos y mejora la calidad de los datos. Sin embargo, la validación debe comunicarse con mensajes claros. No basta con impedir el registro; el sistema debe explicar qué falta corregir. Un área de resumen permite mostrar al usuario que la información fue capturada y organizada. Un mensaje de estado comunica si la operación fue exitosa o si requiere corrección. Este ejemplo permite integrar componentes, eventos y retroalimentación: al hacer clic en registrar, el programa captura datos; si faltan campos, muestra un mensaje de advertencia; si los datos son válidos, actualiza el resumen y el estado. También se puede conectar con adaptabilidad: en escritorio, el formulario puede estar junto a un resumen; en móvil, el resumen podría aparecer debajo. En web, Bootstrap permitiría organizarlo como tarjetas o columnas responsivas. En Java Swing, se puede usar JFrame, JPanel, JLabel, JTextField, JComboBox, JButton, JTextArea y JOptionPane. Así, el estudiante ve que los conceptos de diseño se convierten en componentes concretos y eventos programables.
-->

---
layout: slide-08-titulo-texto
---

::title::
Práctica guiada · Registro académico usable

::content::
**Título de la actividad**: Registro académico usable en Java Swing.

**Propósito**: construir una interfaz gráfica sencilla que capture datos, valide campos obligatorios, actualice un resumen y entregue retroalimentación visual inmediata.

**Componentes necesarios**:

* Ventana principal.
* Panel de formulario.
* Etiquetas y campos de texto.
* Lista desplegable.
* Botones de acción.
* Área de resumen.
* Indicador de estado.
* Mensajes emergentes.

<!--
Notas del presentador:
La práctica guiada debe presentarse como una actividad sencilla, pero significativa. No se trata de construir una aplicación completa ni de cubrir todas las posibilidades de Java Swing, sino de evidenciar cómo los principios de diseño de interfaces se traducen en código ejecutable. El título “Registro académico usable” permite mantener el enfoque en una tarea concreta y cercana al contexto universitario. El propósito debe explicarse en tres niveles. Primero, desde el diseño visual, se busca organizar componentes de manera comprensible: etiquetas, campos, botones, resumen y estado. Segundo, desde la programación, se busca capturar eventos de usuario, especialmente clics en botones. Tercero, desde la experiencia de usuario, se busca ofrecer retroalimentación inmediata cuando los datos están incompletos o cuando el registro se realiza correctamente. Los componentes necesarios corresponden a elementos clásicos de una interfaz gráfica. La ventana principal será el contenedor general. El panel de formulario agrupará los campos relacionados. Las etiquetas y campos permitirán capturar información. La lista desplegable reducirá errores al ofrecer opciones controladas. Los botones ejecutarán acciones específicas. El área de resumen mostrará información procesada y confirmará al usuario qué datos fueron registrados. El indicador de estado funcionará como zona de comunicación permanente, similar a una barra inferior. Los mensajes emergentes permitirán advertir errores o confirmar éxito. Se recomienda que el docente explique que cada componente debe tener una razón de ser. Si un elemento no ayuda al usuario a comprender, actuar o corregir, probablemente debe replantearse. Durante la práctica, los estudiantes pueden copiar el código completo, ejecutarlo y luego modificarlo. Si algunos no tienen Java configurado, pueden observar la explicación y revisar la lógica. La duración de dieciocho minutos exige que el docente avance con claridad: primero mostrar estructura visual, luego código, luego ejecución, luego análisis. La práctica prepara a los estudiantes para reconocer eventos de usuario como unidades de programación y para comprender que la interfaz es el resultado de decisiones de diseño más código funcional.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Estructura visual y eventos sugeridos

::left::
Estructura visual:

* Encabezado con propósito.
* Formulario en la zona superior.
* Campos: nombre, programa y correo.
* Selector de modalidad.
* Botones: registrar y limpiar.
* Área de resumen.
* Estado en zona inferior.

::right::
Eventos sugeridos:

* Clic en Registrar.
* Clic en Limpiar.
* Validación de campos vacíos.
* Validación básica de correo.
* Actualización del resumen.
* Mensaje emergente de éxito o advertencia.
* Cambio del indicador de estado.

<!--
Notas del presentador:
Antes de presentar el código, es útil explicar la estructura visual y los eventos sugeridos. Esto ayuda a que los estudiantes no vean el código como una secuencia abstracta, sino como la implementación de una intención de diseño. La estructura visual propuesta tiene un encabezado que comunica el propósito de la interfaz. Luego aparece un formulario con campos básicos: nombre, programa académico y correo. Se añade un selector de modalidad para mostrar el uso de componentes que limitan opciones y reducen errores. Los botones cumplen funciones diferenciadas. “Registrar” es el botón principal porque ejecuta la tarea central. “Limpiar” es secundario porque reinicia el formulario. El área de resumen permite mostrar al usuario la información capturada, lo cual funciona como confirmación visible. El indicador de estado se ubica en la zona inferior para comunicar la situación actual del sistema: listo para registrar, faltan campos, correo inválido, registro exitoso o formulario limpiado. Los eventos sugeridos conectan con la programación orientada a eventos. En una interfaz gráfica, el programa no avanza únicamente línea por línea como en un algoritmo secuencial tradicional. En cambio, queda esperando acciones del usuario. Cuando el usuario hace clic en “Registrar”, se ejecuta una función que lee los campos, valida información y actualiza la pantalla. Cuando hace clic en “Limpiar”, se vacían campos y se restablece el estado. La validación de campos vacíos evita registros incompletos. La validación básica de correo, aunque sencilla, permite mostrar que una interfaz puede prevenir errores antes de almacenar o procesar datos. La actualización del resumen es un ejemplo de retroalimentación visual positiva, porque confirma que los datos fueron recibidos. Los mensajes emergentes deben usarse con moderación: son útiles para advertencias o confirmaciones importantes, pero no deben saturar al usuario. En esta práctica se usan para hacer evidente la respuesta del sistema. Esta diapositiva también permite preguntar a los estudiantes qué otros eventos podrían agregarse: validación mientras se escribe, contador de caracteres, activación del botón solo cuando los campos estén completos o cambio de color según estado.
-->

---
layout: slide-codigo
---

::title::
RegistroAcademicoGUI.java

::content::

```java {lines:true}
import javax.swing.*;
import javax.swing.border.EmptyBorder;
import java.awt.*;
import java.awt.event.ActionEvent;

/**
 * RegistroAcademicoGUI
 * Ejemplo académico de interfaz gráfica con Java Swing.
 * Incluye componentes visuales, eventos de usuario,
 * validación básica y retroalimentación inmediata.
 */
public class RegistroAcademicoGUI extends JFrame {

    private JTextField campoNombre;
    private JTextField campoPrograma;
    private JTextField campoCorreo;
    private JComboBox<String> comboModalidad;
    private JTextArea areaResumen;
    private JLabel etiquetaEstado;

    public RegistroAcademicoGUI() {
        configurarVentana();
        crearInterfaz();
    }

    private void configurarVentana() {
        setTitle("Registro académico usable");
        setSize(620, 520);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
    }

    private void crearInterfaz() {
        JPanel panelPrincipal = new JPanel(new BorderLayout(12, 12));
        panelPrincipal.setBorder(new EmptyBorder(16, 16, 16, 16));

        JLabel titulo = new JLabel("Registro académico de participación");
        titulo.setFont(new Font("Arial", Font.BOLD, 22));

        JLabel instruccion = new JLabel("Complete los datos y presione Registrar.");
        instruccion.setFont(new Font("Arial", Font.PLAIN, 14));

        JPanel panelEncabezado = new JPanel(new GridLayout(2, 1, 4, 4));
        panelEncabezado.add(titulo);
        panelEncabezado.add(instruccion);

        JPanel panelFormulario = new JPanel(new GridLayout(4, 2, 10, 10));
        panelFormulario.setBorder(BorderFactory.createTitledBorder("Datos del estudiante"));

        campoNombre = new JTextField();
        campoPrograma = new JTextField();
        campoCorreo = new JTextField();

        comboModalidad = new JComboBox<>(new String[] {
            "Virtual",
            "Presencial",
            "Híbrida"
        });

        panelFormulario.add(new JLabel("Nombre completo:"));
        panelFormulario.add(campoNombre);

        panelFormulario.add(new JLabel("Programa académico:"));
        panelFormulario.add(campoPrograma);

        panelFormulario.add(new JLabel("Correo institucional:"));
        panelFormulario.add(campoCorreo);

        panelFormulario.add(new JLabel("Modalidad:"));
        panelFormulario.add(comboModalidad);

        JButton botonRegistrar = new JButton("Registrar");
        JButton botonLimpiar = new JButton("Limpiar");

        botonRegistrar.addActionListener(this::registrarEstudiante);
        botonLimpiar.addActionListener(this::limpiarFormulario);

        JPanel panelBotones = new JPanel(new FlowLayout(FlowLayout.RIGHT));
        panelBotones.add(botonLimpiar);
        panelBotones.add(botonRegistrar);

        areaResumen = new JTextArea();
        areaResumen.setEditable(false);
        areaResumen.setLineWrap(true);
        areaResumen.setWrapStyleWord(true);
        areaResumen.setBorder(BorderFactory.createTitledBorder("Resumen del registro"));
        areaResumen.setText("Aún no se ha registrado información.");

        etiquetaEstado = new JLabel("Estado: listo para registrar.");
        etiquetaEstado.setBorder(new EmptyBorder(8, 4, 4, 4));

        JPanel panelCentro = new JPanel(new BorderLayout(10, 10));
        panelCentro.add(panelFormulario, BorderLayout.NORTH);
        panelCentro.add(new JScrollPane(areaResumen), BorderLayout.CENTER);
        panelCentro.add(panelBotones, BorderLayout.SOUTH);

        panelPrincipal.add(panelEncabezado, BorderLayout.NORTH);
        panelPrincipal.add(panelCentro, BorderLayout.CENTER);
        panelPrincipal.add(etiquetaEstado, BorderLayout.SOUTH);

        add(panelPrincipal);
    }

    private void registrarEstudiante(ActionEvent evento) {
        String nombre = campoNombre.getText().trim();
        String programa = campoPrograma.getText().trim();
        String correo = campoCorreo.getText().trim();
        String modalidad = (String) comboModalidad.getSelectedItem();

        if (nombre.isEmpty() || programa.isEmpty() || correo.isEmpty()) {
            etiquetaEstado.setText("Estado: faltan campos obligatorios.");
            JOptionPane.showMessageDialog(
                this,
                "Complete nombre, programa y correo antes de registrar.",
                "Validación de datos",
                JOptionPane.WARNING_MESSAGE
            );
            return;
        }

        if (!correo.contains("@") || !correo.contains(".")) {
            etiquetaEstado.setText("Estado: correo con formato no válido.");
            JOptionPane.showMessageDialog(
                this,
                "Ingrese un correo válido. Ejemplo: usuario@dominio.edu.co",
                "Validación de correo",
                JOptionPane.ERROR_MESSAGE
            );
            return;
        }

        String resumen = "Registro exitoso\n\n"
            + "Nombre: " + nombre + "\n"
            + "Programa: " + programa + "\n"
            + "Correo: " + correo + "\n"
            + "Modalidad: " + modalidad + "\n\n"
            + "La interfaz confirmó la acción y actualizó el resumen.";

        areaResumen.setText(resumen);
        etiquetaEstado.setText("Estado: registro realizado correctamente.");

        JOptionPane.showMessageDialog(
            this,
            "El registro fue completado correctamente.",
            "Registro exitoso",
            JOptionPane.INFORMATION_MESSAGE
        );
    }

    private void limpiarFormulario(ActionEvent evento) {
        campoNombre.setText("");
        campoPrograma.setText("");
        campoCorreo.setText("");
        comboModalidad.setSelectedIndex(0);
        areaResumen.setText("Aún no se ha registrado información.");
        etiquetaEstado.setText("Estado: formulario limpiado.");
        campoNombre.requestFocus();
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            RegistroAcademicoGUI ventana = new RegistroAcademicoGUI();
            ventana.setVisible(true);
        });
    }
}
```

<!--
Notas del presentador:
Este código completo debe explicarse por bloques, evitando leer cada línea de manera mecánica. Primero se deben señalar las importaciones. Swing proporciona componentes gráficos como JFrame, JPanel, JLabel, JTextField, JComboBox, JButton, JTextArea y JOptionPane. AWT se usa para administradores de diseño como BorderLayout, GridLayout y FlowLayout, además de Font. Luego se presenta la clase RegistroAcademicoGUI, que extiende JFrame. Esto significa que la clase representa una ventana principal. Los atributos declarados al inicio corresponden a componentes que se necesitarán en varios métodos: campos de texto, lista desplegable, área de resumen e indicador de estado. El constructor llama a configurarVentana y crearInterfaz. Esta separación es una buena práctica básica porque permite distinguir entre propiedades generales de la ventana y construcción de componentes. En configurarVentana se define el título, tamaño, operación de cierre y ubicación centrada. En crearInterfaz se construye la estructura visual. El panel principal usa BorderLayout para organizar encabezado, zona central y estado inferior. El encabezado contiene título e instrucción. El formulario usa GridLayout porque organiza pares etiqueta-campo, lo que facilita lectura y alineación. Luego se crean los botones y se asocian sus eventos con métodos específicos mediante addActionListener. Este punto es crucial: el botón no hace nada por sí mismo; necesita un oyente de eventos que indique qué debe ocurrir cuando el usuario hace clic. El área de resumen se configura como no editable para que funcione como zona de salida, no como campo de entrada. El indicador de estado permite retroalimentación permanente. En registrarEstudiante se capturan los textos, se eliminan espacios laterales con trim y se valida si hay campos vacíos. Si falta información, se actualiza el estado y se muestra un mensaje de advertencia. Luego se valida de forma básica el correo. Si todo está correcto, se construye un resumen y se muestra un mensaje de éxito. En limpiarFormulario se restablecen campos, resumen y estado. Finalmente, main usa SwingUtilities.invokeLater para iniciar la interfaz en el hilo adecuado de Swing. Este ejemplo evidencia componentes, eventos, validación y retroalimentación visual inmediata.
-->

---
layout: slide-08-titulo-texto
---

::title::
Pasos para probar en Visual Studio Code

::content::

1. Instale Java JDK 17 o superior.

2. Instale Visual Studio Code y la extensión Extension Pack for Java.

3. Cree una carpeta de trabajo.

4. Cree el archivo:
   `RegistroAcademicoGUI.java`

5. Pegue el código completo.

6. Abra la terminal en la carpeta del archivo.

7. Compile:
   `javac RegistroAcademicoGUI.java`

8. Ejecute:
   `java RegistroAcademicoGUI`

9. Pruebe campos vacíos, correo incorrecto, registro correcto y botón limpiar.

<!--
Notas del presentador:
Esta diapositiva debe orientar a los estudiantes para ejecutar la práctica de manera autónoma. Se recomienda explicar que Java Swing forma parte de la plataforma Java estándar, por lo que no requiere instalar librerías externas para este ejemplo. El primer requisito es contar con un JDK instalado, preferiblemente versión 17 o superior, aunque el código no utiliza características avanzadas exclusivas de versiones recientes. Luego se sugiere usar Visual Studio Code con la extensión Extension Pack for Java, porque facilita la edición, ejecución y detección de errores comunes. Sin embargo, también se puede ejecutar desde otro entorno Java equivalente, como IntelliJ IDEA, Eclipse, NetBeans o directamente desde terminal. El archivo debe llamarse exactamente RegistroAcademicoGUI.java porque la clase pública tiene ese mismo nombre. Esta regla es importante en Java: el archivo debe coincidir con la clase pública. Después de pegar el código, se abre una terminal en la misma carpeta y se ejecuta javac RegistroAcademicoGUI.java. Este comando compila el código fuente y genera un archivo .class. Si hay errores de compilación, conviene revisar principalmente tres aspectos: que el nombre del archivo sea correcto, que no falten llaves o puntos y coma, y que el JDK esté instalado y disponible en la variable PATH. Luego se ejecuta java RegistroAcademicoGUI para abrir la ventana. La prueba debe realizarse de manera intencional. Primero, se presiona Registrar con campos vacíos para observar la validación. Segundo, se ingresa un correo sin formato válido para observar el mensaje de error. Tercero, se completan todos los datos correctamente para verificar el resumen y el mensaje de éxito. Cuarto, se presiona Limpiar para comprobar que el formulario vuelve a su estado inicial. Esta secuencia permite evaluar el comportamiento de la interfaz desde la perspectiva del usuario. Se puede pedir a los estudiantes que identifiquen qué elementos ofrecen retroalimentación: cuadro emergente, área de resumen, etiqueta de estado y limpieza de campos. También pueden sugerir mejoras, como validar dominios institucionales, agregar modo de alto contraste, reorganizar el formulario o adaptar el diseño a una versión web.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Producto esperado y preguntas de análisis

::left::
Producto esperado:

* Ventana funcional en Java Swing.
* Formulario con tres campos y una lista.
* Validación básica.
* Mensajes emergentes.
* Resumen actualizado.
* Indicador de estado.
* Botones con eventos activos.

::right::
Preguntas de análisis:

* ¿Qué componente guía mejor al usuario?
* ¿Qué ocurre si no hay retroalimentación?
* ¿Cómo mejorar la accesibilidad?
* ¿Cómo se adaptaría a móvil?
* ¿Qué evento adicional sería útil?
* ¿Qué cambiaría usando HTML, CSS y Bootstrap?

<!--
Notas del presentador:
El producto esperado debe presentarse como evidencia concreta de aprendizaje. Al finalizar la práctica, los estudiantes deberían tener una ventana funcional que permita capturar datos, validar información básica, mostrar mensajes y actualizar un resumen. No se espera una aplicación conectada a base de datos ni un sistema completo de registro, porque el objetivo de la clase es reconocer la relación entre componentes visuales, eventos de usuario y experiencia de uso. La ventana funcional demuestra que el estudiante puede construir una interfaz gráfica con Java Swing. El formulario con campos y lista muestra la organización de entradas. La validación básica evidencia prevención de errores. Los mensajes emergentes y el indicador de estado evidencian retroalimentación visual. Los botones con eventos activos permiten comprender que la interfaz responde a acciones del usuario. Las preguntas de análisis son fundamentales para evitar que la práctica se reduzca a copiar y ejecutar código. La primera pregunta, sobre qué componente guía mejor al usuario, puede generar respuestas como etiquetas, instrucciones, botón principal o mensajes de estado. La segunda pregunta invita a reflexionar sobre la importancia de la retroalimentación: sin ella, el usuario duda, repite acciones o abandona la tarea. La tercera pregunta conecta con accesibilidad. Los estudiantes pueden proponer mayor contraste, etiquetas más descriptivas, navegación por teclado, mensajes más claros, tamaños de fuente ajustables o evitar depender solo de color. La cuarta pregunta aborda adaptabilidad móvil. El formulario podría organizarse en una sola columna, los botones podrían ocupar todo el ancho, el resumen podría aparecer debajo y los mensajes podrían integrarse como alertas visibles. La quinta pregunta permite pensar en eventos adicionales: validación en tiempo real, deshabilitar el botón hasta completar campos, detectar cambios en el selector, limpiar errores al corregir o guardar historial. La sexta pregunta conecta Java Swing con web: HTML definiría estructura, CSS definiría presentación, Bootstrap aportaría componentes responsivos y JavaScript gestionaría eventos. Este análisis ayuda a que el estudiante transfiera aprendizajes entre tecnologías y entienda que los principios de interfaz son más amplios que una herramienta específica.
-->

---
layout: slide-08-titulo-texto
---

::title::
Socialización breve

::content::
Dinámica sugerida:

* Dos estudiantes comparten qué componente consideraron más importante.
* Dos estudiantes explican una mejora de accesibilidad.
* Un estudiante propone cómo llevaría la interfaz a web o móvil.
* El docente cierra relacionando aportes con evaluación, foro y práctica.

Pregunta de cierre:

¿Qué decisión de diseño mejora más la confianza del usuario al interactuar con un sistema?

<!--
Notas del presentador:
La socialización breve permite consolidar el aprendizaje después de la práctica. Como el tiempo disponible es reducido, se recomienda seleccionar intervenciones cortas y orientadas. El docente puede invitar a dos estudiantes a mencionar qué componente consideraron más importante en la interfaz. Algunos podrán elegir el botón Registrar porque ejecuta la acción principal; otros elegirán las etiquetas porque orientan la captura de datos; otros mencionarán el indicador de estado o el área de resumen porque confirman lo ocurrido. Lo importante es que cada respuesta se justifique en términos de experiencia de usuario, no solo de apariencia. Luego se invita a dos estudiantes a proponer una mejora de accesibilidad. Aquí pueden aparecer ideas como aumentar el tamaño del texto, mejorar contraste, usar mensajes más descriptivos, permitir navegación por teclado, agregar atajos, mejorar foco visual, evitar depender solo de color o incluir instrucciones más claras. Se debe valorar especialmente cuando el estudiante conecta accesibilidad con diversidad de usuarios. Después, un estudiante puede explicar cómo llevaría la interfaz a web o móvil. Esta intervención permite retomar HTML, CSS, modelo de cajas y Bootstrap. El docente puede reforzar que una versión web usaría etiquetas form, input, select, button y áreas de alerta, mientras que CSS y Bootstrap permitirían organizar el formulario de manera responsiva. En móvil, se priorizaría una sola columna, botones táctiles amplios y mensajes visibles cerca del campo correspondiente. La pregunta de cierre, sobre qué decisión de diseño mejora más la confianza del usuario, permite integrar varios conceptos. Una posible respuesta es la retroalimentación visual inmediata, porque confirma que el sistema responde. Otra puede ser la claridad de etiquetas y validaciones, porque reduce errores. Otra puede ser la consistencia visual, porque facilita anticipar el comportamiento. El docente debe cerrar destacando que la confianza no surge solo de la estética, sino de la coherencia entre lo que el usuario quiere hacer, lo que la interfaz comunica y lo que el sistema responde.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
MODELO DE CAJA en CSS - Guía definitiva

::media::

<iframe width="560" height="315" src="https://www.youtube.com/embed/Z79Xp-5Vhvc?si=9VWU23LdHZKVgEZ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
La curaduría de videos se plantea como apoyo complementario, no como reemplazo de la explicación docente. Se recomienda verificar previamente los enlaces, la duración y la pertinencia de los recursos antes de usarlos en clase o compartirlos en el aula virtual. El primer video sugerido debe tratar Java Swing y eventos de botones, porque la práctica guiada se basa en componentes como JFrame, JPanel, JLabel, JTextField, JComboBox, JButton, JTextArea y JOptionPane, además de eventos asociados a clics. El propósito pedagógico de este video sería reforzar visualmente cómo un botón se conecta con un ActionListener y cómo una acción del usuario genera una respuesta del sistema. Debe utilizarse antes de la práctica guiada o como recurso de apoyo posterior para quienes necesiten repasar. El segundo video debe explicar el modelo de cajas en CSS. Es importante porque la semana introduce HTML, CSS y Bootstrap, y muchos estudiantes suelen confundir diseño web con simple ubicación visual de elementos. Un recurso visual sobre contenido, padding, border y margin puede ayudar a comprender cómo se organizan tarjetas, formularios, botones y secciones. Este video puede usarse durante el desarrollo conceptual o dejarse como consulta autónoma. El tercer video debe abordar accesibilidad, contraste y legibilidad. Este recurso ayuda a fortalecer la dimensión inclusiva del diseño, especialmente para responder el foro y analizar el modo de alto contraste, la jerarquía textual, el uso del color y la claridad de los mensajes. Se sugiere elegir videos cortos, claros, preferiblemente en español y con ejemplos visuales. Si no se puede verificar que un video específico dure menos de cinco minutos, es mejor dejar el espacio marcado para agregar un enlace verificado, evitando inventar enlaces o compartir recursos demasiado extensos. El docente puede complementar estos videos con demostraciones propias, capturas de pantalla o análisis de interfaces reales. La justificación académica de estos recursos está en que permiten observar conceptos en acción y facilitan que los estudiantes conecten teoría, herramienta y criterio de diseño.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
¿Qué es la ACCESIBILIDAD WEB? | Diccionario de Marketing Digital

::media::

<iframe width="560" height="315" src="https://www.youtube.com/embed/fcXL0tfcgqc?si=zIxWMFgCyZtcHx_v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
La curaduría de videos se plantea como apoyo complementario, no como reemplazo de la explicación docente. Se recomienda verificar previamente los enlaces, la duración y la pertinencia de los recursos antes de usarlos en clase o compartirlos en el aula virtual. El primer video sugerido debe tratar Java Swing y eventos de botones, porque la práctica guiada se basa en componentes como JFrame, JPanel, JLabel, JTextField, JComboBox, JButton, JTextArea y JOptionPane, además de eventos asociados a clics. El propósito pedagógico de este video sería reforzar visualmente cómo un botón se conecta con un ActionListener y cómo una acción del usuario genera una respuesta del sistema. Debe utilizarse antes de la práctica guiada o como recurso de apoyo posterior para quienes necesiten repasar. El segundo video debe explicar el modelo de cajas en CSS. Es importante porque la semana introduce HTML, CSS y Bootstrap, y muchos estudiantes suelen confundir diseño web con simple ubicación visual de elementos. Un recurso visual sobre contenido, padding, border y margin puede ayudar a comprender cómo se organizan tarjetas, formularios, botones y secciones. Este video puede usarse durante el desarrollo conceptual o dejarse como consulta autónoma. El tercer video debe abordar accesibilidad, contraste y legibilidad. Este recurso ayuda a fortalecer la dimensión inclusiva del diseño, especialmente para responder el foro y analizar el modo de alto contraste, la jerarquía textual, el uso del color y la claridad de los mensajes. Se sugiere elegir videos cortos, claros, preferiblemente en español y con ejemplos visuales. Si no se puede verificar que un video específico dure menos de cinco minutos, es mejor dejar el espacio marcado para agregar un enlace verificado, evitando inventar enlaces o compartir recursos demasiado extensos. El docente puede complementar estos videos con demostraciones propias, capturas de pantalla o análisis de interfaces reales. La justificación académica de estos recursos está en que permiten observar conceptos en acción y facilitan que los estudiantes conecten teoría, herramienta y criterio de diseño.
-->

---
layout: slide-08-titulo-texto
---

::title::
Preguntas frecuentes para revisar:

::content::

* ¿Cuándo usar un botón y cuándo un enlace?
* ¿Cómo diferenciar acción principal y secundaria?
* ¿Qué validaciones debe tener un formulario?
* ¿Cómo saber si una interfaz es accesible?
* ¿Qué cambia entre Java Swing, JavaFX y web?
* ¿Cómo justificar una mejora de interfaz en el foro?
* ¿Qué evidencias muestran buena retroalimentación visual?

<!--
Notas del presentador:
El espacio de resolución de dudas debe mantenerse dentro del límite de quince minutos establecido para la Open Class, y en esta sesión se propone concentrarlo al final con una duración aproximada de cinco minutos, debido a que la socialización ya habrá permitido aclarar varias ideas. Esta diapositiva ofrece criterios para organizar preguntas frecuentes. Una duda común es cuándo usar un botón y cuándo un enlace. Se puede explicar que un botón suele ejecutar una acción dentro de la interfaz, como guardar, enviar, limpiar o confirmar; mientras que un enlace suele llevar a otra página, sección o recurso. Otra pregunta habitual es cómo diferenciar una acción principal de una secundaria. La acción principal debe estar relacionada con el objetivo central de la pantalla y tener mayor peso visual; la secundaria debe estar disponible, pero no competir excesivamente con la principal. En formularios, los estudiantes pueden preguntar qué validaciones deben incluirse. La respuesta depende del tipo de dato, pero como mínimo deben revisarse campos obligatorios, formato esperado, rangos permitidos y mensajes comprensibles. Sobre accesibilidad, se puede explicar que no basta con “verse bien”; se deben considerar contraste, tamaño de texto, etiquetas, navegación, foco visible, uso no exclusivo del color y claridad de mensajes. También puede surgir la pregunta sobre Java Swing, JavaFX y web. Swing es una biblioteca clásica para interfaces de escritorio en Java; JavaFX ofrece capacidades modernas para interfaces enriquecidas; web usa HTML para estructura, CSS para presentación y JavaScript para comportamiento. Sin embargo, los principios de diseño se mantienen: claridad, jerarquía, retroalimentación, consistencia y accesibilidad. Para el foro, se debe orientar a que las respuestas incluyan definición, explicación, ejemplo y aplicación. No es suficiente afirmar que “la accesibilidad es importante”; deben explicar para quién, por qué y cómo se implementa. Finalmente, sobre retroalimentación visual, se puede pedir que identifiquen evidencias concretas: mensajes, cambios de estado, barras de progreso, actualización de resumen o confirmaciones. El cierre debe priorizar dudas de comprensión general y dejar preguntas técnicas extensas para acompañamiento posterior o recursos complementarios.
-->

---
layout: slide-08-titulo-texto
---

::title::
Ideas clave de la sesión:

::content::

* Una interfaz comunica estructura, acción y estado.
* Los componentes gráficos deben responder a funciones claras.
* La usabilidad depende de comprensión, eficiencia y prevención de errores.
* La accesibilidad amplía la calidad de la interfaz a usuarios diversos.
* La adaptabilidad permite experiencias coherentes en escritorio, web y móvil.
* Los eventos de usuario conectan diseño visual y comportamiento del sistema.

Recordatorio: diligenciar la Encuesta de Percepción Estudiantil.

<!--
Notas del presentador:
El cierre académico debe recuperar las ideas centrales de la sesión y proyectarlas hacia la actividad de la semana. Se recomienda iniciar recordando que una interfaz comunica estructura, acción y estado. Comunica estructura porque organiza información y componentes; comunica acción porque indica qué puede hacer el usuario; comunica estado porque informa qué está ocurriendo o qué resultado tuvo una interacción. Luego se debe enfatizar que los componentes gráficos deben responder a funciones claras. Un botón ejecuta una acción, una barra de progreso indica avance, un indicador de estado informa situación, un menú organiza opciones, un pie de página contiene información complementaria y un campo de entrada captura datos. Esta claridad funcional permite responder la evaluación con criterio. También se debe recordar que la usabilidad depende de comprensión, eficiencia y prevención de errores. Una interfaz usable no obliga al usuario a adivinar, repetir acciones o interpretar mensajes ambiguos. La accesibilidad amplía esa calidad porque reconoce la diversidad de usuarios y condiciones de uso. Diseñar con contraste, legibilidad, etiquetas, mensajes claros y navegación consistente no beneficia solo a personas con discapacidades; beneficia a todos los usuarios. La adaptabilidad permite que la experiencia se mantenga coherente entre escritorio, web y móvil. Puede cambiar la disposición visual, pero no deben perderse la tarea principal, la jerarquía ni la retroalimentación. Además, los eventos de usuario conectan el diseño visual con el comportamiento del sistema. La práctica en Java Swing mostró que un clic puede activar validaciones, actualizar un resumen, mostrar mensajes y modificar el estado. Finalmente, se debe recordar la participación en el foro según la dinámica de equipo y la importancia de que todos intervengan. El cierre institucional debe incluir el recordatorio de diligenciar la Encuesta de Percepción Estudiantil. Se puede explicar que esta encuesta permite valorar el acompañamiento, los recursos, la comunicación y la experiencia de aprendizaje, y que sus resultados ayudan a fortalecer el proceso académico. El tono debe ser cordial, breve y orientado a la mejora continua.
-->

---
layout: slide-12-cierre
---

::title::
Gracias por su participación

::content::
Semana 7 · Diseño de Interfaces
Estructuras adaptables, accesibilidad y eventos de usuario

Próximo paso: participar en el foro, revisar la evaluación y practicar la implementación de interfaces gráficas con criterio de usabilidad.

<!--
Notas del presentador:
La diapositiva final debe cerrar la sesión con un mensaje claro y motivador. Se recomienda agradecer la participación de los estudiantes, especialmente si intervinieron en la actividad inicial, la práctica guiada o la socialización. Luego se debe recordar que la semana 7 no se limita a conocer nombres de componentes, sino a comprender cómo esos componentes construyen experiencias de usuario. Las estructuras adaptables permiten que una interfaz funcione en distintos contextos; la accesibilidad garantiza que más personas puedan usarla; la retroalimentación visual fortalece la confianza; la jerarquía visual orienta la atención; y los eventos de usuario convierten la interfaz en un sistema interactivo. Se puede invitar a los estudiantes a revisar nuevamente el código de la práctica y modificarlo como ejercicio autónomo. Algunas modificaciones sugeridas pueden ser agregar un campo de teléfono, incluir un selector de jornada, validar dominio institucional, cambiar la organización visual, agregar un contador de caracteres o convertir el diseño a una versión web usando HTML, CSS y Bootstrap. También se debe recordar el foro. Cada equipo debe organizar sus participaciones para que haya aporte principal, retroalimentaciones y conclusión. La calidad de la participación mejora cuando se usan ejemplos concretos, conceptos de la clase y argumentos técnicos. La evaluación también debe abordarse con comprensión funcional: al responder preguntas sobre iconos, gráficos, barras de progreso, botones, navegación, indicadores, menús, pie de página, alto contraste, retroalimentación y legibilidad, el estudiante debe preguntarse siempre cuál es la función del componente dentro de la interfaz. Finalmente, se debe reiterar el recordatorio institucional de la Encuesta de Percepción Estudiantil, invitando a responderla con responsabilidad y sentido constructivo. Esta última diapositiva puede permanecer en pantalla mientras se despide la sesión, se comparten indicaciones finales por chat o se recuerdan canales de comunicación. El cierre debe transmitir continuidad: lo aprendido hoy servirá para el foro, para la evaluación y para futuros proyectos de diseño e implementación de interfaces en ingeniería de software.
-->

