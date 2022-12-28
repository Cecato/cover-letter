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
        titleProfile.textContent = `<${ this.getAttribute("title").replace(/ /gi, ".")}/>`|| "<error/>";
        componentRoot.appendChild(titleProfile);

        return componentRoot;
    }

    styles(){

      const style = document.createElement("style");
      style.textContent = `
        .card__social{
          width: 100%;
          height: auto;
          background-color: var(--two-color);
          text-align: left;
          margin-bottom: 1%;
          display: inline-block;
        }

        .card__social > h1{
          color: var(--four-color);
          margin-left: 1em;
          margin-top: 20px;
          font-size: 1.2em;
        }

        @media ( max-width < 640px){
          .card__social{
            text-align: center;
          }
          .card__social > h1{
            margin-left: 0;
            
          }
        }
      `;

      return style;
    }
}

customElements.define("card-social", CardSocial);