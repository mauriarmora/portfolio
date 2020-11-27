// export const slideIn = document.querySelectorAll('.slide-in');

// function debounce(func, wait = 15, immediate = true) {
//   let timeout;
//   return function() {
//     let context = this, args = arguments;
//     let later = function() {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     let callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }

// function checkSlide(e) {
//   slideIn.forEach(slider => {
//     const slideInAt = (window.scrollY + window.innerHeight) - slider.clientHeight / 3

//     if (slideInAt > slider.offsetTop) {
//       console.log(slider);
//       slider.classList.add('active');
//     }
//   });
// }

// window.addEventListener('scroll', debounce(checkSlide));
