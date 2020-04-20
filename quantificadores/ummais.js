const texto1 = " De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOO"
const texto2 = "There is a big fog in NYC"
//+ - > um ou mais
const regex = /fogo+/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))
const texto3 = "os numeros : 0123456789"
console.log(texto3.match(/\d/g))
console.log(texto3.match(/\d+/g))