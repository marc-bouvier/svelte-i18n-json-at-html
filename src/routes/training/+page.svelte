<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('header.training')}</title>
</svelte:head>

<div class="training">
	<section class="training__fresques">
		<h1>Détail des fresques proposées</h1>
		<p>{$_('temp.lipsum')}</p>
	</section>
	<section class="training__foo">
		<h1>Détail ...</h1>
		<p>{$_('temp.lipsum')}</p>
	</section>
	<section class="training__foo">
		<h1>Détail ...</h1>
		<p>{$_('temp.lipsum')}</p>
	</section>
</div>