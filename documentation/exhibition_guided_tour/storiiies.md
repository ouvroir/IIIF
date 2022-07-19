## Storiiies

<br>

#### Description :

- founding institutions & contributors :

  - Digital agency called [cogapp](https://www.cogapp.com/), Email : bizdev@cogapp.com

- Objectives :

  - Building better online world using digital storytelling form

- More :

  - Storiiies under the hood uses [Open Seadragon](https://openseadragon.github.io/) as Image Viewer and [IIPImage](https://iipimage.sourceforge.io/), [Cantaloupe](https://cantaloupe-project.github.io/) as IIIF image server.

- Main Features :

  - Has 4 templates, basic (blog type), standard viewer (smooth transition), autorun (here particular part of image stays for some duration of seconds, and speaking template (it reads annotation)
  - We can add annotations and reorder them. The annotations will appear on the left top side.
  - We can embed this into websites using iframe tag

- Limitations :

  - We cannot import multiple images, only single it supports
  - It is just storytelling tool, can’t code, can't customise more than the 4 templates provided

- Useful Links :
  - [Website](http://storiiies.cogapp.com/)
  - [Contact Page](https://www.cogapp.com/contact-us)
  - [Main Storiiies Editor](https://storiiies-editor.cogapp.com/)
  - Github Repo : No Repo

#### Compliance with IIIF : Yes

- What does it accepts as input :

  - IIIF Manifest or JSON URL or JPEG Image

- Image API :

  - Compatible version : v2
  - Image format : jpeg

- Presentation API :

  - Compatible version : v2
  - Support of Annotation : we need to give annotation using exihibit editor manually, not require to put it into manifest as it is just a tool

- [Sample Manifest](https://storiiies.cogapp.com/holbein/manifest.json)

#### Technical Description :

Can’t code as it not a library but it is made up of [Open Seadragon](https://openseadragon.github.io/) as Image Viewer and [IIPImage](https://iipimage.sourceforge.io/), [Cantaloupe](https://cantaloupe-project.github.io/) as IIIF image server

#### Sample Demo Created :

- [Created by me](https://storiiies.cogapp.com/viewer/ea3d7/Righettino-Image)
- [Already provided as demo](http://storiiies.cogapp.com/viewer?manifest=https://storiiies.cogapp.com/holbein/manifest.json)
