document.addEventListener('DOMContentLoaded', function () {
  const effectText = document.querySelector('.effect-text');
  const bgImage = document.getElementById('bg-image');
  let animationStarted = false;


  function randomNum(m, n) {
    return Math.floor(Math.random() * (parseInt(n) - parseInt(m) + 1)) + parseInt(m);
  }

  function heartAnimation() {
    if (!effectText) return;

    const existingHearts = document.querySelectorAll('.tiny-heart');
    existingHearts.forEach(heart => heart.remove());

    const heartCount = (effectText.offsetWidth / 50) * 5;

    for (let i = 0; i < heartCount; i++) {
      const heartSize = randomNum(60, 120) / 10;
      const heart = document.createElement('span');
      heart.className = 'tiny-heart';
      heart.style.cssText = `
        top: ${randomNum(40, 80)}%;
        left: ${randomNum(0, 100)}%;
        width: ${heartSize}px;
        height: ${heartSize}px;
        animation-delay: -${randomNum(0, 3)}s;
        animation-duration: ${randomNum(2, 5)}s;
      `;
      effectText.appendChild(heart);
    }
  }

  effectText.addEventListener('click', function () {
    settings.particles.effect = 0.5;
      // Styling adjustments
    effectText.style.color = 'white';
    effectText.style.textShadow = '0 0 10px rgba(255, 0, 0, 0.8)';
    effectText.style.top = '100px';
    effectText.style.left = '50%';
    effectText.style.width = '100%';
    if (!animationStarted) {
      const images = [
        "cuchurruminos.jpg",
        "cuchurruminos2.jpg",
        "cuchurruminos3.jpg"
      ];
      let imageIndex = 0;

      bgImage.src = images[imageIndex];
      bgImage.style.display = 'block';

      setTimeout(() => {
        bgImage.style.opacity = '1';
        effectText.innerHTML = "Gracias por estos 9 meses";
      }, 100);



      // Image loop
      setInterval(() => {
        heartAnimation();
        imageIndex = (imageIndex + 1) % images.length;
        bgImage.style.opacity = '0';
        setTimeout(() => {
          bgImage.src = images[imageIndex];
          bgImage.style.opacity = '1';
        }, 1500); // Match your CSS transition
      }, 5000);



      animationStarted = true;
    }
  });
});

