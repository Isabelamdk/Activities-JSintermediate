const inputValorMinimo = document.getElementById("minimo");
const inputValorMaximo = document.getElementById("maximo");
const paragrafoErro = document.getElementById("erro");
const paragrafoResposta = document.getElementById("resposta");

function getRandomNumber() {
    let valorMinimo = Number(inputValorMinimo.value);
    let valorMaximo = Number(inputValorMaximo.value);

    limparCampos();

    if (valorMinimo > valorMaximo) {
        paragrafoErro.innerText = "O valor mínimo é maior que o valor máximo";
        return;
    } else if (valorMinimo == valorMaximo) {
        paragrafoErro.innerText = "Os valores são iguais";
        return;
    }
    paragrafoResposta.innerText = getRandomArbitrary(valorMinimo, valorMaximo);

}

function limparCampos() {
    paragrafoErro.innerText = "";
    paragrafoResposta.innerText = "";
}
console.log("jogo3:", getRandomArbitrary(5,15))