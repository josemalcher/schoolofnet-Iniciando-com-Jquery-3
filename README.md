# Iniciando com Jquery 3

https://www.schoolofnet.com/curso-iniciando-com-jquery-3/

---

## <a name="indice">Índice</a>

- [Introdução](#parte1)   
- [Hello Word](#parte2)   
- [Seletores](#parte3)   
- [CSS](#parte4)   
- [Eventos](#parte5)   
- [Show, Hide, Toggle](#parte6)   
- [Animações](#parte7)   
- [Document Ready x Windows Load](#parte8)   
- [Ajax](#parte9)   

---

## <a name="parte1">Introdução</a>

- https://jquery.com/



[Voltar ao Índice](#indice)

---

## <a name="parte2">Hello Word</a>

```html
<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

    <div id=""></div>

    <script src="js/jquery-3.3.1.js"></script>
    <script src="main.js"></script>
</body>
</html>
```

```javascript
$('div').html('<h1>José Malcher</h1>');
```



[Voltar ao Índice](#indice)

---

## <a name="parte3">Seletores</a>

```
    <div id="jquery"></div>
    <div class="jquery-version-3"></div>
    <div class="jquery"></div>
    <div></div>
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
```
$('div').text('tag');
$('#jquery').text('id');
$('div[class*="jquery"]').text('class');

$('li:even').text('Inpar');
$('li:odd').text('Par');
```

```


[Voltar ao Índice](#indice)

---

## <a name="parte4">CSS</a>

```html
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
```

```js
$('ul').css({'padding':0,'margin':0, 'list-style':'none'});
$('li').text('Item impar').css('padding','10px');
$('li:even').text('Inpar').css('background','#ccc');
$('li:odd').text('Par').css({'background': '#aaa', 'color':'#fff'});
```

Refatorando/organizando
```css
    .ul{
        padding: 0;
        margin: 0;
        list-style: none;
    }
    .li-even{
        padding: 10px;
        background: #ccc;
    }
    .li-odd{
        padding: 10px;
        background: #aaa;
        color: #fff;
    }
```

```js
}); */
$('ul').addClass('ul');
$('li:even').text('Inpar').addClass('li-even');
$('li:odd').text('Par').addClass('li-odd');
```



[Voltar ao Índice](#indice)

---

## <a name="parte5">Eventos</a>

```html
 .li-hover{
        background: #fff;
        color: #000;
        border: 1px solid #000;
    }
</style>
<body>
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
```

```js
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
```


[Voltar ao Índice](#indice)

---

## <a name="parte6">Show, Hide, Toggle</a>

```js
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
```

[Voltar ao Índice](#indice)

---

## <a name="parte7">Animações</a>

```css
let  liHover = function(){
    $(this).animate({'padding':'15px'}, 'slow');
    //$(this).slideUp();
    $(this).slideToggle();
}
let liHoverOut = function(){
    $(this).animate({ 'padding': '10px' }, 'slow');
    //$(this).slideDown();
    $(this).slideToggle();
}
```

[Voltar ao Índice](#indice)

---

## <a name="parte8">Document Ready x Windows Load</a>

```html
<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<style>
</style>
    <script src="js/jquery-3.3.1.js"></script>
    <script src="ajax.js"></script>
<body>
    <ul id="menu">
<li>
    <a href="pages/home.html">Home</a>
</li>
<li>
    <a href="pages/sobre.html">Sobre Nós</a>
    </ul>
</li>
    <div id="conteudo"></div>
</body>
</html>
```

```js
$(document).ready(function(){
    $('#menu a').click(function(){
        return false;
    })
})
```

[Voltar ao Índice](#indice)

---

## <a name="parte9">Ajax</a>

```js
$(document).ready(function(){
    //Primeira forma
    $('#conteudo').load('pages/home.html');
    //segunda forma
    $('#menu a').click(function(){
        let url = $(this).attr('href');
        $.ajax({
            url:url,
            methods: 'get',
        })
        .done(function(response){
            $('#conteudo').html(response);
        });
        return false;
    })
})
```

[Voltar ao Índice](#indice)

---
