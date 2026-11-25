# Instrucciones para completar el portafolio digital del PIA

> **Lee este archivo completo antes de modificar el proyecto.** Tu tarea es terminar la página web del repositorio y convertirla en un portafolio digital completo, siguiendo la guía de Elección Vocacional. El usuario te proporcionará por separado un archivo que contiene los resultados de las pruebas e inventarios vocacionales que realizó durante el semestre. Debes revisar ese archivo y utilizarlo como fuente principal para el apartado de pruebas.

## 1. Objetivo del proyecto

Construye una página web funcional, visualmente cuidada y fácil de editar que contenga **todo el Producto Integrador de Aprendizaje (PIA)** titulado:

**“Mi futuro Profesional: Reflexión y Planificación”**

No se trata solamente de una página de presentación personal. Debe ser un portafolio digital organizado en diez apartados, con un menú de navegación, contenido editable, imágenes, tablas, gráficas y evidencias cuando correspondan.

La página debe permitir:

- Consultar y editar todos los apartados del portafolio.
- Incorporar los resultados reales de las pruebas vocacionales del archivo que entregará el usuario.
- Agregar y modificar textos, tablas, imágenes, enlaces, gráficas y evidencias.
- Ver el portafolio completo en una presentación coherente.
- Exportar **el documento completo** a Word, conservando títulos, tablas, imágenes, gráficas y formato tanto como sea técnicamente posible.
- Imprimir o guardar el portafolio completo como PDF.
- Revisar qué apartados están completos y cuáles siguen pendientes.

El resultado debe funcionar como una página web real, no como una maqueta estática ni como una imagen de diseño.

## 2. Primero revisa el repositorio existente

El proyecto ya contiene una primera versión. **No empieces desde cero ni elimines lo que ya funciona.** Revisa los archivos y amplía/refactoriza lo necesario:

- `index.html`: estructura de la página, editor y vista previa actuales.
- `css/styles.css`: estilos, diseño adaptable y reglas de impresión.
- `js/app.js`: campos editables y actualización de la vista previa.
- `js/export-word.js`: exportación actual, que por ahora solo contempla una parte del PIA.
- `README.md`: estas instrucciones.

La versión actual solo tiene una portada básica, una presentación personal, un índice orientativo y exportación parcial. Eso **no** significa que el PIA esté terminado.

Puedes reorganizar la aplicación si hace falta, pero conserva una estructura simple, mantenible y sin complejidad innecesaria. Si agregas archivos, documenta su función.

## 3. Archivo de pruebas vocacionales que entregará el usuario

El usuario proporcionará otro archivo con los tests, inventarios y resultados que realizó durante el semestre. Debes:

1. Abrir y revisar el archivo completo, no solamente el nombre o una vista previa.
2. Identificar cada prueba, sus preguntas o dimensiones cuando aparezcan, resultados, puntuaciones, porcentajes, perfiles, conclusiones y fechas.
3. Distinguir claramente qué información pertenece a cada prueba.
4. Incorporar los resultados reales al apartado **3. Inventarios y pruebas vocacionales**.
5. Crear tablas y gráficas a partir de los valores que estén expresamente presentes en el archivo.
6. Añadir una explicación personal de mínimo media cuartilla que interprete los resultados, relacionándolos entre sí y con los intereses vocacionales del estudiante.
7. Mantener las diferencias entre pruebas: no mezclar escalas, porcentajes, puntuaciones ni categorías que no sean comparables.
8. Señalar cualquier resultado que no aparezca o no se pueda leer; dejarlo como pendiente para que el usuario lo complete.

### Reglas obligatorias sobre los resultados

- **No inventes puntuaciones, porcentajes, respuestas, perfiles, fechas ni conclusiones de pruebas.**
- No conviertas una opinión del estudiante en un resultado oficial de un test.
- No atribuyas a una prueba resultados que pertenecen a otra.
- Si un dato no aparece en el archivo, no lo calcules por suposición.
- Puedes explicar tendencias que sí estén respaldadas por los resultados, pero diferencia el resultado literal de tu interpretación.
- Si el documento está incompleto, conserva lo que sí se puede comprobar y marca lo faltante.

El archivo que entregará el usuario es la fuente de verdad para este apartado. No sustituyas sus resultados por tests genéricos de internet.

## 4. Perfil y contexto del estudiante

Utiliza los siguientes datos como contexto inicial, no como permiso para inventar información:

- Estudia en la **Escuela Industrial y Preparatoria Técnica “Álvaro Obregón”**, de la UANL.
- Su área técnica actual es **Programación Web**.
- Tiene interés en tecnología, computación, programación, conocer cómo funcionan los sistemas y crear proyectos que funcionen.
- También le interesan la ingeniería, la ciberseguridad y los proyectos que combinan conocimientos técnicos.
- Para el trabajo de este PIA se seleccionaron estas tres carreras:
  1. **Ingeniería Mecánica y Eléctrica**
  2. **Mecatrónica**
  3. **Aeronáutica**
- Le interesa aprender mediante la práctica y reconoce que debe trabajar en su organización y constancia.

No conviertas estos datos en afirmaciones exageradas ni decidas por el estudiante qué carrera elegirá. La elección final debe surgir de la evidencia, la reflexión y lo que el propio estudiante confirme. Deja editables los datos personales que no estén confirmados, como nombre completo, grupo, docente y fecha.

## 5. Contenido obligatorio del portafolio

La guía del PIA pide los siguientes diez apartados. Todos deben estar presentes, desarrollados y ser accesibles desde el menú.

### 1. Portada

Debe incluir:

- Nombre completo del estudiante.
- Título: “Mi futuro Profesional: Reflexión y Planificación”.
- Universidad Autónoma de Nuevo León (UANL).
- Escuela Industrial y Preparatoria Técnica “Álvaro Obregón” (EIAO).
- Grupo y fecha.
- Nombre del docente, cuando corresponda.
- Logotipos institucionales UANL/EIAO, usando archivos oficiales o imágenes proporcionadas; no dibujes logotipos falsos.
- Una imagen representativa de su vocación o futuro profesional.

Permite editar los datos y reemplazar la imagen. No inventes nombre, grupo ni docente.

### 2. Presentación personal

Redacta y permite editar un texto de **mínimo media cuartilla** que explique:

- Quién es el estudiante.
- Sus intereses.
- Sus valores.
- Su forma de trabajar y aprender.
- Qué lo motiva a buscar una profesión.

Usa un español natural, claro y creíble para un estudiante de preparatoria. Evita frases genéricas, lenguaje excesivamente formal y afirmaciones que el usuario no haya expresado. El texto inicial existente puede servir como borrador, pero debe quedar editable y revisarse con el resto del PIA.

### 3. Inventarios y pruebas vocacionales

Este apartado se debe completar a partir del archivo que el usuario proporcionará.

Debe contener:

- Todas las pruebas e inventarios identificados en el documento.
- Resultados detallados de cada uno.
- Gráficas, porcentajes o perfiles que realmente arroje cada prueba.
- Una explicación personal de mínimo media cuartilla sobre qué interpreta el estudiante de sus resultados.
- Una síntesis que relacione los resultados con sus intereses y posibles carreras, sin afirmar que un test determina por sí solo la profesión correcta.

Incluye el nombre de cada prueba y una breve explicación de qué evalúa solo cuando el propio material lo indique o exista una fuente verificable.

### 4. Habilidades, fortalezas y áreas de oportunidad

Presenta una tabla o cuadro que permita distinguir:

- Habilidades blandas: comunicación, liderazgo, creatividad, trabajo en equipo u otras que se puedan justificar.
- Habilidades técnicas: computación, programación, idiomas, cálculo, redacción u otras que se puedan justificar.
- Principales fortalezas.
- Áreas que debe mejorar.
- Evidencias opcionales: fotografías, certificados, trabajos, proyectos o productos realizados.

No marques una habilidad como dominio demostrado si no hay información que la respalde. Permite que el estudiante edite, agregue y elimine filas y adjunte evidencias.

### 5. Profesiones de interés

Investiga y compara estas tres carreras, manteniendo sus nombres claros:

1. Ingeniería Mecánica y Eléctrica.
2. Mecatrónica.
3. Aeronáutica.

Para **cada carrera** incluye:

- Descripción general.
- Funciones principales del profesional.
- Universidades donde se estudia: opciones públicas y privadas, priorizando Nuevo León y México.
- Duración del programa.
- Perfil de ingreso.
- Perfil de egreso.
- Campo laboral.
- Salarios aproximados y contexto de esos datos.
- Ventajas y desventajas.
- Por qué puede atraerle al estudiante.

Presenta la información en bloques comparables, tablas o tarjetas; evita párrafos enormes. Añade enlaces a fuentes verificables, preferentemente páginas oficiales de universidades y fuentes laborales confiables.

Para salarios, indica moneda, ubicación, periodo de referencia, fecha de consulta y fuente. Aclara que son aproximaciones y que cambian según experiencia, región, sector y especialidad. No inventes sueldos ni duración de programas.

### 6. Entrevista a un profesional

La guía permite realizar una entrevista real (escrita, presencial o por videollamada) o presentar una entrevista/artículo publicado de un profesional de una carrera de interés.

Incluye:

- Nombre de la persona y puesto.
- Profesión que ejerce.
- Universidad donde estudió.
- Lugar donde trabaja, si la fuente lo informa.
- Mínimo **15 preguntas y respuestas** relacionadas con formación académica, experiencia laboral, mercado de trabajo y consejos para futuros estudiantes.
- Reflexión personal de mínimo media cuartilla: qué aprendió el estudiante y si se imagina trabajando en ese campo.
- Fotografía opcional, si existe y se tiene permiso para usarla.
- Referencia o enlace de la entrevista/artículo.

**No inventes una entrevista ni atribuyas respuestas falsas a una persona real.** Si se utiliza una entrevista o artículo publicado, cada respuesta debe poder respaldarse con esa fuente; no presentes una paráfrasis como cita textual. Si no hay suficiente información pública para completar 15 respuestas, deja las preguntas/respuestas faltantes identificadas y solicita una entrevista real o una fuente más completa.

Agrega un modo de edición para que el usuario pueda capturar una entrevista propia.

### 7. Línea de vida profesional a 10 años

Crea una línea del tiempo visual, editable y coherente con las opciones académicas del estudiante. Debe contemplar:

- Dónde se ve estudiando.
- Qué habilidades quiere adquirir.
- Prácticas profesionales.
- Primer empleo.
- Cómo se imagina profesionalmente dentro de diez años.

Presenta los años o etapas de forma clara. Identifica el contenido como plan o meta personal, no como hechos futuros garantizados. Permite cambiar los hitos y las fechas.

### 8. Conclusión personal

Redacta un texto de **mínimo media cuartilla** que responda:

- ¿Qué carrera elegiría hoy?
- ¿Por qué?
- ¿Qué necesita mejorar para lograrlo?
- ¿Qué dudas o alternativas todavía considera?

La conclusión debe ser consistente con las pruebas reales, las habilidades, la investigación y la entrevista. No decidas arbitrariamente cuál carrera elegirá. Deja el texto editable y, si los datos disponibles no permiten concluir una preferencia clara, dilo con honestidad.

### 9. Bibliografía y enlaces utilizados

Incluye las fuentes realmente consultadas:

- Páginas oficiales de universidades.
- Información oficial de planes de estudio.
- Fuentes de campo laboral y salarios.
- Entrevistas, artículos, videos o libros utilizados.
- Fuentes de las pruebas vocacionales, cuando estén disponibles.

Presenta las referencias en estilo APA y agrega enlaces funcionales. No generes referencias ficticias. Cada dato investigado debe poder rastrearse a su fuente. Distingue fuentes oficiales, artículos y estimaciones.

### 10. Formato digital

El propio sitio web debe funcionar como el portafolio digital y tener:

- Diseño visual atractivo, limpio y coherente.
- Índice o menú principal con navegación entre los diez apartados.
- Jerarquía de títulos clara.
- Colores, iconos e imágenes usados con moderación.
- Tablas y gráficas legibles.
- Buen funcionamiento en computadora y celular.
- Ortografía y acentuación cuidadas.
- Indicadores de avance o estado de los apartados.

No debe parecer una plantilla genérica ni limitarse a una lista de títulos. Cada apartado debe mostrar su contenido real.

## 6. Anexo de la presentación de equipo en Facebook

Además de los diez apartados del portafolio individual, la guía pide una evidencia de la presentación que el equipo utilizó en la exposición de clase.

La entrega debe contemplar:

- Publicación de la presentación en el grupo de Facebook **“Más allá de los libros”**.
- Unidad de aprendizaje, número de equipo y etapa.
- Nombres de todos los integrantes que participaron.
- Enlaces de los videos utilizados para reforzar el contenido.
- Captura de pantalla que demuestre que se realizó la publicación.

Añade un apartado de **Anexo de exposición de equipo** para cargar la captura de pantalla y registrar los datos, integrantes y enlaces. No publiques en Facebook ni simules que se publicó. El usuario hará esa acción por su cuenta y agregará la captura real.

## 7. Formato de Word y PDF

La guía de entrega solicita:

- Fuente Arial 12 en el contenido.
- Texto justificado.
- Márgenes de 2.54 cm en los cuatro lados.
- Interlineado 1.5.
- Referencias estilo APA.
- Estructura: portada, portafolio digital, anexo de captura de la exposición de clase en Facebook y bibliografía.

La exportación actual de `js/export-word.js` genera un archivo Word antiguo/HTML con contenido parcial. Debes reemplazar o mejorar esa solución para que el botón exporte **todo el portafolio**, no solo la portada y la presentación personal.

Preferencias para la exportación:

- Prioriza generar un archivo `.docx` válido y editable si la arquitectura elegida lo permite.
- Si utilizas una biblioteca externa, explica cómo se carga y evita que la aplicación falle silenciosamente cuando no hay conexión.
- Conserva títulos, párrafos, tablas, imágenes, gráficas y referencias tanto como sea posible.
- Incluye el anexo de la exposición y la bibliografía en la exportación.
- Crea un archivo con nombre configurable usando iniciales del estudiante y PIA, por ejemplo `INICIALES-PIA.docx`; no asumas cuáles son las iniciales si no están confirmadas.
- La impresión/PDF debe incluir todos los apartados, no el editor ni los controles de la interfaz.
- Comprueba saltos de página, encabezados, tablas y contenido que pueda quedar cortado.

La guía menciona entregar el documento final como PDF en NEXUS. La aplicación puede generar Word y permitir imprimir/guardar como PDF; no afirmes que subió el archivo a NEXUS.

## 8. Experiencia de uso y edición

El usuario debe poder:

- Entrar directamente a cada sección desde el menú.
- Editar el contenido sin tocar código.
- Agregar y eliminar filas en tablas cuando sea útil.
- Agregar o reemplazar imágenes y evidencias.
- Añadir enlaces y fuentes.
- Modificar las preguntas y respuestas de la entrevista.
- Editar hitos de la línea del tiempo.
- Consultar una vista previa de cómo quedará el documento.
- Identificar apartados incompletos antes de exportar.

Incluye validaciones útiles: por ejemplo, avisar si faltan el nombre, grupo o datos obligatorios. No bloquees toda la aplicación porque falten datos; permite continuar trabajando.

Si agregas guardado automático local, informa claramente dónde se guardan los datos y ofrece una acción para exportar una copia de respaldo. No envíes los datos personales a servidores externos.

## 9. Requisitos técnicos y de diseño

- Mantén una aplicación sencilla y rápida.
- Preferencia por HTML, CSS y JavaScript vanilla; no agregues frameworks pesados sin una razón real.
- No requiere Python ni backend.
- Debe poder ejecutarse abriendo `index.html`, o explica claramente cualquier requisito adicional que introduzcas.
- Usa nombres de clases y funciones comprensibles.
- Separa estructura, estilos, lógica, datos y exportación.
- Usa etiquetas semánticas y controles accesibles por teclado.
- Comprueba que los botones hagan lo que anuncian.
- No dejes botones decorativos que aparenten funcionar.
- Evita dependencias innecesarias, errores de consola y enlaces rotos.
- Mantén un diseño responsive.
- Conserva la identidad visual oscura/azul de la primera versión si te sirve, pero mejora la lectura del portafolio y el aspecto del documento final.
- Los documentos exportados deben usar el formato académico solicitado, aunque la página web tenga un diseño moderno.

## 10. Criterios para considerar terminado el trabajo

Antes de finalizar, verifica todo lo siguiente:

- [ ] Los diez apartados del PIA están desarrollados y conectados al menú.
- [ ] La portada contiene los campos solicitados y permite añadir una imagen representativa.
- [ ] La presentación personal alcanza al menos media cuartilla y es editable.
- [ ] El apartado de pruebas usa los resultados del archivo que entregó el usuario, con gráficas basadas en esos datos.
- [ ] La interpretación de pruebas alcanza al menos media cuartilla y no inventa resultados.
- [ ] Habilidades blandas, técnicas, fortalezas y áreas de oportunidad están organizadas.
- [ ] Las tres carreras solicitadas están investigadas y comparadas con fuentes.
- [ ] La entrevista tiene al menos 15 preguntas y respuestas respaldadas por una entrevista real o una fuente publicada; no contiene respuestas inventadas.
- [ ] La línea del tiempo es editable y cubre diez años.
- [ ] La conclusión alcanza al menos media cuartilla y no impone una elección al estudiante.
- [ ] La bibliografía contiene las fuentes utilizadas en formato APA.
- [ ] Existe un espacio para la captura real de Facebook y los datos de la exposición de equipo.
- [ ] La exportación Word contiene el PIA completo.
- [ ] La impresión/PDF contiene el PIA completo y respeta el formato académico.
- [ ] La página funciona en computadora y celular.
- [ ] Los campos editables, enlaces, controles y botones funcionan.
- [ ] No hay datos, resultados, entrevistas, salarios, fuentes ni evidencias inventadas.
- [ ] El README y los comentarios explican cómo ejecutar y mantener el proyecto.

## 11. Cómo debes trabajar

1. Inspecciona el repositorio y entiende la implementación actual.
2. Revisa el archivo de pruebas vocacionales que te proporcionará el usuario antes de completar el apartado 3.
3. Si tienes acceso a investigación web, verifica universidades, planes de estudio, duración, campo laboral y salarios con fuentes confiables y actuales. Registra las fuentes.
4. Implementa la estructura completa y los diez apartados.
5. Integra la información real del estudiante y deja editables los datos que falten.
6. Implementa la exportación completa a Word y la impresión a PDF.
7. Prueba la página y corrige errores de navegación, edición, diseño y exportación.
8. Actualiza este README si cambia la estructura o la forma de ejecutar el proyecto.
9. Guarda los cambios en el repositorio y resume qué quedó terminado y qué información sigue pendiente del usuario.

**No declares el PIA terminado si solo existe el menú o si hay secciones con títulos y contenido de relleno.** La prioridad es que el portafolio sea completo, verificable, editable y fiel a la guía de la materia.
