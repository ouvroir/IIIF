<script lang="ts">
	import { onMount } from 'svelte';

	export let osd: any = null;

	onMount(async () => {
		fetch('https://gallica.bnf.fr/iiif/ark:/12148/btv1b8478987h/manifest.json')
			.then((res) => res.json())
			.then((manifest) => {
				//pour chaque element canvas
				let tiles = manifest.sequences[0].canvases.map((c) => {
					//retourne un objet pour openSeadragon
					return {
						'@id': c.images[0].resource.service['@id'],
						'@context': c.images[0].resource.service['@context'],
						height: c.height,
						width: c.width
					};
				});

				console.log('nb images', tiles.length);
				osd.default({
					id: 'test1',
					prefixUrl: '/node_modules/openseadragon/build/openseadragon/images/',
					preserveViewport: true,
					visibilityRatio: 1,
					minZoomLevel: 1,
					defaultZoomLevel: 1,
					sequenceMode: true,
					tileSources: tiles
				});
			});
	});
</script>

<h3>openSeadragon Base Example</h3>

<div id="test1" style="width: 800px; height: 500px;" />
