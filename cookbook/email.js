const texto = `
Os email dos convidados sao:
-  fulano@cod3r.com.br
- xico@gmail.com
- joao@empresa.info.br
-   maria_silva@registro.br
- rafa.sampaio@yahoo.com
- fulan+de+tal@escola.ninja.br
 `
console.log(texto.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/g))