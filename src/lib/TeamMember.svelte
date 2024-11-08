<script lang="ts">
	export let name: string = '';
	export let topic: string = '';
	export let bio: string = '';
	export let picture: string = '';
</script>

<li class="team-member">
	<img class="member-picture" src={picture} style="border-radius: 50%;margin: 2rem	" />
	<p style="font-weight: bold;margin: .125rem">{name}</p>
	<p style="font-weight: bold;margin: .125rem">{topic}</p>
	<p style="margin: .125rem">{bio}</p>
</li>

<style type="text/scss">
	.team-member {
		/*border: 1px solid;*/
		border-radius: 0.25rem;
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.team-member p {
		color: var(--White);
	}
</style>
