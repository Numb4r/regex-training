const texto = "Romario era um excelente jogador\n, mas hoje e um politico questionador"
console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi))//inicio de linha
console.log(texto.match(/r$/gi))//fim de linha
console.log(texto.match(/^r.*r$/gi))//dotall
