$(document).ready(function(){
    $('#carrossel').slick({
        autoplay: true,
    });


$('.menu-hamburger').click(function(){
    $('nav').slideToggle();
})
$('#telefone').mask('(00)00000-0000', {
    placeholder: '(__)_____-____'
});
    $('form').validate({
        rules: {
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            telefone:{
                required:true
            },
            veiculoDeInteresse:{
                required:false
            },
            msg:{
                required:true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome.'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    })
    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        $('html').animate({
            scrolltop: destino.offset().top
            },1000)
    })
})