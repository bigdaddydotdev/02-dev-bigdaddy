export  const  load = async () => {
        const fetchGophers = async () => {
        const res = await fetch(`https://gopherize.me/api/artwork/`);
        const data = await res.json()
                console.log(data)
                return data.categories

        }


        return  {
                gophers: fetchGophers()
        }
}

