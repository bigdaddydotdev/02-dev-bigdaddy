<script>
  import Add from "carbon-icons-svelte/lib/Add.svelte";

 export let data;

$: ( { media } = data ) 
console.log(data)


</script>

<Add aria-label="Add" tabindex="0" />
<label id="add-file">Add file</label>

<Add aria-labelledby="add-file" />
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



