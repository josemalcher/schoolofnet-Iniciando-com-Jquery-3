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