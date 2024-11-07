<script>
	import '../i18n';
	import '../app.scss';
	import '../colors.scss';
	import Header from '$lib/Header.svelte';
	import { base } from '$app/paths';
</script>
<svelte:head>
	<link rel="preconnect" href="{base}/">
	<link rel="stylesheet" href="{base}/fonts/inter/inter.css">
	<link rel="stylesheet" href="{base}/style/1_base.css" />
	<link rel="stylesheet" href="{base}/style/2_theming/2.0_theming-config.css" />
	<link rel="stylesheet" href="{base}/style/2_theming/2.1_theming-initial-rules.css" />
	<link rel="stylesheet" href="{base}/style/2_theming/2.2_theming-typesetting.css" />
	<link rel="stylesheet" href="{base}/style/2_theming/2.3_theming-rythm.css" />
	<link rel="stylesheet" href="{base}/style/2_theming/2.5_controls/button.css" />
	<link rel="stylesheet" href="{base}/style/3_features.css" />
	<link rel="stylesheet" href="{base}/style/4_regions.css" />
	<link rel="stylesheet" href="{base}/style/6_components/card.css" />
	<link rel="stylesheet" href="{base}/style/6_components/header-skip-to-content.css" />
	<link rel="stylesheet" href="{base}/style/6_components/hero.css" />
	<link rel="stylesheet" href="{base}/style/6_components/menu.css" />
	<link rel="stylesheet" href="{base}/style/6_components/title-and-text.css" />

	<script type="application/ld+json">{
		"@context": "https://schema.org",
			"@graph": [
			{
				"@type": "WebPage",
				"@id": "https://rezofora.co/",
				"url": "https://rezofora.co/",
				"name": "Rezofora, conseil et accompagnement en numérique responsable.",
				"about": {
					"@id": "https://rezofora.co/"
				},
				"datePublished": "2024-03-08T18:00:00+00:00",
				"dateModified": "2024-03-08T18:00:00+00:00",
				"description": "Mon rôle est de comprendre vos besoins et de vous adresser la meilleure solution avec une seule obsession : le résultat atteint !",
				"inLanguage": "fr-FR",
				"potentialAction": [
					{
						"@type": "ReadAction",
						"target": [
							"https://rezofora.co/"
						]
					}
				]
			},
			{
				"@type": "WebSite",
				"@id": "https://rezofora.co/",
				"url": "https://rezofora.co/",
				"name": "Rezofora",
				"description": "Conseil et accompagnement en numérique responsable.",
				"publisher": {
					"@id": "https://rezofora.co/"
				},
				"inLanguage": "fr-FR"
			},
			{
				"@type": [
					"Person",
					"Organization"
				],
				"@id": "https://rezofora.co/",
				"name": "rezofora",
				"sameAs": [
					"https://rezofora.co/",
					"https://rezofora.fr/",
					"https://rezofora.io/",
					"https://rezofora.co/",
					"https://www.linkedin.com/in/adelineagut/"
				]
			}
		]
	}</script>
	<meta name="description" content="Rezofora, conseil et accompagnement en numérique responsable.">
</svelte:head>
<Header></Header>
<main id="main" role="main">
	<slot />
</main>
<footer>
	<div>
		<nav aria-label="Liens de contact">
			<header>
				<h2>Nous contacter</h2>
			</header>
			<ul>
				<li><a href="#">Envoyez nous un email</a></li>
				<li><a href="#">Infolettre</a></li>
			</ul>
			<div class="social-media">
				<a href="https://github.com/iroco-co/rezofora">Github</a>
				<a href="https://www.linkedin.com/company/rezofora/posts/?feedView=all">LinkedIn</a>
				<a href="#">Bluesky</a>
				<a href="#">Mastodon</a>
			</div>
		</nav>
		<nav aria-label="Autres liens">
			<header>
				<h2>Menu</h2>
			</header>
			<ul>
				<li><a href="https://jobs.makesense.org/en/projects/iroco-364">Postuler</a></li>
				<li><a href="https://blog.iroco.co">Blog & Actualités</a></li>
				<li><a href="https://iroco.co">Iroco</a></li>
				<li><a href="#">Mentions Légales</a></li>
				<li><a href="#">Foire Aux Questions</a></li>
				<li><a href="#">Conditions Générales de Vente</a></li>
			</ul>
		</nav>
	</div>
	<p class="copyright">
		© 2024 Rezofora. Tous droits réservés.
	</p>
</footer>

<style lang="scss">

</style>
