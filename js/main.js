// 변수선언
var menuItems = $('.menu-item');
var menuLinks = $('.menu-link');
var subLinks = $('.submenu a');

//attr
subLinks.attr('class','icon-dot-circled');

//funtion
menuLinks.click(function(event){
    event.preventDefault();
    menuItems.removeClass('menu-item-act');
    $(this).parent().addClass('menu-item-act');
})