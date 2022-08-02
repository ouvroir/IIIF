<script lang="ts">
  import { onMount } from 'svelte'

  let parser = new DOMParser()
  let chapter_title
  let section = null

  onMount(async () => {
    let html = await fetch('data/Test.html').then((res) => res.text())
    console.log('html', html)
    let content = parser.parseFromString(html, 'text/html')

    section = content.getElementById('CG01')

    let container = document.getElementById('container')
    container.appendChild(section)
  })
</script>

<h1>Righettino</h1>

<div id="container">
  <!-- {#if section}
    {@html section}
  {/if} -->
</div>

<style>
  h3 {
  }
</style>
