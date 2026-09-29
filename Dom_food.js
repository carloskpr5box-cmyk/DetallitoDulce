

document.addEventListener('DOMContentLoaded', () => {
    const bloqueDerechos = document.querySelector('.derechos');
    if (!bloqueDerechos) return;

    const parrafo = bloqueDerechos.querySelector('.footer_titulo');
    if (!parrafo) return;

    const anioActual = new Date().getFullYear();
    parrafo.textContent = parrafo.textContent.replace(/\d{4}/, anioActual);
});
/* ===========================================================================
   MENU.JS — Menú desplegable de Detallito Dulce (JavaScript DOM)
   ---------------------------------------------------------------------------
   Requiere en el HTML:
   - Un botón con el atributo data-menu-toggle y aria-expanded="false"
   - Un <nav> (o contenedor) con el atributo data-menu-nav
   - Los enlaces del menú con la clase "header__nav-link"
   - En el CSS: la clase "header__nav--abierto" que hace visible el menú
     (ver la demo en HTML que te compartí para ese CSS)

   Cárgalo al final del <body> con:
   <script src="menu.js"></script>
   =========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  inicializarMenuDesplegable();
});

function inicializarMenuDesplegable() {
  // 1) Buscamos en el DOM el botón y el menú por sus atributos data-*
  var boton = document.querySelector('[data-menu-toggle]');
  var nav = document.querySelector('[data-menu-nav]');

  if (!boton || !nav) return; // si no existen en esta página, no hacemos nada

  function abrirMenu() {
    // classList.add: agrega la clase que muestra/desliza el panel (vía CSS)
    nav.classList.add('header__nav--abierto');
    // setAttribute: para lectores de pantalla, indica que el menú está abierto
    boton.setAttribute('aria-expanded', 'true');
  }

  function cerrarMenu() {
    // classList.remove: quita la clase, el panel vuelve a ocultarse
    nav.classList.remove('header__nav--abierto');
    boton.setAttribute('aria-expanded', 'false');
  }

  // 2) Al hacer clic en el botón, alternamos entre abrir y cerrar
  boton.addEventListener('click', function () {
    var estaAbierto = boton.getAttribute('aria-expanded') === 'true';
    if (estaAbierto) {
      cerrarMenu();
    } else {
      abrirMenu();
    }
  });

  // 3) Si el usuario toca un enlace del menú, lo cerramos automáticamente
  nav.querySelectorAll('.header__nav-link').forEach(function (enlace) {
    enlace.addEventListener('click', cerrarMenu);
  });

  // 4) Si presiona la tecla Escape, también se cierra
  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape') cerrarMenu();
  });
}