import { newSpecPage } from '@stencil/core/testing';
import { AppolloModal } from '../appollo-modal';

describe('appollo-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppolloModal],
      html: `<appollo-modal></appollo-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <appollo-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </appollo-modal>
    `);
  });
});
