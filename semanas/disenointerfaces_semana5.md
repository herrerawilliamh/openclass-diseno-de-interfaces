---
layout: slide-01-portada
---

::title::
Diseño de Interfaces

::week::
Semana 5

::date::
Junio 5 de 2026

<!--
Notas del presentador:
Dar la bienvenida a los estudiantes a la Open Class de la semana 5 del curso Diseño de Interfaces. Enfatizar que la sesión estará orientada a comprender la experiencia del usuario como un componente central en la calidad de una interfaz gráfica. Explicar que no basta con que una aplicación funcione técnicamente; también debe ser comprensible, eficiente, accesible, agradable y coherente con las necesidades reales de quienes la utilizan. Puede iniciar preguntando brevemente qué aplicaciones usan a diario y cuáles consideran fáciles o difíciles de usar. Esta pregunta permite abrir la clase desde experiencias cercanas, antes de avanzar hacia conceptos técnicos.

Se recomienda presentar la sesión como un puente entre la teoría de usabilidad y la construcción práctica de interfaces gráficas. Recordar que, en Ingeniería de Software, diseñar una interfaz implica tomar decisiones sobre estructura visual, interacción, eventos, validaciones, mensajes, retroalimentación y accesibilidad. Estas decisiones afectan directamente la satisfacción del usuario y la percepción de calidad del sistema.

También es importante situar la semana dentro del curso. En semanas anteriores se han abordado fundamentos de interfaces gráficas, paradigmas de diseño y elementos de interacción. En esta sesión se profundiza en cómo el usuario percibe la interfaz, cómo interpreta los mensajes, cómo responde ante errores, cómo navega entre opciones y cómo evalúa si el sistema le facilita o le dificulta alcanzar sus objetivos.

Indicar que la clase tendrá una duración aproximada de 90 minutos y estará organizada en momentos: bienvenida, activación de saberes previos, desarrollo conceptual, relación con la evaluación, práctica guiada con Java Swing, socialización, dudas y cierre institucional. Señalar que al finalizar la sesión cada estudiante deberá comprender la diferencia entre UI y UX, reconocer principios clave de usabilidad, proponer mejoras centradas en el usuario y relacionar estos conceptos con la determinación de requerimientos de una interfaz gráfica.
-->

---
layout: slide-02-titulo
---

::title::
Experiencia de Usuario UX

<!--
Notas del presentador:
Presentar el título de la sesión como una idea clave: la experiencia de usuario no se reduce a lo visual, sino que integra cómo una persona comprende, usa, interpreta y valora un sistema. Una interfaz puede tener colores atractivos, íconos modernos o animaciones llamativas, pero si el usuario no entiende qué hacer, no recibe retroalimentación clara, no puede recuperarse de un error o tarda demasiado en completar una tarea, la experiencia será deficiente.

Explicar que la experiencia de usuario debe analizarse como un proceso completo. Antes de interactuar con la interfaz, el usuario llega con expectativas, conocimientos previos, limitaciones, necesidades y emociones. Durante la interacción, observa elementos visuales, toma decisiones, ejecuta acciones, interpreta mensajes y espera resultados. Después de la interacción, evalúa si logró su objetivo, si el sistema fue confiable y si desearía volver a usarlo. Por ello, el diseño de interfaces debe considerar tanto aspectos funcionales como emocionales, estéticos y cognitivos.

Conectar esta idea con el perfil del estudiante de Ingeniería de Software. En muchos proyectos académicos y profesionales, se presta mayor atención al código, la base de datos o la arquitectura del sistema. Sin embargo, para el usuario final, la interfaz es el punto de contacto visible con todo el trabajo técnico. Si la interfaz falla en claridad, navegación o accesibilidad, el usuario puede percibir que todo el sistema es malo, aunque internamente esté bien construido. Esta reflexión ayuda a valorar el diseño de interfaces como una competencia profesional.

Anticipar que durante la clase se abordarán conceptos como usabilidad, accesibilidad, carga cognitiva, navegación intuitiva, retroalimentación clara, manejo de errores, eficiencia, flexibilidad y empatía con el usuario. Indicar que estos conceptos no se estudiarán como definiciones aisladas, sino como criterios aplicables para evaluar y construir interfaces reales.
-->

---
layout: slide-03-imagen-izquierda
---

::title::
La interfaz que me hizo perder tiempo

::image:: 
<img src="/imagenes/01_ux_interfaz_cotidiana.png" alt="Imagen de apoyo sobre análisis de una interfaz cotidiana" />

::content::
**Duración:** 10 a 15 minutos.

**Para estudiantes:**
Piensen en una interfaz que hayan usado recientemente y que les haya generado confusión, demora o error.

Respondan mentalmente:
¿Qué querían lograr?
¿Qué elemento generó dificultad?
¿Qué mensaje, botón o flujo habría mejorado la experiencia?

**Para el docente:**
Recoja 4 o 5 respuestas rápidas y clasifíquelas en:
navegación, retroalimentación, accesibilidad, carga cognitiva o manejo de errores.

<!--
Notas del presentador:
Guiar la actividad como una activación de saberes previos. Pedir a los estudiantes que recuerden una experiencia real, preferiblemente reciente, con una aplicación o plataforma. Puede ser una plataforma académica, una aplicación bancaria, una tienda en línea, un formulario institucional, un sistema de turnos, una aplicación de transporte o una herramienta de mensajería. Lo importante es que la experiencia haya generado alguna dificultad: no encontrar una opción, no entender un mensaje, equivocarse en un formulario, no saber si una acción se guardó, recibir un error confuso o sentirse saturado por demasiada información.

Dar uno o dos minutos para que cada estudiante piense individualmente. Luego solicitar participaciones voluntarias breves. Si la clase es numerosa, se puede usar el chat para respuestas cortas. Sugerir que escriban una frase con la estructura: “Quería hacer…, pero la interfaz…, y habría sido mejor si…”. Esta estructura ayuda a convertir una queja general en un análisis de diseño.

A medida que los estudiantes compartan casos, clasificar las dificultades en categorías. Si alguien menciona que no encontró una opción, relacionarlo con navegación intuitiva. Si menciona que presionó un botón y no supo si funcionó, relacionarlo con retroalimentación clara. Si indica que el texto era pequeño, el contraste bajo o no podía usar la interfaz desde el celular, relacionarlo con accesibilidad y adaptabilidad. Si expresa que había demasiada información o demasiadas opciones, relacionarlo con carga cognitiva. Si dice que apareció un error incomprensible, relacionarlo con manejo de errores.

Cerrar la actividad destacando que el diseño de interfaces se fundamenta precisamente en observar estas experiencias. El estudiante de Ingeniería de Software debe aprender a traducir problemas del usuario en requerimientos de interfaz. Por ejemplo, “el usuario no sabe si el registro fue exitoso” puede convertirse en el requerimiento “el sistema debe mostrar un mensaje de confirmación visible después del envío del formulario”. Esta conexión prepara el desarrollo conceptual y la actividad del foro.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
UI y UX: dos conceptos relacionados, no equivalentes

::left::
**UI · Interfaz de Usuario**

Elementos visibles e interactivos.

Botones, etiquetas, colores, formularios, menús, ventanas, iconos y distribución visual.

Responde a la pregunta:
¿Cómo se ve y cómo se manipula la interfaz?

::right::
**UX · Experiencia de Usuario**

Percepción completa del usuario durante la interacción.

Incluye facilidad de uso, confianza, fluidez, satisfacción, accesibilidad, eficiencia y emociones.

Responde a la pregunta:
¿Cómo vive el usuario la interacción?

<!--
Notas del presentador:
Explicar con cuidado la diferencia entre UI y UX, porque suele ser una de las confusiones más frecuentes en el diseño de interfaces y aparece directamente en la evaluación de la semana. UI, o interfaz de usuario, hace referencia a los elementos con los que el usuario interactúa de forma directa. En una aplicación de escritorio, estos elementos pueden ser una ventana, un botón, una caja de texto, una lista desplegable, una etiqueta, una tabla visual o un cuadro de diálogo. En una aplicación web o móvil, pueden incluir menús, tarjetas, íconos, barras de navegación y formularios. La UI se preocupa por la presentación y la interacción visible.

UX, o experiencia de usuario, es más amplia. Incluye la percepción total del usuario antes, durante y después de usar el sistema. Una buena UX no depende únicamente de que la interfaz se vea agradable, sino de que permita alcanzar objetivos con claridad, rapidez y confianza. Por ejemplo, un formulario puede tener una UI visualmente atractiva, con colores modernos y botones bien diseñados. Sin embargo, si no indica qué campos son obligatorios, si borra la información cuando ocurre un error, si usa mensajes técnicos incomprensibles o si tarda demasiado en responder, la experiencia será negativa.

Usar una analogía puede ayudar. La UI sería similar al tablero, volante, pedales y pantalla de un automóvil; la UX sería la experiencia completa de conducirlo: si se entiende, si responde bien, si genera seguridad, si permite llegar al destino y si el conductor se siente cómodo. En software ocurre algo similar. Los componentes gráficos son necesarios, pero la experiencia emerge de cómo esos componentes ayudan o dificultan la tarea del usuario.

Relacionar esta explicación con la práctica en Java Swing. Crear un botón en código es una decisión de UI. Definir qué texto tendrá el botón, cuándo se habilita, qué mensaje muestra al presionarlo, cómo valida los datos y cómo informa errores son decisiones que impactan la UX. Por eso, programar interfaces no consiste solo en ubicar componentes, sino en diseñar interacciones comprensibles.
-->

---
layout: slide-08-titulo-texto
---

::title::
Términos clave para comprender la experiencia de usuario

::content::
La **usabilidad** permite evaluar si una interfaz es fácil de aprender, eficiente, memorable y satisfactoria. Una interfaz usable reduce dudas, evita pasos innecesarios y facilita que el usuario complete sus tareas.

La **accesibilidad** busca que la interfaz pueda ser utilizada por personas con distintas capacidades, dispositivos y contextos. Implica contraste adecuado, textos comprensibles, navegación clara y compatibilidad con tecnologías de apoyo.

La **carga cognitiva** es el esfuerzo mental que exige una interfaz. Si hay demasiadas opciones, instrucciones confusas o información mal organizada, el usuario se fatiga y comete más errores.

La **retroalimentación clara** informa el resultado de las acciones: botón presionado, tarea completada, dato inválido o error recuperable.

La **navegación intuitiva** permite que el usuario anticipe dónde está, qué puede hacer y cómo regresar.

<!--
Notas del presentador:
Desarrollar esta diapositiva como un glosario aplicado, no como una lista de definiciones aisladas. La usabilidad debe presentarse como la capacidad de una interfaz para permitir que los usuarios logren sus objetivos de manera efectiva, eficiente y satisfactoria. Efectiva significa que el usuario puede completar la tarea. Eficiente significa que lo logra con un esfuerzo razonable, sin pasos innecesarios. Satisfactoria significa que la interacción no genera frustración innecesaria y transmite control. En Ingeniería de Software, estos criterios pueden convertirse en requisitos verificables: por ejemplo, “el usuario debe registrar una solicitud en menos de tres pasos principales” o “el sistema debe mostrar mensajes comprensibles ante campos inválidos”.

La accesibilidad debe abordarse como una responsabilidad técnica y ética. No debe limitarse a cumplir una norma, sino a ampliar la posibilidad de uso. Una interfaz accesible considera contraste, tamaño de letra, lenguaje claro, orden lógico de navegación, etiquetas descriptivas, alternativas textuales para elementos visuales y compatibilidad con teclado o lectores de pantalla. También se puede explicar que accesibilidad y usabilidad se refuerzan mutuamente. Cuando una interfaz tiene buen contraste, mensajes claros y navegación ordenada, mejora para todos los usuarios, no solo para quienes tienen una discapacidad permanente.

La carga cognitiva se refiere al esfuerzo mental requerido para interpretar la interfaz y tomar decisiones. Cuando el usuario debe recordar demasiados pasos, descifrar términos técnicos, revisar pantallas saturadas o elegir entre opciones poco diferenciadas, la carga cognitiva aumenta. Esto provoca errores, abandono y baja satisfacción. Un buen diseño organiza la información, prioriza lo importante, agrupa elementos relacionados y ofrece ayudas oportunas.

La retroalimentación clara es esencial para que el usuario sepa qué ocurrió después de una acción. Si presiona “Guardar”, debe recibir confirmación. Si falta un dato, debe saber cuál y cómo corregirlo. Si ocurre un error, el mensaje debe ser humano, específico y recuperable. Finalmente, la navegación intuitiva permite construir orientación. El usuario debe saber dónde está, qué ruta sigue y cómo avanzar o regresar. Estos conceptos serán retomados en la práctica de Java Swing mediante validación, mensajes y estructura visual.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Usabilidad: objetivo sin luchar contra la interfaz

::image:: 
<img src="/imagenes/02_ui_vs_ux.png" alt="Imagen de apoyo sobre usabilidad en interfaces gráficas" />

::content::
Una interfaz usable permite:

* Entender rápidamente qué se puede hacer.
* Completar tareas con pocos pasos.
* Corregir errores sin perder el trabajo.
* Reconocer opciones en lugar de memorizar comandos.
* Mantener consistencia visual y funcional.
* Recibir mensajes claros y oportunos.
* Adaptarse a usuarios principiantes y avanzados.

<!--
Notas del presentador:
Explicar que la usabilidad es uno de los pilares de la experiencia de usuario y debe ser considerada desde las primeras fases del diseño, no al final del desarrollo. En muchos proyectos se comete el error de construir primero la funcionalidad y revisar la usabilidad únicamente cuando el sistema ya está terminado. Esto suele producir interfaces difíciles de modificar, flujos confusos y problemas que pudieron haberse prevenido mediante una mejor determinación de requerimientos.

Usar un ejemplo sencillo: un formulario de inscripción. Desde el punto de vista funcional, el sistema puede guardar nombre, correo y programa académico. Sin embargo, desde la usabilidad se deben considerar preguntas adicionales: ¿el usuario entiende qué datos debe ingresar?, ¿sabe cuáles campos son obligatorios?, ¿el sistema valida el correo antes de enviar?, ¿el botón tiene una etiqueta clara?, ¿se conserva la información si ocurre un error?, ¿hay confirmación al finalizar?, ¿el mensaje de error explica cómo corregir el problema? Estas preguntas muestran que la usabilidad no es decoración, sino calidad de interacción.

Resaltar la importancia de la consistencia. Si en una pantalla el botón principal se llama “Guardar” y en otra se llama “Aceptar” para realizar la misma acción, el usuario puede confundirse. Si los mensajes de error cambian de estilo o ubicación, la interfaz pierde previsibilidad. La consistencia reduce aprendizaje y carga cognitiva, porque permite transferir lo aprendido de una parte del sistema a otra.

También explicar que la usabilidad debe atender distintos niveles de experiencia. Un usuario principiante necesita claridad, ayudas y rutas visibles. Un usuario avanzado puede valorar atajos, valores por defecto, autocompletado o acciones rápidas. Por eso, eficiencia y flexibilidad no significan llenar la pantalla de opciones, sino permitir que diferentes usuarios realicen tareas de manera adecuada según sus estilos de trabajo.

Cerrar conectando con la evaluación semanal: facilidad de uso, navegación intuitiva, retroalimentación clara, manejo de errores y eficiencia son conceptos que se evalúan no solo como definiciones, sino como criterios para analizar una interfaz real.
-->

---
layout: slide-05-titulo-superior-texto-derecha
---

::title::
Accesibilidad y adaptabilidad: diseñar para diversidad de usuarios

::image:: 
<img src="/imagenes/03_usabilidad_interfaz.png" alt="Imagen de apoyo sobre accesibilidad digital y adaptabilidad" />

::content::
Consideraciones esenciales:

* Contraste suficiente entre texto y fondo.
* Tamaño de letra legible.
* Lenguaje claro, sin tecnicismos innecesarios.
* Orden lógico de lectura y navegación.
* Botones con etiquetas descriptivas.
* Mensajes de error comprensibles.
* Interacción posible con teclado.
* Diseño adaptable a distintas pantallas y contextos.

<!--
Notas del presentador:
Presentar la accesibilidad como un principio fundamental del diseño profesional de interfaces. Es importante evitar que los estudiantes la interpreten únicamente como un requisito para casos excepcionales. La accesibilidad permite que más personas puedan utilizar un sistema en diferentes condiciones. Una persona con baja visión puede requerir buen contraste y tamaño de letra adecuado. Una persona con dificultad motriz puede necesitar navegación por teclado. Un usuario que accede desde un celular con pantalla pequeña necesita diseño adaptable. Un estudiante en un entorno con mala iluminación o conexión limitada también se beneficia de una interfaz clara, liviana y predecible.

Relacionar accesibilidad con adaptabilidad. La adaptabilidad implica que la interfaz responda a diferentes dispositivos, resoluciones, tamaños de pantalla, preferencias y contextos de uso. En aplicaciones de escritorio desarrolladas con Java Swing o JavaFX, esto se puede trabajar mediante administradores de diseño adecuados, distribución flexible de paneles, textos legibles y componentes organizados. En aplicaciones web, se relaciona con diseño responsivo, escalabilidad visual y compatibilidad con distintos navegadores.

Explicar que la accesibilidad comienza desde decisiones muy concretas. No usar texto gris claro sobre fondo blanco. No depender únicamente del color para indicar error, porque algunos usuarios pueden no distinguir ciertos colores. No escribir mensajes como “Error 45X” sin explicación. No colocar botones con etiquetas ambiguas como “OK” cuando la acción real es “Eliminar cuenta” o “Enviar solicitud”. No obligar a memorizar códigos o rutas complejas. Cada una de estas decisiones mejora la experiencia y reduce exclusión.

Conectar con la actividad del foro. Al determinar requerimientos de usuario, se debe preguntar quiénes usarán la interfaz, qué características tienen, qué limitaciones pueden enfrentar, desde qué dispositivos accederán y qué nivel de experiencia poseen. Estas respuestas permiten definir requerimientos de accesibilidad y usabilidad desde el inicio.

Cerrar con una idea clave: una interfaz accesible no es una interfaz menos estética ni menos avanzada. Es una interfaz mejor diseñada, porque reconoce la diversidad de personas y contextos en los que el software será utilizado.
-->

---
layout: slide-06-titulo-superior-texto-izquierda
---

::title::
Carga cognitiva: menos esfuerzo mental, más claridad de acción

::image:: 
<img src="/imagenes/04_accesibilidad_digital.png" alt="Imagen de apoyo sobre carga cognitiva en interfaces" />

::content::
La carga cognitiva aumenta cuando:

* Hay demasiada información al mismo tiempo.
* Los botones no indican claramente su acción.
* El usuario debe recordar pasos anteriores.
* Los mensajes son técnicos o ambiguos.
* La navegación no muestra orientación.
* La interfaz mezcla funciones sin jerarquía.

Reducir carga cognitiva no significa quitar funciones; significa organizarlas mejor.

<!--
Notas del presentador:
Explicar que la carga cognitiva es el esfuerzo mental que el usuario debe invertir para comprender una interfaz, tomar decisiones y completar una tarea. En diseño de interfaces, el objetivo no es eliminar todo esfuerzo, porque algunas tareas son naturalmente complejas, sino evitar esfuerzo innecesario producido por mala organización, lenguaje confuso o exceso de elementos visuales. Esta idea es muy útil para estudiantes de Ingeniería de Software, porque permite evaluar una pantalla no solo por su apariencia, sino por el trabajo mental que exige.

Presentar un ejemplo concreto. Imagine un sistema académico en el que el estudiante debe consultar sus calificaciones. Si al ingresar encuentra veinte opciones sin jerarquía, nombres técnicos como “módulo de desempeño cuantitativo”, menús ocultos y botones similares para acciones distintas, la carga cognitiva será alta. El estudiante tendrá que explorar, equivocarse, regresar y volver a intentar. En cambio, si la interfaz organiza las opciones por categorías claras, usa etiquetas como “Mis cursos”, “Calificaciones” y “Certificados”, muestra rutas visibles y ofrece retroalimentación, el esfuerzo mental disminuye.

Aclarar que reducir carga cognitiva no equivale a crear interfaces pobres o con pocas funciones. Una aplicación profesional puede tener muchas capacidades, pero debe organizarlas progresivamente. Se pueden usar agrupaciones, prioridades, menús lógicos, valores por defecto, mensajes contextuales y separación de tareas. En una interfaz de registro, por ejemplo, los campos personales, académicos y de contacto pueden organizarse en secciones. En una aplicación de escritorio, se pueden usar paneles, listas y botones principales claramente diferenciados.

Relacionar el concepto con la evaluación: una de las preguntas aborda la carga cognitiva como presentación clara de información sin abrumar al usuario. Enfatizar que minimizar información no siempre significa ocultarlo todo, sino presentar lo necesario en el momento adecuado. La interfaz debe ayudar a pensar, no obligar al usuario a descifrar cómo funciona el sistema.

Cerrar mencionando que en la práctica Java Swing se implementará una interfaz pequeña donde la carga cognitiva se reduce mediante etiquetas claras, campos limitados, botones con acciones explícitas y mensajes de validación comprensibles.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Retroalimentación y manejo de errores

::left::
**Retroalimentación clara**

El sistema comunica el resultado de una acción.

Ejemplos:

* Registro completado.
* Campo obligatorio faltante.
* Botón presionado.
* Datos actualizados.
* Proceso en curso.

::right::
**Manejo de errores**

El sistema informa qué ocurrió y cómo recuperarse.

Ejemplos:

* “Ingrese un correo válido”.
* “La contraseña debe tener mínimo 8 caracteres”.
* “No se pudo guardar. Revise la conexión e intente nuevamente”.

<!--
Notas del presentador:
Explicar que la retroalimentación clara y el manejo de errores son dos componentes centrales de la experiencia de usuario. La retroalimentación clara permite que el usuario sepa si el sistema recibió una acción, si la está procesando o si ya la completó. Sin retroalimentación, el usuario puede repetir la acción, abandonar el proceso o pensar que el sistema falló. Por ejemplo, cuando se presiona un botón de “Enviar”, la interfaz debería confirmar que la solicitud fue recibida, mostrar un indicador de carga si el proceso tarda o informar que hubo un problema si no se pudo completar.

Diferenciar retroalimentación de manejo de errores. La retroalimentación no solo aparece cuando algo sale mal. También aparece cuando una acción fue exitosa. Un mensaje como “Registro guardado correctamente” reduce incertidumbre y aumenta confianza. El manejo de errores, por su parte, debe ayudar a la recuperación. Un mal mensaje de error dice “Error del sistema” o “Código 500”. Un mejor mensaje dice “No se pudo guardar la información. Revise su conexión e intente nuevamente”. Un mensaje aún más útil puede indicar qué campo debe corregirse o qué acción seguir.

Recalcar que los errores no deben ocultarse ni culpar al usuario. En diseño centrado en el usuario, se reconoce que los errores forman parte de la interacción. La interfaz debe prevenir errores cuando sea posible, detectarlos cuando ocurren y ayudar a resolverlos. Por ejemplo, es mejor validar un correo antes de enviar que esperar a que falle todo el formulario. También es importante conservar la información ya ingresada para que el usuario no tenga que repetir todo el proceso.

Conectar con programación orientada a eventos. En Java Swing, un botón puede tener un `ActionListener`. Cuando el usuario hace clic, se valida la información y se muestra un mensaje. Esta lógica técnica expresa principios de UX. No basta con capturar el evento; se debe responder al usuario de forma clara. Por eso, en la práctica guiada se incluirán validaciones básicas y mensajes emergentes con `JOptionPane`, para evidenciar cómo el código puede apoyar la experiencia de usuario.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Navegación intuitiva

::rightTitle::
Eficiencia y flexibilidad

::left::
Una navegación intuitiva es lógica, predecible y fácil de seguir.

El usuario debe saber:

* Dónde está.
* Qué puede hacer.
* Cómo avanzar.
* Cómo corregir.
* Cómo regresar.

::right::
Una interfaz eficiente reduce pasos innecesarios.

Una interfaz flexible permite diferentes estilos de trabajo:

* Usuarios principiantes.
* Usuarios frecuentes.
* Atajos.
* Valores por defecto.
* Acciones rápidas.

<!--
Notas del presentador:
Presentar la navegación intuitiva como la capacidad de la interfaz para orientar al usuario. Una navegación intuitiva no significa que la persona “adivine” mágicamente cómo funciona el sistema, sino que la estructura, los nombres, los botones y la secuencia de acciones se ajustan a expectativas razonables. Por ejemplo, en una tienda en línea, el usuario espera encontrar productos, ver detalles, agregar al carrito, revisar compra y pagar. Si la interfaz altera esa secuencia sin explicación, la experiencia se vuelve confusa.

Explicar que la navegación intuitiva depende de la lógica de la información. Las opciones relacionadas deben estar cerca. Los nombres de menús deben corresponder con el lenguaje del usuario, no solo con términos internos del equipo de desarrollo. Un botón debe indicar claramente qué acción realiza. Las rutas deben permitir avanzar y retroceder. Cuando una interfaz no ofrece orientación, el usuario se siente perdido, comete errores o abandona la tarea.

Luego abordar eficiencia y flexibilidad. La eficiencia se relaciona con lograr una tarea con menor esfuerzo, menor tiempo y menor cantidad de pasos innecesarios. No se trata de hacer todo automático sin control, sino de evitar fricción. La flexibilidad permite que distintos usuarios trabajen de diferentes formas. Un usuario nuevo puede necesitar instrucciones visibles; un usuario experto puede preferir atajos, autocompletado o valores predeterminados. Una buena interfaz puede atender ambos perfiles sin saturar la pantalla.

Dar ejemplos. En un formulario, un valor por defecto en el campo “país” puede ahorrar tiempo si la mayoría de usuarios pertenecen al mismo contexto. Un botón “Limpiar” puede ayudar a reiniciar el formulario, pero debe usarse con cuidado para evitar pérdida accidental. Un sistema de búsqueda puede ofrecer filtros básicos y, para usuarios avanzados, opciones adicionales. Esta combinación permite eficiencia y flexibilidad.

Conectar con la evaluación de la semana. Algunas preguntas apuntan a identificar que la navegación debe ser lógica y fácil de seguir, y que eficiencia y flexibilidad consisten en permitir realizar tareas eficientemente y ofrecer opciones para diferentes estilos de trabajo. Enfatizar que estas respuestas no deben memorizarse sin comprensión; deben asociarse con ejemplos de diseño.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Empatía con el usuario: diseñar desde necesidades reales

::image:: 
<img src="/imagenes/05_carga_cognitiva.png" alt="Imagen de apoyo sobre empatía con el usuario y diseño centrado en personas" />

::content::
Diseñar con empatía implica comprender:

* Objetivos del usuario.
* Contexto de uso.
* Nivel de experiencia.
* Limitaciones técnicas o personales.
* Expectativas frente al sistema.
* Emociones durante la interacción.
* Consecuencias de los errores.

La empatía transforma opiniones en requerimientos de diseño.

<!--
Notas del presentador:
Explicar que la empatía con el usuario no significa construir exactamente lo que el usuario pide de forma literal. En ingeniería de software, el usuario puede expresar necesidades, frustraciones o preferencias, pero el equipo debe analizarlas, priorizarlas y traducirlas en requerimientos técnicamente viables y coherentes con los objetivos del proyecto. La empatía consiste en comprender la situación del usuario, sus objetivos, sus limitaciones y el impacto que la interfaz tendrá en su trabajo o vida cotidiana.

Usar un ejemplo académico. Si se diseña una interfaz para que estudiantes consulten actividades pendientes, la empatía exige preguntar cómo revisan normalmente sus tareas, desde qué dispositivos ingresan, qué información necesitan primero, qué dificultades han tenido, qué lenguaje entienden mejor y qué ocurre si se confunden con una fecha de entrega. A partir de esas respuestas se pueden formular requerimientos como: “la interfaz debe mostrar las actividades ordenadas por fecha”, “debe resaltar entregas próximas”, “debe diferenciar actividades enviadas y pendientes”, “debe ofrecer mensajes claros sobre el estado de cada entrega”.

Aclarar que la empatía se relaciona con la evaluación de la semana. Una de las preguntas pregunta por qué se debe mantener empatía con el usuario. La respuesta correcta se orienta a que comprender al usuario contribuye a diseñar una interfaz alineada con sus objetivos y a mejorar su experiencia. Esta idea es fundamental: la interfaz no debe diseñarse solo desde el gusto del desarrollador ni desde supuestos no validados.

Conectar con la actividad de foro. Las preguntas del foro exigen identificar objetivos clave de la interfaz, características demográficas, necesidades específicas, acciones que el usuario debe realizar, características de usabilidad y consideraciones de accesibilidad. Todas estas preguntas son expresiones prácticas de empatía. No se puede responder bien el foro si no se piensa en usuarios concretos.

Cerrar indicando que la empatía también ayuda a priorizar. Cuando se conocen las tareas más frecuentes, los errores más costosos y los usuarios más vulnerables, el equipo puede decidir qué elementos de interfaz requieren mayor claridad, validación, ayuda o accesibilidad.
-->

---
layout: slide-08-titulo-texto
---

::title::
Ideas clave:

::content::

* Retroalimentación clara: el usuario recibe indicaciones sobre el resultado de sus acciones.
* Navegación intuitiva: las rutas son lógicas y fáciles de seguir.
* UI y UX: UI es la construcción visual e interactiva; UX es cómo se siente y se vive la interacción.
* Pruebas: deben realizarse con usuarios reales.
* Eficiencia y flexibilidad: permiten realizar tareas con fluidez y atender distintos estilos de trabajo.
* Errores: deben comunicarse con claridad y ofrecer solución.
* Experiencia de usuario: integra aspectos emocionales, funcionales y estéticos.

<!--
Notas del presentador:
Utilizar esta diapositiva para conectar el desarrollo conceptual con las preguntas de evaluación de la semana. Aclarar que no se trata de entregar respuestas mecánicas, sino de comprender la lógica detrás de cada opción. La retroalimentación clara consiste en que los usuarios reciban indicaciones comprensibles sobre el resultado de sus acciones. Por ejemplo, si presionan un botón, envían un formulario o cometen un error, el sistema debe comunicar qué ocurrió. Esta comunicación reduce incertidumbre y carga cognitiva.

La navegación intuitiva se refiere a que las rutas y secuencias de uso sean lógicas y fáciles de seguir. No significa llenar todas las pantallas de ayudas gráficas ni exigir que el usuario lea un manual. Una interfaz intuitiva permite que el usuario construya una idea razonable de cómo avanzar. Esto se logra mediante jerarquía visual, etiquetas claras, consistencia y organización.

La diferencia entre UI y UX también debe reforzarse. UI se relaciona con la construcción de la interfaz visible e interactiva; UX se relaciona con cómo el usuario percibe, siente y evalúa la interacción. Ambas son complementarias, pero no equivalentes. Una UI puede ser visualmente atractiva y aun así generar mala UX si dificulta la tarea del usuario.

Sobre las pruebas, enfatizar que deben realizarse con usuarios reales o representativos, no solo con desarrolladores. Los desarrolladores conocen el sistema y suelen anticipar rutas que un usuario externo no conoce. Por eso, las pruebas con usuarios permiten descubrir problemas de lenguaje, navegación, comprensión, accesibilidad y errores inesperados.

Eficiencia y flexibilidad implican permitir que los usuarios completen tareas con fluidez y que existan opciones para diferentes estilos de trabajo. El manejo de errores debe ser claro, visible y orientado a la recuperación. La experiencia basada en el usuario es holística, porque integra aspectos funcionales, emocionales y estéticos.

Sugerir que, al estudiar, los estudiantes asocien cada concepto con un ejemplo real. Esta estrategia facilita responder preguntas de selección múltiple y también argumentar en el foro.
-->

---
layout: slide-05-titulo-superior-texto-derecha
---

::title::
Foro: determinación de requerimientos de interfaz

::image:: 
<img src="/imagenes/06_retroalimentacion_clara.png" alt="Imagen de apoyo sobre requerimientos de usuario para interfaces" />

::content::
El foro solicita analizar:

* Objetivos clave de la interfaz gráfica.
* Relación con los objetivos generales del proyecto.
* Características demográficas y necesidades de usuarios.
* Acciones que el usuario debe realizar.
* Funciones esenciales.
* Usabilidad crítica.
* Consideraciones de accesibilidad.

Participación en equipo:
aporte principal, retroalimentaciones y conclusión.

<!--
Notas del presentador:
Explicar que la actividad del foro se relaciona directamente con la fase de determinación de requerimientos. Antes de dibujar pantallas o escribir código, el equipo debe comprender para qué se construye la interfaz, quién la usará y qué acciones debe permitir. Esta fase es crucial porque una interfaz puede estar bien programada y aun así fracasar si responde a necesidades equivocadas o incompletas.

Desglosar las preguntas del foro. La primera pregunta pide objetivos clave de la interfaz gráfica. Aquí los estudiantes deben evitar respuestas vagas como “que sea bonita” o “que funcione”. Un objetivo mejor formulado podría ser: “permitir que el usuario registre solicitudes académicas de manera clara, rápida y segura, reduciendo errores en el ingreso de datos”. Luego deben explicar cómo ese objetivo se alinea con el proyecto general. Si el proyecto busca mejorar la gestión académica, la interfaz debe facilitar acceso, registro, consulta y seguimiento.

La segunda pregunta aborda características demográficas y necesidades. Esto implica describir edad aproximada, nivel educativo, experiencia tecnológica, dispositivos disponibles, frecuencia de uso, posibles limitaciones y expectativas. En un proyecto universitario, por ejemplo, los usuarios pueden ser estudiantes de pregrado que acceden desde computador y celular, con distintos niveles de conectividad y familiaridad con plataformas digitales.

La tercera pregunta pide acciones específicas. Aquí se deben formular funciones concretas: iniciar sesión, consultar información, registrar datos, adjuntar evidencias, enviar formularios, editar información, recibir confirmaciones o consultar estados. Las características de usabilidad críticas pueden incluir navegación clara, mensajes de error, consistencia, velocidad de carga, reducción de pasos y diseño adaptable. Las consideraciones de accesibilidad pueden incluir contraste, lenguaje claro, tamaño de fuente, navegación por teclado y mensajes no dependientes únicamente del color.

Finalmente, explicar la dinámica de participación en equipo. Un integrante puede realizar el aporte principal, otros retroalimentar y otro construir la conclusión. Enfatizar que retroalimentar no es decir “estoy de acuerdo”, sino aportar mejoras, ejemplos o preguntas que enriquezcan la participación.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Ejemplo aplicado: interfaz para registrar una solicitud académica

::left::
**Objetivo de usuario**

Registrar una solicitud sin perder información, entendiendo qué datos son obligatorios y recibiendo confirmación clara.

**Usuario**

Estudiante universitario que accede desde computador institucional o personal.

::right::
**Decisiones de diseño**

* Formulario breve.
* Campos etiquetados.
* Validación de datos.
* Botón principal visible.
* Mensajes claros.
* Opción para limpiar.
* Confirmación de registro.
* Resumen en pantalla.

<!--
Notas del presentador:
Presentar este ejemplo como preparación para la práctica guiada. La interfaz propuesta será un registro sencillo de solicitud académica. El objetivo no es construir un sistema completo, sino observar cómo los principios de UX se transforman en componentes visuales y eventos de programación. Se parte de una necesidad: un estudiante quiere registrar una solicitud y recibir confirmación de que fue tomada por el sistema. Desde el punto de vista de requerimientos, la interfaz debe solicitar información mínima, validar campos esenciales y entregar retroalimentación clara.

Explicar el perfil del usuario. Se trata de un estudiante universitario de pregrado que puede tener experiencia básica con formularios digitales, pero no necesariamente conoce términos internos de la institución. Por eso, las etiquetas deben ser comprensibles. En lugar de usar términos técnicos como “ID transaccional”, se pueden usar expresiones como “Código del estudiante” o “Tipo de solicitud”. Además, el usuario puede estar realizando la tarea con prisa, desde un equipo compartido o en medio de otras responsabilidades académicas. Esto exige una interfaz directa.

Analizar decisiones de diseño. Un formulario breve reduce carga cognitiva. Los campos etiquetados ayudan a comprender qué se debe ingresar. La validación evita que se envíen datos incompletos o incorrectos. Un botón principal visible orienta la acción principal. Los mensajes claros informan éxito o error. Una opción para limpiar puede ser útil, pero debe estar diferenciada del botón principal para evitar acciones accidentales. Un resumen en pantalla permite verificar lo registrado.

Relacionar con Java Swing. Cada decisión tiene una traducción técnica: `JFrame` para la ventana, `JPanel` para organizar, `JLabel` para etiquetas, `JTextField` para datos, `JComboBox` para tipo de solicitud, `JTextArea` para descripción, `JButton` para acciones y `JOptionPane` para mensajes. Los eventos se implementan con `ActionListener`. Esta relación muestra cómo la programación orientada a eventos se conecta con la experiencia de usuario.

Cerrar señalando que un buen ingeniero de software no solo pregunta “¿qué componentes necesito?”, sino “¿cómo esos componentes ayudan al usuario a completar su tarea con claridad y confianza?”.
-->

---
layout: slide-08-titulo-texto
---

::title::
Actividad práctica guiada

::content::
**Título:** Formulario UX para solicitud académica.

**Propósito:** diseñar e implementar una interfaz gráfica sencilla que aplique principios de experiencia de usuario.

**Componentes necesarios:**
Java JDK instalado, Visual Studio Code o entorno Java equivalente, extensión Java opcional, archivo `SolicitudAcademicaUX.java`.

**Estructura visual sugerida:**
Ventana principal, título, campos de datos, selector de tipo de solicitud, área de descripción, botones de acción y zona de resumen.

**Eventos sugeridos:**
Clic en “Registrar solicitud”, validación básica, mensaje de error, confirmación de éxito y limpieza de formulario.

<!--
Notas del presentador:
Presentar la actividad práctica como una experiencia de aplicación inmediata. Aclarar que no se espera desarrollar un sistema institucional completo, sino una interfaz funcional y comprensible que permita observar principios de UX en acción. La práctica se basa en Java Swing porque permite construir una GUI sencilla sin depender de librerías externas complejas. Además, Swing facilita evidenciar componentes gráficos, organización visual y eventos de usuario.

Explicar el propósito de la actividad. El estudiante debe construir un formulario para registrar una solicitud académica. La interfaz debe pedir nombre, código, correo, tipo de solicitud y descripción. Luego debe validar que los campos obligatorios no estén vacíos, verificar de manera básica que el correo tenga una estructura mínima y mostrar un mensaje claro si falta información. Si todo está correcto, debe mostrar una confirmación y actualizar un resumen en pantalla. Este flujo permite aplicar retroalimentación clara, manejo de errores, reducción de carga cognitiva y navegación simple.

Describir los componentes. La ventana principal será un `JFrame`. La estructura visual se organizará con paneles y un administrador de diseño. Las etiquetas `JLabel` indicarán qué información se debe ingresar. Los campos `JTextField` permitirán capturar nombre, código y correo. Un `JComboBox` permitirá seleccionar el tipo de solicitud, lo cual reduce errores frente a escribir texto libre. Un `JTextArea` permitirá describir la solicitud. Los botones `JButton` ejecutarán acciones: registrar y limpiar. Un área de resumen mostrará el resultado.

Relacionar los eventos con la programación orientada a eventos. El usuario no ejecuta el programa de forma lineal como en consola; interactúa con componentes. El sistema responde a eventos: clics, selección de opciones, ingreso de texto. El botón “Registrar solicitud” tendrá un `ActionListener` que validará datos y producirá retroalimentación. El botón “Limpiar” restablecerá el formulario. Esta dinámica ayuda a comprender que una GUI es un sistema reactivo.

Indicar que la práctica puede realizarse individualmente o siguiendo la explicación del docente. Lo importante es observar cómo cada parte del código corresponde a una decisión de diseño centrada en el usuario.
-->

---
layout: slide-codigo
---

::title::
SolicitudAcademicaUX.java

::content::

```java {lines:true}
import javax.swing.*;
import javax.swing.border.EmptyBorder;
import java.awt.*;
import java.awt.event.ActionEvent;

public class SolicitudAcademicaUX extends JFrame {

    private JTextField txtNombre;
    private JTextField txtCodigo;
    private JTextField txtCorreo;
    private JComboBox<String> cmbTipo;
    private JTextArea txtDescripcion;
    private JTextArea txtResumen;

    public SolicitudAcademicaUX() {
        setTitle("Formulario UX - Solicitud Académica");
        setSize(620, 560);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null);

        JPanel contenedor = new JPanel(new BorderLayout(12, 12));
        contenedor.setBorder(new EmptyBorder(18, 18, 18, 18));

        JLabel titulo = new JLabel("Registro de solicitud académica");
        titulo.setFont(new Font("Arial", Font.BOLD, 22));
        titulo.setHorizontalAlignment(SwingConstants.CENTER);
        contenedor.add(titulo, BorderLayout.NORTH);

        JPanel formulario = new JPanel(new GridBagLayout());
        GridBagConstraints c = new GridBagConstraints();
        c.insets = new Insets(6, 6, 6, 6);
        c.fill = GridBagConstraints.HORIZONTAL;

        txtNombre = new JTextField();
        txtCodigo = new JTextField();
        txtCorreo = new JTextField();
        cmbTipo = new JComboBox<>(new String[]{
                "Seleccione una opción",
                "Certificado académico",
                "Revisión de calificación",
                "Soporte de plataforma",
                "Solicitud de tutoría"
        });

        txtDescripcion = new JTextArea(4, 20);
        txtDescripcion.setLineWrap(true);
        txtDescripcion.setWrapStyleWord(true);

        agregarCampo(formulario, c, 0, "Nombre completo:", txtNombre);
        agregarCampo(formulario, c, 1, "Código estudiantil:", txtCodigo);
        agregarCampo(formulario, c, 2, "Correo institucional:", txtCorreo);
        agregarCampo(formulario, c, 3, "Tipo de solicitud:", cmbTipo);

        c.gridx = 0;
        c.gridy = 4;
        formulario.add(new JLabel("Descripción:"), c);

        c.gridx = 1;
        c.gridy = 4;
        formulario.add(new JScrollPane(txtDescripcion), c);

        contenedor.add(formulario, BorderLayout.CENTER);

        JPanel acciones = new JPanel(new FlowLayout(FlowLayout.CENTER, 12, 8));
        JButton btnRegistrar = new JButton("Registrar solicitud");
        JButton btnLimpiar = new JButton("Limpiar formulario");

        acciones.add(btnRegistrar);
        acciones.add(btnLimpiar);

        txtResumen = new JTextArea(6, 40);
        txtResumen.setEditable(false);
        txtResumen.setLineWrap(true);
        txtResumen.setWrapStyleWord(true);
        txtResumen.setText("Resumen: aún no se ha registrado ninguna solicitud.");

        JPanel inferior = new JPanel(new BorderLayout(8, 8));
        inferior.add(acciones, BorderLayout.NORTH);
        inferior.add(new JScrollPane(txtResumen), BorderLayout.CENTER);

        contenedor.add(inferior, BorderLayout.SOUTH);
        add(contenedor);

        btnRegistrar.addActionListener(this::registrarSolicitud);
        btnLimpiar.addActionListener(e -> limpiarFormulario());
    }

    private void agregarCampo(JPanel panel, GridBagConstraints c, int fila, String etiqueta, JComponent campo) {
        c.gridx = 0;
        c.gridy = fila;
        c.weightx = 0.25;
        panel.add(new JLabel(etiqueta), c);

        c.gridx = 1;
        c.gridy = fila;
        c.weightx = 0.75;
        panel.add(campo, c);
    }

    private void registrarSolicitud(ActionEvent e) {
        String nombre = txtNombre.getText().trim();
        String codigo = txtCodigo.getText().trim();
        String correo = txtCorreo.getText().trim();
        String tipo = (String) cmbTipo.getSelectedItem();
        String descripcion = txtDescripcion.getText().trim();

        if (nombre.isEmpty() || codigo.isEmpty() || correo.isEmpty() || descripcion.isEmpty()) {
            JOptionPane.showMessageDialog(
                    this,
                    "Revise el formulario: todos los campos de texto son obligatorios.",
                    "Datos incompletos",
                    JOptionPane.WARNING_MESSAGE
            );
            return;
        }

        if (!correo.contains("@") || !correo.contains(".")) {
            JOptionPane.showMessageDialog(
                    this,
                    "Ingrese un correo válido. Ejemplo: usuario@dominio.edu.co",
                    "Correo no válido",
                    JOptionPane.ERROR_MESSAGE
            );
            return;
        }

        if ("Seleccione una opción".equals(tipo)) {
            JOptionPane.showMessageDialog(
                    this,
                    "Seleccione el tipo de solicitud antes de continuar.",
                    "Tipo de solicitud requerido",
                    JOptionPane.WARNING_MESSAGE
            );
            return;
        }

        String resumen = "Solicitud registrada correctamente.\n\n"
                + "Estudiante: " + nombre + "\n"
                + "Código: " + codigo + "\n"
                + "Correo: " + correo + "\n"
                + "Tipo: " + tipo + "\n"
                + "Descripción: " + descripcion;

        txtResumen.setText(resumen);

        JOptionPane.showMessageDialog(
                this,
                "La solicitud fue registrada. Revise el resumen en pantalla.",
                "Registro exitoso",
                JOptionPane.INFORMATION_MESSAGE
        );
    }

    private void limpiarFormulario() {
        txtNombre.setText("");
        txtCodigo.setText("");
        txtCorreo.setText("");
        cmbTipo.setSelectedIndex(0);
        txtDescripcion.setText("");
        txtResumen.setText("Resumen: aún no se ha registrado ninguna solicitud.");
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            SolicitudAcademicaUX ventana = new SolicitudAcademicaUX();
            ventana.setVisible(true);
        });
    }
}
```

<!--
Notas del presentador:
Explicar el código de manera guiada, conectando cada bloque con una decisión de interfaz y de experiencia de usuario. Iniciar por las importaciones. `javax.swing` proporciona los componentes gráficos; `java.awt` permite manejar distribución, fuentes y eventos; `ActionEvent` se usa para capturar la acción del usuario al presionar un botón. Aclarar que Swing es una biblioteca tradicional de Java para construir interfaces de escritorio y que resulta útil para comprender la lógica de componentes y eventos.

Luego explicar que la clase `SolicitudAcademicaUX` extiende `JFrame`, por lo que representa una ventana principal. Los atributos corresponden a los componentes que deben ser utilizados en varios métodos: campos de texto, combo, área de descripción y resumen. Esta decisión permite capturar datos, validarlos y actualizar la pantalla.

En el constructor se configuran título, tamaño, cierre de ventana y posición. Después se crea un panel contenedor con `BorderLayout`, margen y separación. Señalar que el margen y la separación no son detalles menores: ayudan a que la interfaz respire visualmente, disminuyen saturación y mejoran legibilidad. El título se centra y se destaca con fuente en negrilla para establecer jerarquía visual.

El formulario se construye con `GridBagLayout` porque permite organizar etiquetas y campos en filas. Cada etiqueta describe claramente el dato solicitado, lo cual favorece usabilidad. El `JComboBox` evita que el usuario escriba manualmente el tipo de solicitud, reduciendo errores. El área de texto permite ampliar la descripción y usa ajuste de línea para mejorar lectura.

Explicar los botones. “Registrar solicitud” es la acción principal. “Limpiar formulario” es una acción secundaria. Ambos tienen `ActionListener`, lo que ilustra programación orientada a eventos. Cuando el usuario presiona registrar, se ejecuta `registrarSolicitud`. Allí se toman los datos, se eliminan espacios innecesarios y se validan campos. Los mensajes con `JOptionPane` proporcionan retroalimentación clara y manejo de errores. No se dice simplemente “Error”; se indica qué debe revisar el usuario.

Cuando los datos son válidos, se construye un resumen y se muestra una confirmación. Esto refuerza confianza y permite verificar información. Finalmente, el método `limpiarFormulario` restablece el estado inicial. El método `main` usa `SwingUtilities.invokeLater`, práctica recomendada para iniciar interfaces Swing en el hilo adecuado de eventos.
-->

---
layout: slide-08-titulo-texto
---

::title::
Pasos para probar en Visual Studio Code

::content::

1. Crear una carpeta de trabajo llamada `semana5-gui-ux`.

2. Crear el archivo `SolicitudAcademicaUX.java`.

3. Copiar el código completo en el archivo.

4. Verificar que Java JDK esté instalado.

5. Abrir terminal en la carpeta.

6. Compilar:

`javac SolicitudAcademicaUX.java`

7. Ejecutar:

`java SolicitudAcademicaUX`

8. Probar casos correctos, campos vacíos, correo inválido y selección incompleta.

<!--
Notas del presentador:
Explicar los pasos de prueba con calma, especialmente si algunos estudiantes tienen poca experiencia ejecutando Java desde Visual Studio Code. Primero, deben crear una carpeta de trabajo para mantener organizado el archivo. Luego deben crear un archivo llamado exactamente `SolicitudAcademicaUX.java`, porque en Java el nombre del archivo debe coincidir con el nombre de la clase pública. Este detalle es importante para evitar errores de compilación.

Indicar que pueden usar Visual Studio Code con la extensión de Java, NetBeans, IntelliJ IDEA, Eclipse o simplemente la terminal. La ruta propuesta con `javac` y `java` es general y funciona en cualquier entorno donde el JDK esté instalado y configurado. Antes de compilar, pueden verificar la instalación con `java -version` y `javac -version`. Si alguno no tiene configurado el JDK, el docente puede mostrar la ejecución desde su equipo y solicitar que los estudiantes repliquen después.

Explicar la diferencia entre compilar y ejecutar. Compilar con `javac SolicitudAcademicaUX.java` transforma el archivo fuente en bytecode, generando un archivo `.class`. Ejecutar con `java SolicitudAcademicaUX` inicia la aplicación. Si aparece la ventana, el entorno funciona correctamente.

Luego orientar las pruebas desde UX. No basta con comprobar que la ventana abre. Deben probar casos de uso. Primer caso: llenar todos los campos correctamente y registrar. Resultado esperado: mensaje de éxito y resumen en pantalla. Segundo caso: dejar campos vacíos. Resultado esperado: advertencia clara sobre datos incompletos. Tercer caso: escribir un correo sin arroba o sin punto. Resultado esperado: mensaje de correo no válido con ejemplo. Cuarto caso: no seleccionar tipo de solicitud. Resultado esperado: advertencia específica. Quinto caso: usar el botón limpiar. Resultado esperado: todos los campos vuelven al estado inicial.

Cerrar explicando que estas pruebas representan una verificación básica de interfaz. En proyectos reales, además de probar técnicamente, se debe observar a usuarios reales interactuando con la interfaz para detectar problemas que el desarrollador no anticipa.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Producto esperado y criterios de análisis

::left::
**Producto esperado**

Una ventana funcional en Java Swing que permita registrar una solicitud académica.

Debe incluir:

* Campos de entrada.
* Selector de solicitud.
* Botones.
* Validaciones.
* Mensajes claros.
* Resumen en pantalla.

::right::
**Preguntas de análisis**

* ¿Qué elemento reduce carga cognitiva?
* ¿Dónde aparece retroalimentación clara?
* ¿Cómo se manejan errores?
* ¿Qué mejorarían para accesibilidad?
* ¿Qué requerimiento de usuario originó cada componente?
* ¿Cómo adaptarían la interfaz a otro contexto?

<!--
Notas del presentador:
Explicar que el producto esperado no debe evaluarse solo por funcionar, sino por demostrar criterios de diseño centrado en el usuario. La ventana debe permitir capturar datos básicos, seleccionar un tipo de solicitud, validar información, mostrar mensajes y presentar un resumen. Estos elementos son suficientes para analizar la relación entre componentes gráficos, eventos y experiencia de usuario.

Invitar a los estudiantes a observar la interfaz con mirada crítica. El campo de nombre, código y correo responde al requerimiento de identificar al estudiante. El selector de tipo de solicitud responde al requerimiento de clasificar la solicitud. El área de descripción responde al requerimiento de expresar el motivo o detalle. El botón registrar responde a la acción principal. El botón limpiar responde a la necesidad de reiniciar el formulario. El resumen responde a la necesidad de confirmación y verificación. De esta manera, cada componente debe justificarse por un requerimiento de usuario o del proceso.

Guiar las preguntas de análisis. Para carga cognitiva, pueden identificar que el formulario tiene campos limitados y etiquetas claras. Para retroalimentación clara, pueden señalar los mensajes emergentes y el resumen. Para manejo de errores, pueden observar que el sistema no permite continuar si faltan datos o si el correo no tiene formato mínimo. Para accesibilidad, pueden proponer mejoras: aumentar contraste, permitir navegación ordenada por teclado, agregar descripciones accesibles, mejorar tamaño de letra, diferenciar mensajes no solo por color o adaptar la interfaz a pantallas pequeñas.

La pregunta sobre adaptar a otro contexto permite ampliar el aprendizaje. La misma estructura podría usarse para registrar una cita médica, una solicitud de soporte técnico, una inscripción a evento o una petición administrativa. Lo que cambia son los campos, tipos de solicitud y mensajes. Esto evidencia que los principios de UX son transferibles.

Cerrar indicando que la práctica puede servir como base para proyectos más amplios. En una aplicación real, el formulario podría conectarse a una base de datos, enviar correo de confirmación, generar número de radicado o permitir seguimiento. Sin embargo, incluso en esta versión sencilla, ya se evidencian decisiones importantes de diseño de interfaz.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
¿Qué hacen los expertos en usabilidad?

::media::
<iframe width="560" height="315" src="https://www.youtube.com/embed/zUZSSkRQXQQ?si=Tm6rTM_YbxqgAXV2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<!--
Notas del presentador:
Usar esta diapositiva como espacio de curaduría audiovisual. El video sugerido debe seleccionarse antes de la clase verificando que sea breve, claro, preferiblemente en español y con una duración no superior a cinco minutos. El propósito pedagógico es reforzar la diferencia entre interfaz de usuario y experiencia de usuario mediante ejemplos visuales. Este recurso puede utilizarse después de explicar UI y UX, o al inicio del bloque conceptual para abrir discusión.

Antes de reproducir el video, indicar a los estudiantes que observen tres aspectos: cómo se define UI, cómo se define UX y qué ejemplo permite diferenciar ambos conceptos. Después del video, realizar una pregunta breve: “¿Qué decisión de interfaz puede afectar directamente la experiencia del usuario?”. Las respuestas pueden incluir botones confusos, mensajes de error, lentitud, colores poco legibles, formularios extensos o navegación desordenada.

Si no se cuenta con un enlace previamente validado, se debe evitar improvisar durante la sesión. Es preferible dejar el espacio marcado para agregar un video verificado y continuar con la explicación. La curaduría de recursos audiovisuales en un contexto académico requiere comprobar pertinencia, duración, claridad, calidad del audio, ausencia de distractores y relación directa con los objetivos de aprendizaje.

Justificación académica: un video breve ayuda a ofrecer una representación adicional del concepto y favorece la comprensión de estudiantes con estilos de aprendizaje visual y auditivo. Sin embargo, el video no reemplaza la explicación docente ni la práctica. Debe usarse como apoyo, no como eje central. Por eso, se recomienda limitar su duración y vincularlo con una pregunta de análisis.

Momento recomendado de uso: entre los minutos veinte y treinta de la clase, después de presentar la diferencia entre UI y UX. Duración aproximada esperada: máximo cinco minutos. Propósito: introducir o reforzar la distinción conceptual y preparar la relación con la evaluación semanal.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Diseño UI: ¿qué es? | Diseño de Interfaces: Fundamentos Básicos

::media::
<iframe width="560" height="315" src="https://www.youtube.com/embed/uCGkaYYhE9k?si=eiDqlZMuWRVsBhtQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Usar esta diapositiva como espacio de curaduría audiovisual. El video sugerido debe seleccionarse antes de la clase verificando que sea breve, claro, preferiblemente en español y con una duración no superior a cinco minutos. El propósito pedagógico es reforzar la diferencia entre interfaz de usuario y experiencia de usuario mediante ejemplos visuales. Este recurso puede utilizarse después de explicar UI y UX, o al inicio del bloque conceptual para abrir discusión.

Antes de reproducir el video, indicar a los estudiantes que observen tres aspectos: cómo se define UI, cómo se define UX y qué ejemplo permite diferenciar ambos conceptos. Después del video, realizar una pregunta breve: “¿Qué decisión de interfaz puede afectar directamente la experiencia del usuario?”. Las respuestas pueden incluir botones confusos, mensajes de error, lentitud, colores poco legibles, formularios extensos o navegación desordenada.

Si no se cuenta con un enlace previamente validado, se debe evitar improvisar durante la sesión. Es preferible dejar el espacio marcado para agregar un video verificado y continuar con la explicación. La curaduría de recursos audiovisuales en un contexto académico requiere comprobar pertinencia, duración, claridad, calidad del audio, ausencia de distractores y relación directa con los objetivos de aprendizaje.

Justificación académica: un video breve ayuda a ofrecer una representación adicional del concepto y favorece la comprensión de estudiantes con estilos de aprendizaje visual y auditivo. Sin embargo, el video no reemplaza la explicación docente ni la práctica. Debe usarse como apoyo, no como eje central. Por eso, se recomienda limitar su duración y vincularlo con una pregunta de análisis.

Momento recomendado de uso: entre los minutos veinte y treinta de la clase, después de presentar la diferencia entre UI y UX. Duración aproximada esperada: máximo cinco minutos. Propósito: introducir o reforzar la distinción conceptual y preparar la relación con la evaluación semanal.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
¿Qué es Diseño UX? (Diseño de experiencia de usuario) | Fundamentos básicos

::media::
<iframe width="560" height="315" src="https://www.youtube.com/embed/rKQ1qdD1hrE?si=-LkJfLYF69-D6EmH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Usar esta diapositiva como espacio de curaduría audiovisual. El video sugerido debe seleccionarse antes de la clase verificando que sea breve, claro, preferiblemente en español y con una duración no superior a cinco minutos. El propósito pedagógico es reforzar la diferencia entre interfaz de usuario y experiencia de usuario mediante ejemplos visuales. Este recurso puede utilizarse después de explicar UI y UX, o al inicio del bloque conceptual para abrir discusión.

Antes de reproducir el video, indicar a los estudiantes que observen tres aspectos: cómo se define UI, cómo se define UX y qué ejemplo permite diferenciar ambos conceptos. Después del video, realizar una pregunta breve: “¿Qué decisión de interfaz puede afectar directamente la experiencia del usuario?”. Las respuestas pueden incluir botones confusos, mensajes de error, lentitud, colores poco legibles, formularios extensos o navegación desordenada.

Si no se cuenta con un enlace previamente validado, se debe evitar improvisar durante la sesión. Es preferible dejar el espacio marcado para agregar un video verificado y continuar con la explicación. La curaduría de recursos audiovisuales en un contexto académico requiere comprobar pertinencia, duración, claridad, calidad del audio, ausencia de distractores y relación directa con los objetivos de aprendizaje.

Justificación académica: un video breve ayuda a ofrecer una representación adicional del concepto y favorece la comprensión de estudiantes con estilos de aprendizaje visual y auditivo. Sin embargo, el video no reemplaza la explicación docente ni la práctica. Debe usarse como apoyo, no como eje central. Por eso, se recomienda limitar su duración y vincularlo con una pregunta de análisis.

Momento recomendado de uso: entre los minutos veinte y treinta de la clase, después de presentar la diferencia entre UI y UX. Duración aproximada esperada: máximo cinco minutos. Propósito: introducir o reforzar la distinción conceptual y preparar la relación con la evaluación semanal.
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
Socialización breve

::rightTitle::
Dudas orientadoras

::left::
En 5 a 7 minutos:

* Un estudiante comparte una mejora de UX.
* Otro identifica una validación útil.
* Otro propone una mejora de accesibilidad.
* El docente conecta aportes con requerimientos.

::right::
Preguntas sugeridas:

* ¿Qué cambiarían del formulario?
* ¿Qué campo podría eliminarse o agregarse?
* ¿Qué mensaje fue más útil?
* ¿Cómo probarían la interfaz con usuarios reales?
* ¿Qué aprendizaje se conecta con el foro?

<!--
Notas del presentador:
Guiar la socialización como un cierre aplicado de la práctica. No es necesario que todos los estudiantes presenten, porque el tiempo es limitado. Se recomienda seleccionar tres o cuatro intervenciones breves que permitan recuperar aprendizajes distintos. Una intervención puede enfocarse en una mejora de experiencia de usuario; otra, en una validación adicional; otra, en accesibilidad; otra, en relación con requerimientos. El docente debe ayudar a traducir cada aporte a lenguaje técnico.

Por ejemplo, si un estudiante dice “yo pondría un mensaje más visible cuando se registre”, el docente puede reformular: “esa propuesta fortalece la retroalimentación clara y reduce incertidumbre”. Si alguien dice “sería bueno que el correo se valide mejor”, se puede relacionar con prevención y manejo de errores. Si alguien propone “aumentar tamaño de letra”, se conecta con accesibilidad y legibilidad. Si alguien sugiere “agregar número de radicado”, se puede relacionar con confianza, seguimiento y requerimientos funcionales.

Las preguntas orientadoras ayudan a evitar una socialización superficial. Preguntar qué cambiarían del formulario invita a pensar en mejora iterativa. Preguntar qué campo podría eliminarse o agregarse ayuda a reflexionar sobre carga cognitiva y pertinencia de la información. Preguntar qué mensaje fue más útil permite evaluar retroalimentación. Preguntar cómo probarían la interfaz con usuarios reales conecta con evaluación de usabilidad. Preguntar qué aprendizaje se conecta con el foro permite transferir la práctica a la actividad evaluativa.

Resaltar que la socialización no busca encontrar una única interfaz correcta. En diseño de interfaces existen múltiples soluciones posibles, pero deben justificarse con criterios de usuario, usabilidad, accesibilidad y objetivos del proyecto. Esta idea es importante para que los estudiantes argumenten sus decisiones en lugar de basarse solo en gustos personales.

Cerrar la socialización destacando que toda mejora propuesta puede convertirse en un requerimiento. Por ejemplo, “el sistema debe mostrar un resumen antes de enviar” o “la interfaz debe validar campos obligatorios antes de registrar la solicitud”. Esta formulación conecta directamente con la determinación de requerimientos.
-->

---
layout: slide-08-titulo-texto
---

::title::
Resolución de dudas: conceptos que conviene revisar

::content::
Antes del cierre, revisemos inquietudes sobre:

* Diferencia entre UI y UX.
* Usabilidad y facilidad de uso.
* Carga cognitiva.
* Retroalimentación clara.
* Navegación intuitiva.
* Manejo de errores.
* Accesibilidad.
* Requerimientos de usuario.
* Eventos en Java Swing.
* Participación en el foro.

Tiempo máximo sugerido: 10 a 15 minutos.

<!--
Notas del presentador:
Usar esta diapositiva para organizar el espacio de dudas y evitar que se disperse. La Open Class reserva un tiempo limitado para preguntas, por lo que conviene agruparlas en categorías. Puede iniciar preguntando: “¿Qué concepto sienten que aún necesita un ejemplo adicional?”. Esta formulación invita a expresar dudas sin que el estudiante sienta que debe admitir desconocimiento de manera incómoda.

Si surgen dudas sobre UI y UX, volver a la distinción central: UI es lo visible e interactivo; UX es la experiencia completa. Si preguntan por usabilidad, explicar que no se limita a facilidad de uso, aunque la incluye. También contempla eficiencia, satisfacción, aprendizaje, prevención de errores y consistencia. Si preguntan por carga cognitiva, usar ejemplos de pantallas saturadas o formularios extensos. Si preguntan por retroalimentación clara, recordar que el usuario debe saber qué ocurrió después de actuar.

Para dudas sobre navegación intuitiva, enfatizar la lógica y previsibilidad. Para manejo de errores, recordar que los mensajes deben ser claros, específicos y orientados a la recuperación. Para accesibilidad, mencionar contraste, tamaño, teclado, lenguaje claro y no depender solo del color. Para requerimientos de usuario, insistir en que deben surgir de necesidades, tareas y contexto, no solo de opiniones del desarrollador.

Si aparecen dudas técnicas sobre Java Swing, explicar el papel de los componentes y eventos. `JButton` representa una acción, `ActionListener` captura el clic, los campos de texto almacenan entradas y `JOptionPane` muestra mensajes. Si el estudiante tiene errores al compilar, revisar nombre del archivo, instalación del JDK y uso correcto de comandos.

También dedicar un momento a la participación en el foro. Recordar que todos los integrantes deben participar y que las retroalimentaciones deben aportar valor. Una buena retroalimentación puede ampliar una idea, proponer una mejora, cuestionar una omisión o relacionar la respuesta con criterios de usabilidad y accesibilidad.

Cerrar el espacio de dudas con una síntesis breve: diseñar una interfaz implica comprender usuarios, organizar información, programar eventos y evaluar continuamente la experiencia.
-->

---
layout: slide-08-titulo-texto
---

::title::
Ideas finales:

::content::

* Una interfaz no se evalúa solo por verse bien, sino por ayudar al usuario a lograr sus objetivos.
* La UX integra aspectos funcionales, emocionales, estéticos y contextuales.
* La usabilidad, accesibilidad y retroalimentación clara deben convertirse en requerimientos verificables.
* Las pruebas con usuarios reales permiten descubrir problemas que el equipo técnico no anticipa.
* La práctica con Java Swing muestra cómo los eventos traducen acciones del usuario en respuestas del sistema.

**Recordatorio:** diligenciar la Encuesta de Percepción Estudiantil cuando esté disponible.

<!--
Notas del presentador:
Realizar el cierre académico retomando las ideas principales de la sesión. La primera idea es que una interfaz no puede evaluarse solo por su apariencia. Aunque la estética es importante, el verdadero valor de una interfaz se observa cuando el usuario puede lograr sus objetivos de manera clara, eficiente y satisfactoria. Una pantalla bonita pero confusa sigue siendo una mala interfaz. Una pantalla sencilla, clara y accesible puede ofrecer una experiencia mucho más efectiva.

La segunda idea es que la experiencia de usuario es holística. Incluye aspectos funcionales, porque el sistema debe permitir realizar tareas; emocionales, porque el usuario puede sentir confianza, frustración, seguridad o ansiedad; estéticos, porque la organización visual influye en percepción y comprensión; y contextuales, porque la experiencia cambia según dispositivo, entorno, conexión, nivel de experiencia y necesidades particulares.

La tercera idea es que los principios estudiados deben transformarse en requerimientos verificables. No basta con decir “la interfaz debe ser fácil”. Es mejor formular criterios como: “el sistema debe mostrar mensajes claros al validar campos obligatorios”, “la navegación debe permitir regresar sin perder información”, “los botones principales deben tener etiquetas descriptivas” o “el contraste debe permitir lectura adecuada”. Esta forma de pensar fortalece la ingeniería de requisitos.

La cuarta idea es la importancia de probar con usuarios reales. Los desarrolladores conocen el sistema y pueden pasar por alto problemas que un usuario detecta inmediatamente. Observar usuarios permite identificar dificultades de lenguaje, navegación, carga cognitiva y accesibilidad. Esta práctica es esencial para la mejora iterativa.

La quinta idea conecta con la práctica de Java Swing. Los eventos permiten que la interfaz responda a las acciones del usuario. Cada validación, mensaje y actualización de pantalla es una oportunidad para mejorar UX.

Finalizar con el recordatorio institucional de la Encuesta de Percepción Estudiantil. Presentarla como un espacio valioso para mejorar el curso, la mediación pedagógica y los recursos de aprendizaje. Agradecer la participación y animar a completar el foro con argumentos claros, ejemplos y aportes de equipo.
-->

---
layout: slide-12-cierre
---

::title::
Gracias por su participación

::content::
Semana 5 · Diseño de Interfaces
Experiencia de Usuario UX, usabilidad y retroalimentación clara

Continúen con la lectura del anexo, la participación en el foro de determinación de requerimientos y la revisión de la evaluación semanal.

<!--
Notas del presentador:
Cerrar la sesión agradeciendo la participación de los estudiantes y destacando el valor de sus aportes durante la actividad inicial, la práctica y la socialización. Recordar que la semana 5 se centra en comprender la experiencia de usuario como un elemento decisivo para el éxito de cualquier interfaz. Insistir en que el futuro ingeniero de software debe ser capaz de construir sistemas funcionales, pero también interfaces comprensibles, accesibles, eficientes y alineadas con usuarios reales.

Invitar a continuar el trabajo autónomo en el aula virtual. Recomendar leer detenidamente el anexo “Aprendiendo a determinar requerimientos”, realizar los ejercicios y usar esas respuestas como base para el foro. Recordar que el foro requiere participación en equipo y que todos los integrantes deben intervenir para ser evaluados. Sugerir que organicen roles: aporte principal, retroalimentaciones y conclusión. También recomendar que las respuestas no sean genéricas; deben describir objetivos de interfaz, usuarios, necesidades, acciones, funciones esenciales, criterios de usabilidad y consideraciones de accesibilidad.

Reforzar que la evaluación de selección múltiple se puede preparar revisando los conceptos tratados: retroalimentación clara, navegación intuitiva, diferencia entre UI y UX, pruebas con usuarios reales, eficiencia y flexibilidad, empatía con el usuario, manejo de errores, carga cognitiva, facilidad de uso y enfoque holístico de la experiencia. Aconsejar estudiar con ejemplos, no solo memorizando frases.

Mencionar que la práctica de Java Swing puede servir como punto de partida para proyectos personales o académicos. Los estudiantes pueden modificar el formulario, agregar nuevos campos, mejorar validaciones, cambiar la distribución visual o incorporar criterios de accesibilidad. Esto permite transferir el aprendizaje a otros contextos.

Finalizar con un mensaje institucional: revisar fechas, cumplir actividades, participar respetuosamente en el foro y diligenciar la Encuesta de Percepción Estudiantil cuando esté disponible. Despedirse cordialmente y dejar abierta la invitación a consultar dudas por los canales definidos del curso.
-->
