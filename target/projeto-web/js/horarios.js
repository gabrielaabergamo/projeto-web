// Função de filtrar por número da linha e dias selecionados
function filtrarTabela() {
    const input = document.getElementById('nomeLinha').value.toUpperCase();
    const linhas = document.querySelectorAll('.horarios-table tbody tr');

    if (input.trim() === '') { // Verifica se o campo de busca está vazio
        linhas.forEach((linha) => {
            const dia = linha.children[1].innerText.toLowerCase();

            const semanaCheckbox = document.getElementById('semanaCheckbox').checked;
            const sabadoCheckbox = document.getElementById('sabadoCheckbox').checked;
            const domingoCheckbox = document.getElementById('domingoCheckbox').checked;

            const checkboxCheck = ((dia.includes('segunda') || dia.includes('terça') ||
                dia.includes('quarta') || dia.includes('quinta') ||
                dia.includes('sexta')) && semanaCheckbox) ||
                (dia.includes('sábado') && sabadoCheckbox) ||
                ((dia.includes('domingo') || dia.includes('feriado')) && domingoCheckbox);

            if (checkboxCheck) {
                linha.style.display = 'table-row';
            } else {
                linha.style.display = 'none';
            }
        });
    } else {
        linhas.forEach((linha) => {
            const numeroLinha = linha.children[0].textContent || linha.children[0].innerText;
            const dia = linha.children[1].innerText.toLowerCase();

            const semanaCheckbox = document.getElementById('semanaCheckbox').checked;
            const sabadoCheckbox = document.getElementById('sabadoCheckbox').checked;
            const domingoCheckbox = document.getElementById('domingoCheckbox').checked;

            const checkboxCheck = ((dia.includes('segunda') || dia.includes('terça') ||
                dia.includes('quarta') || dia.includes('quinta') ||
                dia.includes('sexta')) && semanaCheckbox) ||
                (dia.includes('sábado') && sabadoCheckbox) ||
                ((dia.includes('domingo') || dia.includes('feriado')) && domingoCheckbox);

            if (numeroLinha.toUpperCase() === input && checkboxCheck) {
                linha.style.display = 'table-row';
            } else {
                linha.style.display = 'none';
            }
        });
    }
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