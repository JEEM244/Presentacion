(function () {
  "use strict";

  const defaults = {
    personalText: document.getElementById("personal-text").value
  };

  const elements = {
    name: document.getElementById("student-name"),
    group: document.getElementById("student-group"),
    date: document.getElementById("document-date"),
    teacher: document.getElementById("teacher"),
    personalText: document.getElementById("personal-text"),
    previewName: document.getElementById("preview-name"),
    previewGroup: document.getElementById("preview-group"),
    previewDate: document.getElementById("preview-date"),
    previewTeacher: document.getElementById("preview-teacher"),
    previewText: document.getElementById("preview-text"),
    characterCount: document.getElementById("character-count")
  };

  function formatDate(value) {
    if (!value) return "Por completar";
    const parts = value.split("-").map(Number);
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    return new Intl.DateTimeFormat("es-MX", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(date);
  }

  function renderParagraphs() {
    const paragraphs = elements.personalText.value
      .split(/\n\s*\n/)
      .map(function (paragraph) { return paragraph.trim(); })
      .filter(Boolean);

    elements.previewText.replaceChildren();
    paragraphs.forEach(function (paragraph) {
      const p = document.createElement("p");
      p.textContent = paragraph;
      elements.previewText.appendChild(p);
    });
    elements.characterCount.textContent = elements.personalText.value.length + " caracteres";
  }

  function getData() {
    return {
      name: elements.name.value.trim(),
      group: elements.group.value.trim(),
      date: formatDate(elements.date.value),
      dateISO: elements.date.value,
      teacher: elements.teacher.value.trim(),
      personalText: elements.personalText.value.trim()
    };
  }

  function updatePreview() {
    const data = getData();
    elements.previewName.textContent = data.name || "Nombre del estudiante";
    elements.previewGroup.textContent = data.group || "Por completar";
    elements.previewDate.textContent = data.date;
    elements.previewTeacher.textContent = data.teacher || "Por completar";
    renderParagraphs();
  }

  [elements.name, elements.group, elements.date, elements.teacher, elements.personalText]
    .forEach(function (input) {
      input.addEventListener("input", updatePreview);
      input.addEventListener("change", updatePreview);
    });

  document.getElementById("reset-text").addEventListener("click", function () {
    elements.personalText.value = defaults.personalText;
    updatePreview();
  });

  document.getElementById("export-button").addEventListener("click", function () {
    if (!window.PIAWordExport) {
      window.alert("No se pudo cargar el módulo de exportación. Recarga la página e inténtalo otra vez.");
      return;
    }
    window.PIAWordExport.download(getData());
  });

  document.getElementById("print-button").addEventListener("click", function () {
    window.print();
  });

  updatePreview();
})();