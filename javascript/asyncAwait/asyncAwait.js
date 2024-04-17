const url = 'https://jsonplaceholder.typicode.com/posts/1';


const api = () => {
    const apiFetch = async () => {
        try {
            const data = await fetch(url);
            if (!data.ok) {
                throw new Error('Hubo un error...')

            }
            const json = await data.json()
            return json;
        }
        catch (err) {
            console.error(err.message)
        }
    }
    const data = async () => console.log(await apiFetch())

    data()
}

api()



