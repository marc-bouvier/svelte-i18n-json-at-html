<script lang="ts">
	interface Props {
		label?: string;
		description?: string;
		href?: string;
		picturePath?: string;
		pictureHeight?: string;
		pictureWidth?: string;
	}

	let {
		label = '',
		description = '',
		href = '',
		picturePath = '',
		pictureHeight = '',
		pictureWidth = ''
	}: Props = $props();
</script>

<li style="list-style: none">
	<figure>
		<a {href} style="display: block;width: 18rem;height: 6rem">
			<img
				src={picturePath}
				alt={label}
				height={pictureHeight}
				width={pictureWidth}
				style="object-fit: scale-down"
			/>
		</a>
		<figcaption>
			<p>{description}</p>
		</figcaption>
	</figure>
</li>

<style>
</style>
