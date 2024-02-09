<script>
	import '../i18n';
	import { _, isLoading } from 'svelte-i18n';
	import { Navigation, NavigationItem } from '@iroco/ui';
	import { base } from '$app/paths';
	import '../app.scss';
</script>

{#if !$isLoading}
	<Navigation
		navigationItems={[new NavigationItem($_('header.about'), `${base}/about`)]}
		type="topbar"
	/>
	<main class="main">
		<slot />
	</main>
{/if}

<style lang="scss">
	@use 'node_modules/@iroco/ui/dist/scss/colors.scss';
	@use 'node_modules/@iroco/ui/dist/scss/constants.scss';
	@import 'node_modules/@iroco/ui/dist/scss/containers.scss';
	@import 'node_modules/@iroco/ui/dist/scss/button.scss';
</style>
