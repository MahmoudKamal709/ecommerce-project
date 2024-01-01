//copy menu for mobile
function copyMenu() {
    //copy inside dpt-cat to departments
    var depCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = depCategory.innerHTML;
    //copy inside nav to nav 
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav');
    navPlace.innerHTML = mainNav.innerHTML;
    //copy .header-top .wrapper to .the top-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

// show mobile menu
const menuButton = document.querySelector('.trigger'),
      closeButton = document.querySelector('.t-close'),
      addClass = document.querySelector('.site');
menuButton.addEventListener('click' , function () {
    addClass.classList.toggle('showmenu')
})
closeButton.addEventListener('click' , function () {
    addClass.classList.remove('showmenu')
})
// show sub menu on mobile 
const subMenu = document.querySelectorAll(".has-chlid .icon-small");
subMenu.forEach((menu) => menu.addEventListener('click',toggle));
function toggle(e) {
    e.preventDefault();
    subMenu.forEach((item) => item != this ? item.closest('.has-chlid').classList.remove('expand') : null);
    if (this.closest('.has-chlid').classList != 'expand');
    this.closest('.has-chlid').classList.toggle('expand')
}

// slider 
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });