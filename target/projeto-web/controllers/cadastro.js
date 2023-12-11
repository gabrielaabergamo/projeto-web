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
            updatePontos(linhas[0].pontos.join(', '));
            updateErros();
                 
        }
    });
    

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

    $('#linhas').on('change', function () {
        let pontos = $(this).find(':selected').data('pontos');
        updatePontos(pontos);
    });

});

function updateSelect(options) {
    const linhasSelect = document.getElementById('linhas');
    options.forEach(linha => {
        const option = document.createElement('option');
        option.value = linha.value;
        option.text = linha.label;
        option.dataset.pontos = linha.pontos;
        linhasSelect.appendChild(option);
    });
}

function updatePontos(pontos){
    let pontosArray = pontos.split(',');

    let inputWrappers = document.querySelectorAll('.input-wrapper');
    let errors = document.querySelectorAll('.erro');

    inputWrappers.forEach(inputWrapper => {
        inputWrapper.remove();
    });

    errors.forEach(erro => {
        erro.remove()
    })

    pontosArray.forEach((ponto, index) => {
        createInputElement(ponto, index);
        
    });
}

function updateErros() {
    let elementsWrapper =[];
    for (let i = 0; i < 10; i++) {
        if (document.getElementById("erro-ponto" + i)) {

            elementsWrapper.push({ input: "ponto" + i, error: document.getElementById("erro-ponto" + i) });
        }
    }

    let pattern = /[^a-zA-Z0-9\s]/;
    let textLength = 5;
    elementsWrapper.forEach((el) => {
        $('#' + el.input).keyup(function () {
            let element = $(this);
            let replaced;

            if (pattern.test(element.val())) {
                letterOnlyErrMsg(el.error)
            } else if (element.val().length < textLength) {
                textLengthErrMsg(el.error)
            }

            replaced = element.val().replace(pattern, '')
            element.val(replaced)
        })
        $('#' + el.input).focusout(function () {
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
}

function createInputElement(ponto, index) {
    if(index === 0){
        let numDeInputs = document.getElementsByClassName("input-wrapper").length;
        if(numDeInputs > 10){
            $(".add-button").hide();
        } else {
            $(".add-button").show();
        }
        index = numDeInputs;
    }
    

    let form = document.getElementById('form');
    let button = document.getElementById('add-button');

    let inputWrapper = document.createElement('div');
    inputWrapper.classList.add('input-wrapper');

    let label = document.createElement('label');
    label.setAttribute('for', 'ponto' + (index + 1));
    label.classList.add('label');
    label.textContent = 'Ponto ' + (index + 1) + ':';

    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'ponto' + (index + 1));
    input.classList.add('input');
    input.setAttribute('required', 'true');
    input.setAttribute('minlength', '5');
    input.value = ponto;

    let erro = document.createElement('div');
    erro.setAttribute('id', 'erro-ponto' + (index + 1));
    erro.classList.add('erro');

    inputWrapper.appendChild(label);
    inputWrapper.appendChild(input);

    form.insertBefore(inputWrapper, button);
    form.insertBefore(erro, button);
    updateErros();
}

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