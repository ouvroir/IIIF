---
title: Atlas
description: Atlas viewer is a super-fast, abstract IIIF Viewer.
website: https://atlas.stephen.wf/
github: https://github.com/atlas-viewer/atlas
documentation: 
---
# Title

- [Description](#description)
  - [Founding institutions, contributors](#founding-institutions-contributors)
  - [Objectives](#objectives)
  - [Average use case](#average-use-case)
  - [Roadmap and future developement](#roadmap-and-future-developement)
  - [Useful links](#useful-links)
- [Compliance with IIIF](#compliance-with-iiif)
  - [Image API](#image-api)
    - [Compatible versions](#compatible-versions)
    - [Image formats](#image-formats)
  - [Presentation API](#presentation-api)
    - [Compatible versions](#compatible-versions-1)
    - [Manifest support](#manifest-support)
      - [Image input formats](#image-input-formats)
      - [Support of annotations](#support-of-annotations)
        - [Image annotations](#image-annotations)
        - [Text annotations](#text-annotations)
        - [Search API](#search-api)
- [Technical description](#technical-description)
  - [Version and installation](#version-and-installation)
  - [Dependendcies and tech stack](#dependendcies-and-tech-stack)
  - [Differences with OpenseaDragon](#differences-with-openseadragon)
  - [Usability](#usability)
    - [Vanilla JS](#vanilla-js)
    - [Svelte](#svelte)
    - [React](#react)
    - [Others](#others)
  - [Compliance with prototype features](#compliance-with-prototype-features)

## Description

### Founding institutions, contributors

Author of Atlas is Stephen Fraser (Digirati). 

### Objectives

Display with deep zoom content with complex and composable user interactions.

### Average use case

### Roadmap and future developement

2022-07-19 -> currently an alpha is available

The author started a test-driven campain to produce a more stable version of library:
> Atlas is currently available on NPM @atlas-viewer/atlas although at the moment the API is likely to change. There is a test-driven rewrite running in parallel that will hopefully mark the point where the viewer can be more widely used standalone without a wrapper like canvas panel.


### Useful links

- [This issue on the Atlas repo](https://github.com/atlas-viewer/atlas/issues/8) with explanations from the author himself.

## Compliance with IIIF 

Atlas doesn't look its build to support IIIF manifests although current [dependencies](https://www.npmjs.com/package/@atlas-viewer/atlas?activeTab=dependencies) suggest that Atlas might include some helpers:
- @atlas-viewer/iiif-image-api 
- @iiif/presentation-3
- @iiif/vault
- @iiif/vault-helpers

> It supports the IIIF Image API but won't be quite as seamless as Canvas Panel (but you do get full control). You will still have to load and parse the manifest and then pass down the image service.
> 
> Vault and Vault helpers in IIIF Commons will hopefully be the glue in the middle to make it easy to render all types of IIIF in various viewers (including Atlas)
>
> *Stephen Fraser, https://github.com/atlas-viewer/atlas/issues/8* 

### Image API
#### Compatible versions
#### Image formats

### Presentation API
#### Compatible versions
#### Manifest support
##### Image input formats
##### Support of annotations
###### Image annotations
###### Text annotations
###### Search API


## Technical description

### Version and installation

As of 2022-07-17, Atlas in alpha version `2.0.0-alpha.16` and is available via npm: 
```
npm i -S @atlas-viewer/atlas
```

### Dependendcies and tech stack

From [package.json](https://github.com/atlas-viewer/atlas/blob/672327d70f9c8ab5ff726a65486c5d2c67c39751/package.json).

```json
"dependencies": {
    "@atlas-viewer/dna": "^0.5.0",
    "@atlas-viewer/iiif-image-api": "^1.2.5",
    "@hyperion-framework/types": "^1.0.0",
    "@hyperion-framework/vault": "^1.0.0",
    "@popmotion/popcorn": "^0.4.4",
    "nanoid": "^3.1.9",
    "normalize-wheel": "^1.0.1",
    "popmotion": "^8.7.6",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-reconciler": "^0.25.1",
    "react-use-measure": "^2.0.1",
    "scheduler": "^0.19.1",
    "stats.js": "^0.17.0",
    "style-value-types": "^3.1.7",
    "typescript-memoize": "^1.0.0-alpha.3"
  }
```

Dependencies may have change since the creation of this document. 

### Differences with OpenseaDragon

See [this issue](https://github.com/atlas-viewer/atlas/issues/8) for more details

> When you add content to OpenSeadragon you can add 2 types of resource: A tile source (image) or an overlay (html). These are added and positioned in a "world" so you first figure out where everything needs to go - and then you add it to OpenSeadragon. This is a fairly flat structure where a world contains a list of images and overlays.
>
> Atlas is a tree-structure, where you can create "containers" and position multiple images relative to that container. Each image or other resource is positioned for you relative to that container, so you can move it around and everything stays where you put it. This is modelled after the IIIF Canvas and means you can maintain the same concepts from IIIF (like annotation positions) in your viewer.
> 
> *Stephen Fraser, https://github.com/atlas-viewer/atlas/issues/8*

### Usability

#### Vanilla JS
#### Svelte 
#### React
#### Others

### Compliance with prototype features
