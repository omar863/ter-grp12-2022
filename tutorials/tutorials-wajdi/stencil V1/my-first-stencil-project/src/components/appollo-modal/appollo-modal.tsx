import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'appollo-modal',
  styleUrl: 'appollo-modal.css',
  shadow: true,
})
export class AppolloModal {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
