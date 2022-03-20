const cidade = "Manaus-Am"

//console.log(cidade.slice(-2)); //resolvendo do jeito mais facil
const penultimoIndex = cidade.length - 2;
let estado = cidade.slice(penultimoIndex);
console.log(estado)