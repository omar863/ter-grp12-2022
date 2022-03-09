import { Component, h,getAssetPath,Prop,State,Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'appollo-modal',
  styleUrl: 'appollo-modal.css',
  shadow: true,
  assetsDirs:['assets'],})
export class AppolloModal {
// Props

@Prop({
  mutable:true,
  reflect:true,})
@Prop() header:string;
@Prop() appearance:string;
@Prop() isopen: boolean;
@Prop() closeIcon='x.svg'
@Prop() buttons: string;

// State for our buttons array
@State() _buttons: Array<any>

//watch for data
arrayDataWatcher(button){
  if (typeof button=== 'string'){
    this._buttons=JSON.parse(button);
  }else{
    this._buttons= button
  }
}

// before the component mounts/loads, we need to convert the buttons string to an array

componentWillLoad(){
  this.arrayDataWatcher(this.buttons);
  console.log(this.buttons,'Original')
  console.log(this._buttons,'new')
}

// Events
@Event() private action: EventEmitter;
// function
  private handleCancel = ()=> {
    this.isopen=false;
  }
  private handleAction = ()=> {
    this.action.emit();
    console.log("j'ai appuyé")
  }
render() {
    return (
     <div class={this.isopen ? 'modal-wrapper is-open':'modal-wrapper'}>
       <div class="modal-overlay"onClick={this.handleCancel}></div>
       <div class="modal">
        <div class="header">
            <h6>{this.header}</h6>
            <div class="close" onClick={this.handleCancel}>
            <img src={getAssetPath(`./assets/${this.closeIcon}`)} alt="close icon"></img>
            </div>
          </div>
        <div class="body">
          <slot>
            </slot></div>
        <div class="footer">
          {this._buttons.map((button,index)=>(
            <appollo-button onClick={index===0 ? this.handleAction:this.handleCancel} text={button.text} appearance={index===0&& this.appearance}></appollo-button>
          ))}
       
        </div>
       </div>
      </div>
    );
  }

}
