# PIA — Mi futuro profesional: Reflexión y planificación

Portafolio web del Producto Integrador de Aprendizaje de Elección Vocacional. Está construido con HTML, CSS y JavaScript; no necesita instalación, servidor ni dependencias externas.

## Cómo abrirlo

1. Descarga o clona el repositorio.
2. Abre `index.html` en Edge, Chrome o Firefox.
3. Usa el menú lateral para recorrer los diez apartados.
4. Los campos editables guardan sus cambios en el almacenamiento local del navegador. Usa **Exportar Word** para generar un archivo `.doc` compatible con Word o **Imprimir / PDF** para guardar una copia en PDF.

## Estructura

- `index.html`: portada y los diez apartados del portafolio.
- `css/styles.css`: diseño responsive y reglas de impresión.
- `js/app.js`: guardado local, avance del proyecto, navegación y exportaciones.
- `recursos/`: capturas de resultados vocacionales y documentos PDF de apoyo.

## Apartados para completar después

Los espacios siguientes se dejaron intencionalmente preparados. No se agregaron respuestas, logos ni imágenes inventadas.

### Logotipos institucionales

En `index.html`, dentro de `id="portada"`, localiza los comentarios `LOGO UANL` y `LOGO EIAO`. Copia los archivos oficiales en `recursos/logo-uanl.png` y `recursos/logo-eiao.png`, y sustituye el texto de cada espacio por:

```html
<img class="institution-logo" src="recursos/logo-uanl.png" alt="Logotipo oficial de la UANL">
```

### Entrevista

En `index.html`, dentro de `<section id="entrevista">`, reemplaza el bloque entre `INICIO: PEGAR AQUÍ LA ENTREVISTA` y `FIN: PEGAR AQUÍ LA ENTREVISTA` con la entrevista real: persona, puesto, profesión, estudios, preguntas, respuestas, reflexión y referencia.

### Publicación de Facebook

Guarda la captura real como `recursos/publicacion-facebook.jpg`. En `index.html`, dentro de `id="facebook-publication"`, reemplaza el marcador por:

```html
<img class="evidence-image" src="recursos/publicacion-facebook.jpg" alt="Captura de la publicación del equipo en Facebook">
```

## Notas

Los resultados vocacionales y los datos personales se integraron a partir de los documentos e imágenes compartidos. Las referencias de empleo y salarios son promedios de grupos ocupacionales, no garantías de sueldo. Los cambios realizados en campos editables se guardan solamente en el navegador local; no se sincronizan con GitHub automáticamente.
