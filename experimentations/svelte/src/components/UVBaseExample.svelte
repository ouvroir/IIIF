<script lang="ts">
	import 'universalviewer/dist/esm/index.css';
	import { onMount } from 'svelte';

	export let uv: any = null;

	let m = 'https://oncs.bib.umontreal.ca/generateur/ouvroir/righettino/png.json';
	// let m = 'https://wellcomelibrary.org/iiif/b18035723/manifest';

	fetch(m)
		.then((res) => res.json())
		.then((data) => console.log(data));

	onMount(async () => {
		const container = document.getElementById('uv') as HTMLDivElement;

		if (container) {
			uv.init(container, { manifest: m });
		}
	});
</script>

<svelte:head />

<h3>Universal Viewer Sample Image</h3>

<div class="uv" id="uv" />

<style>
	.uv {
		min-height: 40rem;
	}
</style>
