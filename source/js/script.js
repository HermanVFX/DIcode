// Menu-mobile
const body = document.querySelector('.page-body');
const menuBtn = document.querySelector('.open-menu');
const menu = document.querySelector('.header__block');
const menuItemBtn = document.querySelectorAll('.menuItem');
const logo = document.querySelector('.logo-menu');

const openMenu = function () {
    if (menu.classList.contains('header__block--close')) {
        menu.classList.remove('header__block--close');
        body.classList.add('overflow');
        menuBtn.classList.add('open-menu--open');
    } else {
        menu.classList.add('header__block--close');
        body.classList.remove('overflow');
        menuBtn.classList.remove('open-menu--open');
    }
}

menuBtn.addEventListener('click',openMenu);
logo.addEventListener('click',openMenu);
menuItemBtn.forEach(function (entry) {
    entry.addEventListener('click', function () {
        openMenu();
      return;
    });
  });
// Animation
const animItems = document.querySelectorAll('.__anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('__active');
            } else {
                if (!animItem.classList.contains('__anim-items-no-repeat')) {
                    animItem.classList.remove('__active');
                }
            }            
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);    
}
// Upbutton
(function() {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -8000);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.back_to_top');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();