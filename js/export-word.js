(function () {
  "use strict";

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, function (character) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[character];
    });
  }

  function paragraphsHtml(text) {
    return String(text || "")
      .split(/\n\s*\n/)
      .map(function (paragraph) { return paragraph.trim(); })
      .filter(Boolean)
      .map(function (paragraph) { return "<p>" + escapeHtml(paragraph) + "</p>"; })
      .join("\n");
  }

  function buildDocument(data) {
    const safeName = escapeHtml(data.name || "Nombre del estudiante");
    const safeGroup = escapeHtml(data.group || "Por completar");
    const safeTeacher = escapeHtml(data.teacher || "Por completar");
    const safeDate = escapeHtml(data.date || "Por completar");
    const body = paragraphsHtml(data.personalText);

    return '<!DOCTYPE html><html><head><meta charset="utf-8">' +
      '<title>Mi futuro profesional - Presentación personal</title>' +
      '<style>' +
      '@page Section1{size:8.5in 11in;margin:1in;mso-page-orientation:portrait;}' +
      'div.Section1{page:Section1;}' +
      'body{font-family:Arial,sans-serif;font-size:12pt;line-height:1.5;color:#222;}' +
      'p{margin:0 0 12pt 0;text-align:justify;}' +
      '.cover{height:9in;text-align:center;position:relative;}' +
      '.institution{font-family:Georgia,serif;font-size:14pt;font-weight:bold;letter-spacing:2px;margin-top:20pt;}' +
      '.school{font-size:10pt;font-weight:bold;line-height:1.5;margin-top:12pt;}' +
      '.rule{width:60pt;border-top:2pt solid #4964c9;margin:30pt auto;}' +
      '.mark{font-family:Georgia,serif;font-size:28pt;font-weight:bold;color:white;background:#142342;padding:7pt 16pt;display:inline-block;margin:10pt auto 22pt;}' +
      '.kicker{font-size:9pt;letter-spacing:2px;color:#68758b;font-weight:bold;}' +
      'h1{font-family:Georgia,serif;font-size:25pt;line-height:1.25;font-weight:normal;margin:18pt 0 8pt;color:#17233b;}' +
      '.subtitle{font-family:Georgia,serif;font-style:italic;color:#65728a;}' +
      '.details{width:75%;margin:48pt auto 24pt;text-align:left;font-size:10pt;}' +
      '.details p{border-bottom:1px solid #ddd;padding:0 0 8pt;margin:0 0 12pt;text-align:left;}' +
      '.label{display:block;font-size:8pt;color:#77839a;font-weight:bold;letter-spacing:1px;margin-bottom:4pt;}' +
      '.image-placeholder{border:1px dashed #b8c2d2;padding:18pt;width:190pt;margin:34pt auto 0;color:#8792a5;font-size:8pt;}' +
      '.footer{position:absolute;bottom:8pt;left:0;right:0;color:#8792a5;font-size:8pt;letter-spacing:2px;}' +
      '.page-break{page-break-before:always;mso-break-type:section-break;}' +
      '.section-number{color:#526bc2;font-size:9pt;font-weight:bold;letter-spacing:2px;}' +
      'h2{font-family:Georgia,serif;font-size:21pt;font-weight:normal;margin:14pt 0 26pt;color:#17233b;}' +
      '.content-footer{margin-top:36pt;border-top:1px solid #ddd;padding-top:8pt;font-size:8pt;color:#8993a4;}' +
      '.contents li{margin:0 0 9pt;}' +
      '</style></head><body><div class="Section1">' +
      '<div class="cover">' +
      '<div class="institution">UNIVERSIDAD AUTÓNOMA DE NUEVO LEÓN</div>' +
      '<div class="school">ESCUELA INDUSTRIAL Y PREPARATORIA TÉCNICA<br>“ÁLVARO OBREGÓN”</div>' +
      '<div class="rule"></div><div class="mark">P</div>' +
      '<div class="kicker">PROYECTO INTEGRADOR DE APRENDIZAJE</div>' +
      '<h1>Mi futuro profesional:<br><em>Reflexión y planificación</em></h1>' +
      '<p class="subtitle" style="text-align:center">Presentación personal</p>' +
      '<div class="details">' +
      '<p><span class="label">ESTUDIANTE</span>' + safeName + '</p>' +
      '<p><span class="label">GRUPO</span>' + safeGroup + '</p>' +
      '<p><span class="label">UNIDAD DE APRENDIZAJE / DOCENTE</span>' + safeTeacher + '</p>' +
      '<p><span class="label">FECHA</span>' + safeDate + '</p></div>' +
      '<div class="image-placeholder">ESPACIO PARA IMAGEN REPRESENTATIVA</div>' +
      '<div class="footer">UNIVERSIDAD AUTÓNOMA DE NUEVO LEÓN</div></div>' +
      '<div class="page-break"></div>' +
      '<div><div class="section-number">02 · REFLEXIÓN PERSONAL</div>' +
      '<h2>Presentación personal</h2>' + body +
      '<div class="content-footer">MI FUTURO PROFESIONAL</div></div>' +
      '<div class="page-break"></div>' +
      '<div><h2>Índice del proyecto</h2><ol class="contents">' +
      '<li>Portada</li><li>Presentación personal</li><li>Resultados de pruebas vocacionales</li>' +
      '<li>Habilidades, fortalezas y áreas de oportunidad</li>' +
      '<li>Investigación de tres profesiones</li><li>Entrevista a un profesionista</li>' +
      '<li>Línea del tiempo a 10 años</li><li>Conclusión personal</li>' +
      '<li>Bibliografía</li><li>Presentación digital</li></ol>' +
      '<p><em>Nota: los apartados restantes se deben completar con información, resultados y evidencias propias antes de entregar el PIA.</em></p></div>' +
      '</div></body></html>';
  }

  function download(data) {
    const html = buildDocument(data);
    const blob = new Blob(["\ufeff", html], { type: "application/msword;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "PIA_Presentacion_Personal.doc";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  window.PIAWordExport = { download: download };
})();