import { newE2EPage } from '@stencil/core/testing';

describe('d3js-web-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<d3js-web-component></d3js-web-component>');

    const element = await page.find('d3js-web-component');
    expect(element).toHaveClass('hydrated');
  });
});
