$(document).ready(function () {
    let regioes = [
        {
            label: "Todas Regiões",
            value: "todas",
        },
        {
            label: "Norte",
            value: "norte",
        },
        {
            label: "Sul",
            value: "sul",
        },
        {
            label: "Leste",
            value: "leste",
        },
        {
            label: "Oeste",
            value: "oeste",
        },
        {
            label: "Centro",
            value: "centro",
        }
    ];

    let linhas = [
        {
            label: "Nenhuma Linha Encontrada",
            value: 0,
        }
    ];

    const regioesSelect = document.getElementById('regioes');
    regioes.forEach(regiao => {
        const option = document.createElement('option');
        option.value = regiao.value;
        option.text = regiao.label;
        regioesSelect.appendChild(option);
    });

    $.ajax({
        url: "/projeto-web/linhas",
        method: "GET",
        dataType: "json",
        success: function (data) {
            linhas = [];
            data.forEach(function (onibus, index) {
                linhas.push({ label: onibus.linha, value: index, pontos: onibus.pontos, regiao: onibus.regiao });
            });

            updateSelect(linhas);

        }
    });

    $("#regioes").on('change', function () {
        let onibus_options = document.querySelectorAll('.onibus_option');
        onibus_options.forEach(onibusOption => {
            onibusOption.remove();
        });
        
        updateSelect(linhas);
    });

    $("#onibus").on('change', function () {
        let pontos = $(this).find(':selected').data('pontos');
        updatePontos(pontos);
    });
});

function updateSelect(options) {
    const onibusSelect = document.getElementById('onibus');
    const selectedRegiao = $("#regioes").val();

    options.forEach(onibus => {
        if(selectedRegiao === "todas" ||onibus.regiao.toLowerCase() === selectedRegiao){
            const option = document.createElement('option');
            option.classList.add('onibus_option');
            option.value = onibus.value;
            option.text = onibus.label;
            option.dataset.pontos = onibus.pontos;
            onibusSelect.appendChild(option);
        }
    });

    let onibus_options = document.querySelectorAll('.onibus_option');
    if (onibus_options.length === 0) {
        const option = document.createElement('option');
        option.classList.add('onibus_option');
        option.value = 0;
        option.text = "Nenhuma Linha Encontrada";
        option.dataset.pontos = "Nenhuma Linha Selecionada";
        onibusSelect.appendChild(option);
    }

    onibus_options = document.querySelectorAll('.onibus_option');
    updatePontos(onibus_options[0].dataset.pontos);
}

function updatePontos(pontos) {
    let pontosArray = pontos.split(',');

    let listaPontos = document.getElementById('pontos');
    let pontosElments = document.querySelectorAll('.ponto');

    pontosElments.forEach(ponto => {
        ponto.remove();
    });


    pontosArray.forEach(ponto => {
        let liElement = document.createElement('li');
        liElement.classList.add('ponto');
        liElement.textContent = ponto;

        listaPontos.appendChild(liElement);
    });
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