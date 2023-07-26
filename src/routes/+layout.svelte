<script>
import "carbon-components-svelte/css/all.css";
  import {
    Theme,
    RadioButtonGroup,
    RadioButton,
  } from "carbon-components-svelte";

  let theme = "g80";
</script>

<Theme bind:theme />

<RadioButtonGroup legendText="Carbon theme" bind:selected={theme}>
  {#each ["white", "g10", "g80", "g90", "g100"] as value}
    <RadioButton labelText={value} {value} />
  {/each}
</RadioButtonGroup>

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
