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

Cette étude de cas a permis de de tester plusieurs outils d’exposition virtuelle (exhibit, storiiies, juncture), les outils de développement web disponibles actuellement (notamment OpenSeaDragon et Canvas Panel) ainsi qu’un outil de gestion et de diffusion d’images IIIF (Cantaloupe). Les essais réalisés avec ces outils sont décris sur le répertoire IIIF de l’Ouvroir.

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

* No web frameworks (Svelte was first choice) have used to facilitate the use of the viewers : the tools manipulate the DOM wich might conflict a component life's cycle. That problem is espcially true with OpenSeadragon due to the way it is exported (AMD or CommonJS). 

## Project organization

### State of the art

- Virtual exhibitions tools
  - [Exhibit](https://www.exhibit.so/)
  - [Storiies](http://storiiies.cogapp.com/)
  - [Visual essays](https://dev.visual-essays.app/)
  - [Juncture](https://juncture-digital.org/)

None of the tools described above have enough customization possiblities in term of user interaction. Experimentations with these tools may be find in the [IIIF github repository](https://github.com/ouvroir/IIIF/tree/main/documentation/exhibition_guided_tour) of lab Ouvroir.

- IIIF viewers

  - [Universal Viewer](https://universalviewer.io/) - not flexible enough in terms of interactions
  - [Mirado](https://github.com/IIIF/mirador) - not flexible enough in terms of interactions
  - [Diva.js](https://diva.simssa.ca/) - could not install (documentation missing)
  - [Canvas Panel](https://iiif-canvas-panel.netlify.app/) - still in beta when tested. Important features were missing from the package (critical: display of svg annotations). Should have been the prefered option since its designed is more friendly with modern web developpement tools/framework. Interface is straight forward and easy to use. A extended review can be found on the [IIIF repository](https://github.com/ouvroir/IIIF/blob/main/documentation/viewers/canvas-panel.md)
  - [OpenSeaDragon](https://openseadragon.github.io/)



### Roadmap

#### Participants' assignements

**Preliminary work**
- Analysis of the View of Turin (Ribouillaut & co)
- Encoding the analytical text in XML-TEI (Ribouillaut & co)

**Design and implementation of the prototype**

*Spring 2022*
- Detouring svg figures on photoshop (Daniel Richer, research auxillary) - ?? hours/days

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


#### Future developements

Project won't be maintained unless funding is raised. No further improvements have been planned.

## Founding institutions, contributors
### Financial support
### Present contributors
- [Denis Ribouillaut](https://histart.umontreal.ca/repertoire-departement/professeur/in/in19365/sg/Denis%20Ribouillault/)
    
### Past contributors
- Daniel Richer (research auxillary)
- Kenan Oudin (MITACS, July - September 2022)
- Chaitanya Tekane (MITACS, June - August 2022)
  
## Useful links
- [IIIF Awesome List](https://github.com/IIIF/awesome-iiif)


