<script lang="ts">
	import { _, json } from 'svelte-i18n';
	import { base } from '$app/paths';
	import TeamMember from '$lib/TeamMember.svelte';
	import Partner from '$lib/Partner.svelte';
	import ServiceCard from '$lib/ServiceCard.svelte';
</script>

<svelte:head>
	<title>{$_('page.title')}</title>
</svelte:head>
<section id="mission" class="hero">
	<div class="hero-content">
		<header>
			<h1>{$_('mission.title')}</h1>
		</header>
		<p>{$_('mission.description')}</p>
	</div>
</section>
<section id="services" class="cards">
	<ServiceCard anchorId="support" i18nId="support" />
	<ServiceCard anchorId="training" i18nId="training" />
	<ServiceCard anchorId="inspire" i18nId="inspire" />
</section>
<section id="philosophy" class="title-and-text as-secondary">
	<header>
		<h2>{$_('philosophy.title')}</h2>
	</header>
	{#each $json('philosophy.paragraphs') as paragraph}
		<p>{@html paragraph}</p>
	{/each}
</section>

<section id="how-to-integrate" class="title-and-text as-tertiary">
	<header>
		<h2>{$_('integrate.title')}</h2>
	</header>
	<p>
		{$_('integrate.paragraph')}
	</p>
	<!--	TODO: A11Y : treat as complex image : https://www.w3.org/WAI/tutorials/images/complex/-->
	<img id="continuum" src="{base}/img/expertises.drawio.svg" width="780" height="430" />
</section>

<section id="strengths" class="title-and-text as-secondary">
	<header>
		<h2>{$_('strengths.title')}</h2>
	</header>

	<div class="quadrants">
		{#each $json('strengths.paragraphs') as strength}
			<div class="quadrant">
				<p>
					{@html strength}
				</p>
			</div>
		{/each}
	</div>
</section>

<section id="know-us" class="title-and-text as-primary" style="margin-bottom: 0;">
	<header>
		<h2>{$_('know-us.title')}</h2>
	</header>
	<ul class="grid">
		{#each $json('know-us.bios') as person}
			<TeamMember
				name={person.name}
				topic={person.topic}
				bio={person.bio}
				picture={person.picture}
			/>
		{/each}
	</ul>
</section>

<section id="ecosystem" class="title-and-text as-secondary">
	<header>
		<h2>{$_('ecosystem.title')}</h2>
	</header>

	<ul class="grid">
		<Partner
			label="Boavizta homepage"
			description={$_('ecosystem.boavizta')}
			href="https://boavizta.org"
			picturePath="{base}/img/partners/boavizta.svg"
		/>
		<Partner
			label="Shift Your Job homepage"
			description={$_('ecosystem.shift-your-job')}
			href="https://shiftyourjob.org/"
			picturePath="{base}/img/partners/shift-your-job.svg"
		/>
		<Partner
			label="AGIT homepage"
			description={$_('ecosystem.agit')}
			href="https://alliancegreenit.org/"
			picturePath="{base}/img/partners/agit.png"
		/>
		<Partner
			label="BPI France homepage"
			description={$_('ecosystem.bpi-france')}
			href="https://www.bpifrance.fr/"
			picturePath="{base}/img/partners/bpi.svg"
		/>
	</ul>
</section>

<style>
	#continuum {
		display: block;
		max-width: 100%;
		max-height: 30vh;
		object-fit: scale-down;
	}

	@media only screen and (min-width: 576px) {
		#continuum {
			max-height: 44vh;
		}
	}

	@media only screen and (min-width: 768px) {
		#continuum {
			max-height: 100vh;
		}
	}

	.quadrants > .quadrant {
		padding: 0.5rem;
	}

	@media only screen and (min-width: 576px) {
		.quadrants {
			display: grid;
			grid-template-columns: 16rem 16rem;
			grid-gap: 0.5rem;
		}

		.quadrants > .quadrant {
			padding: 1rem;
		}
	}

	@media only screen and (min-width: 768px) {
		.quadrants {
			grid-template-columns: 20rem 20rem;
			grid-gap: 1.25rem;
		}
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
		grid-column-gap: 1.5rem;
		grid-row-gap: 1.5rem;
	}
</style>
