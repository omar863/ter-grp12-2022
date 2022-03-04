import { Component, h, Prop } from '@stencil/core';
import { format } from '../../../utils/utils';

@Component({
  tag: 'web-component',
  styleUrl: 'web-component.css',
  shadow: true,
})
export class WebComponent {
  @Prop() src:string;


  render() {
    return (
      <div id="myWebComponent">
        <h1>Web Component in ShadowDom</h1>
        <img id="img" src={format('"',this.src,'"')}></img>
        <h1><slot name="myTitle">Default title</slot></h1>
        <p><slot name="myText">Default text</slot></p>
      </div>
    );
  }

}

    
