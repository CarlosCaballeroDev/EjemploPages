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