//Evaluacion de cortocircuito

const auth = true;

if ('false') {
    console.log('Truthy')
} else {
    console.log('Falsy')
}

auth && console.log('Autentificado')
