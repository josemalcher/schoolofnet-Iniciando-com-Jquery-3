let  liHover = function(){
    //$(this).addClass('li-hover');
    //$(this).hide('slow');
    //$(this).hide();
    //$(this).hide(1000);
    $(this).toggle('slow');
    //$(this).show();
}
let liHoverOut = function(){
    $(this).removeClass('li-hover');
}
let liClick = function () {
    alert($(this).text());
}

$('ul').addClass('ul');

$('li').hover(liHover, liHoverOut).click(liClick);

$('li:even').text('Inpar').addClass('li-even');
$('li:odd').text('Par').addClass('li-odd');
$('ul').addClass('ul').append('<li>Adicionado Dinamicamente</li>');