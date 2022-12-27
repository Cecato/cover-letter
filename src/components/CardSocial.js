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

        const imgProfile = document.createElement("img");
        imgProfile.src = "src/assets/imgProfile.png";  
        componentRoot.appendChild(imgProfile);

        const divTitle = document.createElement("div");
        divTitle.setAttribute("class", "card__title");
        componentRoot.appendChild(divTitle);

        const titleProfile = document.createElement("h1");
        titleProfile.textContent = "<Gustavo Cecato/>";
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
          float: left;
        }

        .card__social > img{
          width: 3.5em;
          height: 3.5em;
          border-radius: 50%;
          margin: 0.3em 1em 0.3em 1em;
          transition: 0.8s linear;
          opacity: 1;
          float: left;
        }

        .card__title{
          width: 50px;
          height: 50px;
          background-color: white;
          float: left;
          margin: 0.3em 1em 0.3em 0.3em;
        }

        .card__social > h1{
          color: white;
          margin-left: 1em;
          margin-top: 20px;
          height: 100%;
          font-size: 1.2em;
          backgroun-color: white;
        }
      `;

      return style;
    }
}

customElements.define("card-social", CardSocial);