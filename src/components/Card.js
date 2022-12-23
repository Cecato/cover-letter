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

        return componentRoot;
    }
  
    styles(){
        const style = document.createElement("style");
        style.textContent = `
            .card{
                width: 70%;
                height: 90%;
                border: 1px solid black;
                position:absolute;
                top: 0;
                left:0;
                bottom:0;
                right: 0;
                margin: auto;
                
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