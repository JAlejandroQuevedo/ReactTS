//Optional changing " ? "
//Permite acceder a las propiedades de un objeto o llamar metodos sin tener que verificar si existen o no
//Si el objeto no contiene el dato devuelve undefined


const alumno = {
    nombre: 'Juan',
    clase: 'Programacion',
    aprobado: true,
    examenes: {
        examen1: 90
    }
}


console.log(alumno.examenes?.examen1)
console.log('Despues de alumno')
