import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'histogram-component',
  styleUrl: 'histogram-component.css',
  shadow: true,
})
export class HistogramComponent {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
