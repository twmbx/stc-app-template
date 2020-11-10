<script>
	import TailwindCss from './TailwindCss.svelte';

	export let headline;
</script>

<TailwindCss/>

<svelte:head>
	<title>{headline}</title>
</svelte:head>

<main class="container mx-auto">

<div class="grid place-content-center h-screen">
	<h1>{headline}</h1>
</div>
</main>
