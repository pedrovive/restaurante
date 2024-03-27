$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            name: {
                required: ture
            },
            email: {
                required: true
            },
            mensagem: {
                required: true
            },
        },
        message: {
            nome: "Insira seu nome completo",
            email: "Insira um e-mail válido",
            mensagem: "Por favor escreva sua mensagem antes de enviar"
        },
        submitHandler: function (form) {
            console.log(form);
        },
        invalidHandler: function (evento, validador) {
            var camposIncorretos = validador.numberOfInvalids()
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            };
        }
    })
})