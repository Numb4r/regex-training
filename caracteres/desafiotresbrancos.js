const texto = "a   b"
console.log(texto.match(/a\s\s\sb|a\tb/))
//futuro
console.log(texto.match(/a\s+b|a\tb/))
console.log(texto.match(/a {3}b|a\tb/))
console.log(texto.match(/a\s{3}b|a\tb/))
