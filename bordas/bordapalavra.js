const texto = "dia diatonico diafragma media wikipedia bom_dia melodia radial"
console.log(texto.match(/\bdia\w+/gi))
console.log(texto.match(/\w+dia\b/gi))
console.log(texto.match(/\w+dia\w+/gi))
console.log(texto.match(/\bdia\b/gi))

// borda nao e \w,que  e [^A-Za-z0-9_] -> problemas com acentos