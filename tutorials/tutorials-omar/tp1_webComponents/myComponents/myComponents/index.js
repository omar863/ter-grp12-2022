const getBaseURL = () => {
  return new URL('.', import.meta.url);
};
class MyLogo extends HTMLElement {
  html = `
    <h3 id="logo">monlogo</h3>
    <br>
    <input type="color" id="colorSelect">
    <img src="./image/flamme.jpg">
    `;
  style = `
    #logo{
        front-size:40px;
        color:yellow;
        text-shadow:0 1px 0 #ccc,
                    0 2px 0 #c9c9c9,
                    0 3px 0 #bbb,
                    0 4px 0 #b9b9b9,
                    0 5px 0 #aaa,
                    0 6px 1px rgba(0,0,0,.1),
                    0 0   5px rgba(0,0,0,.1),
                    0 1px 3px rgba(0,0,0,.3),
                    0 3px 5px rgba(0,0,0,.2),
                    0 5px 10px rgba(0,0,0,.25),
                    0 10px 10px rgba(0,0,0,.2),
                    0 20px 20px rgba(0,0,0,.15),           
    }
    `;

  constructor() {
    console.log("constructor")
    super();
    const shadow = this.attachShadow({ mode: "open" });
    this.couleur = this.getAttribute("couleur");
    this.text = this.getAttribute("text");
    console.log("couleur=" + this.couleur);
    console.log("url = " + getBaseURL());
    this.fixRelativeURLs(getBaseURL());
  }


  fixRelativeURLs(baseURL) {
    let images = this.shadowRoot.querySelectorAll('img');
    images.forEach((e) => {
      console.log("dans le foreach")
      let imagePath = e.getAttribute('src');
      e.src = getBaseURL() + '/' + imagePath;
    });

}
connectedCallback() {
  console.log("connectedCallback");
  this.shadowRoot.innerHTML = `<style>${this.style}</style>  +${this.html}`;
  this.fixRelativeURLs();
  this.myLogo = this.shadowRoot.querySelector("#logo");
  this.myLogo.addEventListener("click", () => {
    console.log("logo clické");
  });
  this.myLogo.style.color = this.couleur;
  this.myLogo.textContent = this.text;
  this.shadowRoot.querySelector("#colorSelect").addEventListener("input", event => {
    this.myLogo.style.color = event.target.value;
    console.log(event.target.value);
  })
}
changeText(newText){
  this.myLogo.textContent = newText;
}
  }

customElements.define("my-logo", MyLogo);
