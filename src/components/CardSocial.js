class CardSocial extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: "open" });
  
      shadow.appendChild(this.build());
      shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card__social");

        const titleProfile = document.createElement("h1");
        titleProfile.textContent = `<${ titleName( this.getAttribute("title") )}/>`|| "<error/>";
        componentRoot.appendChild(titleProfile);

        return componentRoot;
    }

    styles(){

      const style = document.createElement("style");
      style.textContent = `
        .card__social{
          width: 100%;
          height: auto;
          background-color: rgb(19, 19, 19);
          text-align: left;
          margin-bottom: 1%;
          display: inline-block;
        }

        .card__social > img{
          width: 3.5em;
          height: 3.5em;
          border-radius: 50%;
          margin: 0.3em 1em 0.3em 1em;
          transition: 0.8s linear;
          opacity: 0.6;

        }

        .card__social > h1{
          color: rgba(233, 233, 233, 0.74);;
          margin-left: 1em;
          margin-top: 20px;
          font-size: 1.2em;
        }
      `;

      return style;
    }
}

function titleName(teste){
  return teste;
}

customElements.define("card-social", CardSocial);