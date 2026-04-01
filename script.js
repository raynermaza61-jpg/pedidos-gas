// Intro → mostrar menú
setTimeout(() => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").classList.remove("hidden");
}, 3500);

// Mostrar secciones
function mostrar(seccion) {
  let secciones = document.querySelectorAll(".section");
  secciones.forEach(s => s.classList.add("hidden"));

  document.getElementById(seccion).classList.remove("hidden");
}
