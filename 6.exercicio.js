function replaceAll(text,newText){
    while(numero !== numero.replace(text, newText)){
        numero=numero.replace(text,".");
    }
}

/////outro modo
let numero = "1.345.324.435.123.213"; 

while (numero !==  numero.replace(".",",")){//enquanto ouver "." o valor sera substituido por ","
    numero = numero.replace(".",",");//o carinha q substitui 
}console.log(numero);

