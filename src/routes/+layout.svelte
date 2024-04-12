<script>
	import '../i18n';
	import { _ } from 'svelte-i18n';
	import { Navigation, NavigationItem } from '@iroco/ui';
	import Footer from '../lib/Footer.svelte';
	import { base } from '$app/paths';
	import '../app.scss';
	import '../colors.scss';
</script>

<header>
	<Navigation
		title={$_('page.title')}
		navigationItems={[
			new NavigationItem($_('header.project'), `${base}/project`),
			new NavigationItem($_('header.values'), `${base}/values`),
			new NavigationItem($_('header.about'), `${base}/about`),
			new NavigationItem($_('header.faq'), `${base}/faq`)
		]}
		type="topbar"
	/>
</header>
<main class="main">
	<slot />
</main>
<Footer>TODO contact</Footer>

<style lang="scss">
	@use '../app';

	:global(.navigation) {
		position: fixed;
		top: 0;
		background-color: var(--color-body);
		z-index: 1;
		:global(.nav__topbar__item a):not(.iroco-ui-button) {
			font-size: 1.5em;
			color: var(--color-text);
		}
	}

	:global(.navigation--mobile) {
		:global(.nav__topbar__item a) {
			color: var(--color-text);
			font-size: 1.5em;
		}
	}

	:global(.navigation--mobile) {
		border-bottom: none;
		background-color: var(--color-body);
	}
</style>
