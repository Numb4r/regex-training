/*
.   -> caracter qualquer
[]  -> conjunto de caracteres permitidos
[^] -> conjunto de caracteres proibidos

Quantificadores
?   -> Opcional (Zero ou um)
*   -> Zero ou mais
+   -> Um ou mais
{n,m}->de n ate m

Ancoras
^   -> Inicio de linha
$   -> Fim de linha
\b  -> Inicio ou fim de palavra

Outros
\   ->Uso de metacaracteres como literal
|   -> Operacao OR
{}  -> Define grupo
\1...\q -> Resgata grupo ja definidos
*/

const texto = "1,2,3,4,5,6,a.b c!d?e"
const regexPronto = /\./g
const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexPronto))
console.log(texto.split(regexSimbolos))
