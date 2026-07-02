---
layout: slide-01-portada
---

::title::
Diseño de Interfaces

::week::
Semana 6

::date::
Junio 11 de 2026

<!--
Notas del presentador:
Dar la bienvenida a los estudiantes a la semana 6 del curso Diseño de Interfaces. Presentar la sesión como un espacio práctico y conceptual orientado a comprender cómo una interfaz puede facilitar o dificultar la experiencia del usuario. Explicar que el foco no estará únicamente en que una aplicación “se vea bien”, sino en que sea comprensible, consistente, accesible, adaptable y útil para distintos perfiles de usuarios. Anticipar que se trabajarán estándares y principios reconocidos, así como una práctica guiada en Java desde Visual Studio Code para implementar una interfaz gráfica sencilla con criterios de usabilidad.
-->

---
layout: slide-02-titulo
---

::title::
Directrices y principios

<!--
Notas del presentador:
Introducir el tema central de la clase. Resaltar que el diseño de interfaces no se limita a la elección de colores, íconos o tipografías; implica tomar decisiones que afectan la forma como las personas entienden, navegan y completan tareas dentro de un sistema. Enfatizar que una interfaz intuitiva reduce la carga cognitiva, una interfaz eficiente ayuda a cumplir objetivos con menos esfuerzo, y una interfaz accesible amplía la posibilidad de participación de usuarios con diferentes capacidades, dispositivos y contextos de uso.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Contextualización

::image:: 
<img src="/imagenes/07_manejo_errores_gui.png" alt="Imagen de apoyo sobre diseño de interfaces y experiencia de usuario" />

::content::
Una interfaz gráfica es el punto de encuentro entre una persona y un sistema digital.

Cuando la interfaz es clara, el usuario entiende qué hacer, dónde mirar y cómo avanzar.

Cuando la interfaz es confusa, el sistema puede parecer más complejo de lo que realmente es.

En esta semana estudiaremos principios para diseñar interfaces:

* Intuitivas.
* Legibles.
* Adaptables.
* Accesibles.
* Consistentes.
* Centradas en el usuario.

<!--
Notas del presentador:
Invitar a los estudiantes a pensar en experiencias cotidianas con aplicaciones móviles, plataformas educativas, cajeros electrónicos, tiendas virtuales o formularios web. Preguntar mentalmente: ¿cuántas veces un usuario abandona una tarea porque no entiende qué botón presionar, porque el texto es difícil de leer o porque el sitio no se adapta al celular? Explicar que estos problemas no siempre son fallas de programación; muchas veces son fallas de diseño de interacción. La interfaz debe actuar como mediadora entre la intención del usuario y la funcionalidad del sistema.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Actividad corta: Detectives de usabilidad

::left::
**Instrucciones para estudiantes**

Observen una interfaz cotidiana:

* App bancaria.
* Plataforma académica.
* Tienda virtual.
* Formulario web.
* Aplicación de mensajería.

Identifiquen rápidamente:

* Algo que facilite la lectura.
* Algo que oriente al usuario.
* Un problema de accesibilidad.
* Una mejora de jerarquía visual.
* Una mejora para móviles.

::right::
**Instrucciones para el docente**

Tiempo sugerido: **10 minutos**.

Dinámica:

* 2 minutos para observación individual.
* 4 minutos para compartir ideas en grupos pequeños.
* 4 minutos para socializar hallazgos.

Cierre:

Relacionar los aportes con legibilidad, usabilidad, accesibilidad, adaptabilidad, satisfacción y pistas contextuales.

<!--
Notas del presentador:
La actividad busca activar saberes previos desde experiencias reales. No es necesario que todos analicen la misma aplicación; lo importante es que identifiquen decisiones de interfaz concretas. Orientar a los estudiantes para que no respondan únicamente “me gusta” o “no me gusta”, sino que intenten justificar por qué una decisión ayuda o dificulta el uso. Durante la socialización, recoger ejemplos sobre tamaño de letra, contraste, ubicación de botones, mensajes de error, menús, barras de desplazamiento, adaptación móvil y claridad de instrucciones.
-->

---
layout: slide-08-titulo-texto
---

::title::
De “verse bien” a “funcionar bien”

::content::
Una interfaz no debe evaluarse solo por su apariencia visual.

Una interfaz adecuada permite que el usuario:

* Comprenda el propósito del sistema.
* Identifique las acciones disponibles.
* Complete tareas sin esfuerzo innecesario.
* Reciba retroalimentación clara.
* Corrija errores.
* Use el sistema desde distintos dispositivos.
* Navegue sin perder orientación.
* Perciba confianza, comodidad y control.

El diseño de interfaces combina estética, interacción, accesibilidad, arquitectura de información, comportamiento del sistema y comprensión del usuario.

<!--
Notas del presentador:
Explicar que una interfaz atractiva puede fallar si no permite completar tareas de forma clara. También puede ocurrir lo contrario: una interfaz visualmente sencilla puede ser muy efectiva si organiza bien la información, usa textos legibles, ofrece retroalimentación y mantiene patrones consistentes. Enfatizar que el diseño de interfaces es una disciplina aplicada: requiere observar usuarios, anticipar errores, tomar decisiones visuales y validar si esas decisiones realmente funcionan en un contexto de uso.
-->

---
layout: slide-06-titulo-superior-texto-izquierda
---

::title::
Usabilidad según ISO 9241

::image:: 
<img src="/imagenes/08_navegacion_intuitiva.png" alt="Imagen de apoyo sobre usabilidad, eficiencia y satisfacción" />

::content::
La usabilidad permite analizar qué tan bien un sistema ayuda a usuarios específicos a lograr objetivos específicos en un contexto determinado.

Desde esta perspectiva, una interfaz usable se relaciona con:

* **Efectividad:** el usuario logra completar la tarea.
* **Eficiencia:** el usuario lo hace con un esfuerzo razonable.
* **Satisfacción:** el usuario percibe comodidad, confianza y control.

La usabilidad siempre depende del usuario, la tarea, el dispositivo, el entorno y el propósito de uso.

<!--
Notas del presentador:
Presentar ISO 9241 como un referente importante para comprender la usabilidad en sistemas interactivos. Aclarar que no basta con decir que una interfaz es usable de manera abstracta; se debe analizar para quién, para qué tarea y en qué contexto. Un formulario puede ser usable para un usuario experto en computador de escritorio, pero no para una persona que lo completa desde un celular con conexión inestable. La noción de efectividad, eficiencia y satisfacción ayuda a evaluar la experiencia desde resultados, esfuerzo y percepción. Esta base conceptual se fundamenta en el marco de ISO 9241-11 sobre usabilidad en sistemas interactivos. :contentReference[oaicite:0]{index=0}
-->

---
layout: slide-08-titulo-texto
---

::title::
Términos clave de la semana

::content::
- La **usabilidad** se refiere a la facilidad con la que una persona puede utilizar una interfaz para cumplir una tarea concreta. No significa únicamente que el sistema sea bonito o moderno; implica que el usuario comprenda qué puede hacer, cómo debe hacerlo y qué resultado obtiene después de cada acción. 
- La **legibilidad** se relaciona con la posibilidad de leer y comprender el contenido sin esfuerzo excesivo. Depende del tamaño de fuente, contraste, espaciado, longitud de línea, lenguaje empleado y organización visual. 
- La **jerarquía visual** permite ordenar la atención del usuario: los elementos más importantes deben destacarse mediante tamaño, posición, contraste o agrupación. 
- Las **pistas contextuales** son señales que orientan al usuario en el momento oportuno, como textos de ayuda, ejemplos en campos de formulario, íconos comprensibles, mensajes de validación o indicaciones cercanas a la acción. 

<!--
Notas del presentador:
Esta diapositiva concentra los conceptos que los estudiantes deben dominar para responder adecuadamente el cuestionario y para diseñar interfaces con intención. Conviene leerla por bloques, no como una definición aislada. Relacionar cada término con ejemplos: un campo de correo con ejemplo visible es una pista contextual; un botón principal más destacado expresa jerarquía visual; una barra de desplazamiento permite acceder a contenido fuera de la vista; una etiqueta clara mejora la legibilidad funcional. Insistir en que estos conceptos no son independientes: una interfaz puede ser más usable cuando también es legible, accesible, adaptable y coherente.
-->

---
layout: slide-08-titulo-texto
---

::title::
Términos clave de la semana

::content::
- La **accesibilidad** busca que personas con diferentes capacidades puedan percibir, comprender, navegar e interactuar con la interfaz. Esto exige contraste adecuado, navegación clara, textos alternativos, compatibilidad con teclado y mensajes comprensibles. 
- La **adaptabilidad** permite que la interfaz responda a distintos dispositivos, tamaños de pantalla, preferencias y condiciones de uso. 
- El **test de usabilidad** es una evaluación con usuarios reales o representativos para observar dificultades, tiempos, errores, satisfacción y comprensión. 
- La **satisfacción del usuario** expresa la percepción de comodidad, confianza y utilidad durante la interacción.

<!--
Notas del presentador:
Esta diapositiva concentra los conceptos que los estudiantes deben dominar para responder adecuadamente el cuestionario y para diseñar interfaces con intención. Conviene leerla por bloques, no como una definición aislada. Relacionar cada término con ejemplos: un campo de correo con ejemplo visible es una pista contextual; un botón principal más destacado expresa jerarquía visual; una barra de desplazamiento permite acceder a contenido fuera de la vista; una etiqueta clara mejora la legibilidad funcional. Insistir en que estos conceptos no son independientes: una interfaz puede ser más usable cuando también es legible, accesible, adaptable y coherente.
-->

---
layout: slide-08-titulo-texto
---

::title::
Principios de Nielsen aplicados al diseño de GUI

::content::
Los principios heurísticos de Nielsen ayudan a revisar interfaces antes, durante y después del desarrollo.

En una GUI universitaria, administrativa o comercial, estos principios se reflejan en decisiones como:

* Mostrar el estado del sistema.
* Usar lenguaje familiar para el usuario.
* Permitir deshacer o corregir.
* Mantener consistencia visual y funcional.
* Prevenir errores antes de que ocurran.
* Reducir carga de memoria.
* Ofrecer flexibilidad para usuarios novatos y expertos.
* Presentar información clara y mínima.
* Ayudar a reconocer, diagnosticar y corregir errores.
* Brindar ayuda cuando sea necesaria.

<!--
Notas del presentador:
Explicar que las heurísticas de Nielsen son reglas generales para identificar problemas de usabilidad. No reemplazan las pruebas con usuarios reales, pero ayudan a detectar fallas frecuentes. Por ejemplo, si un formulario no explica por qué un dato es inválido, falla en ayuda para reconocer y corregir errores. Si una plataforma cambia de ubicación los botones principales en cada pantalla, falla en consistencia. Si un sistema no muestra si está cargando, falla en visibilidad del estado. Estos principios son ampliamente usados en evaluación heurística de interfaces. :contentReference[oaicite:1]{index=1}
-->

---
layout: slide-11-dos-titulos-dos-columnas
---

::leftTitle::
HIG

::rightTitle::
Material Design

::left::
Las Human Interface Guidelines ofrecen recomendaciones para diseñar experiencias coherentes en plataformas Apple.

Se enfocan en:

* Claridad.
* Deferencia al contenido.
* Profundidad visual.
* Accesibilidad.
* Consistencia con patrones del sistema.
* Experiencias familiares para el usuario.

::right::
Material Design propone un sistema adaptable de directrices, componentes y patrones.

Se enfoca en:

* Interfaces consistentes.
* Diseño adaptable.
* Accesibilidad.
* Componentes reutilizables.
* Jerarquía visual.
* Respuesta a diferentes tamaños de pantalla.

<!--
Notas del presentador:
Aclarar que HIG y Material Design no son simples manuales estéticos, sino sistemas de orientación para crear experiencias coherentes dentro de ecosistemas tecnológicos. Apple HIG reúne guías y buenas prácticas para diseñar experiencias en plataformas Apple, incluyendo accesibilidad. Material Design ofrece principios, componentes y patrones para interfaces adaptables y accesibles. En ambos casos, el diseñador debe interpretar las guías según el contexto del proyecto. La intención no es copiar estilos, sino aprender criterios de claridad, consistencia, familiaridad y accesibilidad. :contentReference[oaicite:2]{index=2}
-->

---
layout: slide-03-imagen-izquierda
---

::title::
Legibilidad del texto

::image:: 
<img src="/imagenes/09_empatia_usuario.png" alt="Imagen de apoyo sobre legibilidad en interfaces gráficas" />

::content::
La legibilidad es crucial porque facilita la lectura y comprensión del contenido.

Una interfaz legible considera:

* Tamaño de fuente adecuado.
* Contraste suficiente.
* Espaciado entre líneas.
* Etiquetas claras.
* Longitud razonable del texto.
* Lenguaje directo.
* Evitar saturación visual.
* Coherencia tipográfica.

En diseño de GUI, el texto no es decoración: es una guía para la acción.

<!--
Notas del presentador:
Conectar esta diapositiva con la primera pregunta del cuestionario. La respuesta correcta no se relaciona con usar fuentes pequeñas, elegantes o reemplazar todo por imágenes, sino con facilitar la lectura y comprensión. Explicar que una interfaz puede tener excelentes funcionalidades, pero si el usuario no puede leer instrucciones, botones, etiquetas o mensajes de error, la experiencia se deteriora. Invitar a los estudiantes a revisar plataformas donde el texto es demasiado pequeño, los contrastes son débiles o los mensajes no explican qué debe hacer el usuario.
-->

---
layout: slide-04-imagen-derecha
---

::title::
Jerarquía visual

::image:: 
<img src="/imagenes/10_requerimientos_interfaz.png" alt="Imagen de apoyo sobre jerarquía visual en diseño de interfaces" />

::content::
La jerarquía visual organiza la atención.

Permite que el usuario identifique:

* Qué información es principal.
* Qué acción debe realizar primero.
* Qué elementos son secundarios.
* Qué contenido pertenece al mismo grupo.
* Qué alertas requieren atención inmediata.

Se logra mediante:

* Tamaño.
* Peso visual.
* Posición.
* Contraste.
* Color.
* Espaciado.
* Agrupación.

<!--
Notas del presentador:
Explicar que la jerarquía visual ayuda a evitar que todos los elementos compitan por la misma atención. En un formulario, el título, las instrucciones, los campos obligatorios, los mensajes de error y el botón principal deben tener una prioridad visual clara. Si todo se ve igual, el usuario debe esforzarse más para decidir qué hacer. Relacionar con el cuestionario: el propósito principal de la jerarquía visual es destacar elementos importantes visualmente, no ocultarlos ni ordenarlos alfabéticamente.
-->

---
layout: slide-08-titulo-texto
---

::title::
Pistas contextuales y retroalimentación

::content::
Las pistas contextuales ofrecen información relevante según la acción actual del usuario.

Ejemplos:

* Texto de ejemplo dentro de un campo.
* Mensaje que indica formato esperado.
* Tooltip sobre un botón.
* Advertencia cercana al error.
* Confirmación después de guardar.
* Indicador de progreso.
* Mensaje que explica qué hacer a continuación.

Una buena pista contextual aparece en el momento adecuado, en el lugar adecuado y con lenguaje comprensible.

<!--
Notas del presentador:
Explicar que las pistas contextuales evitan que el usuario dependa de la memoria o de la prueba y error. Si un campo solicita correo electrónico, puede mostrar un ejemplo como usuario@dominio.com. Si una contraseña requiere cierta longitud, la regla debe aparecer antes del error, no solo después de fallar. Relacionar con la evaluación: las pistas contextuales no son información aleatoria ni decorativa; proporcionan información relevante según el contexto actual.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Accesibilidad y navegación

::left::
**Accesibilidad**

Una interfaz accesible permite que más personas puedan usarla.

Aspectos clave:

* Contraste adecuado.
* Textos comprensibles.
* Navegación por teclado.
* Etiquetas claras.
* Mensajes no dependientes solo del color.
* Orden lógico de lectura.
* Tamaños interactivos adecuados.

::right::
**Navegación**

Una interfaz navegable permite saber:

* Dónde estoy.
* Qué puedo hacer.
* Cómo regreso.
* Cómo avanzo.
* Qué información está fuera de la vista.
* Qué ocurrió después de una acción.

Las barras de desplazamiento ayudan a acceder a contenido que no cabe en la pantalla.

<!--
Notas del presentador:
Enfatizar que la accesibilidad no debe asumirse como un añadido final, sino como una condición de calidad del diseño. Una interfaz accesible beneficia a personas con discapacidad, adultos mayores, usuarios con pantallas pequeñas, usuarios con baja conectividad o personas que usan el sistema en condiciones difíciles. La navegación también es parte de la accesibilidad: si el usuario no entiende dónde está o cómo acceder al contenido, pierde control. Relacionar con las preguntas del cuestionario sobre facilidad de navegación y barras de desplazamiento.
-->

---
layout: slide-06-titulo-superior-texto-izquierda
---

::title::
Diseño responsivo y adaptabilidad

::image:: 
<img src="/imagenes/11_practica_java_swing.png" alt="Imagen de apoyo sobre diseño responsivo y adaptabilidad a dispositivos" />

::content::
La adaptabilidad es esencial porque los usuarios acceden desde múltiples dispositivos y contextos.

Una interfaz adaptable puede responder a:

* Celulares.
* Tabletas.
* Portátiles.
* Monitores grandes.
* Orientación vertical u horizontal.
* Preferencias de tamaño de texto.
* Diferentes condiciones de conectividad.
* Diversidad de usuarios.

El diseño responsivo no consiste en encoger la interfaz, sino en reorganizarla para conservar comprensión y uso.

<!--
Notas del presentador:
Explicar que el aumento del uso de teléfonos y tabletas hace indispensable diseñar para distintos tamaños de pantalla. Una interfaz rígida puede funcionar en escritorio, pero fallar completamente en móvil. Material Design plantea el diseño adaptable como una respuesta dinámica al contexto, incluyendo tipo de dispositivo, preferencias y puntos de quiebre. Relacionar con la evaluación: la adaptabilidad no es ignorar dispositivos ni mantener todo igual, sino ajustar la interfaz a diferentes dispositivos y usuarios. :contentReference[oaicite:3]{index=3}
-->

---
layout: slide-08-titulo-texto
---

::title::
Diseño plano y consistencia visual

::content::
El diseño plano utiliza formas simples, colores limpios, tipografía clara e íconos funcionales.

Su valor no está en eliminar detalles, sino en reducir ruido visual.

Una interfaz consistente mantiene patrones reconocibles:

* Botones similares para acciones similares.
* Colores con significado estable.
* Íconos comprensibles.
* Ubicación predecible de navegación.
* Mensajes con tono uniforme.
* Espaciado regular.
* Componentes reutilizables.

La consistencia favorece familiaridad, aprendizaje rápido y confianza.

<!--
Notas del presentador:
Aclarar que el diseño plano no significa pobreza visual, sino claridad funcional. Una interfaz plana puede ser elegante y eficiente si mantiene jerarquía, contraste y affordances claras. Sin embargo, si se eliminan demasiadas señales visuales, el usuario puede no reconocer qué elementos son interactivos. La consistencia permite que el usuario transfiera lo aprendido de una pantalla a otra. Esta idea conecta con la bienvenida de la semana: diseñar interfaces familiares facilita la adaptación rápida de los usuarios.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Ejemplos aplicados

::left::
**Formulario débil**

* Campos sin etiquetas claras.
* Texto pequeño.
* Botón principal poco visible.
* Error genérico: “Dato inválido”.
* No indica campos obligatorios.
* No muestra ejemplo de formato.
* No se adapta bien al tamaño de ventana.

::right::
**Formulario mejorado**

* Etiquetas comprensibles.
* Tamaño de fuente legible.
* Botón principal destacado.
* Error específico y cercano al campo.
* Pistas contextuales.
* Área con desplazamiento.
* Organización adaptable mediante layout.

<!--
Notas del presentador:
Usar este contraste para preparar la práctica. Explicar que ambos formularios pueden pedir los mismos datos, pero la experiencia cambia por la forma como se presentan. Un formulario mejorado reduce incertidumbre, previene errores y comunica de manera más clara. Señalar que en la práctica guiada se implementará una interfaz sencilla con campos, botones, validación, mensajes y área de texto con barra de desplazamiento. El objetivo no es tener un diseño final profesional, sino evidenciar principios concretos de usabilidad.
-->

---
layout: slide-08-titulo-texto
---

::title::
Para recordar...

::content::

* La legibilidad facilita la lectura y comprensión del contenido.
* El test de usabilidad evalúa la facilidad de uso con usuarios reales.
* La usabilidad se relaciona con facilidad de uso.
* La jerarquía visual destaca elementos importantes.
* La adaptabilidad móvil responde al uso de teléfonos y tabletas.
* La accesibilidad favorece la navegación y el uso por diferentes usuarios.
* La satisfacción del usuario analiza la experiencia percibida.
* Las pistas contextuales entregan información relevante según la acción actual.
* Las barras de desplazamiento permiten acceder a contenido fuera de la vista.
* La adaptabilidad permite ajustar la interfaz a distintos dispositivos y usuarios.

<!--
Notas del presentador:
Presentar esta diapositiva como puente entre teoría, práctica y evaluación. Evitar leerla como un banco de respuestas mecánico; más bien, explicar que cada punto representa una decisión de diseño observable. Por ejemplo, una barra de desplazamiento no está para decorar, sino para permitir navegación cuando el contenido excede el área visible. Un test de usabilidad no consiste en ocultar la interfaz o ignorar al usuario, sino en observar cómo personas reales interactúan con ella. Esta conexión ayuda a que el estudiante comprenda la lógica de las preguntas.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Los 10 principios de usabilidad de Jakob Nielsen

::media::
<iframe width="560" height="315" src="https://www.youtube.com/embed/IYrKEu3qoJI?si=rQx9B_zNxbwYv1wJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Se dejan espacios para agregar enlaces verificados, evitando inventar videos o duraciones. La recomendación es seleccionar videos breves, preferiblemente en español, que no superen cinco minutos y que puedan funcionar como activadores o refuerzos. Si se dispone de poco tiempo, usar solo un video introductorio y dejar los demás como recursos de consulta autónoma. Recordar que el video debe complementar la explicación docente, no reemplazar el desarrollo conceptual de la sesión.
-->

---
layout: slide-07-multimedia-con-titulo
---

::title::
Microaprendizaje: ¿Qué es la accesibilidad web?

::media::
<iframe width="560" height="315" src="https://www.youtube.com/embed/gQIKQO41pME?si=41EbwGxYUzR2ICgy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<!--
Notas del presentador:
Se dejan espacios para agregar enlaces verificados, evitando inventar videos o duraciones. La recomendación es seleccionar videos breves, preferiblemente en español, que no superen cinco minutos y que puedan funcionar como activadores o refuerzos. Si se dispone de poco tiempo, usar solo un video introductorio y dejar los demás como recursos de consulta autónoma. Recordar que el video debe complementar la explicación docente, no reemplazar el desarrollo conceptual de la sesión.
-->

---
layout: slide-02-titulo
---

::title::
Práctica guiada: Mini interfaz usable

<!--
Notas del presentador:
Iniciar el bloque práctico indicando que se trabajará con Java Swing porque permite construir interfaces gráficas sin dependencias externas complejas. Aclarar que la intención no es reemplazar herramientas profesionales de diseño UX, sino comprender cómo los principios de interfaz se reflejan en una aplicación ejecutable. La práctica se realizará desde Visual Studio Code con JDK instalado y la extensión de Java. La documentación oficial de VS Code ofrece una ruta para escribir y ejecutar programas Java dentro del editor. :contentReference[oaicite:4]{index=4}
-->

---
layout: slide-08-titulo-texto
---

::title::
Actividad práctica: formulario con validación y pistas contextuales

::content::
**Título:** Mini interfaz usable: formulario de contacto con validación y pistas contextuales.

**Propósito:** diseñar e implementar una interfaz gráfica en Java que aplique legibilidad, jerarquía visual, accesibilidad básica, pistas contextuales, validación de campos y navegación clara.

**Componentes necesarios:**

* JDK instalado.
* Visual Studio Code.
* Extension Pack for Java.
* Terminal integrada de VS Code.
* Archivo principal `InterfazUsable.java`.

**Producto esperado:** una ventana funcional con campos de nombre, correo y mensaje, botones de envío y limpieza, validación básica, mensajes de retroalimentación, tooltips y área de texto con desplazamiento.

<!--
Notas del presentador:
Explicar que la práctica se enfoca en un formulario de contacto porque es una interfaz común y fácil de analizar. Los estudiantes podrán ver cómo las etiquetas, tamaños de fuente, mensajes de ayuda, validaciones y botones afectan la experiencia del usuario. Aclarar que Java Swing permite construir la ventana sin instalar bibliotecas externas. El objetivo del producto esperado es evidenciar principios, no construir una aplicación comercial completa.
-->

---
layout: slide-08-titulo-texto
---

::title::
Estructura sugerida del proyecto

::content::
Crear una carpeta de trabajo con la siguiente estructura:

```text
diseno-interfaces-semana6/
└── InterfazUsable.java
```

Pasos iniciales:

1. Abrir Visual Studio Code.
2. Crear la carpeta `diseno-interfaces-semana6`.
3. Crear el archivo `InterfazUsable.java`.
4. Copiar el código completo de la práctica.
5. Ejecutar desde el botón **Run** de VS Code o desde la terminal integrada.

Comando alternativo desde terminal:

```bash
javac InterfazUsable.java
java InterfazUsable
```

<!--
Notas del presentador:
Orientar a los estudiantes para que ubiquen correctamente el archivo. Si alguien tiene problemas con VS Code, puede compilar desde la terminal siempre que el JDK esté instalado y configurado. Recordar que el nombre del archivo debe coincidir con el nombre de la clase pública. Verificar que no se creen carpetas innecesarias ni paquetes adicionales, porque la práctica busca mantenerse simple y ejecutable con JDK estándar.
-->

---
layout: slide-codigo
---

::title::
Código Java completo: InterfazUsable.java

::content::

```java {lines:true}
import javax.swing.*;
import javax.swing.border.EmptyBorder;
import java.awt.*;
import java.awt.event.ActionEvent;

/**
 * Práctica Semana 6 - Diseño de Interfaces
 * Mini interfaz usable: formulario de contacto con validación y pistas contextuales.
 *
 * Este ejemplo usa Java Swing para construir una GUI sencilla.
 * Aplica principios de legibilidad, jerarquía visual, accesibilidad básica,
 * pistas contextuales, validación de campos y navegación clara.
 */
public class InterfazUsable extends JFrame {

    private JTextField campoNombre;
    private JTextField campoCorreo;
    private JTextArea areaMensaje;
    private JLabel etiquetaEstado;

    public InterfazUsable() {
        configurarVentana();
        construirInterfaz();
    }

    private void configurarVentana() {
        setTitle("Mini interfaz usable - Diseño de Interfaces");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setMinimumSize(new Dimension(520, 520));
        setLocationRelativeTo(null);
    }

    private void construirInterfaz() {
        JPanel panelPrincipal = new JPanel(new BorderLayout(16, 16));
        panelPrincipal.setBorder(new EmptyBorder(20, 24, 20, 24));
        panelPrincipal.setBackground(Color.WHITE);

        JLabel titulo = new JLabel("Formulario de contacto");
        titulo.setFont(new Font("Arial", Font.BOLD, 24));
        titulo.setForeground(new Color(33, 37, 41));
        titulo.setHorizontalAlignment(SwingConstants.LEFT);
        titulo.getAccessibleContext().setAccessibleName("Título principal del formulario");

        JLabel instruccion = new JLabel(
            "<html>Complete los campos. Los mensajes de ayuda orientan el ingreso correcto de la información.</html>"
        );
        instruccion.setFont(new Font("Arial", Font.PLAIN, 15));
        instruccion.setForeground(new Color(73, 80, 87));
        instruccion.getAccessibleContext().setAccessibleName("Instrucciones del formulario");

        JPanel panelSuperior = new JPanel(new GridLayout(2, 1, 4, 4));
        panelSuperior.setBackground(Color.WHITE);
        panelSuperior.add(titulo);
        panelSuperior.add(instruccion);

        JPanel panelFormulario = new JPanel(new GridBagLayout());
        panelFormulario.setBackground(Color.WHITE);

        GridBagConstraints gbc = new GridBagConstraints();
        gbc.insets = new Insets(8, 0, 8, 0);
        gbc.fill = GridBagConstraints.HORIZONTAL;
        gbc.weightx = 1;

        campoNombre = new JTextField();
        campoNombre.setFont(new Font("Arial", Font.PLAIN, 16));
        campoNombre.setToolTipText("Ingrese su nombre completo. Ejemplo: Ana Pérez");
        campoNombre.getAccessibleContext().setAccessibleName("Campo de nombre completo");

        campoCorreo = new JTextField();
        campoCorreo.setFont(new Font("Arial", Font.PLAIN, 16));
        campoCorreo.setToolTipText("Ingrese un correo válido. Ejemplo: usuario@dominio.com");
        campoCorreo.getAccessibleContext().setAccessibleName("Campo de correo electrónico");

        areaMensaje = new JTextArea(6, 24);
        areaMensaje.setFont(new Font("Arial", Font.PLAIN, 16));
        areaMensaje.setLineWrap(true);
        areaMensaje.setWrapStyleWord(true);
        areaMensaje.setToolTipText("Escriba un mensaje breve y claro.");
        areaMensaje.getAccessibleContext().setAccessibleName("Área para escribir el mensaje");

        JScrollPane scrollMensaje = new JScrollPane(areaMensaje);
        scrollMensaje.setVerticalScrollBarPolicy(JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED);
        scrollMensaje.setBorder(BorderFactory.createLineBorder(new Color(206, 212, 218)));

        agregarCampo(panelFormulario, gbc, 0, "Nombre completo:", campoNombre);
        agregarCampo(panelFormulario, gbc, 1, "Correo electrónico:", campoCorreo);
        agregarArea(panelFormulario, gbc, 2, "Mensaje:", scrollMensaje);

        JButton botonEnviar = new JButton("Enviar");
        botonEnviar.setFont(new Font("Arial", Font.BOLD, 16));
        botonEnviar.setToolTipText("Valida los datos ingresados y muestra una confirmación.");
        botonEnviar.getAccessibleContext().setAccessibleName("Botón enviar formulario");
        botonEnviar.addActionListener(this::validarFormulario);

        JButton botonLimpiar = new JButton("Limpiar");
        botonLimpiar.setFont(new Font("Arial", Font.PLAIN, 16));
        botonLimpiar.setToolTipText("Borra todos los campos del formulario.");
        botonLimpiar.getAccessibleContext().setAccessibleName("Botón limpiar formulario");
        botonLimpiar.addActionListener(e -> limpiarFormulario());

        JPanel panelBotones = new JPanel(new FlowLayout(FlowLayout.RIGHT, 12, 0));
        panelBotones.setBackground(Color.WHITE);
        panelBotones.add(botonLimpiar);
        panelBotones.add(botonEnviar);

        etiquetaEstado = new JLabel("Estado: esperando datos del usuario.");
        etiquetaEstado.setFont(new Font("Arial", Font.PLAIN, 14));
        etiquetaEstado.setForeground(new Color(73, 80, 87));
        etiquetaEstado.getAccessibleContext().setAccessibleName("Mensaje de estado del formulario");

        JPanel panelInferior = new JPanel(new BorderLayout(8, 8));
        panelInferior.setBackground(Color.WHITE);
        panelInferior.add(panelBotones, BorderLayout.NORTH);
        panelInferior.add(etiquetaEstado, BorderLayout.SOUTH);

        panelPrincipal.add(panelSuperior, BorderLayout.NORTH);
        panelPrincipal.add(panelFormulario, BorderLayout.CENTER);
        panelPrincipal.add(panelInferior, BorderLayout.SOUTH);

        setContentPane(panelPrincipal);
        pack();
    }

    private void agregarCampo(JPanel panel, GridBagConstraints gbc, int fila, String texto, JTextField campo) {
        JLabel etiqueta = new JLabel(texto);
        etiqueta.setFont(new Font("Arial", Font.BOLD, 15));
        etiqueta.setForeground(new Color(33, 37, 41));
        etiqueta.setLabelFor(campo);

        gbc.gridx = 0;
        gbc.gridy = fila * 2;
        gbc.weightx = 1;
        panel.add(etiqueta, gbc);

        gbc.gridy = fila * 2 + 1;
        panel.add(campo, gbc);
    }

    private void agregarArea(JPanel panel, GridBagConstraints gbc, int fila, String texto, JScrollPane scroll) {
        JLabel etiqueta = new JLabel(texto);
        etiqueta.setFont(new Font("Arial", Font.BOLD, 15));
        etiqueta.setForeground(new Color(33, 37, 41));
        etiqueta.setLabelFor(areaMensaje);

        gbc.gridx = 0;
        gbc.gridy = fila * 2;
        gbc.weightx = 1;
        panel.add(etiqueta, gbc);

        gbc.gridy = fila * 2 + 1;
        gbc.fill = GridBagConstraints.BOTH;
        gbc.weighty = 1;
        panel.add(scroll, gbc);

        gbc.fill = GridBagConstraints.HORIZONTAL;
        gbc.weighty = 0;
    }

    private void validarFormulario(ActionEvent evento) {
        String nombre = campoNombre.getText().trim();
        String correo = campoCorreo.getText().trim();
        String mensaje = areaMensaje.getText().trim();

        if (nombre.isEmpty()) {
            mostrarEstado("Por favor, escriba su nombre completo.", true);
            campoNombre.requestFocus();
            return;
        }

        if (correo.isEmpty() || !correo.contains("@") || !correo.contains(".")) {
            mostrarEstado("Ingrese un correo electrónico válido. Ejemplo: usuario@dominio.com", true);
            campoCorreo.requestFocus();
            return;
        }

        if (mensaje.length() < 10) {
            mostrarEstado("El mensaje debe tener al menos 10 caracteres para ser comprensible.", true);
            areaMensaje.requestFocus();
            return;
        }

        mostrarEstado("Formulario enviado correctamente. La información es clara y completa.", false);

        JOptionPane.showMessageDialog(
            this,
            "Gracias, " + nombre + ".\nSu mensaje fue registrado correctamente.",
            "Confirmación",
            JOptionPane.INFORMATION_MESSAGE
        );
    }

    private void mostrarEstado(String texto, boolean esError) {
        etiquetaEstado.setText("Estado: " + texto);

        if (esError) {
            etiquetaEstado.setForeground(new Color(176, 42, 55));
        } else {
            etiquetaEstado.setForeground(new Color(25, 135, 84));
        }
    }

    private void limpiarFormulario() {
        campoNombre.setText("");
        campoCorreo.setText("");
        areaMensaje.setText("");
        mostrarEstado("esperando datos del usuario.", false);
        campoNombre.requestFocus();
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            InterfazUsable ventana = new InterfazUsable();
            ventana.setVisible(true);
        });
    }
}
```

<!--
Notas del presentador:
Antes de ejecutar el código, explicar su estructura general. La clase hereda de JFrame para crear la ventana principal. Se usan JPanel y administradores de diseño para organizar el contenido. Los JLabel funcionan como etiquetas claras, los JTextField capturan nombre y correo, el JTextArea permite escribir mensajes más largos y el JScrollPane habilita desplazamiento cuando el contenido excede el área visible. Los botones permiten enviar o limpiar. La validación básica ofrece retroalimentación específica. Los tooltips funcionan como pistas contextuales, y los nombres accesibles ayudan a introducir la idea de accesibilidad desde el código.
-->

---
layout: slide-08-titulo-texto
---

::title::
Pasos para probar en Visual Studio Code

::content::

1. Abrir la carpeta `diseno-interfaces-semana6` en VS Code.

2. Confirmar que el archivo se llame exactamente `InterfazUsable.java`.

3. Copiar el código completo.

4. Ejecutar con la opción **Run Java** o usar terminal:

```bash
javac InterfazUsable.java
java InterfazUsable
```

5. Probar los siguientes casos:

* Enviar con todos los campos vacíos.
* Escribir un correo sin `@`.
* Escribir un mensaje muy corto.
* Completar correctamente todos los campos.
* Redimensionar la ventana.
* Escribir un mensaje largo para observar la barra de desplazamiento.

<!--
Notas del presentador:
Durante la ejecución, pedir a los estudiantes que observen no solo si el código funciona, sino cómo responde la interfaz ante errores. Cada caso de prueba permite evidenciar un principio: los campos vacíos activan retroalimentación, el correo inválido muestra una pista de formato, el mensaje corto mejora la calidad de la información y la barra de desplazamiento permite navegar contenido largo. Al redimensionar la ventana, analizar qué tan adaptable resulta la composición.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
¿Qué principios aparecen en la práctica?

::left::
**Decisiones visibles**

* Título principal destacado.
* Instrucción inicial clara.
* Etiquetas junto a cada campo.
* Tamaño de fuente legible.
* Botones diferenciados.
* Área de texto con scroll.
* Mensajes de estado.
* Validación antes de confirmar.

::right::
**Principios asociados**

* Legibilidad.
* Jerarquía visual.
* Pistas contextuales.
* Prevención de errores.
* Retroalimentación.
* Accesibilidad básica.
* Adaptabilidad.
* Satisfacción del usuario.

<!--
Notas del presentador:
Invitar a los estudiantes a ubicar cada principio dentro de la interfaz. Por ejemplo, el título aporta jerarquía visual; los tooltips aportan pistas contextuales; los mensajes de estado ofrecen retroalimentación; la validación previene errores; la barra de desplazamiento resuelve contenido fuera de vista; el uso de layouts favorece cierta adaptabilidad al tamaño de ventana. Esta lectura permite que la práctica no sea solo programación, sino análisis de diseño de interacción.
-->

---
layout: slide-08-titulo-texto
---

::title::
Producto esperado

::content::
Al finalizar la práctica, cada estudiante debe contar con una interfaz gráfica funcional que evidencie:

* Una ventana principal organizada.
* Campos de nombre, correo y mensaje.
* Etiquetas claras y legibles.
* Pistas contextuales mediante tooltips.
* Validación básica de datos.
* Mensajes de retroalimentación.
* Botones de envío y limpieza.
* Área de texto con barra de desplazamiento.
* Organización adaptable mediante administradores de diseño.
* Relación explícita entre código y principios de usabilidad.

<!--
Notas del presentador:
Aclarar que el producto esperado no se evalúa por complejidad visual, sino por la aplicación consciente de criterios de interfaz. Un estudiante puede mejorar colores, márgenes o textos, pero debe conservar la claridad y la funcionalidad. Sugerir que quienes avancen más rápido agreguen mejoras como contador de caracteres, validación más robusta de correo, indicación de campos obligatorios o reorganización de componentes para distintos tamaños de ventana.
-->

---
layout: slide-08-titulo-texto
---

::title::
Preguntas de análisis

::content::
Después de ejecutar la interfaz, respondan:

1. ¿Qué elemento facilita más la legibilidad del formulario?

2. ¿Dónde se evidencia la jerarquía visual?

3. ¿Qué pistas contextuales ayudan a evitar errores?

4. ¿Qué ocurre cuando el usuario escribe información incompleta?

5. ¿La barra de desplazamiento mejora la navegación del mensaje?

6. ¿Qué ajustes harían para mejorar accesibilidad?

7. ¿Cómo cambiaría la interfaz si se diseñara para móvil?

8. ¿Qué prueba de usabilidad sencilla aplicarían con un usuario real?

<!--
Notas del presentador:
Usar estas preguntas para conectar la práctica con el análisis crítico. No buscar respuestas únicas, sino argumentos. Por ejemplo, un estudiante puede decir que la legibilidad mejora por el tamaño de fuente, otro puede mencionar las etiquetas o el contraste. En accesibilidad, podrían proponer navegación por teclado, mayor contraste, etiquetas más descriptivas o mensajes que no dependan solo del color. En pruebas de usabilidad, pueden sugerir pedir a un compañero completar el formulario mientras se observan errores, dudas y tiempos.
-->

---
layout: slide-10-titulo-dos-columnas
---

::title::
Socialización breve

::left::
**Cada grupo comparte**

* Un acierto de la interfaz.
* Un problema detectado.
* Una mejora prioritaria.
* Un principio de usabilidad aplicado.
* Una relación con el cuestionario.

::right::
**Criterios para escuchar**

* ¿La mejora ayuda al usuario?
* ¿Reduce errores?
* ¿Aumenta claridad?
* ¿Mejora accesibilidad?
* ¿Favorece adaptabilidad?
* ¿Puede probarse con usuarios reales?

<!--
Notas del presentador:
La socialización debe ser breve y enfocada. Evitar que se convierta en una exposición larga de código. Pedir intervenciones concretas: “observamos este problema”, “lo mejoraríamos así”, “se relaciona con este principio”. El objetivo es que los estudiantes argumenten desde usabilidad, no solo desde gusto personal. Cerrar destacando que toda mejora de interfaz debe poder justificarse desde la experiencia del usuario y, en lo posible, validarse mediante observación o prueba.
-->

---
layout: slide-08-titulo-texto
---

::title::
Resolución de dudas

::content::
Espacio orientado a preguntas sobre:

* Conceptos del cuestionario.
* Diferencia entre usabilidad y apariencia visual.
* Aplicación de ISO 9241 en interfaces reales.
* Principios de Nielsen.
* Accesibilidad y navegación.
* Diseño responsivo y adaptabilidad.
* Implementación de la práctica en Java.
* Errores de compilación o ejecución en VS Code.
* Mejoras posibles para el formulario.

<!--
Notas del presentador:
Administrar este momento para no exceder los 15 minutos. Priorizar dudas que afecten la comprensión general del grupo. Si aparece un error técnico individual, resolverlo rápidamente si es común; si no, sugerir una revisión posterior para no afectar el ritmo de la sesión. Reforzar que las dudas conceptuales pueden vincularse con ejemplos prácticos de la interfaz desarrollada. Cerrar el bloque retomando las ideas de legibilidad, facilidad de uso, accesibilidad, adaptabilidad y satisfacción.
-->

---
layout: slide-08-titulo-texto
---

::title::
Recordemos...

::content::
En esta sesión revisamos cómo las interfaces gráficas deben diseñarse para facilitar la interacción entre personas y sistemas.

Ideas clave:

* Una buena interfaz comunica, orienta y reduce esfuerzo.
* La usabilidad depende del usuario, la tarea y el contexto.
* La legibilidad favorece comprensión.
* La jerarquía visual guía la atención.
* La accesibilidad amplía la participación.
* La adaptabilidad responde a la diversidad de dispositivos.
* Las pruebas con usuarios permiten validar decisiones.
* El código también comunica decisiones de diseño.

<!--
Notas del presentador:
Hacer un cierre integrador. Indicar que el diseño de interfaces no termina cuando la pantalla se ve organizada; debe validarse si realmente permite que las personas cumplan sus objetivos. Relacionar la práctica en Java con el desarrollo profesional: incluso una aplicación pequeña requiere pensar en etiquetas, mensajes, errores, navegación y claridad visual. Animar a los estudiantes a observar interfaces cotidianas con una mirada crítica y a justificar sus decisiones de diseño con principios y evidencias.
-->

---
layout: slide-08-titulo-texto
---

::title::
Recordatorio institucional

::content::
Antes de finalizar, recuerden diligenciar la **Encuesta de Percepción Estudiantil**.

Su participación permite:

* Valorar el desarrollo del curso.
* Identificar fortalezas del proceso formativo.
* Reconocer oportunidades de mejora.
* Fortalecer la calidad académica.
* Aportar a la mejora continua de las Open Class.

La retroalimentación estudiantil es parte fundamental del proceso educativo.

<!--
Notas del presentador:
Realizar el recordatorio de manera clara y cordial. Explicar que la encuesta no es un trámite aislado, sino un mecanismo institucional para recoger percepciones sobre el curso, la mediación docente, los recursos y la experiencia de aprendizaje. Invitar a los estudiantes a responder con responsabilidad y honestidad. Relacionar el recordatorio con la misma lógica de la sesión: así como una interfaz mejora cuando se escucha al usuario, un curso mejora cuando se escucha al estudiante.
-->

---
layout: slide-12-cierre
---

::title::
Gracias por su participación

::content::
Diseñar interfaces es diseñar condiciones para que las personas comprendan, decidan, actúen y confíen.

Nos vemos en la próxima sesión.

<!--
Notas del presentador:
Cerrar agradeciendo la asistencia y participación. Reforzar que los conceptos trabajados serán útiles tanto para responder la evaluación como para diseñar mejores aplicaciones en proyectos académicos y profesionales. Invitar a los estudiantes a conservar el código de la práctica como base para futuras mejoras. Finalizar con una frase breve sobre la responsabilidad del diseñador y desarrollador frente a la experiencia del usuario.
-->


