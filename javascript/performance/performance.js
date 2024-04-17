//Performance y multiple async await
const url = 'https://jsonplaceholder.typicode.com/posts/1';
const url2 = 'https://jsonplaceholder.typicode.com/posts/2';


const api = () => {
    const apiFetch = async () => {
        try {
            const inicio = performance.now()
            const data = await fetch(url);
            if (!data.ok) {
                throw new Error('Hubo un error...')

            }
            const json = await data.json()
            console.log(json);

            const data2 = await fetch(url2);
            if (!data2.ok) {
                throw new Error('Hubo un error....')
            }
            const json2 = await data2.json()

            console.log(json2)

            const fin = performance.now()

            console.log(`El resultado es ${fin - inicio}`)
        }
        catch (err) {
            console.error(err.message)
        }
    }
    // const data = async () => console.log(await apiFetch())

    // data()

    apiFetch()
}

// api()

const consultar = async () => {
    try {
        const inicio = performance.now();
        const [res, res2] = await Promise.all([fetch(url), fetch(url2)]);
        const [data, data2] = await Promise.all([res.json(), res2.json()]);
        console.log(data)
        console.log(data2)
        const fin = performance.now()
        console.log(`El resultado es ${fin - inicio}`)
    }
    catch (err) {
        console.error(err)
    }
}

consultar()