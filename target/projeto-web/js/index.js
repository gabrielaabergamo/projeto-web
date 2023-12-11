$(document).ready(function() {
    $.ajax({
        url: "/projeto-web/linhas",
        method: "GET",
        dataType: "json",
        success: function(data) {
            // Variável para armazenar o HTML dos cards
            var cardsHTML = ''

            // Itera sobre cada objeto na lista e cria um card para cada um
            data.forEach(function(onibus) {
            cardsHTML += `
            <div class="card">
                <h2>${onibus.linha}</h2>
                <h3>${onibus.terminal}</h3>
                <p>Modelo do ônibus: ${onibus.modelo}</p>
                <p>Ônibus possui: ${onibus.caracteristicas}</p>
            </div>
            `;
            })

            $('.card-wrapper').html(cardsHTML)
        }
    })
})

var abrirSubmenu = 1;
function acaoSubmenu() {
    var element = document.getElementById("submenu");
    if(abrirSubmenu == 1){
        element.classList.remove("submenu-closed");
        element.classList.add("submenu-open");
    } else {
        element.classList.remove("submenu-open");
        element.classList.add("submenu-closed");
    }
    abrirSubmenu = !abrirSubmenu
}