<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('header.project')}</title>
</svelte:head>

<div class="project">
	<section class="project__content">
		<h1>{$_('header.project')}</h1>
		<p>
			Rezofora a pour ambition d’accompagner les organisations dans la transition écologique et sociale grâce à des
			prestations de conseil, de formation et de sensibilisation. Spécialisé dans le domaine du numérique responsable,
			Rezofora offre des services articulés selon trois axes :
		</p>
		<ul>
			<li>Conseil et accompagnement : mise en place de démarches RSE et numérique responsable, reporting de durabilité,
				mesure d’impact, éco-conception numérique…
			</li>
			<li>Formation et sensibilisation : Fresques du Climat, du Numérique et des Low-Tech, formations sur mesure en
				RSE/numérique responsable
			</li>
			<li>Inspiration et transformation des modèles : learning expeditions, ateliers fiction/prospective et ateliers sur
				mesure pour imaginer le numérique et la tech autrement.
			</li>
		</ul>
	</section>
</div>

<style lang="scss">
</style>