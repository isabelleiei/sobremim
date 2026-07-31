const botao = document.getElementById("tema");

// Verifica se já existe um tema salvo
if (localStorage.getItem("tema") === "escuro") {
    document.body.classList.add("dark");
    botao.textContent = "☀️ Modo Claro";
}

botao.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        botao.textContent = "☀️ Modo Claro";
        localStorage.setItem("tema", "escuro");
    } else {
        botao.textContent = "🌙 Modo Escuro";
        localStorage.setItem("tema", "claro");
    }

});

//curiosidades

const curiosidades = [
    "Amo tirar fotos.",
    "Amo fazer e comer brownie.",
    "Adoro assisitr series de comedia.",
    "Gosto de ouvir MPB e Pop.",
    "Gosto de jogar jogos de construção e decoração.",
    "Também gosto de filmar.",
    "Sou uma pessoa muito criativa.",
    "Gosto de fazer receitas que vejo na internet."
];

const botaoCuriosidade = document.getElementById("btnCuriosidade");
const texto = document.getElementById("curiosidade");

botaoCuriosidade.addEventListener("click", function () {

    const numero = Math.floor(Math.random() * curiosidades.length);

    texto.textContent = curiosidades[numero];

});