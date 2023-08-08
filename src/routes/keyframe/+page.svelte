<script>
	import { scale } from "svelte/transition";
	
	let display = true;
	
	setInterval(() => display = !display, 1000);
</script>

<div>
<style>
	.box {
		height: 3rem;
		width: 3rem;
		
		background-color: blue;
		
		animation-name: spin;
		animation-duration: 4000ms;
	}
	
	@keyframes spin {
		from {
			transform: rotate(0);
		}
		
		to {
			transform: rotate(360deg);
		}
	}

p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}


</style>
</div>

{#if display}
<div
		 class="box"
		 transition:scale="{{ start : 0.25 }}"
		 style="animation-duration: 250ms;"
/>
{/if}

<p>
  The Caterpillar and Alice looked at each other for some time in silence: at
  last the Caterpillar took the hookah out of its mouth, and addressed her in a
  languid, sleepy voice.
</p>

