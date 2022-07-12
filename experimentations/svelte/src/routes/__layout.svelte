<header>
	<div class="nav">
		<a href="/">
			<h1>IIIF Experimentations</h1>
		</a>

		<ul class="nav-btns">
			<li><a href="/osd">OpenSeeDragon</a></li>
			<li><a href="/diva">Diva.js</a></li>
			<li><a href="/canvas">Canvas-panel</a></li>
			<li><a href="/uv">Universal viewer</a></li>
		</ul>
	</div>
</header>

<main>
	<slot />
</main>

<style>
	:global(html) {
		padding: 1.5rem;
	}

	a {
		color: whitesmoke;
		text-decoration: none;
	}
	.nav {
		display: flex;
		align-items: baseline;
	}

	.nav-btns {
		display: flex;
		gap: 1.5rem;
	}
</style>
