<script lang="ts">
	import { UVBaseExample } from '$components';
	import { onMount } from 'svelte';

	let uv: any = null;

	onMount(async () => {
		uv = await import('universalviewer');
	});
</script>

<svelte:head />

<h1>Universal Viewer Experimentations</h1>

{#if uv}
	<UVBaseExample {uv} />
{/if}
