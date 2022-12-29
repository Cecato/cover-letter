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
                height: 10em;
                margin-left:auto;
                margin-right: auto;
                margin-top: 5%;
                padding: 1%;
                background-color: transparent;
               
                
            }

            .card__body__out{
                width: 80%;
                height: 10em;
                background-color: transparent;               
                margin: auto;
                opacity: 0.7;
                transition: 0.5s linear;
                
            }

            .card__body__inner{
                width: 100%;
                height: 100%;
                background-color: var(--three-color);               
                transition: 0.5s linear;
                padding: 2% 2% 0 2%;
                
                                
            }

            .card__body__inner > p{
                font-size: 20px;
                color: white;
                margin: auto;
                line-height: 130%;
                text-align: justify;
                text-indent: 2em;
            }

            .card__body__out:hover{
                transition: 0.5s linear;
                transform: scale(1.2);
                padding-top: 3%;
                opacity: 1;
                box-shadow: -5px -5px 10px rgba(5, 5, 5, 0.5);
                background-color: ${randomColor()};
                border: 2px solid var(--six-color); 
            }

            .card__body__out:hover .card__body__inner{
                box-shadow: -5px -5px 10px rgba(15, 15, 15, 0.5);
                margin-left: 5%;
                transition: 0.5s linear;
                border: 2px solid white; 
            }

            @media (max-width: 600px){
                .card{
                    width: 85%;
                    height: auto;                   
                    padding: 0;
                    margin-top: 10%;
                    margin-bottom: 10%;
                }

                .card__body__out{
                    width: auto;
                    height: auto;
                    
                }

                .card__body__out:hover{
                    transition: 0.5s linear;
                    transform: scale(1);
                    padding-top: 0;
                    opacity: 1;
                    box-shadow: -5px -5px 10px rgba(5, 5, 5, 0.5);
                    background-color: transparent;
                    border: 0;
                }

                .card__body__out:hover .card__body__inner{
                    box-shadow: -5px -5px 10px rgba(15, 15, 15, 0.5);
                    margin-left: 0;
                    transition: 0.5s linear;
                }
                
                .card__body__inner{
                    padding: 10px;
                    margin-left:0;
                    border: 2px solid transparent; 
                }
                .card__body__inner > p{
                    font-size: 12px;
                    text-indent:0;
                    text-align: left;
                    
                }

            }

        `;
  
      return style;
    }
}


function randomColor(){

    var colors = [
        "rgb(103, 137, 131)",
        "rgb(15, 61, 62)",
        "rgb(211, 107, 0)"
    ];

    return colors[Math.floor(Math.random()*colors.length)];
}

  
customElements.define("card-component", Card);