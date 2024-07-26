// Leer mensaje personalizado desde los parámetros de la URL
const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = decodeURI(messageCustom);
}

// El tutorial empieza aquí

const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');
const modalElement = document.querySelector('#modal');
const modalCloseElement = document.querySelector('#modal-close');

btnCloseElement.disabled = true;

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;
  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;
    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    // Animación del rombo
    const diamondElement = document.querySelector('.diamond');
    diamondElement.style.display = 'block';
    
    // Mostrar la ventana modal
    modalElement.style.display = 'flex';
  }, 500);
});

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');

    // Ocultar rombo
    const diamondElement = document.querySelector('.diamond');
    diamondElement.style.display = 'none';
  }, 500);
});

// Redirigir al hacer clic en el botón de la alerta
modalCloseElement.addEventListener('click', () => {
  window.location.href = 'https://fliphtml5.com/jgwsm/mehm/'; // Cambia esta URL por la que desees
});
