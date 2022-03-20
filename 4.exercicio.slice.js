const cidade = "Manaus-Am"

//console.log(cidade.slice(-2)); obs: outro método de resolver mas de um jeito mais facil


const penultimoIndex = cidade.length - 2;
let estado = cidade.slice(penultimoIndex);
console.log(estado)
