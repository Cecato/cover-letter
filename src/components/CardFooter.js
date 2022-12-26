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

        const makimaImg = document.createElement("img");
        makimaImg.src = "assets/makima.png";
        componentRoot.appendChild(makimaImg);

        return componentRoot;
    }
  
    styles(){
        const style = document.createElement("style");
        style.textContent = `

            .card__footer{
                width: auto;
                height: 50px;
                bottom: 0;
                margin-left: 0;
                position: fixed;
                background-color: red;
                
            }

            .card__footer > img{
                width: auto;
                height: 30em;
                drop-shadow(5px 5px 5px rgba(0,0,0,1));
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