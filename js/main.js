'use strict';

const navegacion = document.querySelector('.navegacion');
const botonMenu = document.querySelector('.menu-boton');
const listaMenu = document.querySelector('.menu-lista');
const enlacesMenu = [...listaMenu.querySelectorAll('a')];
const secciones = enlacesMenu.map((enlace) => document.querySelector(enlace.hash));
const pantallaMovil = matchMedia('(max-width: 880px)');

// El menú se puede usar incluso si JavaScript está desactivado.
function cambiarMenu(abierto) {
  botonMenu.setAttribute('aria-expanded', String(abierto));
  listaMenu.hidden = pantallaMovil.matches && !abierto;
}

function ajustarMenu() {
  const focoEnLista = listaMenu.contains(document.activeElement);
  const focoEnBoton = botonMenu === document.activeElement;
  botonMenu.hidden = !pantallaMovil.matches;
  cambiarMenu(false);

  if (pantallaMovil.matches && focoEnLista) {
    botonMenu.focus();
  } else if (!pantallaMovil.matches && focoEnBoton) {
    enlacesMenu[0].focus();
  }
}

navegacion.classList.add('navegacion-lista');
document.body.classList.add('menu-preparado');
ajustarMenu();
pantallaMovil.addEventListener('change', ajustarMenu);

botonMenu.addEventListener('click', () => {
  cambiarMenu(botonMenu.getAttribute('aria-expanded') !== 'true');
});

listaMenu.addEventListener('click', (evento) => {
  const enlace = evento.target.closest('a');
  if (!enlace || !pantallaMovil.matches) return;

  cambiarMenu(false);
  const seccion = document.querySelector(enlace.hash);
  seccion.tabIndex = -1;
  seccion.focus({ preventScroll: true });
});

document.addEventListener('click', (evento) => {
  if (!navegacion.contains(evento.target)) cambiarMenu(false);
});

document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape' && botonMenu.getAttribute('aria-expanded') === 'true') {
    cambiarMenu(false);
    botonMenu.focus();
  }
});

let actualizacionPendiente = false;

function marcarSeccion() {
  const limite = document.querySelector('.cabecera').offsetHeight + 32;
  const alturaPagina = document.documentElement.scrollHeight;
  const alFinal = scrollY > 0 && scrollY + innerHeight >= alturaPagina - 2;
  let activa = 0;

  secciones.forEach((seccion, indice) => {
    if (seccion.getBoundingClientRect().top <= limite) activa = indice;
  });

  if (alFinal) activa = secciones.length - 1;

  enlacesMenu.forEach((enlace, indice) => {
    if (indice === activa) {
      enlace.setAttribute('aria-current', 'location');
    } else {
      enlace.removeAttribute('aria-current');
    }
  });

  actualizacionPendiente = false;
}

function programarMarca() {
  if (actualizacionPendiente) return;
  actualizacionPendiente = true;
  requestAnimationFrame(marcarSeccion);
}

addEventListener('scroll', programarMarca, { passive: true });
addEventListener('resize', programarMarca);
addEventListener('load', programarMarca);
marcarSeccion();

// Los enlaces pendientes quedan en su sitio al activarlos.
document.querySelectorAll('a[href="#"][aria-disabled="true"]').forEach((enlace) => {
  enlace.addEventListener('click', (evento) => evento.preventDefault());
  enlace.addEventListener('auxclick', (evento) => evento.preventDefault());
});

const foto = document.querySelector('.retrato-foto');

if (foto.dataset.foto) {
  foto.addEventListener('load', () => {
    foto.hidden = false;
    document.querySelector('.retrato-inicial').hidden = true;
  });
  foto.src = foto.dataset.foto;
}

// Las fotos de los testimonios se muestran cuando el archivo existe.
// Si todavía no se ha añadido una foto, permanece visible la inicial.
document.querySelectorAll('.avatar-foto[data-foto]').forEach((imagen) => {
  const inicial = imagen.parentElement.querySelector('.avatar-inicial');
  imagen.addEventListener('load', () => {
    imagen.hidden = false;
    if (inicial) inicial.hidden = true;
  });
  imagen.addEventListener('error', () => {
    imagen.hidden = true;
    if (inicial) inicial.hidden = false;
  });
  imagen.src = imagen.dataset.foto;
});

// Un solo diálogo muestra el contenido de cada proyecto.
const modal = document.querySelector('#modal-proyecto');
const tituloModal = document.querySelector('#modal-titulo');
const detalleModal = document.querySelector('#modal-detalle');
const cerrarModal = modal.querySelector('button');
let botonDetallesActivo;

document.querySelectorAll('[data-detalles]').forEach((boton) => {
  boton.addEventListener('click', () => {
    const proyecto = boton.closest('.proyecto');
    tituloModal.textContent = proyecto.querySelector('h3').textContent;
    detalleModal.textContent = proyecto.querySelector('.proyecto-detalle').textContent;
    botonDetallesActivo = boton;
    modal.showModal();
  });
});

function clicFueraDelModal(evento) {
  const limites = modal.getBoundingClientRect();
  return evento.target === modal && (
    evento.clientX < limites.left || evento.clientX > limites.right ||
    evento.clientY < limites.top || evento.clientY > limites.bottom
  );
}

let pulsacionFuera = false;
modal.addEventListener('pointerdown', (evento) => {
  pulsacionFuera = clicFueraDelModal(evento);
});
modal.addEventListener('click', (evento) => {
  if (pulsacionFuera && clicFueraDelModal(evento)) modal.close();
  pulsacionFuera = false;
});

modal.addEventListener('keydown', (evento) => {
  // El botón de cierre es el único control del diálogo.
  if (evento.key === 'Tab') {
    evento.preventDefault();
    cerrarModal.focus();
  }
});

modal.addEventListener('close', () => {
  botonDetallesActivo?.focus();
});

// El servidor vuelve a validar antes de insertar.
const formulario = document.querySelector('.formulario');
const estadoFormulario = document.querySelector('#estado-formulario');
const botonEnviar = formulario.querySelector('button[type="submit"]');
const campos = [...formulario.querySelectorAll('input, textarea')];
const avisoLocal = 'Para enviar la consulta, abre el sitio desde un servidor con PHP y MySQL.';
let enviando = false;

function escribirEstado(tipo, mensaje) {
  estadoFormulario.dataset.estado = tipo;
  estadoFormulario.textContent = mensaje;
}

function errorDelCampo(campo) {
  const valor = campo.value.trim();

  if (!valor && campo.required) {
    const nombre = campo.labels[0].textContent.replace('*', '').trim();
    return 'Completa el campo «' + nombre + '».';
  }

  if (campo.validity.typeMismatch) return 'Escribe un correo electrónico válido.';
  if (valor.length > campo.maxLength) return 'Acorta el texto del campo señalado.';
  return '';
}

campos.forEach((campo) => {
  campo.addEventListener('input', () => {
    if (campo.hasAttribute('aria-invalid') && !errorDelCampo(campo)) {
      campo.removeAttribute('aria-invalid');
      campo.removeAttribute('aria-describedby');
    }
  });
});

formulario.noValidate = true;

if (location.protocol === 'file:') escribirEstado('info', avisoLocal);

formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault();
  if (enviando) return;

  let primerError;
  campos.forEach((campo) => {
    campo.removeAttribute('aria-describedby');
    const error = errorDelCampo(campo);
    if (error) {
      campo.setAttribute('aria-invalid', 'true');
      if (!primerError) primerError = { campo, error };
    } else {
      campo.removeAttribute('aria-invalid');
    }
  });

  if (primerError) {
    escribirEstado('error', primerError.error);
    primerError.campo.setAttribute('aria-describedby', estadoFormulario.id);
    primerError.campo.focus();
    return;
  }

  if (location.protocol === 'file:') {
    escribirEstado('info', avisoLocal);
    return;
  }

  const datos = new FormData(formulario);
  campos.forEach((campo) => {
    datos.set(campo.name, campo.value.trim());
    campo.readOnly = true;
  });

  enviando = true;
  botonEnviar.disabled = true;
  escribirEstado('info', 'Enviando tu consulta…');

  try {
    const respuesta = await fetch(formulario.action, {
      method: formulario.method,
      body: datos
    });
    const resultado = await respuesta.json();
    if (typeof resultado.ok !== 'boolean' || typeof resultado.msg !== 'string') {
      throw new Error('Respuesta inesperada.');
    }

    const guardado = respuesta.ok && resultado.ok;
    escribirEstado(guardado ? 'exito' : 'error', resultado.msg);
    if (guardado) formulario.reset();
  } catch {
    escribirEstado('error', 'No se pudo enviar la consulta. Vuelve a intentarlo.');
  } finally {
    enviando = false;
    botonEnviar.disabled = false;
    campos.forEach((campo) => { campo.readOnly = false; });
  }
});
