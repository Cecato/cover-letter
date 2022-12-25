class CardFooter extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
  
    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card__footer");

        return componentRoot;
    }
  
    styles(){
        const style = document.createElement("style");
        style.textContent = `

            .card__footer{
                width: 70%;
                height: 50px;
                border: 1px solid black;
                bottom: 0;
                margin-left: 15%;
                position: fixed;
                background-color: red;
            }

            @media (max-width: 600px){
                .card__footer{
                    margin-left: 0;
                    width: 100%;
                }
            }

        `;
  
      return style;
    }
}
  
customElements.define("card-footer", CardFooter);