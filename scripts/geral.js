function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

console.log("geral:", getRandomArbitrary(5,15))