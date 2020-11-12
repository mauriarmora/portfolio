const banner = document.querySelector('.presentation');

function makeSmaller(e) {
  const bannerText = e.currentTarget.querySelectorAll('h1, h4');
  e.currentTarget.style.transition = '0.4s';
  e.currentTarget.style.transform = 'scale(0.9)';
}

function makeBigger(e) {
  if (e.currentTarget.style.transform === 'scale(1)') {return}
  e.currentTarget.style.transition = '0.15s';
  e.currentTarget.style.transform = 'scale(1.2)';
}

function originalSize(e) {
  e.currentTarget.style.transition = '0.7s';
  e.currentTarget.style.transform = 'scale(1)';
}

banner.addEventListener('mouseenter', makeSmaller);
banner.addEventListener('transitionend', makeBigger);
banner.addEventListener('mouseleave', originalSize);
