class Card extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
  
    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardContent = document.createElement("p");
        cardContent.textContent = this.getAttribute("content");

        componentRoot.appendChild(cardContent);

        return componentRoot;
    }
  
    styles(){
        const style = document.createElement("style");
        style.textContent = `
            .card{
                width: 70%;
                height: auto;
                padding: 5px;
                top: 0;
                left:0;
                bottom:0;
                right: 0;
                margin-left:auto;
                margin-right: auto;
                margin-top: 5%;
                background-color: black;
                border-radius: 15px;
            }

            .card > p{
                font-size: 25px;
                color: white;
                text-decoration: none;
                font-weight: bold;
            }

            @media (max-width: 600px){
                .card{
                    width: 100%;
                }
            }

        `;
  
      return style;
    }
}
  
customElements.define("card-component", Card);