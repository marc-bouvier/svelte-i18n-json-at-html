<script lang="ts">
	export let name: string = '';
	export let topic: string = '';
	export let bio: string = '';
	export let picture: string = '';
</script>
<div>
	<figure>
		<img src="{picture}" />
		<figcaption>
			{ name }
		</figcaption>
	</figure>
	<p>{ topic }</p>
	<p>{ bio }</p>
</div>

