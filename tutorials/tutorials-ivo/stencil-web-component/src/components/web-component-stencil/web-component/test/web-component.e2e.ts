import { newE2EPage } from '@stencil/core/testing';

describe('web-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<web-component></web-component>');

    const element = await page.find('web-component');
    expect(element).toHaveClass('hydrated');
  });
});
