function showInfo(cardId) {
    // Transforma o cardId em string
    var myString = cardId.toString();

    // Concatena o prefixo 'myModal-' com o número do cardId convertido para string
    var modalId = 'myModal-' + myString;

    // Seleciona o modal e o fundo do modal pelo ID
    const modal = document.getElementById(modalId);
    const modalBg = document.getElementById('modalBg');

    // Verifica se o modal existe antes de tentar exibir
    if (modal) {
        modal.style.display = 'block';
        modalBg.style.display = 'block';
    }
}
function closeModal(cardId) {
    // Transforma o cardId em string
    var myString = cardId.toString();

    // Concatena o prefixo 'myModal-' com o número do cardId convertido para string
    var modalId = 'myModal-' + myString;

    // Seleciona o modal e o fundo do modal pelo ID
    const modal = document.getElementById(modalId);
    const modalBg = document.getElementById('modalBg');


    modal.style.display = 'none';
    modalBg.style.display = 'none';

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