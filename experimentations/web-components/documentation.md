# Web components


## Tutorial: custom elements with Svelte

### 1. Setup

```
npm init vite
```
```
Need to install the following packages:
create-vite
Ok to proceed? (y) y
✔ Project name: … custom-element
✔ Select a framework: › svelte
✔ Select a variant: › svelte-ts
```

```
cd custom-element 
npm install
npm run dev
```

### 2. Modify compiler options

In `vite.config.js`:
```js
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({
    compilerOptions: {
      customElement: true
    }
  })]
})
```

### 3. Prepare svelte project

- remove `App.svelte`, you won't need it anymore
- create `MyCustomElement.svelte` in `./src/lib/`
- modify `./src/main.ts` to
```js
import MyCustomElement from './lib/MyCustomElement.svelte'

customElements.define('my-custom-element', MyCustomElement);
```
- modify `./index.html` to
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Custom Element</title>
  </head>
  <body>
    <my-custom-element></my-custom-element>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

### 4. Write code for your custom element

In `./src/lib/MyCustomElement.svelte`
```html
<svelte:options tag="my-custom-component" />

<script lang="ts">
  // ... custom element js code
</script>

<!-- my-custom-element html goes here -->
```



## Readings

- [Web components in 2021: the Good, the Bad and the Ugly](https://dev.to/emileperron/web-components-in-2021-the-good-the-bad-and-the-ugly-3kg)
  
- Rich Harris, [Why I don't use web components](https://dev.to/richharris/why-i-don-t-use-web-components-2cia) (don't forget to check discussions in the comments section!! and [this gist](https://gist.github.com/WebReflection/71aed0c811e2e88e3cd3c647213f0e6c))
- More on Zotero...
