<script lang="ts">
	import { onMount } from 'svelte';
	import { OSDBaseExample, OSDBaseExampleAtkins, OSDPrototype } from '$components';

	let osd: any = null;

	onMount(async () => {
		osd = await import('openseadragon');
	});
</script>

<h1>OpenSeadragon Experimentations</h1>

{#if osd}
	<h2>Base example</h2>
	<OSDBaseExample {osd} />

	<h2>Base example with atkins manifest</h2>
	<OSDBaseExampleAtkins {osd} />

	<h2>Proto overlay</h2>
	<OSDPrototype {osd} />
{/if}
