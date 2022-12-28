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

        const cardBodyOut = document.createElement("div");
        cardBodyOut.setAttribute("class", "card__body__out");
        componentRoot.appendChild(cardBodyOut);

        const cardBodyInner = document.createElement("div");
        cardBodyInner.setAttribute("class", "card__body__inner");
        cardBodyOut.appendChild(cardBodyInner);

        const textBody = document.createElement("p");
        textBody.textContent = this.getAttribute("content");
        cardBodyInner.appendChild(textBody);

        return componentRoot;
    }
  
    styles(){
        const style = document.createElement("style");
        style.textContent = `
            .card{
                width: 80%;
                height: auto;
                margin-left:auto;
                margin-right: auto;
                margin-top: 5%;
                padding: 1%;
                background-color: transparent;
               
                
            }

            .card__body__out{
                width: 80%;
                height: 10em;
                background-color: var(--two-color);               
                margin: auto;
                padding-top: 3%;
                opacity: 0.4;
                transition: 0.3s linear;
            }

            .card__body__inner{
                width: 100%;
                height: 120%;
                background-color: var(--three-color);               
                margin-left: 5%;
               
                                
            }

            .card__body__inner > p{
                font-size: 20px;
                color: white;
            }

            .card__body__out:hover{
                transition: 0.5s linear;
                transform: scale(1.2);
                opacity: 1;
            }

            @media (max-width: 600px){
                .card{
                    width: 100%;                   
                    padding: 0;
                    margin-top: 10%;
                    margin-bottom: 20%;
                      
                }
            }

        `;
  
      return style;
    }
}
  
customElements.define("card-component", Card);