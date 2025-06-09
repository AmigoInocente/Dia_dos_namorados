const heartCreate = () => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerText = '❤️';

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 2 + 3) + 's';

  document.body.appendChild(heart);

  // Remove o coração após a animação terminar
  setTimeout(() => {
    heart.remove();
  }, 5000); // 5 segundos (duração máxima da animação)
};

setInterval(heartCreate, 300);
