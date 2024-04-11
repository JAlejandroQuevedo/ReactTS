//Manipulacion de objetos

const product = {
    name: 'Tablet',
    price: 300,
    disponible: false
}

// Object.freeze(product)
//Hace que un objeto sea inmodificable 
Object.seal(product)
//Permite modificar las propiedades existentes pero no te permiten eliminar ni agregar elementos
product.disponible = true
//Si no existe una propiedad lo va a agregar
product.image = 'imagen.jpg'

//Eliminar una propiedad
delete product.price;


console.log(product)