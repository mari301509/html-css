// 변수선언
var menuItems = $('.menu-item');
var menuLinks = $('.menu-link');
var subLinks = $('.submenu a');
var boardItem = $('.board-item')
var boardLink = $('.board-link')
var boardLinks = $('.board-act > ul > li > a');

//attr
subLinks.attr('class','icon-dot-circled');
boardLinks.attr('class','icon-dot-circled');

//funtion
menuLinks.click(function(event){
    event.preventDefault();
    menuItems.removeClass('menu-item-act');
    $(this).parent().addClass('menu-item-act');
})
boardLink.click(function(event){
    event.preventDefault();
    boardItem.removeClass('board-act');
    $(this).parent().addClass('board-act');
})