const inputNumero1 = document.getElementById("n1");
const inputNumero2 = document.getElementById("n2");
const maior = document.getElementById("answer");

function maiorOuMenor() {
    let n1 = Number(inputNumero1.value);
    let n2 = Number(inputNumero2.value);
    let answer = maior;

    if (n1 > n2) {
        answer = n1 + " é o número maior";
    } else if (n1 < n2) {
        answer = n2 + " é o número maior";
    } else {
        answer = "Os números são iguais"
    }

    maior.innerText = answer;
}