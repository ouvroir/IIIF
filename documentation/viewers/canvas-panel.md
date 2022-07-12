---
title: Canvas Panel
description: Canvas Panel is a Web Component that renders a IIIF Canvas and the annotations on it.
website: https://iiif-canvas-panel.netlify.app/
github: https://github.com/digirati-co-uk/iiif-canvas-panel
documentation: https://iiif-canvas-panel.netlify.app/
---
# Canvas Panel

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
  - [Dependendcies and tech stack](#dependendcies-and-tech-stack)
  - [Installation and usability](#installation-and-usability)
    - [Vanilla JS](#vanilla-js)
    - [Svelte](#svelte)
    - [React](#react)
    - [Others](#others)
  - [Compliance with prototype features](#compliance-with-prototype-features)
    - [Basic](#basic)
    - [Annotations](#annotations)
    - [Text](#text)

## Description
> Canvas Panel is a **Web Component** that renders a IIIF Canvas and the annotations on it.
> 
> Canvas Panel is not a IIIF Viewer, like Mirador or Universal Viewer. It's not a full application - it's a component of your application. On its own, Canvas Panel doesn't render a IIIF Manifest - but it can be used as the rendering surface in any kind of IIIF application you want to build. You can see Canvas Panel used this way in some of the demo applications. It also provides a powerful API for drawing annotations on the canvas and responding to user interaction with the canvas. 

### Founding institutions, contributors

[Digirati](https://digirati.com/about/)
### Objectives
### Average use case

> The power of Canvas Panel is more apparent when you render a canvas that isn't the 99% use case - when the canvas:
> 
> - has one image, but that image doesn't target the whole canvas.
> - has more than one image on a canvas (e.g., a digitally reconstituted manuscript from the IIIF Cookbook) .
> - has time-based media, text or other resources.
> 
> https://iiif-canvas-panel.netlify.app/docs/examples/show-a-canvas


### Roadmap and future developement

The project started as a React component.

Satus of this project (gh issue):
https://github.com/digirati-co-uk/canvas-panel/issues/706


### Useful links


## Compliance with IIIF 

### Image API
#### Compatible versions
#### Image formats

### Presentation API
#### Compatible versions
> Any IIIF resource loaded into Vault is then available through Vault as normalised, 100% compliant IIIF Presentation API 3.0, even if it started out as IIIF Presentation 2.0, or 2.1. This process of normalisation gives you a consistent programming interface, without having to worry about the various forms that the JSON-LD can take before version 3 of the Presentation API.
> 
> https://iiif-canvas-panel.netlify.app/docs/components/vault


#### Manifest support

Manifest are supported. See [Compatible versions](#compatible-versions-1).


##### Image input formats
##### Support of annotations

> In IIIF, content is associated with canvases through Annotations, using the W3C Web Annotation Data Model. This model has a wider scope than IIIF, and unlike the Presentation 3.0 specification it allows the same intention to be expressed in different ways. It's also JSON-LD 1.0, not 1.1 like IIIF. With annotations, there's no further specification to normalise the data to.
>
> We can still program against annotations in Vault, and use them with Canvas Panel, but (in the current code) Vault cannot coerce every possible annotation into normalised types.
> 
> https://iiif-canvas-panel.netlify.app/docs/examples/annotations


###### Image annotations
###### Text annotations

> Text is one area where for practical reasons the component supports more that just IIIF and W3C. **For spatial content, the OCR formats METS-ALTO and hOCR should also be supported**. For temporal content, WebVTT should be supported. In both cases the content in these formats can be translated into something that targets the canvas the same way W3C annos do.
>
> Canvas panel treats supplementing annotations differently from other textual annotations. And it treats METS-ALTO and hOCR files linked via annotation or seeAlso, and WebVTT, as if they were annotations.
>
> By default (as with the Mirador plugin) Canvas Panel will favour OCR formats over W3C Annotations, if it finds links to both. This is because in practice the W3C annotations are very likely to have been generated from the OCR formats in the first place.
>
> https://iiif-canvas-panel.netlify.app/docs/examples/handling-text


[METS-ALTO](https://veridiansoftware.com/knowledge-base/metsalto/) - METS and ALTO are XML standards maintained by the Library of Congress.
[hOCR](http://kba.cloud/hocr-spec/1.2/) - OCR Workflow and Output embedded in HTML


###### Search API


## Technical description

4 components are available:
- canvas-panel: that's the main component to render canvases from a manifest
- image-service: only takes an image as an input and offers basic functionannalities like zoom, responsivness, etc. (like an <img> tag on steroids)
- Vault: component to load, normalize and manipulate a manifest.
- Vault helpers: adds functionnalities to the Vault component

### Dependendcies and tech stack

From canvas-panel's [package.json](https://github.com/digirati-co-uk/iiif-canvas-panel/blob/main/packages/canvas-panel/package.json):
```json
{
  ...,
  "dependencies": {
    "@atlas-viewer/atlas": ">=2.0.0-alpha.10",
    "@atlas-viewer/iiif-image-api": "2.*",
    "@iiif/presentation-2": "1.*",
    "@iiif/presentation-3": "1.*",
    "@iiif/vault": "0.9.*",
    "@iiif/vault-helpers": "0.9.*",
    "@preact/compat": "17.*",
    "@react-hook/media-query": "^1.1.1",
    "preact": "^10.*",
    "react-error-boundary": "^3.1.4",
    "react-iiif-vault": "0.9.*"
  },
  ...
}
```

- [Atlas](https://github.com/atlas-viewer/documentation): used for viewer
- Preact : used to build web components


### Installation and usability
#### Vanilla JS
#### Svelte 

#### React
#### Others

### Compliance with prototype features

#### Basic 
- [x] I can move in all directions
- [x] I can zoom on an image
- [x] When I click on an item I can zoom on it

#### Annotations
- [x] The background image is blurred and in black and white, so our item is put forward.
- [ ] When I have selected my item and the text box appears, the item must be enlarged (always with this color difference between the background and the item).
- [ ] When the mouse passes over the item, its title appears

#### Text
- [x] When I click on the item, the corresponding text box appears
- [x] Display the whole text area or a part of it with the possibility to scroll
- [ ] Be able to choose the location of the text area according to the item area of the item area (if item on the right of the image then text on the left)
