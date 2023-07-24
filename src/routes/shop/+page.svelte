<script>
export let data;
$: ( { products, users } = data ) 


</script>


<h1>Shop Dibujos</h1>

{#each products as product}
<h2>
<a href="/shop/{product.id}" data-sveltekit-preload-data>
{product.title}
</a>
</h2>
<p>{product.description}<p>
{/each}


{#each users as user}
<h2>{user.firstName}</h2>
<p>{user.age}</p>
{/each}


<!-- const { products, users } = data -->


