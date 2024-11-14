<script>
	import { base } from '$app/paths';
	import { _ } from 'svelte-i18n';
</script>

<header>
	<nav class="header-skip-to-content" role="navigation" aria-label="Accès rapide" lang="fr">
		<a href="#main">Contenu</a>
	</nav>
	<nav aria-label="Menu" class="menu">
		<a href="{base}/" class="brand-logo">
			<img
				alt="Logo Rezofora"
				src="{base}/img/Logo-Rezofora-H-RVB-cropped.svg"
				height="62"
				width="144"
			/>
		</a>
		<div class="items">
			<a href="{base}/#coaching">{$_('header.support')}</a>
			<a href="{base}/#training">{$_('header.training')}</a>
			<a href="{base}/#inspire">{$_('header.inspire')}</a>
			<a href="{base}/#know-us" class="about">{$_('header.about')}</a>
		</div>
	</nav>
</header>
