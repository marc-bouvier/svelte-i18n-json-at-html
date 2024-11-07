<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>{$_('page.title')}</title>
</svelte:head>
<section class="hero">
	<div class="hero-content">
		<header>
			<h1>Vous accompagner dans la compréhension de vos enjeux de durabilité et le pilotage de votre transition</h1>
		</header>
		<p>
			Notre mission : vous guider dans la transition environnementale et sociale de votre organisation grâce à un
			accompagnement adapté — conseil, formation, inspiration — basé sur une approche pédagogique et bienveillante.
		</p>
	</div>

</section>
<section class="cards">
	<div class="card">
		<header>
			<h2>Conseil et accompagnement</h2>
		</header>
		<div class="card__content">
			<p>Démarches RSE et numérique responsable;</p>
			<p>Reporting de durabilité CSRD et analyse de double matérialité</p>
			<p>Eco-conception numérique;</p>
			<p>Logiciel libre et communs numériques;</p>
		</div>
	</div>
	<div class="card">
		<header>
			<h2>Formation et sensibilisation</h2>
		</header>
		<div class="card__content">
			<p>
				Formations sur catalogue et sur mesure : CSRD, RSE, éco-conception
			</p>
			<p>Ateliers :
				Fresque du Climat,
				Fresque du Numérique,
				Fresque des Low-tech
			</p>
			<p>Ateliers sur mesure</p>
		</div>
	</div>
	<div class="card">
		<header>
			<h2>Inspiration et nouveaux modèles</h2>
		</header>
		<div class="card__content">
			<p>Learning expeditions</p>
			<p>Ateliers prospective & fiction</p>
			<p>Ateliers expérientiels</p>
		</div>
	</div>
</section>
<section class="title-and-text  as-secondary">
	<header>
		<h2>Notre philosophie</h2>
	</header>
	<p>
		Nous avons la conviction que l’urgence écologique et sociale nécessite d'agir rapidement et concrètement pour
		<strong>transformer les modèles économiques</strong> : l'organisation de demain existera à l'intérieur des limites
		planétaires ou
		n'existera pas.
	</p>
	<p>
		Pour accompagner nos partenaires dans les transformations nécessaires, nous déployons des approches complémentaires
		: <strong>stratégiques</strong>, pour comprendre et piloter les enjeux ; <strong>techniques</strong>, pour mettre en
		oeuvre et outiller ;
		<strong>pédagogiques</strong>, pour transmettre et autonomiser.
	</p>
	<p>
		La philosophie qui nous porte est celle des <strong>communs</strong>, numériques ou non, car la coopération et
		l'entraide sont au
		coeur des enjeux de résilience et de durabilité. C'est également celle de la sobriété, car la transition ne peut
		advenir sans une remise en question de nos besoins, de nos usages et de nos manières de faire. C'est enfin celle de
		la <strong>joie</strong>, car nous sommes convaincus qu'un monde durable est un monde heureux, riche de liens,
		d'expériences et de
		sens.
	</p>

</section>

<section class="title-and-text as-tertiary">
	<header>
		<h2>Comment l’intégrer dans votre entreprise ?</h2>
	</header>
	<img src="{base}/img/expertises.drawio.svg" />
</section>

