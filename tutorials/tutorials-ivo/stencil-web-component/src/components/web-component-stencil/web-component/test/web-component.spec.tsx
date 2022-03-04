import { newSpecPage } from '@stencil/core/testing';
import { WebComponent } from '../web-component';

describe('web-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WebComponent],
      html: `<web-component></web-component>`,
    });
    expect(page.root).toEqualHtml(`
      <web-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </web-component>
    `);
  });
});
