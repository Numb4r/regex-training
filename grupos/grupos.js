const texto1 = "O jose Simao e muito engracado... hehehehehehe"

console.log(texto1.match(/(he)+/g))

const texto2 = "http://www.site.info www.escola.ninja.br google.com.ag"

console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w+)?/g))