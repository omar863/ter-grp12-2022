const template = document.createElement("template");
template.innerHTML = /*html*/`
    <link rel="stylesheet" href="web-component-style.css">
    <!-- should load a file instead of style ... -->
    <style>
        * {text-align: center;}
        h1 {color: rgb(29, 187, 42);background-color: black;}
        p {color: blue; background-color: grey;}
        #imge {width: 500px;}
        #myWebComponent {border-style: dotted;}
    </style>
    <div id="myWebComponent">
        <h1>Web Component in ShadowDom</h1>
        <img id="imge" " src="">
        <h1><slot name="myTitle">Default title</slot></h1>
        <p><slot name="myText">Default text</slot></p>
    </div>`;

class myWebComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.querySelector("img").src = this.getAttribute("src");
        // Appelée automatiquement par le browser
        // quand il insère le web component dans le DOM
        // de la page du parent..
    }
}

window.customElements.define("my-web-component", myWebComponent);