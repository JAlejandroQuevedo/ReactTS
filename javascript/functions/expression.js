//Function expression

console.log(sumar(5, 6))

// const sumar = function (num1, num2) {
//     return num1 + num2;
// }
//Esta sintaxis detecta a sumar como una variable como una funcion por lo que al usar expression antes de declarar la funcion
//javascript toma a la funcion como undefined

function sumar(num1, num2) {
    return num1 + num2;
}
//Function declaration no se toma como una variable y se puede utilizar antes de su declaracion