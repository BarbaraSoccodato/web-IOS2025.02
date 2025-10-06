let login = prompt("Inserir seu email:")
let loginCerto = "juninhoplay@email.com"
let senhaCerta = "1234567bs"
let senha

// Enquanto a senha que o usuário inserir for diferente da senha certa continuaremos pedindo para que ele insira a senha novamente

// Do= Faça e While = enquanto , O que da nome a estrutura dowhile, ou seja, faça enquanto.
//Dowhile executa o código uma vez antes de fazer a comparação 
do {
    senha = prompt("Inserir senha:")

    
} while (senha != senhaCerta, login != loginCerto );

//Peça a senha pelo menos uma vez , e caso o usuário não coloque a senha certa, repita o pedido