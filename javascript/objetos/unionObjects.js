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

const product3 = {
    name: 'Phone',
    price: 300,
    disponible: true,
    direction: {
        calle: 'Mexico'
    },
    ...product,
    ...product2 //spread operator agrega los valores iguales y los fuciona y los devuelve en un solo objeto

}

const newProduct = {
    /*     product1: { ...product },
        product2: { ...product2 },
        product3: { ...product3 } */
    //Manera de fucionar varios objetos que tienen propiedades iguales sin fusionarlos en un solo objeto

    product,
    product2,
    product3

    //mismo resultado que el anterior
}

const newProduct2 = Object.assign(product, product2)

console.log(newProduct2)