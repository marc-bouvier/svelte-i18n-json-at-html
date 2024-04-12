<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('header.support')}</title>
</svelte:head>

<div class="support">
	<section class="support__workshops">
		<h1>Détail des prestations de conseil/accompagnement</h1>
		<p>{$_('temp.lipsum')}</p>
	</section>
	<section class="support__foo">
		<h1>Détail ...</h1>
		<p>{$_('temp.lipsum')}</p>
	</section>
	<section class="support__foo">
		<h1>Détail ...</h1>
		<p>{$_('temp.lipsum')}</p>
	</section>
</div>