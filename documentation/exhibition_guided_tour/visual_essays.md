## Visual Essays

<br>

#### Description :

- founding institutions & contributors :

  - Couldn’t find on their page

- Objectives :

  - To tell compelling stories using state-of-the-art tools for digital writing

- More :

  - Visual essays supports web authoring methods like mapping (via [GeoJSON](https://en.wikipedia.org/wiki/GeoJSON)), automatic information retrieval (via [knowledge graphs](https://en.wikipedia.org/wiki/Knowledge_graph)), Advanced Image Retrieval and Manipulation (via [IIF](https://en.wikipedia.org/wiki/International_Image_Interoperability_Framework))
  - It also has a config.json file which stores sitewide settings such as the site title, logo, and banner (this file is created in root directory of repository)

- Main Features :

  - Present in form of blog or in form of essay, left side will contain text, annotations, description, etc and right side contains images, maps, videos, graphics, etc (even images can be shown using mirador viewer which again allows us to zoom-in/out, show annotations for particular part of image)
    - We can use different visualisation components tags (The tags in this section are used to declare and configure one or multiple visualizers that are associated with an essay section or paragraph) (different component tags are - [Image Viewer](https://docs.visual-essays.app/visual-essay-tags/ve-image/), [Map Viewer](https://docs.visual-essays.app/visual-essay-tags/ve-map/), [Map Layer](https://docs.visual-essays.app/visual-essay-tags/ve-map-layer/), [Video Viewer](https://docs.visual-essays.app/visual-essay-tags/ve-video/), [Graphic Viewer](https://docs.visual-essays.app/visual-essay-tags/ve-graphic/), etc ([link](https://docs.visual-essays.app/visual-essay-tags/) to see all visual essay tags)
    - We can use the digital storytelling exhibition which we created using storiiies in visual essays (The ID from the generated Storiiies story is used in the visual essay tag)

- Limitations :

  - More focused to showcase and present stuff in essay or blog form (focused on markdown)
  - We are only able to see different images or some interactions while we scroll the page (it is different from the stuff which we wanted to do by considering the video which emmanuel showed of what we wanted to build)

- Useful Links :
  - Website : [link](https://dev.visual-essays.app/)
  - Documentation : [link](https://docs.visual-essays.app/authoring-intro/)
  - Github Repo : No Repo

#### Compliance with IIIF : Yes

- I am not able to find or figure out how does visual essay will make use of IIIF, as of looking at documentation, they said IIIF can be used, but how we can use it, i don't find any resource regarding this
- It also has an annotation tool which is used to add, delete, edit and reorder annotations for IIIF images used in the visual essay. (this is mentioned inside documentation) (but for this we need to login using github account, on which I tried, but it doesn’t work, its shows that this service is unavailable)
- The annotation tool uses [Annotorious](https://recogito.github.io/annotorious/), a JavaScript image annotation library, on top of [OpenSeadragon](https://openseadragon.github.io/), an open-source, web-based viewer for high-resolution images, to display and edit annotations for IIIF images.

#### Technical Description :

Basic markdown coding (i think its same as juncture, and i think we can code and customise in juncture)

#### Sample Demo :

- [Link](https://visual-essays.app/chaitanyatekane/visualessaytool/chaitanyatekane/visualessaytool/new-page/) - created by me
- [Link](https://juncture-digital.org/JSTOR-Labs/juncture/sample-visual-essay/) - found sample demo (i think its made using juncture but its same as visual essays)
