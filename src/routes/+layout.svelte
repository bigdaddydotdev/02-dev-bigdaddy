<nav>
<a href="/">Home</a>
<a href="/shop" data-sveltekit-preload-data>Shop</a>
<a href="/movies" data-sveltekit-preload-data>Movies</a>
<a href="/gopherizeme" data-sveltekit-preload-data>Antoinize Me</a>
<a href="/wp-api-json" data-sveltekit-preload-data>WP-JSON</a>

</nav>
<slot />


<style>
nav {
display: flex;
}
nav a {
margin-right: 1rem;
}
</style>
