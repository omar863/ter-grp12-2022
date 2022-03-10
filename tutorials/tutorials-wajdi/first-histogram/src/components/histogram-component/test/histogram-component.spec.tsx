import { newSpecPage } from '@stencil/core/testing';
import { HistogramComponent } from '../histogram-component';

describe('histogram-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HistogramComponent],
      html: `<histogram-component></histogram-component>`,
    });
    expect(page.root).toEqualHtml(`
      <histogram-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </histogram-component>
    `);
  });
});
