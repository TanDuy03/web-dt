function debounceFn(func, wait, immediate) {
    let timeout;
    return function () {
      let context = this,
        args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
}

//Scroll Header

const header = document.querySelector('.header');
const headerHeight = header && header.offsetHeight;
window.addEventListener("scroll", 
  debounceFn(function(e) {
      const scrollY = window.pageYOffset;
      if(scrollY >= headerHeight + 30){
          header && header.classList.add("header-fixed");
          document.body.style.paddingTop = `${headerHeight}px`;
        }else{
          header && header.classList.remove("header-fixed");
          document.body.style.paddingTop = 0;
      }
  }, 100)
);
