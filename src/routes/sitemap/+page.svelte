<script>
import { _ } from 'svelte-i18n';
import { sitemap } from '../../sitemap';
import { base } from '$app/paths';

</script>

<svelte:head>
	<title>{$_('sitemap.title')}</title>
</svelte:head>

<div class="sitemap">
	<section class="sitemap">
		<h1>{$_('sitemap.title')}</h1>
		<ul>
		{#each Object.keys(sitemap) as page}
				<li><a href={base + page}>{page}</a></li>
		{/each}
		</ul>
	</section>
</div>