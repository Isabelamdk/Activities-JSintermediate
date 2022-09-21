let number;
const inputNumeroDigitado = document.getElementById("numeroDigitado");
const paragrafoDica = document.getElementById("dica")

function generateRandomNumber() {
    number = getRandomArbitrary(1, 5);
    console.log(number);
    toggleHideElement("botaoSorteio");
    toggleHideElement("tentarAdivinhar");
    inputNumeroDigitado.value = "";
    if (!document.getElementById("voceErrou").className.includes("ocultar")) {
        toggleHideElement("voceErrou");
    }
}

function toggleHideElement(idElement) {
    document.getElementById(idElement).classList.toggle("ocultar");
    document.getElementById(idElement).class
}

function tentarAdivinhar() {
    const numeroDigitado = Number(inputNumeroDigitado.value);

    if (numeroDigitado == number) {
        toggleHideElement("voceGanhou");
        toggleHideElement("tentarAdivinhar");
    } else {
        if (document.getElementById("voceErrou").className.includes("ocultar")) {
            toggleHideElement("voceErrou")
        }
        if (numeroDigitado > number) {
            paragrafoDica.innerText = "O número é menor"
        } else {
            paragrafoDica.innerText = "O número é maior"
        }
    }
}

function jogarNovamente() {
    toggleHideElement("voceGanhou");
    toggleHideElement("botaoSorteio");
}