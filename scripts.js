function mostrarSeccion(id) {
  document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function guardarRegistro(e, ulId, input1, input2) {
  e.preventDefault();
  const val1 = document.getElementById(input1).value;
  const val2 = document.getElementById(input2).value;
  const fecha = new Date().toLocaleDateString();
  const li = document.createElement("li");
  li.textContent = `${fecha} - ${val1}: ${val2}`;
  document.getElementById(ulId).appendChild(li);
  e.target.reset();
}

// Traducción básica
function cambiarIdioma() {
  const lang = document.getElementById("idioma").value;
  const textos = {
    es: {
      bienvenida: "Bienvenido",
      textoInicio: "Esta plataforma organiza cultivos..."
    },
    en: {
      bienvenida: "Welcome",
      textoInicio: "This platform organizes crops..."
    },
    // Agrega más idiomas
  };
  document.getElementById("bienvenida").textContent = textos[lang].bienvenida;
  document.getElementById("textoInicio").textContent = textos[lang].textoInicio;
}

// Exportar (mock usando alert)
function exportarPDF(id) {
  alert("Esta función usará jsPDF en producción.");
}

function exportarExcel(id) {
  alert("Esta función usará SheetJS (xlsx) en producción.");
}

function exportarPNG(id) {
  alert("Esta función usará html2canvas en producción.");
}

