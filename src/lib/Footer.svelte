<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Icon from 'svelte-awesome';
	import { envelope, linkedin, github } from 'svelte-awesome/icons';
	import { base } from '$app/paths';
</script>

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
				<li><a href="{base}/legal">{$_('footer.other.legal')}</a></li>
				<li><a href="{base}/faq">{$_('footer.other.faq')}</a></li>
				<li><a href="{base}/sitemap">{$_('footer.other.sitemap')}</a></li>
				<li><a href="{base}/terms">{$_('footer.other.terms')}</a></li>
			</ul>
		</nav>
	</div>
	<p class="copyright">© 2024 Rezofora. Tous droits réservés.</p>
</footer>
