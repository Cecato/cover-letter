class CardImg extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    //enviar para a shadow
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  build(){
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "cardimg");

    return componentRoot;
  }

  styles(){
    const style = document.createElement("style");
    style.textContent = `
      .cardimg{
        width: 50%;
        height: 50%;
        border: 1px solid black;
        position:absolute;
        top: 0;
        left:0;
        bottom:0;
        right: 0;
        margin: auto;
        background-color:red;
      }
    `;

    return style;
  }

}
  
customElements.define("card-img", CardImg);