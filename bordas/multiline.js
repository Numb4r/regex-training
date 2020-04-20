const texto = `
leo e muito legal
Emanuel foi jogar em Sergipe
Bianca e casado bom habib
`
console.log(texto.match(/\n/g))
console.log(texto.match(/^(\w).*\1$/gi))
console.log(texto.match(/^(\w).*\1$/gim))