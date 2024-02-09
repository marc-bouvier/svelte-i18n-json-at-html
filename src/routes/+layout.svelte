<script>
	import '../i18n/index.js';
	import { _, isLoading } from 'svelte-i18n';
	import '../app.scss';
	import { Navigation, NavigationItem } from '@iroco/ui';
</script>
{#if !$isLoading}
	<Navigation
		navigationItems={[
      new NavigationItem($_("header.about"), "/about"),
    ]}
		type="topbar"
	/>
	<main class="main">
		<slot />
	</main>
{/if}

<style lang="scss">
  @use "node_modules/@iroco/ui/dist/scss/colors.scss";
  @use "node_modules/@iroco/ui/dist/scss/constants.scss";
  @import "node_modules/@iroco/ui/dist/scss/containers.scss";
  @import "node_modules/@iroco/ui/dist/scss/button.scss";
</style>
