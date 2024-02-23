<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Icon from 'svelte-awesome';
	import { envelope, linkedin, github } from 'svelte-awesome/icons';
	import { base } from '$app/paths';
</script>

<footer>
	<div class="footer">
		<div class="footer__contact">
			<div class="footer__contact__container">
				<h1>{$_('footer.socialmedia')}</h1>
				<div>
					<a href="mailto:hello@rezofora.fr">
						<Icon data={envelope} class="greenIcon" />
						{$_('footer.mailto')}
					</a>
				</div>
				<div class="footer__contact__container__icons">
					<span class="footer__contact__container__icons__icon">
						<a href="https://github.com/iroco-co/rezofora">
							<Icon label="github" data={github} scale={1.5} class="greenIcon" />
						</a>
					</span>
					<span class="footer__contact__container__icons__icon">
						<a href="https://www.linkedin.com/in/adelineagut/">
							<Icon label="linkedin" data={linkedin} scale={1.5} class="greenIcon" />
						</a>
					</span>
				</div>
			</div>
		</div>
		<div class="footer__other">
			<h1>{$_('footer.menu.title')}</h1>
			<ul class="no-bullet">
				<li><a href="{base}/legal">{$_('footer.other.legal')}</a></li>
				<li><a href="{base}/faq">{$_('footer.other.faq')}</a></li>
				<li><a href="{base}/terms">{$_('footer.other.terms')}</a></li>
			</ul>
		</div>
	</div>
	<p class="copyright">
		{$_('footer.other.copyrights')}
	</p>
</footer>

<style lang="scss">
	@import '@iroco/ui/dist/scss/containers';

	:global svg.greenIcon {
		fill: var(--color-primary) !important;
	}

	.footer {
		display: flex;
		justify-content: center;
		gap: 3em;

		h1 {
			color: var(--color-text-op-60);
			font-size: 120%;
		}

		a,
		a:visited,
		a:active {
			color: var(--color-text);
		}

		&__contact {
			&__container {
				text-align: right;
				&__icons {
					display: flex;
					margin-top: 1em;
					&__icon {
						padding: 15px 35.5px;
						text-align: center;
						border-left: 1.5px solid var(--color-border);
						&:last-of-type {
							border-right: 1.5px solid var(--color-border);
						}
					}
				}
			}
		}
	}

	.copyright {
		color: var(--color-text-light);
		text-align: center;
		font-size: small;
	}

	@include screen-tablet {
		.footer {
			display: block;
			padding: 0 2em;
			&__contact {
				&__container {
					text-align: center;
					&__icons {
						display: flex;
						justify-content: center;
					}
				}
			}
			&__other {
				text-align: center;
			}
		}
	}
</style>
