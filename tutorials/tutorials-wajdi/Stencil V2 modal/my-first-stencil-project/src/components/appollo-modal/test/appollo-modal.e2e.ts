import { newE2EPage } from '@stencil/core/testing';

describe('appollo-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<appollo-modal></appollo-modal>');

    const element = await page.find('appollo-modal');
    expect(element).toHaveClass('hydrated');
  });
});
