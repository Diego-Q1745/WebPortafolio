'use strict';

const movimientoReducido = matchMedia('(prefers-reduced-motion: reduce)');
const elementos = [...document.querySelectorAll('[data-aparece]')];
const titulos = [...document.querySelectorAll('.titulo-seccion')];
let observadorEntradas;
let observadorTitulos;
const mostrados = new Set();

function mostrar(elemento) {
  elemento.classList.remove('pendiente');
  observadorEntradas?.unobserve(elemento);
  mostrados.add(elemento);
}

function ajustarEfectos() {
  observadorEntradas?.disconnect();
  observadorTitulos?.disconnect();

  titulos.forEach((titulo) => titulo.classList.remove('con-degradado', 'en-pantalla'));

  if (movimientoReducido.matches || !('IntersectionObserver' in window)) {
    elementos.forEach(mostrar);
    return;
  }

  observadorEntradas = new IntersectionObserver((entradas) => {
    let pausa = 0;
    entradas.forEach(({ isIntersecting, target }) => {
      if (!isIntersecting) return;
      target.style.setProperty('--pausa-entrada', pausa + 'ms');
      mostrar(target);
      pausa += 55;
    });
  });

  elementos.forEach((elemento) => {
    if (mostrados.has(elemento)) return;

    // El contenido visible al cargar aparece de inmediato.
    if (elemento.getBoundingClientRect().top <= innerHeight) {
      mostrar(elemento);
    } else {
      elemento.classList.add('aparece', 'pendiente');
      observadorEntradas.observe(elemento);
    }
  });

  observadorTitulos = new IntersectionObserver((entradas) => {
    entradas.forEach(({ isIntersecting, target }) => {
      target.classList.toggle('en-pantalla', isIntersecting);
    });
  });

  titulos.forEach((titulo) => {
    titulo.classList.add('con-degradado');
    observadorTitulos.observe(titulo);
  });
}

// El foco de teclado muestra una tarjeta sin esperar al scroll.
elementos.forEach((elemento) => {
  elemento.addEventListener('focusin', () => mostrar(elemento));
});

movimientoReducido.addEventListener('change', ajustarEfectos);
ajustarEfectos();
