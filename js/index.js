// Menu fixado quando a pagina ser scrollada
window.addEventListener("scroll", function () {
    let menu = document.getElementById("menu");
    let posicaoScroll = window.scrollY || document.documentElement.scrollTop;

    if (window.innerWidth >= 1024) {
        if(posicaoScroll > 100) {
            menu.classList.add("fixado");
        } else {
            menu.classList.remove("fixado");
        }
    } else {
        menu.classList.remove("fixado");
    }

});

// Adição e remoção da class "ativo" que esconde e aparece a navbar
const menu = document.querySelector(".cabecalho");
const hamburguer = document.querySelector(".hamburguer");
const botaoFecha = document.querySelector(".cabecalho-banner-nav-btn");

hamburguer.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

botaoFecha.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});

// Toggle button para mostrar e esconder informações de horario de funcionamento
const horarioBtn = document.querySelector("#informacoes-horario");

horarioBtn.addEventListener("click", () => {
    horarioBtn.classList.toggle("informacao-ativa");
});