const heading = document.querySelector('.head');
//Te da acceso a los selectores del html, es el recomendado hoy en dia
// console.log(heading.classList)
// console.log(heading.id)

const input = document.querySelectorAll('.input');
// const enlaces = document.querySelectorAll()

// console.log(input)

//Manipulacion de elementos dom

// heading.textContent = 'Un nuevo heading';

// heading.id = 'nuevoId';
// heading.removeAttribute('id')
const inputNombre = document.querySelector('#name');

// inputNombre.value = 'Un nuevo valor';
// inputNombre.dasaset = 'data-set'
// console.log()
// console.log(heading.id)

// console.log(inputNombre.classList)

// input.forEach(e => e.textContent = 'Nuevo')
// input[0].textContent = 'Nuevo 0'

// const button = document.getElementById('button');

// const cosa = () => {
//     heading.textContent = 'Hi there'
//     console.log('Hi')
// }
// button.addEventListener('mouseover', cosa())

// input.forEach(enlace => {
//     enlace.addEventListener('click', (e) => {
//         console.log('Diste click')
//         e.preventDefault()
//         e.target.textContent = 'Diste click'

//         console.log(e.target)
//     })
// })


inputNombre.addEventListener('input', (e) => {
    // console.log('Escribiendo....')
    input.forEach(enlace => enlace.textContent = 'Escribiendo....')
    heading.textContent = e.target.value
})

const inputPassword = document.querySelector('#password');

inputPassword.addEventListener('input', (e) => {
    inputPassword.type = 'text'
    setTimeout(() => {
        inputPassword.type = 'password'
    }, 300)
    heading.textContent = e.target.value;
})

const form = document.querySelector('#form');
const body = document.querySelector('body');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Enviando...')
    if (inputNombre.value === '' || inputPassword.value === '') {
        alert('Todos los campos son obligatorios')
    } else {
        body.innerHTML += `
            <h3>Tu nombre es: ${inputNombre.value}</h3>
            <h3>Tu contraseña es: ${inputPassword.value}</h3>

        `
        console.log(inputNombre.value)
        console.log(inputPassword.value)
    }
})