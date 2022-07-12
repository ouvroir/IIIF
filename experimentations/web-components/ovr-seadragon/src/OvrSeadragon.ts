import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import 'openseadragon';

export class OvrSeadragon extends LitElement {

  @property({ type: Array }) tiles = []

  @property({ type: String }) viewerId = 'ovr-seadragon-container'

  @property({ type: Object }) viewer: any = null

  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--ovr-seadragon-text-color, white);
    }
  `;

  firstUpdated() {
    const container = this.shadowRoot?.getElementById(this.viewerId) as HTMLElement

    let tiles
    fetch('https://gallica.bnf.fr/iiif/ark:/12148/btv1b8478987h/manifest.json')
      .then((res) => res.json())
      .then((manifest) => {
        tiles = manifest.sequences[0].canvases.map((c: any) =>
        ({
          '@id': c.images[0].resource.service['@id'],
          '@context': c.images[0].resource.service['@context'],
          height: c.height,
          width: c.width,
        })
        )
      })

    console.log('yo', window.OpenSeadragon)


    // this.viewer = window.OpenSeadragon({
    //   element: container,
    //   prefixUrl:
    //     'https://cdn.jsdelivr.net/npm/openseadragon@2.4/build/openseadragon/images/',
    //   preserveViewport: true,
    //   visibilityRatio: 1,
    //   minZoomLevel: 1,
    //   defaultZoomLevel: 1,
    //   sequenceMode: true,
    //   tileSources: tiles,
    // })
  }


  render() {
    return html`
      <div class={this.viewerId}></div>
    `;
  }
}
