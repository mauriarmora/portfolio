// import './banner.js'
// import './slide-in.js'

const banner = document.querySelector('.presentation');

function makeSmaller(e) {
  const bannerText = e.currentTarget.querySelectorAll('h1, h4');
  e.currentTarget.style.transition = '0.4s';
  e.currentTarget.style.transform = 'scale(0.9)';
}

function makeBigger(e) {
  if (e.currentTarget.style.transform === 'scale(1)') {return}
  e.currentTarget.style.transition = 'all 0.3s cubic-bezier(0.25, 0.5, 0.3, 2) 0s';
  e.currentTarget.style.transform = 'scale(1.2)';
}

function originalSize(e) {
  e.currentTarget.style.transition = '0.7s';
  e.currentTarget.style.transform = 'scale(1)';
}

banner.addEventListener('mouseenter', makeSmaller);
banner.addEventListener('transitionend', makeBigger);
banner.addEventListener('mouseleave', originalSize);


const slideIn = document.querySelectorAll('.slide-in');

function debounce(func, wait = 15, immediate = true) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function checkSlide(e) {
  slideIn.forEach(slider => {
    const slideInAt = (window.scrollY + window.innerHeight) - slider.clientHeight / 3

    if (slideInAt > slider.offsetTop) {
      slider.classList.add('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
