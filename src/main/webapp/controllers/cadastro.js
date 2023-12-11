$(document).ready(function () {
    let linhas = [
        {
            label: "Nenhuma Linha Cadastrada",
            value: 0,
        }
    ];

    $.ajax({
        url: "/projeto-web/linhas",
        method: "GET",
        dataType: "json",
        success: function (data) {
            linhas = [];
            data.forEach(function(onibus, index) {
                linhas.push({label: onibus.linha, value: index, pontos: onibus.pontos});
            });

            updateSelect(linhas);
        }
    });

    let erroPonto1 = document.getElementById('erro-ponto1'),
        erroPonto2 = document.getElementById('erro-ponto2'),
        erroPonto3 = document.getElementById('erro-ponto3'),
        erroPonto4 = document.getElementById('erro-ponto4'),
        erroPonto5 = document.getElementById('erro-ponto5'),
        erroPonto6 = document.getElementById('erro-ponto6')

    let letter_only = /[^a-z]/;
    let textLength = 5;

    const elementsWrapper = [
        {
            input: 'ponto1',
            error: erroPonto1
        },
        {
            input: 'ponto2',
            error: erroPonto2
        },
        {
            input: 'ponto3',
            error: erroPonto3
        },
        {
            input: 'ponto4',
            error: erroPonto4
        },
        {
            input: 'ponto5',
            error: erroPonto5
        },
        {
            input: 'ponto6',
            error: erroPonto6
        }
    ]

    elementsWrapper.forEach((el) => {
        $('#' + el.input).keyup(function() {
        let element = $(this);
        let replaced;

            if(letter_only.test(element.val())){
                letterOnlyErrMsg(el.error)
            } else if(element.val().length < textLength ){
                textLengthErrMsg(el.error)
            }

        replaced = element.val().replace(letter_only, '')
        element.val(replaced)
        })
        $('#' + el.input).focusout(function() {
            removeErrMsg(el.error)
        })
    });


    const letterOnlyErrMsg = (erroID) => {
        $(erroID).fadeIn('slow', function () {
            $(this).html('O input aceita apenas letras.')
        })
    }

    const textLengthErrMsg = (erroID) => {
        $(erroID).fadeIn('slow', function () {
            $(this).html('O input requer pelo menos 5 letras.')
        })
    }

    const removeErrMsg = (erroID) => {
        $(erroID).fadeOut(1000, function () {
            $(this).html('')
        })
    }

    $('#form').submit(function (event) {
        event.preventDefault();

        $.ajax({
            type: "POST",
            url: "/projeto-web/linhas",
            data: $(this).serialize(),
            success: function () {
            },
            error: function () {
            }
        });
    });

});

function updateSelect(options) {
    const linhasSelect = document.getElementById('linhas');
    options.forEach(function (linha) {
        const option = document.createElement('option');
        option.value = linha.value;
        option.text = linha.label;
        option.dataset.pontos = linha.pontos;
        linhasSelect.appendChild(option);
    });
}

function updatePontos(pontos){
    var pontosArray = pontos.split(',');

    $("#ponto1").val(pontosArray[0] || '');
    $("#ponto2").val(pontosArray[1] || '');
    $("#ponto3").val(pontosArray[2] || '');
    $("#ponto4").val(pontosArray[3] || '');
    $("#ponto5").val(pontosArray[4] || '');
    $("#ponto6").val(pontosArray[5] || '');
}

$(document).ready(function () {
    $('#linhas').on('change', function () {
        var pontos = $(this).find(':selected').data('pontos');
        updatePontos(pontos);
    });
});



var abrirSubmenu = 1;
function acaoSubmenu() {
    var element = document.getElementById("submenu");
    if (abrirSubmenu == 1) {
        element.classList.remove("submenu-closed");
        element.classList.add("submenu-open");
    } else {
        element.classList.remove("submenu-open");
        element.classList.add("submenu-closed");
    }
    abrirSubmenu = !abrirSubmenu
}