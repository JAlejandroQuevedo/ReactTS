const url = 'https://jsonplaceholder.typicode.com/posts/1'


fetch(url)
    .then(res => res.ok ? res.json() : console.error('Hubo un error'))
    //Throw no se puede usar con operador ternario
    .then(res => console.log(res))
    .catch(err => console.error(err))