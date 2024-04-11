const product = {
    name: 'Tablet',
    price: 300,
    disponible: false
}

const product2 = {
    name: 'Phone',
    price: 300,
    disponible: true,
    direction: {
        calle: 'Mexico'
    }
}

const { name: name } = product;
const { name: nameProduct2, direction: { calle } } = product2;

console.log(name);
console.log(nameProduct2)

console.log(calle)