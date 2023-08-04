<script lang="ts">
    import "carbon-components-svelte/css/all.css";
  import { Button, truncate, breakpoints } from "carbon-components-svelte";
  import { Airplane } from "carbon-pictograms-svelte";

import { superForm } from "sveltekit-superforms/client"
	import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"
	import { z } from "zod"
	import type { PageData } from "./$types"

	export let data: PageData

	const newContactSchema = z.object({
		firstName: z.string().min(1),
		lastName: z.string().min(1),
		email: z.string().email(),
		company: z.string().min(1)
	})

	const { form, errors, enhance, constraints } = superForm(data.form, {
		taintedMessage: "Are you sure you want leave?",
		validators: newContactSchema
	})
</script>

<Button>Primary button</Button>

<Airplane />


<h1>Welcome to Big Daddy dot Dev</h1>

<p>Because Big Data and Go Daddy were already taken.</p>

<SuperDebug data={$form} />
<article>
	<header>
		<h1>New Contact</h1>
	</header>
	<form method="POST" use:enhance>
		<label for="firstName">First name</label>
		<input type="text" id="firstName" name="firstName" bind:value={$form.firstName} />
		{#if $errors.firstName}
			<small>{$errors.firstName}</small>
		{/if}
		<label for="lastName">Last name</label>
		<input type="text" id="lastName" name="lastName" bind:value={$form.lastName} />
		{#if $errors.lastName}
			<small>{$errors.lastName}</small>
		{/if}
		<label for="email">Email address</label>
		<input type="email" id="email" name="email" bind:value={$form.email} />
		{#if $errors.email}
			<small>{$errors.email}</small>
		{/if}
		<label for="company">Company</label>
		<input type="text" id="company" name="company" bind:value={$form.company} />
		{#if $errors.company}
			<small>{$errors.company}</small>
		{/if}
		<button type="submit">Submit</button>
	</form>
</article>

<style>
	h1
{
	margin-bottom: 0 !important;
}
</style>