<script lang="ts">
	import { _, json } from 'svelte-i18n';
	import { browser } from '$app/environment';
	let language=""
	if(browser){
		language = window.navigator.language
	}
</script>

<svelte:head>
	<title>{$_('page.title')}</title>
</svelte:head>
<h1>{$_('page.title')}</h1>
<p>To change language, change language priority in your browser.</p>
<p>Your browser current language is : {language}</p>
<p>Language will fallback to french by default.</p>

<section id="philosophy">
	
	<header>
		<h2>{$_('philosophy.title')}</h2>
	</header>

	<p>
		When your main language is english, the paragraphs below should be in english...
		But, they fallback to french.
		In the browser console : 
	</p>

	<pre style="
	overflow: scroll;
    width: 45rem;
    height: 4rem;
    text-wrap: auto;"
	>+page.svelte:34 [svelte] hydration_html_changed The value of an `@html ...` block near src/​routes/​+page.svelte:34:2 changed between server and client renders. The client value will be ignored in favour of the server value</pre>

	<hr/>

	{#each $json('philosophy.paragraphs') as paragraph}
		<p>{@html paragraph}</p>
	{/each}

	<hr/>

	<p>Same paragraphs rendered without "@html".</p>
	
	{#each $json('philosophy.paragraphs') as paragraph}
		<p>{paragraph}</p>
	{/each}

</section>
