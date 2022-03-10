import { newE2EPage } from '@stencil/core/testing';

describe('histogram-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<histogram-component></histogram-component>');

    const element = await page.find('histogram-component');
    expect(element).toHaveClass('hydrated');
  });
});
