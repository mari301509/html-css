// 변수선언
var menuItems = $('.menu-item');
var menuLinks = $('.menu-link');
var subLinks = $('.submenu a');
var boardItems = $('.board li');
var sections = $('.board section');
var tab = $('.tab a');
$("body").removeClass("preload");
//attr
subLinks.attr('class','icon-dot-circled');
boardItems.attr('class','icon-dot-circled');


//funtion
menuLinks.click(function(event){
    event.preventDefault();
    menuItems.removeClass('menu-item-act');
    $(this).parent().addClass('menu-item-act');
})
tab.click(function(event){
    event.preventDefault();
    sections.removeClass('board-act');
    $(this).parent().parent().addClass('board-act');
})
