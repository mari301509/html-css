// 변수선언
var menuItems = $('.menu-item');
var menuLinks = $('.menu-link');
var subLinks = $('.submenu a');
var boardItem2 = $('.board-item')
var boardLink2 = $('.board-link')
var boardLinks2 = $('.board-item > ul > li > a');
var boardItem = $('.board-item')
var boardLink = $('.')
var boardLinks = $('.board-act > ul > li > a > span');

//attr
subLinks.attr('class','icon-dot-circled');
boardLinks2.attr('class','icon-dot-circled');
boardLinks.attr('class','icon-dot-circled');

//funtion
menuLinks.click(function(event){
    event.preventDefault();
    menuItems.removeClass('menu-item-act');
    $(this).parent().addClass('menu-item-act');
})
boardLink2.click(function(event){
    event.preventDefault();
    boardItem2.removeClass('board-act');
    $(this).parent().addClass('board-act');
})