class MyLogo extends HTMLElement {
  html =`
  <h3 id="logo"> my logo</h3>
  <br>
  <input type="color" id="colorSelect">
  <br>
  <input type="range" min=10 max=100 id="tailleSelect">
  `
  style= `
#logo {
  font-size:40px;
  color:red;
  text-shadow: 0 1px 0 #ccc,
  0 2px 0 #c9c9c9,
  0 3px 0 #bbb,
  0 4px 0 #b9b9b9,
  0 5px 0 #aaa,
  0 6px 1px rgba(0,0,0,.1),
  0 0 5px rgba(0,0,0,.1),
  0 1px 3px rgba(0,0,0,.3),
  0 3px 5px rgba(0,0,0,.2),
  0 5px 10px rgba(0,0,0,.25),
  0 10px 10px rgba(0,0,0,.2),
  0 20px 20px rgba(0,0,0,.15);
}
  `
    constructor() {
      console.log("constructor");
      super();
      this.attachShadow({ mode: "open" });
      this.color = this.getAttribute("couleur");
      this.texte = this.getAttribute("texte");
      console.log(this.color);
    }
  
    connectedCallback() {
      console.log("connected callback")
      this.shadowRoot.innerHTML= `<style>${this.style}</style>`+ this.html ;
      this.myLogo=this.shadowRoot.querySelector("#logo");
     
      this.myLogo.style.color = this.color;

      this.changeText(this.texte);
      this.myLogo.addEventListener("click", () =>{
        console.log("j'ai clicker sur le logo");
      })
      this.shadowRoot.querySelector("#colorSelect").addEventListener("input", (event)=>{
        console.log(event.target.value);
        this.myLogo.style.color = event.target.value;
      })
      this.shadowRoot.querySelector("#tailleSelect").addEventListener("input", (event)=>{
        console.log(event.target.value);
        this.myLogo.style.fontSize = event.target.value;
      })
  
    }
    changeText(newText){
      this.myLogo.innerHTML = newText;
    }
  }
  
  customElements.define("my-logo", MyLogo);