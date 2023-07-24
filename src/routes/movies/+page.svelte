<script>
 export let data;
$: ( { movies} = data ) 

 console.log(data);


</script>

<h1>Animaciones</h1>

{#each movies as movie}

<h2>{movie.title}</h2>
<p>{movie.overview}</p>


{/each}




