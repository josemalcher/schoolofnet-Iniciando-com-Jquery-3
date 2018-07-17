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
$('ul').addClass('ul');
$('li:even').text('Inpar').addClass('li-even');
$('li:odd').text('Par').addClass('li-odd');