export  const  load = async () => {
        const fetchPlantas= async () => {
        const res = await fetch(`https://plantas.patraldo.com/wp-json/wp/v2/media?per_page=20`);
        const data = await res.json()
                console.log(data)
                return data

        }


        return  {
                media: fetchPlantas()
        }
}

