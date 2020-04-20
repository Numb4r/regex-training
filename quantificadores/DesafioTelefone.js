const telefones = "(11) 98756-1212 (38) 99155-4839 9999-9999"
console.log(telefones.match(/\(?\d{0,3}\)?\s?\d{4,5}-\d{4}/g))