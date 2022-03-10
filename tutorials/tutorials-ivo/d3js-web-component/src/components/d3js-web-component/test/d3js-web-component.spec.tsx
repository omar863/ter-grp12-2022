import { newSpecPage } from '@stencil/core/testing';
import { D3jsWebComponent } from '../d3js-web-component';

describe('d3js-web-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [D3jsWebComponent],
      html: `<d3js-web-component></d3js-web-component>`,
    });
    expect(page.root).toEqualHtml(`
      <d3js-web-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </d3js-web-component>
    `);
  });
});
