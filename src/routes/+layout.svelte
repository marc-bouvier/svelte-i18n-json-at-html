<script>
	import '../i18n';
	import '../app.scss';
	import { base } from '$app/paths';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="{base}/" />
	<meta
		name="description"
		content="Foo"
	/>
</svelte:head>

<main id="main">
	{@render children()}
</main>