<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Icon from 'svelte-awesome';
	import { envelope, linkedin, github } from 'svelte-awesome/icons';
	import { base } from '$app/paths';
	import mastodon from '$lib/mastodon';
</script>

<footer>
	<nav aria-label="Liens de contact">
		<ul>
			<li>
				<a href="#" class="menu_icon">
					<Icon label="mail" data={envelope} scale={1.5} />
				</a>
			</li>
			<li>
				<a href="https://github.com/iroco-co/rezofora" class="menu_icon">
					<Icon label="github" data={github} scale={1.5} />
				</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/company/rezofora/posts/?feedView=all" class="menu_icon">
					<Icon label="linkedin" data={linkedin} scale={1.5} />
				</a>
			</li>
			<li>
				<a href="#" class="menu_icon">
					<Icon label="mastodon" data={mastodon} scale={1.5} />
				</a>
			</li>
		</ul>
	</nav>
	<nav aria-label="Liens légaux">
		<ul class="menu_items">
			<li><a href="{base}/legal">{$_('footer.other.legal')}</a></li>
			<li aria-hidden="true">|</li>
			<li><a href="{base}/terms">{$_('footer.other.terms')}</a></li>
		</ul>
	</nav>
	<div class="copyright">{$_('footer.other.copyrights')}</div>
</footer>

<style>
	.menu_icon {
		color: var(--DarkGreen);
		padding: 0.5rem;
	}

	footer {
		background-color: var(--White);
		color: var(--DarkGreen);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	footer ul {
		list-style-type: none;
	}

	footer li {
		display: inline-block;
	}

	footer a {
		color: var(--DarkGreen);
	}

	.copyright {
		font-size: small;
		color: var(--DarkGreen);
	}
</style>
