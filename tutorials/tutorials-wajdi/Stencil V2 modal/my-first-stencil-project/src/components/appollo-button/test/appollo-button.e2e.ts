import { newE2EPage } from '@stencil/core/testing';

describe('appollo-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<appollo-button></appollo-button>');

    const element = await page.find('appollo-button');
    expect(element).toHaveClass('hydrated');
  });
});
