const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React js', 'Node js'];
const numbers = [20, 30, 40];

//Filter ==> Sirve para filtrar elementos del arreglo

const newArray = tecnologias.filter(tech => tech !== 'HTML')
//Cuando es solo un parametro se elimina el parentesis, cuando son mas de uno son necesarios

const resultado = numbers.filter(number => number !== 10)
console.log(newArray)
console.log(numbers)

//Includes ==> Verifica si existe un elemento en un arreglo

const resultadoTech = tecnologias.includes('CSS');

//Some ===> Devuelve si uno de los elementos cumple la condicion

const resultadoNum = numbers.some(number => number > 15)
if (resultado) {
    console.log('El numero es mayor a 15')
} else {
    console.log('El numero no es mayor a 15')
}

//Find ==> Devuelve el primer elemento que cumple una la condicion

const resultadoNumDev = numbers.find(number => number > 15)
console.log(resultadoNumDev)

//Every ==> Retorna true o false si todos cumplen la condicion

const resultadoEvery = numbers.every(number => number > 15);
console.log(resultadoEvery);

//Reduce ==> retorna un acumulado del total

const resultadoReduce = numbers.reduce((total, index) => total + index, 0)
console.log(resultadoReduce);
