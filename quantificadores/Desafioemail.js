const emails = "yuridimitre@hotmail.com 2u_d@com.com yuri.d.d.faria@gmail.com yuridimitre@protonmail.com.br"
console.log(emails.match(/[\w.]+@[\w]+\.\w{2,4}\.?\w{0,2}/g))

