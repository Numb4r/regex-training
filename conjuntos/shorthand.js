const texto = `1,2,3,4,5,6,a.b c!d?e     -
f_g`
console.log(texto.match(/\d/g))//numeros[0-9]
console.log(texto.match(/\D/g))//nao numeros[^0-9]
console.log(texto.match(/\w/g))// [a-zA-Z099_]
console.log(texto.match(/\W/g))//  [^a-zA-Z099_]
console.log(texto.match(/\s/g))//Espaco em branco [ \t\n\r\f]
console.log(texto.match(/\S/g))//[^ \t\n\r\f]
