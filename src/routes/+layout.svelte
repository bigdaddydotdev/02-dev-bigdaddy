<script>
import { Confetti } from "svelte-confetti"
import { tick } from "svelte";

let active = false;
async function showConfetti() {
active = false;
await tick;
active = true;
}



  import "carbon-components-svelte/css/all.css";
  import {
    Theme,
    RadioButtonGroup,
    RadioButton,
  } from "carbon-components-svelte";

  let theme = "g80";

  import {
    Header,
    HeaderNav,
    HeaderNavItem,
    HeaderNavMenu,
    SkipToContent,
    Content,
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";

  let isSideNavOpen = false;
</script>

<Header company="Big Daddy" platformName="Carbon Svelte" bind:isSideNavOpen>
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <HeaderNav>
    <HeaderNavItem href="/" text="Home" />
    <HeaderNavMenu text="Menu">
      <HeaderNavItem href="/shop" data-sveltekit-preload-data text="Shop" />
      <HeaderNavItem href="/movies" text="Movies" />
      <HeaderNavItem href="/gopherizeme" data-sveltekit-preload-data text="Antoinize Me" />
      <HeaderNavItem href="/wp-api-json" data-sveltekit-preload-data text="WP-JSON" />
     <HeaderNavItem href="/rss" data-sveltekit-preload-data text="RSS" />

    </HeaderNavMenu>
  </HeaderNav>
</Header>

<Content>
  <Grid>
    <Row>
      <Column>
        <h1>Welcome</h1>
<button on:click={showConfetti}>Show some confetti</button>
<Confetti />
    </Column>
    </Row>
  </Grid>
</Content>
{#if active}
<Confetti />
{/if}


<div style="
position: fixed;
top: -50px;
left: 0;
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
overflow: hidden;
pointer-events: none;">
<Confetti x={[-5, 5]} y={[0, 0.1]} delay={[500, 2000]} infinite duration=5000 amount=200 fallDistance="100vh" />
</div>
<slot />


