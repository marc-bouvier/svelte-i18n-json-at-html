<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { base } from '$app/paths';
	import TeamMember from '$lib/TeamMember.svelte';
</script>

<svelte:head>
	<title>{$_('page.title')}</title>
</svelte:head>
<section id="mission" class="hero">
	<div class="hero-content">
		<header>
			<h1>
				Vous accompagner dans la compréhension de vos enjeux de durabilité et le pilotage de votre
				transition
			</h1>
		</header>
		<p>
			Notre mission : vous guider dans la transition environnementale et sociale de votre
			organisation grâce à un accompagnement adapté — conseil, formation, inspiration — basé sur une
			approche pédagogique et bienveillante.
		</p>
	</div>
</section>
<!--https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Card-->
<section id="services" class="cards">
	<section id="coaching" class="card">
		<header>
			<h2>Conseil et accompagnement</h2>
		</header>
		<div class="card__content">
			<p>Démarches RSE et numérique responsable;</p>
			<p>Reporting de durabilité CSRD et analyse de double matérialité</p>
			<p>Eco-conception numérique;</p>
			<p>Logiciel libre et communs numériques;</p>
		</div>
	</section>
	<section id="training" class="card">
		<header>
			<h2>Formation et sensibilisation</h2>
		</header>
		<div class="card__content">
			<p>Formations sur catalogue et sur mesure : CSRD, RSE, éco-conception</p>
			<p>Ateliers : Fresque du Climat, Fresque du Numérique, Fresque des Low-tech</p>
			<p>Ateliers sur mesure</p>
		</div>
	</section>
	<section id="inspire" class="card">
		<header>
			<h2>Inspiration et nouveaux modèles</h2>
		</header>
		<div class="card__content">
			<p>Learning expeditions</p>
			<p>Ateliers prospective & fiction</p>
			<p>Ateliers expérientiels</p>
		</div>
	</section>
</section>
<section id="philosophy" class="title-and-text as-secondary">
	<header>
		<h2>Notre philosophie</h2>
	</header>
	<p>
		Nous avons la conviction que l’urgence écologique et sociale nécessite d'agir rapidement et
		concrètement pour
		<strong>transformer les modèles économiques</strong> : l'organisation de demain existera à l'intérieur
		des limites planétaires ou n'existera pas.
	</p>
	<p>
		Pour accompagner nos partenaires dans les transformations nécessaires, nous déployons des
		approches complémentaires : <strong>stratégiques</strong>, pour comprendre et piloter les enjeux
		; <strong>techniques</strong>, pour mettre en oeuvre et outiller ;
		<strong>pédagogiques</strong>, pour transmettre et autonomiser.
	</p>
	<p>
		La philosophie qui nous porte est celle des <strong>communs</strong>, numériques ou non, car la
		coopération et l'entraide sont au coeur des enjeux de résilience et de durabilité. C'est
		également celle de la sobriété, car la transition ne peut advenir sans une remise en question de
		nos besoins, de nos usages et de nos manières de faire. C'est enfin celle de la
		<strong>joie</strong>, car nous sommes convaincus qu'un monde durable est un monde heureux,
		riche de liens, d'expériences et de sens.
	</p>
</section>

<section id="how-to-integrate" class="title-and-text as-tertiary">
	<header>
		<h2>Comment l’intégrer dans votre entreprise ?</h2>
	</header>
	<p>
		Avec la double expertise entreprise et numérique responsable, Rezofora offre des services
		articulés autour de sujets clés et complémentaires pour la suite de l'entreprise.
	</p>
	<img src="{base}/img/expertises.drawio.svg" />
</section>

<section id="strengths" class="title-and-text as-secondary">
	<header>
		<h2>Nos atouts</h2>
	</header>

	<div class="quadrants">
		<div class="quadrant">
			<p>
				<strong>Une exigence technique forte, portée par une équipe expérimentée</strong>
				qui maîtrise les notions, outils et référentiels incontournables
			</p>
		</div>
		<div class="quadrant">
			<p>
				<strong>Des compétences multidisciplinaires</strong>
				— RSE, numérique, développement informatique, stratégie, formation — pour mener à bien des projets
				complexes.
			</p>
		</div>
		<div class="quadrant">
			<p>
				<strong>L'ambition d'amener nos clients plus loin</strong>
				et de les aider à réfléchir aux changements de modèles souhaitables pour une soutenabilité réelle
			</p>
		</div>
		<div class="quadrant">
			<p>
				<strong>La capacité à accompagner</strong>
				— au sens le plus noble du terme — et autonomiser nos clients sur des enjeux cruciaux, avec bienveillance
				et pédagogie
			</p>
		</div>
	</div>
</section>

<!--<section id="testimonials" class="title-and-text as-tertiary">-->
<!--	<header>-->
<!--		<h2>Ils nous font confiance</h2>-->
<!--	</header>-->
<!--</section>-->

<section id="know-us" class="title-and-text as-primary" style="margin-bottom: 0;">
	<header>
		<h2>Nous connaître</h2>
	</header>
	<ul
		style="display: grid;
        grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
        grid-column-gap: 1.5rem;
        grid-row-gap: 1.5rem;
"
	>
		<!--		https://inclusive-components.design/cards/-->
		<TeamMember
			name="Bruno Thomas"
			topic="Développement informatique"
			bio="Informaticien depuis 25 ans, je me suis intéressé dèsn le début à l'open source et à l'artisanat logiciel. Le passage par une ESN m'a questionné sur l'utilité des applications qu'on y développait. J'ai repris goût à ce que je faisais grâce à l'apprentissage de l'agilité et du lean et j'ai été développeur coach chez Orange. J'ai depuis pris conscience de l'importance de l'impact de l'informatique sur les enjeux environnementaux et me suis spécialisé en éco-conception logicielle."
			picture="{base}/img/team-members/bt_360-360-px.jpg"
		/>
		<TeamMember
			name="Adeline Agut"
			topic="Développement durable"
			bio="Ingénieur de formation, je travaille depuis plus de 10 ans dans le domaine de l'environnement et du développement durable. J'ai travaillé aussi bien pour des start-ups que pour des grands groupes. Mon rôle est d'accompagner les organisations dans leur transition vers des modèles plus durables, en adéquation avec les défis climatiques et environnementaux axquels nous faisons face."
			picture="{base}/img/team-members/aa_360-360-px.jpg"
		/>
		<TeamMember
			name="Marc Bouvier"
			topic="Développement informatique - Facilitation"
			bio="Développeur logiciel depuis plus de 12 ans, mon constat est simple : le logiciel est omniprésent dans nos vies et nous ne pouvons pas ignorer ses effets sur les individus, les groupes et l'écosystème fini qu'est notre planète. Je reste fasciné par l'incroyable impact que peuvent avoir quelques lignes de code informatique. Pour moi, les communs numériques frugaux, conviviaux et accessibles sont des outils au fort potentiel émancipateur pour faire face l’urgence planétaire. J'agis en accompagnant les entreprises, en animant des communautés, en contribuant à l'Open-source, en facilitant des ateliers d'intelligence collective et par le partage de connaissances."
			picture="{base}/img/team-members/mb_360-360-px.jpg"
		/>
		<TeamMember
			name="Elise Martin"
			topic="Développement durable"
			bio="Consultante et bizdev pendant 17 ans en ENS autour de sujets data et startup numériques,  j'ai décidé de mettre en oeuvre mes capacités à comprendre et solutionner les problèmes d'une organisation autour de sujets plus larges que le numérique. Ma compréhension est que tout comme le numérique est passé d'une méthodologie d'optimisation à une méthodologie d'agilité, les organisations peuvent passer de logiques de performances à celles de robustesse tout en mettant en valeur ses talents et ressources"
			picture="{base}/img/team-members/em_360-360-px.jpg"
		/>
	</ul>
</section>

<style>
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
</style>
