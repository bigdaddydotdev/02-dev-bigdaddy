<script>

 export let data;

$: ( { media } = data ) 
console.log(data)
</script>




<h1>Plantas Patraldo Data</h1>
{#each data.media as media }
<h2>
<a href="{media.link}">
{media.slug}
</a>
</h2>
<p>{media.id}</p>
<p>{media.slug}</p>
{/each}


<style>
h1 {

 color: teal;
}

</style>



