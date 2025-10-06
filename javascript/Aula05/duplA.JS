let querSorvete = true
let queSabor = true
let saborChocolate = false
let saborBaunilha = true
let saborMorango = false
let calda = true
let caldaCaramelo = false
let caldaChocolate = true
let caldaMorango = false
let casca = true
let cartaoDébito = true
let valorSorvete = 5.00
let valorNaConta = 10.00

if (valorSorvete == 5.00) {
    console.log("Boa tarde! Bem vindo(a)!  ");
    console.log("Boa tarde! Qual o valor da casquinha?");
    console.log("o valor é 5.00");
    console.log("Vou querer uma!");
}
if (querSorvete == true) {
    console.log("Qual sabor vai querer ?");
    console.log("Temos de chcocolate, baunilha e morango");
    console.log("Vou querer de Baunilha");

    if (queSabor == true && saborBaunilha == true || saborChocolate == true || saborMorango == true){
        
        console.log("ótima escolha!");
        console.log("Vai querer calda ?");
        console.log("Temos calda de caramelo, chococlate e morango ");
        console.log("Sim, vou querer calda de Chocolate");

        if (calda == true && caldaCaramelo == true || caldaChocolate == true || caldaMorango == true) {
            
            console.log("Vai ser com casca ou sem casca");
            console.log("Vou querer com casca");

            if (cartaoDébito== true ) {
                
                console.log("O seu pedido logo será feito");
                console.log("Qual a forma de pagamento? ");
                console.log("cartao de Débito");
            }
        }
    }
}