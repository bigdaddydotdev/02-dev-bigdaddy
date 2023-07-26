<script>
  import { tick } from "svelte";
  import { Confetti } from "svelte-confetti";
  let active = false;
  async function showConfetti() {
active = false;
await tick();
active = true;
}

  import "carbon-components-svelte/css/all.css";
  import { Button, truncate, breakpoints } from "carbon-components-svelte";
  import { Airplane } from "carbon-pictograms-svelte";
</script>

<Button>Primary button</Button>

<Airplane />


<h1>Welcome to Big Daddy dot Dev</h1>

<p>Because Big Data and Go Daddy were already taken.</p>

<button on:click={showConfetti}>Show some confetti</button>
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
