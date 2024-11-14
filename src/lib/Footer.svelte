<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Icon from 'svelte-awesome';
	import { envelope, linkedin, github } from 'svelte-awesome/icons';
	import { base } from '$app/paths';
	import mastodon from '$lib/mastodon';
</script>

<footer>
	<div class="content">
		<nav aria-label="Liens de contact">
			<div class="contact">
				<ul>
					<li><a href="#">
						<Icon
							label="mastodon"
							data={envelope}
							scale={1.3}
							class="greenIcon"
						/>
					</a></li>
					<li><a href="https://github.com/iroco-co/rezofora">
						<Icon
							label="github"
							data={github}
							scale={1.5}
						/>
					</a></li>
					<li><a href="https://www.linkedin.com/company/rezofora/posts/?feedView=all">
						<Icon
							label="linkedin"
							data={linkedin}
							scale={1.5}
						/>
					</a></li>
					<li><a href="#">
						<Icon
							label="mastodon"
							data={mastodon}
							scale={1.5}
							class="greenIcon"
						/>
					</a></li>
				</ul>
			</div>
		</nav>
		<nav aria-label="Liens légaux">
			<div class="contact">
				<ul>
					<li><a href="{base}/legal">{$_('footer.other.legal')}</a></li>
					<li><a href="{base}/terms">{$_('footer.other.terms')}</a></li>
				</ul>
			</div>
		</nav>
	</div>
	<div class="copyright">{$_('footer.other.copyrights')}</div>
</footer>

<style>
	.content {
		display: block;
		text-align: center;
	}
	.contact li {
		display: inline-block;
		padding: 0.3em;
	}
</style>
