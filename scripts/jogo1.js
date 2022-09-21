    const inputNumber = document.getElementById("inputNumber");
    const answer = document.getElementById("answer");
    
    function parOuImpar() {
        const num = Number(inputNumber.value);
        let result;
    
        if (num % 2 == 0) {
            result = "É par!";
        } else {
            result = "É ímpar!";
        }
    
        answer.innerText = result;
    }