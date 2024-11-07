<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>{$_('header.about')}</title>
</svelte:head>
<div class="about">
	<section class="about__values">
		<h1>{$_('header.values')}</h1>
		<p>Fermement convaincus que l’urgence écologique et sociale doit nous mener à transformer nos modèles économiques
			et sociétaux, nous sommes guidés par des valeurs fondamentales qui se traduisent également par des partis pris
			dans l’accompagnement que nous proposons :</p>
		<ul>
			<li>Responsabilité environnementale : nos prestations visent avant tout à accompagner nos clients dans la
				transition
				écologique. Nous nous appliquons également la notion de responsabilité environnementale en tentant de minimiser
				l’empreinte écologique de nos activités.
			</li>
			<li>Responsabilité sociétale : les enjeux sociaux sont indissociables de la transition écologique. Dans le secteur
				du numérique, ces enjeux trouvent un écho à travers notamment les notions d’accessibilité, de respect du temps
				d’attention des utilisateurs, de protection des données personnelles…
			</li>
			<li>Sobriété : nous considérons que la sobriété est la conséquence logique de la nécessaire transition
				écologique.
				Nous ne croyons pas à un techno-solutionnisme miraculeux qui nous permettrait de maintenir le mode de vie
				occidental actuel tout en respectant les limites planétaires : nous sommes convaincus – car la science est
				unanime
				à ce sujet – que la sobriété (heureuse!) est la voie à suivre et à promouvoir pour un futur durable. Pas de
				transition écologique sans sobriété : là où c'est possible, nous proposerons toujours des solutions orientées
				vers
				moins d'utilisation des ressources, vers des changements de comportements, vers de la low-tech.</li>
			<li>Open source et communs : nous croyons en une économie des communs. Nous privilégions systématiquement le
				recours
				à des outils open source et nous contribuons également à plusieurs projets de communs, numériques ou pas. Dès
				que
				c'est possible, nous travaillons en open data et partageons les enseignements tirés de nos accompagnements.
			</li>
			<li>Transparence et pédagogie : nous tentons d'être aussi transparents que possible sur la manière dont nos
				services
				et notre organisation fonctionnent. Nous tentons de vous emmener aussi souvent que possible sous le capot de nos
				outils, et essayons de vulgariser les sujets les plus techniques afin que chacun puisse comprendre les enjeux
				d'aujourd'hui.
			</li>
		</ul>
	</section>
	<section class="about__project">
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
	<section class="about__ecosystem">
		<h1>Partenaires/écosystème</h1>
		<p>{$_('temp.lipsum')}</p>
	</section>
	<section class="about__team">
		<h1>Equipe</h1>
		<p>{$_('temp.lipsum')}</p>
	</section>
	<section class="about__faq">
		<h1>FAQ</h1>
		<p>{$_('temp.lipsum')}</p>
	</section>
</div>
