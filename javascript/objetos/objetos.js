//Objetos

const product = {
    name: 'Tablet',
    price: 300,
    disponible: false
}

console.log(product)
console.log(typeof product)

console.table(product)
//Muestra el objeto como una tabla en consola


console.log(product.price)
//Sintaxis de punto 

// const nombre = product.name;

// console.log(nombre)

//Destructuting
const { name, price, disponible } = product;

console.log(disponible)

//Object literal enhansment

const autentification = true;
const user = 'Juan';

const newObject = {
    autentification,
    user
    //Solo funciona cuando ambos se llaman de la misma forma
}

console.log(newObject)