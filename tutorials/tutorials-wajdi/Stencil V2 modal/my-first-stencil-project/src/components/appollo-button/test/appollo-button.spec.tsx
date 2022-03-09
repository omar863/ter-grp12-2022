import { newSpecPage } from '@stencil/core/testing';
import { AppolloButton } from '../appollo-button';

describe('appollo-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppolloButton],
      html: `<appollo-button></appollo-button>`,
    });
    expect(page.root).toEqualHtml(`
      <appollo-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </appollo-button>
    `);
  });
});
