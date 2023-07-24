<script>
 export let data;

</script>


<h1>Gopher Data</h1>

{#each data.gophers as gopher } 
<h2>{gopher.id}</h2>
<p>{gopher.name}</p>
{/each}


