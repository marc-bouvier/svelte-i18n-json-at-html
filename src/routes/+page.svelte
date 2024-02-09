<script lang="ts">
	import { _ } from "svelte-i18n";
</script>

<svelte:head>
	<title>{$_("page.title")}</title>
</svelte:head>
<section>
<h1>{$_("temp.lorem")}</h1>
<p>{$_("temp.lipsum")}</p>
</section>

<style lang="scss">
  @use "node_modules/@iroco/ui/dist/scss/colors";
  @import "node_modules/@iroco/ui/dist/scss/button";
</style>
