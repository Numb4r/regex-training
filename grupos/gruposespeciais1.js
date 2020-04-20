const texto = "Joao e calmo, mas no transito fica nervoso."
console.log(texto.match(/\w+/gi))

//Positive lookaheade

console.log(texto.match(/\w+(?=,)/gi))
console.log(texto.match(/\w+(?=\.)/gi))
console.log(texto.match(/\w+(?=, mas)/gi))

//Negative Lookahead

console.log(texto.match(/\w+\b(?!,)/gi))