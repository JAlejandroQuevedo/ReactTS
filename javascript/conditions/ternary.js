//Ternario


const autentify = true;

const saldo = 1000;
const pagar = 1200;
const tarjeta = true;


// autentify ?
//     console.log('Usuario autentificado')
//     :
//     console.log('Usuario no autentificado')

saldo > pagar || tarjeta ?
    console.log('Puedes pagar') :
    console.log('No puedes pagar')