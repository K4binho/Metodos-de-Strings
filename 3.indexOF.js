//saber se o email é valido
//tem q ter @
//tem q ter 1 "." depois do arroba

const email = "console.piu@gmail.com";//email

const posicaoArroba = email.indexOf("@");//Mostra a posição do @ = 11;

    if(email.includes("@") === true){ //Verifica se tem o "@"
         if(email.includes(".",posicaoArroba) === true){//Verifica se tem o "." dps do "@"

             console.log("EMAIL VÁLIDO!");//Válido

  }else{
      console.log("COLOCA UM EMAIL VÁLIDO POHA!");//Não válido
  }
}else{
    console.log("COLOCA UM EMAIL VÁLIDO POHA!");//Não válido
}
