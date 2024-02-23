<script lang="ts">
	/* eslint svelte/no-at-html-tags: "off" */
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('faq.title')}</title>
</svelte:head>

<section class="faq">
	<div class="faq__content">
		<h1>{$_('faq.title')}</h1>
		<div class="faq__content__toc" id="htop">
			<h2>{$_('faq.category_our_offer')}</h2>
			<ul class="no-bullet">
				<li>
					<a href="#foo">{$_('faq.questions.foo.title')}</a>
				</li>
				<li>
					<a href="#bar">{$_('faq.questions.bar.title')}</a>
				</li>
			</ul>
			<h2>{$_('faq.category_using_our_services')}</h2>
			<ul class="no-bullet">
				<li>
					<a href="#baz">{$_('faq.questions.baz.title')}</a>
				</li>
			</ul>
			<h2>{$_('faq.category_misc')}</h2>
		</div>
		<hr />
		<div class="faq__q-a">
			<!-- Category our offer -->

			<div id="foo" class="faq__q-a__foo question">
				<h3>
					<a href="#htop">{$_('faq.questions.foo.title')}</a>
				</h3>
				<p>{$_('faq.questions.foo.p')}</p>
				<ul>
					<li>{$_('faq.questions.foo.list.address')}</li>
					<li>{$_('faq.questions.foo.list.mailbox')}</li>
					<li>{$_('faq.questions.foo.list.aliases')}</li>
					<li>
						{$_('faq.questions.foo.list.contact-calendar')}
					</li>
				</ul>
				<p>
					{$_('faq.questions.foo.nowebmail')}
					<a href="#configuration">
						{$_('faq.questions.foo.configurationquestion')}
					</a>
				</p>
			</div>
			<div id="bar" class="faq__q-a__bar question">
				<h3>
					<a href="#htop">{$_('faq.questions.bar.title')}</a>
				</h3>
				<p>{$_('faq.questions.bar.p')}</p>
			</div>

			<!-- Category using our services -->

			<div id="baz" class="faq__q-a__baz question">
				<h3>
					<a href="#htop">{$_('faq.questions.baz.title')}</a>
				</h3>
				<p>{@html $_('faq.questions.baz.p')}</p>
			</div>

			<!-- Category miscellaneous -->

			<!--			<div id="cookies" class="faq__q-a__cookies question">-->
			<!--				<h3><a href="#htop">{$_("faq.questions.cookies.title")}</a></h3>-->
			<!--				<p>-->
			<!--					{$_("faq.questions.cookies.weuse")}-->
			<!--					<a href="https://fr.matomo.org/matomo-on-premise/">Matomo</a>-->
			<!--					{$_("faq.questions.cookies.selfhosted")}-->
			<!--					<a-->
			<!--						href="https://www.cnil.fr/sites/default/files/atoms/files/matomo_analytics_-_exemption_-_guide_de_configuration.pdf"-->
			<!--					>-->
			<!--						{$_("faq.questions.cookies.recommendations")}-->
			<!--					</a>-->
			<!--					{$_("faq.questions.cookies.cnil")}-->
			<!--				</p>-->
			<!--				<iframe-->
			<!--					height="270px"-->
			<!--					title="matomo"-->
			<!--					src="https://matomo.iroco.co/index.php?module=CoreAdminHome&action=optOut&language=fr&backgroundColor=211d28&fontColor=f2ebe3&fontSize=&fontFamily=Arial"-->
			<!--				/>-->
			<!--			</div>-->
		</div>
	</div>
</section>

<style lang="scss">
	@use 'node_modules/@iroco/ui/dist/scss/constants';
	@import 'node_modules/@iroco/ui/dist/scss/containers';
	@import 'node_modules/@iroco/ui/dist/scss/button';

	.faq {
		display: flex;
		justify-content: center;

		&__content {
			width: 70%;

			.question,
			&__toc {
				scroll-margin-top: 10em;
			}

			&__q-a {
				img {
					display: inherit;
					padding-top: 1em;
				}

				//&__cookies {
				//  iframe {
				//    border: 1px, colors.$beige;
				//    border-radius: 2%;
				//    height: 200px;
				//    width: 600px;
				//    margin-top: 20px;
				//
				//    @include screen-laptop() {
				//      width: 500px;
				//      height: 200px;
				//    }
				//
				//    @include screen-tablet() {
				//      width: 450px;
				//      height: 200px;
				//    }
				//
				//    @include screen-tablet-S() {
				//      width: 400px;
				//      height: 200px;
				//    }
				//
				//    @include screen-mobile-L() {
				//      width: 350px;
				//      height: 170px;
				//    }
				//
				//    @include screen-mobile-M() {
				//      width: 300px;
				//      height: 160px;
				//    }
				//
				//    @include screen-mobile-S() {
				//      width: 250px;
				//      height: 150px;
				//    }
				//  }
				//}
			}
		}

		@include screen-laptop() {
			.faq {
				&__content {
					width: 100%;
				}
			}
		}
	}
</style>
