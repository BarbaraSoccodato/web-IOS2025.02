let login = prompt("Inserir seu email:")
let senha = prompt("Inserir senha:")

let loginCerto = "juninhoplay@email.com"
let senhaCerta = "1234567bs"

// Validar se o login é o login certo e a senha também é certa
if (login == loginCerto && senha == senhaCerta) {
    alert("credencial validada.")

    alert("Opção 1: crédito \n Opção 2: consignado \n Opção 3: Empréstimo \n Opção 4: Renegociar \n opção 0: Falar com atendente")

    // Prompt vai dentro de Number porque queremos opções com número, ou seja, é feita uma conversão para Number
    let opcao = Number(prompt("Escolha a opção"))

    switch (opcao) {
        case 1:
            alert("Você selecionou crédito. Redirecionando para o setor desejado")
            break;
   
        case 2:
            alert("Você selecionou consignado. Redirecionando para o setor desejado")
            break;
   
        case 3:
            alert("Você selecionou Empréstimo. Redirecionando para o setor desejado")
            break;
   
        case 4:
            alert("Você selecionou Renegociar. Redirecionando para o setor desejado")
            break;
   
        case 0:
            alert("Você selecionou Falar com atendente. Redirecionando para o setor desejado")
            break;
   
    
        default:
            alert ("nenhuma opção acima foi inserida")
            break;
    }
}

// Se o login ou a senha que o usuario inseriu não forem iguais a que temos, ele não pode fazer login no aplicativo
else{
    alert("Login ou senhas incorretos!")
}