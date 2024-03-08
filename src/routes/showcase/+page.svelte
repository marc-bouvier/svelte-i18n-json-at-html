<script lang="ts">
	import { _ } from 'svelte-i18n';
	import {
		Alert,
		Button,
		DataTable,
		NumberInput,
		RadioButton,
		TextInput,
		TextInputType
	} from '$iroco-ui';
	import ImageArticle from '$iroco-ui/ImageArticle.svelte';
	import { base } from '$app/paths';

	let group = 'hello';
	let successAlertVisible = false;
	let dangerAlertVisible = false;
	let flashAlertVisible = false;
	let buttonsEnabled = true;
	const toggleButtonsEnabled = () => (buttonsEnabled = !buttonsEnabled);
</script>

<svelte:head>
	<title>{$_('terms.title')}</title>
</svelte:head>

<div class="about">
	<section class="about__project">
		<h1>{$_('terms.title')}</h1>
		<p>
			Page ou mettre plusieurs composants pour avoir une vision de l'ensemble des composants utiles
			dans le site.
		</p>
	</section>
	<section>
		<h2>Typographie</h2>
		<p><a href="{base}/showcase#">Lien hypertexte</a></p>
	</section>
	<section class="showcase_form">
		<h2>Forms</h2>
		<form class="iroco-ui-form">
			<NumberInput
				id="number-input"
				name="number-input"
				label="Number input"
				value={0}
				min={0}
				max={10}
			></NumberInput>
			<fieldset>
				<legend>Choose one</legend>
				<RadioButton bind:group name="name-hello" value="hello" checked={true}>Hello</RadioButton>
				<RadioButton bind:group name="name-foo" value="foo" checked={false}>Foo</RadioButton>
				<RadioButton bind:group name="name-bar" value="bar" checked={false}>Bar</RadioButton>
			</fieldset>
			<TextInput
				type={TextInputType.text}
				id="text-input"
				name="text-input"
				value="text"
				label="Text input"
			/>

			<fieldset>
				<label for="toggle-buttons-enabled">Buttons enabled</label>
				<input
					id="toggle-buttons-enabled"
					type="checkbox"
					checked={buttonsEnabled}
					on:change={toggleButtonsEnabled}
				/>
			</fieldset>
		</form>
	</section>
	<section>
		<h2>Buttons</h2>
		<fieldset disabled={!buttonsEnabled}>
			<Button
				id="success-alert-button"
				kind={'success'}
				on:click={() => (successAlertVisible = true)}
			>
				Show success alert
			</Button>
			<Button id="danger-alert-button" kind={'danger'} on:click={() => (dangerAlertVisible = true)}>
				Show danger alert
			</Button>
			<Button id="flash-alert-button" kind={'basic'} on:click={() => (flashAlertVisible = true)}>
				Show flash alert
			</Button>
			<Button id="dark-button" kind={'dark'} on:click={() => false}>
				Dark button that does nothing
			</Button>
		</fieldset>
	</section>

	<section>
		<h2>Alerts</h2>
		{#if successAlertVisible}
			<Alert type={'success'} callback={() => (successAlertVisible = false)}>
				<h3>Success</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut porttitor leo a diam. Gravida dictum fusce ut
					placerat orci nulla. Pulvinar sapien et ligula ullamcorper. Ultrices neque ornare aenean
					euismod. Facilisi cras fermentum odio eu feugiat pretium.
				</p>
			</Alert>
		{/if}
		{#if dangerAlertVisible}
			<Alert type={'danger'} callback={() => (dangerAlertVisible = false)}>
				<h3>Danger</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut porttitor leo a diam. Gravida dictum fusce ut
					placerat orci nulla. Pulvinar sapien et ligula ullamcorper. Ultrices neque ornare aenean
					euismod. Facilisi cras fermentum odio eu feugiat pretium.
				</p>
			</Alert>
		{/if}
		{#if flashAlertVisible}
			<Alert type={'flash'} callback={() => (flashAlertVisible = false)}>
				<h3>Flash</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut porttitor leo a diam. Gravida dictum fusce ut
					placerat orci nulla. Pulvinar sapien et ligula ullamcorper. Ultrices neque ornare aenean
					euismod. Facilisi cras fermentum odio eu feugiat pretium.
				</p>
			</Alert>
		{/if}
	</section>

	<section>
		<h2>Table</h2>
		<DataTable
			columns={[
				{ key: 'key1', title: 'Title 1' },
				{ key: 'key2', title: 'Title 2' },
				{ key: 'key3', title: 'Title 3' }
			]}
			rows={[
				{ key1: 'value 1', key2: 'value 2', key3: 'value 3' },
				{ key1: 'value a', key2: 'value b', key3: 'value c' },
				{ key1: 1.56, key2: 2.76, key3: 3.98 }
			]}
		/>
	</section>
	<section>
		<h2>Articles avec images</h2>
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
			figureCaption="Légende de la figure"
			articleContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam. Gravida dictum fusce ut placerat orci nulla. Pulvinar sapien et ligula ullamcorper. Ultrices neque ornare aenean euismod. Facilisi cras fermentum odio eu feugiat pretium."
			imgSrc="https://placehold.co/600x400"
			buttonList={[
				{ href: '#', label: 'Label' },
				{ href: '#', label: 'Label' }
			]}
			reversed
		></ImageArticle>
	</section>
</div>

<style lang="scss">
</style>
