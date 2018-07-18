/* $('ul').css({
    'padding': 0,
    'margin': 0,
    'list-style': 'none'
});
$('li').text('Item impar').css('padding', '10px');
$('li:even').text('Inpar').css('background', '#ccc');
$('li:odd').text('Par').css({
    'background': '#aaa',
    'color': '#fff'
}); */
let  liHover = function(){
    $(this).addClass('li-hover');
}
let liHoverOut = function(){
    $(this).removeClass('li-hover');
}
$('ul').addClass('ul');
/* 
$('li').hover(liHover,liHoverOut).click(function(){
    alert($(this).text());
});
 */
$('li').on('click', function(){
    alert($(this).text());
})

/* $('body').on('click', 'li', function(){
    alert($(this).text());
} ) */

$('li:even').text('Inpar').addClass('li-even');
$('li:odd').text('Par').addClass('li-odd');
$('ul').addClass('ul').append('<li>Adicionado Dinamicamente</li>');