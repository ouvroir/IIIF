---
title: Righettino
description: #string
tags: [] #comma separated
website: #project url
github: #repo url
lead: #string
team: [] #comma separated
since: #YYYY-[MM]-[DD]
draft: true #alsways start with true, change to false to publish
lang: #fr ou en
---

# Righettino

- [Description](#description)
  - [Related projects](#related-projects)
- [Technical description](#technical-description)
  - [Dependencies and technical stack](#dependencies-and-technical-stack)
  - [Installation](#installation)
  - [Remarks](#remarks)
- [Project organization](#project-organization)
  - [State of the art](#state-of-the-art)
  - [Roadmap](#roadmap)
    - [Participants' assignements](#participants-assignements)
    - [Critical steps during development](#critical-steps-during-development)
    - [Future developements](#future-developements)
- [Founding institutions, contributors](#founding-institutions-contributors)
  - [Financial support](#financial-support)
  - [Present contributors](#present-contributors)
  - [Past contributors](#past-contributors)
- [Useful links](#useful-links)


## Description

Righettino est un prototype d’application développé au sein de l’Ouvroir d’histoire de l’art et de muséologie numérique. Il s’appuie sur les travaux de recherche de Pr Denis Ribouillaut (Université de Montréal) sur le théologien et dessinateur amateur Girolamo Righettino. Ce dernier, connu pour ses dessins de ville italiennes présentant des cadres allégoriques richement ornés réalisés à la fin XVIe siècle. Sa seule œuvre qui nous soit parvenue est une vue de Turin, datant de 1583, actuellement conservée aux Archives nationales de Turin. Cette œuvre, richement détaillée et extraordinairement complexe en terme de programme allégorique est pour ainsi dire impossible à publier dans le cadre du format traditionnel du livre sans perdre beaucoup de son attrait. Ce projet qui consiste en la publication numérique du dessin et du texte expliquant sa signification, est l’occasion de réfléchir à la manière dont la publication numérique en histoire de l’art peut permette d’accompagner de meilleures lectures des images de la Renaissance, en particulier de celles qui possèdent des structures diagrammatiques et qui jouent sur la combinaison de divers modes de représentation.

Dans le cadre plus large du partenariat de recherche CIÉCO « Des nouveaux usages des collections dans les musées d’art » qu’accompagne l’Ouvroir, cette problématique sur les opérations de lecture et d’interprétation forme un cas d’usage visant à évaluer les technologies liées au protocole IIIF (International Image Interoperability Framework) et de son écosystème.

Cette étude de cas a permis de tester plusieurs outils d’exposition virtuelle (exhibit, storiiies, juncture), les outils de développement web disponibles actuellement (notamment OpenSeaDragon et Canvas Panel) ainsi qu’un outil de gestion et de diffusion d’images IIIF (Cantaloupe). Les essais réalisés avec ces outils sont décris sur le répertoire IIIF de l’Ouvroir.

### Related projects
- [Encyclopédie](https://ouvroir.umontreal.ca/fr/projets/encyclopedie/)
- [Expots](https://ouvroir.umontreal.ca/fr/projets/expots/)

## Technical description

### Dependencies and technical stack
- Vanilla JS with [Vite](https://vitejs.dev/)
- [OpenSeadragon](https://openseadragon.github.io/)
    
    *OpenSeadragon plugins*
  - [OpenSeadragonHTMLelements](https://github.com/antonioxdias/OpenSeadragonHTMLelements)
  - [Openseadragon-svg-overlay.js](https://github.com/openseadragon/svg-overlay)
  - [openseadragon-imaginghelper](https://github.com/openseadragon-imaging/openseadragon-imaginghelper/blob/master/src/imaginghelper.js)
  - [openseadragon-viewerinputhook](https://github.com/openseadragon-imaging/openseadragon-viewerinputhook)


### Installation

In a terminal run these commands:

```bash
git clone https://github.com/ouvroir/righettino.git
cd righettino
npm install
npm run dev
```
### Remarks

* No web frameworks (Svelte is what we used in the first place) have been used in order to facilitate the implementation of interactions. This is due to the fact that modern web frameworks use what can be refered to the _component paradigm_ : different HTML elements (visible or not on a web page) are contained inside (mostly) autonomous *components* that have their own state (data attributes), functions, as well as a specific life cylcle (initialized, mounted, destroyed). This lifecycle is important to consider because it dictates whether or not the component and its HTML source code are placed in the DOM or not : on intialization a component can execute some functions before it is visible in the DOM - at initialization, a component does not have access to the DOM which means that one cannot use a simple function such as _document.querySelector(...)_. As soon as it placed in the DOM by the client server, we say that the component is _mounted_. Usually, the component's dependencies (ie. external librairies) are loaded before the component is mounted. This becomes a problem when the librairies being loaded need to access the DOM in order to initialize properly (ie. OpenSeedragon). In order to overcome this problem, it is essential to load the dependecy only when the component can access the DOM (when it is mounted). This workaround is not a good practice in itself as it forces to interfer with the import mecanisms employed by the framewrok.

* **OpenSeadragon cannot load images from a IIIF manifest** (see [this post](https://stackoverflow.com/questions/74801854/openseadragon-iiif-viewer-does-not-work-with-manifest-json-in-a-nextjs-applicati) on Stack). Instead images can be loaded from an [info.json](https://iiif.io/api/image/3.0/#5-image-information).

## Project organization

### State of the art

- Virtual exhibitions tools
  - [Exhibit](https://www.exhibit.so/)
  - [Storiies](http://storiiies.cogapp.com/)
  - [Visual essays](https://dev.visual-essays.app/)
  - [Juncture](https://juncture-digital.org/)

None of the tools described above have enough customization possiblities in term of user interaction. Experimentations with these tools may be found in the [IIIF github repository](https://github.com/ouvroir/IIIF/tree/main/documentation/exhibition_guided_tour) of lab Ouvroir.

- IIIF viewers

  - [Universal Viewer](https://universalviewer.io/) - not flexible enough in terms of interactions
  - [Mirado](https://github.com/IIIF/mirador) - not flexible enough in terms of interactions
  - [Diva.js](https://diva.simssa.ca/) - could not install (documentation missing)
  - [Canvas Panel](https://iiif-canvas-panel.netlify.app/) - still in beta when tested. Important features were missing from the package (e.g., critical display of svg annotations). Should have been the prefered option because its designed is more compatible and easy to use with modern web development tools/framework. Interface is straightforward and easy to use. An extended review can be found on the [IIIF repository](https://github.com/ouvroir/IIIF/blob/main/documentation/viewers/canvas-panel.md)
  - [OpenSeaDragon](https://openseadragon.github.io/)



### Roadmap

#### Participants' assignements

**Preliminary work**
- Analysis of the View of Turin (Ribouillaut & co)
- Encoding the analytical text in XML-TEI (Ribouillaut & co)

**Design and implementation of the prototype**

*Spring 2022*
- Detouring svg figures in Photoshop (Daniel Richer, research assistant) - ?? hours/days

*Summer 2022*
- State of the art: virtual exhibition tour (Chaitanya Tekane, MITACS intern) ~ 1 week
- Sate of the art: IIIF viewers (Chaitanya Tekane, MITACS intern) ~ 3 weeks
- Learning Svelte (Chaitanya Tekane) ~ 2 weeks
- Learning IIIF (Chaitanya Tekane) ~ 1 week
- Testing Cantaloupe (William Diakité) ~ 2 days
- Testing Web Components (William Diakité) ~ 2 days
- Design - describing a list of operations based on the need expressed by Ribouillaut and Chateau-Dutier (Kenan Oudin, MITACS intern) ~ 1 week
- Design - Figma (Kenan Oudin, MITACS intern) ~ 3 weeks
- Improving svg extracts (William Diakité, Kenan Oudin, MITACS intern) ~ 3 days
- Enriching orginal TEI files (Kenan Oudin) 
- Implementation (Chaitanya Tekane) ~ 1.5 month - Intern wasn't able to use the tools (Openseadragon and its plugins, documentation is not user-friendly)
- Reimplementation of the prototype (William Diakité) ~ 3 weeks

*Fall 2022*
- Presentation of the prototype during Ouvroir's open house (Kenan Oudin)
- Midi-Causerie with Denis Ribouillaut

#### Critical steps during development

- Detouring objects in Photoshop requires a graphic tablet and knowledge to use it efficiently

- Using a IIIF viewer in a modern web framework ([SvelteKit](https://kit.svelte.dev/))
  
  Viewers need to call the DOM API at initialization. This conflicts with the component's life cycle : viewer should be instanciated when component is mounted

- Exporting the SVG files

  To avoid rescaling problems of the SVG, two paths have to be exported from Photoshop: one for the element (extract of the View of Turin) and one rect providing the size of the image. 

- Question about image format : when an image is sent to a Cantaloupe server, it is automatically converted into a pyramidal TIF (this behaviour might not be enabled by default).

#### Future developments

Project won't be maintained unless there is additional funding. No further improvments have been planned.

## Founding institutions, contributors
### Financial support
### Present contributors
- [Denis Ribouillaut](https://histart.umontreal.ca/repertoire-departement/professeur/in/in19365/sg/Denis%20Ribouillault/)
    
### Past contributors
- Daniel Richer (research assistant)
- Kenan Oudin (MITACS, July - September 2022)
- Chaitanya Tekane (MITACS, June - August 2022)
  
## Useful links
- [IIIF Awesome List](https://github.com/IIIF/awesome-iiif)


