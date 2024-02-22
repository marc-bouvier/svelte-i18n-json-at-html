<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('terms.title')}</title>
</svelte:head>

<div class="about">
	<section class="about__project">
		<h1>{$_('terms.title')}</h1>
		<p>{$_('temp.lipsum')}</p>
	</section>
</div>

<style lang="scss">
  //@use 'node_modules/@iroco/ui/dist/scss/colors';
  //@import 'node_modules/@iroco/ui/dist/scss/containers';
</style>
