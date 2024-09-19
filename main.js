const coverElement = document.querySelector('.cover');
const paperElement = document.querySelector('.paper');
const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');
const modalElement = document.querySelector('#modal');
const modalCloseElement = document.querySelector('#modal-close');
const diamondElement = document.querySelector('.diamond');
const music = document.querySelector('#music');  // Seleccionamos el elemento de audio

// Deshabilitar botón de cerrar al inicio
btnCloseElement.disabled = true;

// Evento para abrir la carta y reproducir música
btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;
  
  // Abrir la tapa
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    // Animación del rombo
    diamondElement.style.display = 'block';

    // Reproducir la música
    music.play();
    
    // Mostrar la ventana modal
    modalElement.style.display = 'flex';
  }, 500);
});

// Evento para cerrar la carta y detener la música
btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  // Cerrar el contenido de la carta
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');

    // Ocultar rombo
    diamondElement.style.display = 'none';

    // Detener la música y reiniciarla al inicio
    music.pause();
    music.currentTime = 0;
    
    // Ocultar la ventana modal
    modalElement.style.display = 'none';
  }, 500);
});

// Redirigir al hacer clic en el botón del modal
modalCloseElement.addEventListener('click', () => {
  window.location.href = 'https://fliphtml5.com/jgwsm/mehm/'; // Cambia esta URL por la que desees
});
