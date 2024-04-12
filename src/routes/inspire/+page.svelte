<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('header.inspire')}</title>
</svelte:head>

<div class="inspire">
	<section class="inspire__workshops">
		<h1>Détail des ateliers proposés</h1>
		<p>{$_('temp.lipsum')}</p>
	</section>
	<section class="inspire__foo">
		<h1>Détail ...</h1>
		<p>{$_('temp.lipsum')}</p>
	</section>
	<section class="inspire__foo">
		<h1>Détail ...</h1>
		<p>{$_('temp.lipsum')}</p>
	</section>
</div>