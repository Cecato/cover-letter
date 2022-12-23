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

        //top
        const cardtop = document.createElement("div");
        cardtop.setAttribute("class", "card__top");

        //img top
        const topImage = document.createElement("img");
        topImage.src = "assets/imgProfile.png";
        topImage.alt = "Gustavo Cecato Photo";
        cardtop.appendChild(topImage);

        //text top
        const title = document.createElement("h1");
        title.textContent =  "Gustavo Cecato";
        cardtop.appendChild(title);

        //Body
        const cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card__body");

        //footer
        const cardFooter = document.createElement("div");
        cardFooter.setAttribute("class", "card__footer");

        //img footer
        const footerImage = document.createElement("img");
        footerImage.src = "assets/defaultProfile.png";
        cardFooter.appendChild(footerImage);        

        componentRoot.appendChild(cardtop);
        componentRoot.appendChild(cardBody);
        componentRoot.appendChild(cardFooter);

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
            .card__top{
                width: 100%;
                height: auto;
                border-bottom: 1px solid black;
                
            }
            
            .card__top > img{
                width: 75px;
                height: 75px;
                border-radius: 50%;
                float:left;
                background-position: center;
                background-size: cover;
            }

            .card__top > h1{
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
                
            }


            .card__body{
                width: 100%;
                height: 80%;
                border: 1px solid black;

            }

            .card__footer{
                width: 100%;
                height: auto;
                border: 1px solid red;
                
            }

            .card__footer > img{
                width: 50px;
                height: 50px;
                background-position: center;
                background-size: cover;
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