<script lang="ts">
	import { _ } from 'svelte-i18n';
	import ImageArticle from '$iroco-ui/ImageArticle.svelte';
</script>

<svelte:head>
	<title>{$_('page.title')}</title>
</svelte:head>

<section class="page-content">
	<h1>Use</h1>
	<p>{$_('temp.lipsum')}</p>
	<ImageArticle
		articleTitle="Lorem Ipsum"
		alt="alt"
		articleContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam. Gravida dictum fusce ut placerat orci nulla. Pulvinar sapien et ligula ullamcorper. Ultrices neque ornare aenean euismod. Facilisi cras fermentum odio eu feugiat pretium."
		imgSrc="https://placehold.co/600x400"
		buttonList={[
			{ href: '#', label: 'Label' },
			{ href: '#', label: 'Label' }
		]}
	></ImageArticle>
	<ImageArticle
		articleTitle="Lorem Ipsum"
		alt="alt"
		articleContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam. Gravida dictum fusce ut placerat orci nulla. Pulvinar sapien et ligula ullamcorper. Ultrices neque ornare aenean euismod. Facilisi cras fermentum odio eu feugiat pretium."
		imgSrc="https://placehold.co/600x400"
		buttonList={[
			{ href: '#', label: 'Label' },
			{ href: '#', label: 'Label' }
		]}
		reversed
	></ImageArticle>
	<ImageArticle
		articleTitle="Lorem Ipsum"
		alt="alt"
		articleContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam. Gravida dictum fusce ut placerat orci nulla. Pulvinar sapien et ligula ullamcorper. Ultrices neque ornare aenean euismod. Facilisi cras fermentum odio eu feugiat pretium."
		imgSrc="https://placehold.co/600x400"
		buttonList={[
			{ href: '#', label: 'Label' },
			{ href: '#', label: 'Label' }
		]}
	></ImageArticle>
	<ImageArticle
		articleTitle="Lorem Ipsum"
		alt="alt"
		articleContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam. Gravida dictum fusce ut placerat orci nulla. Pulvinar sapien et ligula ullamcorper. Ultrices neque ornare aenean euismod. Facilisi cras fermentum odio eu feugiat pretium."
		imgSrc="https://placehold.co/600x400"
		buttonList={[
			{ href: '#', label: 'Label' },
			{ href: '#', label: 'Label' }
		]}
		reversed
	></ImageArticle>
</section>

<style lang="scss">
	.page-content {
		display: flex;
		flex-direction: column;
		align-content: center;
	}
</style>
