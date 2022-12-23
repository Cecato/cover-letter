class CardHeader extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    //enviar para a shadow
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  build(){
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card__header");

    const headerImage = document.createElement("img");
    headerImage.src = "assets/imgProfile.png";
    headerImage.alt = "Gustavo Cecato";
    componentRoot.appendChild(headerImage);


    return componentRoot;
  }

  styles(){
    const style = document.createElement("style");
    style.textContent = `
      .card__header{
        width: 70%;
        height: auto;
        border-bottom: 1px solid black;
        background-color: red;
        margin-left: 15%;
        text-align: left;
               
      }
      
      .card__header > img{
        width: 75px;
        height: 75px;
        border-radius: 50%;
        background-position: center;
        background-size: cover;
      }

      .card__header > h1{
        font-size: 25px;
        color: black;
        text-decoration: none;
        font-weight: bold;
          
      }
    `;

    return style;
  }

}
  
customElements.define("card-header", CardHeader);