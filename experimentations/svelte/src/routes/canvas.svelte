<script lang="ts">
	import { onMount } from 'svelte';
	import { LoremIpsum } from 'lorem-ipsum';

	let cp = null;
	let canvasId =
		'https://iiif.wellcomecollection.org/presentation/b14658197/canvases/b14658197.jp2';

	const lorem = new LoremIpsum({
		sentencesPerParagraph: {
			max: 8,
			min: 4
		},
		wordsPerSentence: {
			max: 16,
			min: 4
		}
	});

	let annoChecked = false;
	const annotationStyle = {
		hidden: 'true',
		borderWidth: '5px',
		borderStyle: 'solid',
		'box-shadow': '0 0 0',
		opacity: '100%',
		':hover': {
			'box-shadow': '0 0 0 1000px black',
			opacity: '50%'
		}
	};

	onMount(async () => {
		annoChecked = false;
		cp = document.getElementById('cp');

		await cp.vault.loadManifest('https://iiif.wellcomecollection.org/presentation/b14658197');
		cp.setCanvas(canvasId);

		let anno = {
			type: 'Annotation',
			motivation: ['tagging'],
			target: canvasId + '#1250,1780,400,400'
		};
	});

	const createAnno = async (id: string, x: number, y: number, width: number, height: number) => {
		let anno = {
			type: 'Annotation',
			motivation: ['tagging'],
			target: canvasId + `#${x},${y},${width},${height}`
		};

		anno = await cp.vault.load(id, anno);
		anno = cp.createAnnotationDisplay(anno);
		anno.className = 'annotation';

		anno.addEventListener('onClick', handleAnnoClick);

		anno.applyStyle(annotationStyle);

		cp.annotations.add(anno);
	};

	const handleAnnotations = () => {
		if (!annoChecked) {
			createAnno('test1', 50, 1200, 650, 600);
			createAnno('test2', 1000, 1000, 400, 400);
			createAnno('test3', 2500, 1200, 950, 500);
		} else {
			cp.annotations.getAll().forEach((id) => {
				cp.annotations.remove(id);
			});
		}

		annoChecked = !annoChecked;
	};

	const handleAnnoClick = (target, anno) => {
		const options = {
			padding: 50,
			nudge: true,
			immediate: false
		};
		generateParagraph();
		cp.goToTarget(target, options);
	};

	const getRandInt = (min: number, max: number): number => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const generateParagraph = () => {
		let text = lorem.generateParagraphs(getRandInt(1, 5));
		let container = document.getElementById('text-container');

		if (!container) return;

		// empty container
		container.innerHTML = '';

		let t = document.createElement('h2');
		t.innerText = lorem.generateSentences(1);
		container.appendChild(t);

		text.split('\n').forEach((paragraph) => {
			let p = document.createElement('p');
			p.innerText = paragraph;
			container.appendChild(p);
		});
	};

	const startTour = (e) => {
		if (!cp) return;

		const x = getRandInt(20, 3000),
			y = getRandInt(20, 1500),
			width = getRandInt(500, 1000),
			height = getRandInt(200, 800);

		const target = { x, y, width, height };
		const options = {
			padding: 50,
			nudge: true,
			immediate: false
		};

		console.log('target', target);
		generateParagraph();
		cp.goToTarget(target, options);
	};
</script>

<h1>Canvas Panel</h1>

<svelte:head>
	<script src="https://cdn.jsdelivr.net/npm/@digirati/canvas-panel-web-components@latest"></script>
</svelte:head>

<div class="toolbar">
	<button on:click={startTour}>Play tour!</button>

	<div class="input">
		<input type="checkbox" name="annoInput" on:change={handleAnnotations} />
		<label for="annoInput">Annotations</label>
	</div>
</div>

<div class="container">
	<div class="text-container" id="text-container" />
	<div class="canvas-container">
		<canvas-panel id="cp" />
	</div>
</div>

<style id="cp-test-page">
	:global(html) {
		background: black;
		color: white;
	}
	.toolbar {
		display: flex;
		gap: 1.5rem;
		margin-bottom: 2%;
	}

	.container {
		max-height: 60vh;
		display: flex;
	}

	.text-container {
		max-height: 100%;
		width: 30%;
		background: black;
		color: azure;
		padding: 0 1.5rem 1.5rem 1.5rem;
		overflow-y: scroll;
	}

	.canvas-container {
		min-height: 100%;
		width: 70%;
	}
</style>
