<script>

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
    </HeaderNavMenu>
  </HeaderNav>
</Header>

<Content>
  <Grid>
    <Row>
      <Column>
        <h1>Welcome</h1>
     </Column>
    </Row>
  </Grid>
</Content>



<slot />


