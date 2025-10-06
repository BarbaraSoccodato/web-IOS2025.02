let credencial = "PJ"


if (credencial == "visitante") {
   console.log("Você só pode ir onde o seu anfitrião for.");
}

else if(credencial == "estagiario"){
      console.log("Você pode acessar as baias de trabalho e refeitórios");
}
else if(credencial == "aprendiz"){
      console.log("Você pode acessar as áreas de lazer, baias e refeitórios ");
}
else if(credencial == "CLT"){
      console.log("Você pode acessar tudo, exceto a diretoria");
}
else if(credencial == "CEO"){
      console.log("O céu é o limite.");
}
else{
    console.log("Credencial inválida.  ACESSO NEGADO!");
}

