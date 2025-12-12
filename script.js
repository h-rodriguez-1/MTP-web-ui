// Script sencillo: mostrar la hora actual en el footer
(function () {
  const reloj = document.querySelector("[data-reloj]");
  if (!reloj) return;

  function actualizarHora() {
    const ahora = new Date();
    const hora = ahora.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    reloj.textContent = `Hora local: ${hora}`;
  }

  actualizarHora();
  setInterval(actualizarHora, 1000);
})();
