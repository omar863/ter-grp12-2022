import { Component, Host, h,Prop } from '@stencil/core';

@Component({
  tag: 'appollo-button',
  styleUrl: 'appollo-button.css',
  shadow: true,
})
export class AppolloButton {
@Prop() text:string;
@Prop() appearance:string;



  render() {
    return (
      <Host>
        <button class={`btn ${this.appearance}`} type="button">{this.text}</button>
      </Host>
    );
  }

}
