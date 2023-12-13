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
    //copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top');
    var topPlace = document.querySelector('.off-canvas .thetop-nav');
    topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();