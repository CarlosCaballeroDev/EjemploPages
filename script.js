 const images = document.querySelectorAll('.carrusel-inner img');
  const inner = document.querySelector('.carrusel-inner');
  let current = 0;

  function showNextImage() {
    const prev = current;
    images[prev].classList.remove('active');
    images[prev].classList.add('prev');

    current = (current + 1) % images.length;
    images[current].classList.add('active');

    inner.style.transform = `translateX(-${current * 100}%)`;

    setTimeout(() => {
      images[prev].classList.remove('prev');
    }, 1000);
  }

  images[current].classList.add('active');
  setInterval(showNextImage, 4000);

  const frases = [
  "Este carrusel muestra imágenes que se deslizan desde abajo.",
  "Se adapta a cualquier tamaño de pantalla.",
  "Sharon y sus amigos esperan ser adoptados 🐾.",
  "Descubre historias conmovedoras de nuestros perros.",
  "Únete a nuestra comunidad y ayuda a salvar vidas."
];

const texto = document.getElementById("texto-dinamico");
let indice = 0;

function cambiarFrase() {
  // fade out
  texto.style.opacity = 0;

  setTimeout(() => {
    // cambiar texto
    texto.textContent = frases[indice];
    // fade in
    texto.style.opacity = 1;

    // siguiente frase
    indice = (indice + 1) % frases.length;
  }, 500); // tiempo de fade out
}

// iniciar efecto cada 3 segundos
setInterval(cambiarFrase, 3000);

// efecto inicial
texto.style.transition = "opacity 0.5s ease";
texto.style.opacity = 1;
