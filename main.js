let  liHover = function(){
    //$(this).addClass('li-hover');
    //$(this).hide('slow');
    //$(this).hide();
    //$(this).hide(1000);
    //$(this).toggle('slow');
    //$(this).show();
    $(this).animate({'padding':'15px'}, 'slow');
    //$(this).slideUp();
    $(this).slideToggle();
}
let liHoverOut = function(){
    //$(this).removeClass('li-hover');
    $(this).animate({ 'padding': '10px' }, 'slow');
    //$(this).slideDown();
    $(this).slideToggle();
}
let liClick = function () {
    alert($(this).text());
}

$('ul').addClass('ul');

$('li').hover(liHover, liHoverOut).click(liClick);

$('li:even').text('Inpar').addClass('li-even');
$('li:odd').text('Par').addClass('li-odd');
$('ul').addClass('ul').append('<li>Adicionado Dinamicamente</li>');