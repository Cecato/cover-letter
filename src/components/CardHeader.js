class CardHeader extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    //enviar para a shadow
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  build(){
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card__header");

    const headerImage = document.createElement("img");
    headerImage.src = "assets/imgProfile.png";
    componentRoot.appendChild(headerImage);

    const cardImg = document.createElement("div");
    cardImg.setAttribute("class", "card__background");
    componentRoot.appendChild(cardImg);

    const cardImgBackground = document.createElement("img");
    cardImgBackground.src = "assets/cards.png";
    cardImg.appendChild(cardImgBackground);



    return componentRoot;
  }

  styles(){
    const style = document.createElement("style");
    style.textContent = `
      .card__header{
        width: 70%;
        height: auto;
        border-bottom: 0px solid orange;
        background-color: none;
        margin-left: 15%;
        text-align: center;         
      }
      
      .card__header > img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-top: 2%;
        border: double 0.15em transparent;
        background-image: rgba(255,255,255,0.4);
        background-origin: border-box;
        background-clip: content-box, border-box;
        transition: 0.8s linear;
        
      }

      .card__header > img:hover{
        transition: 0.5s linear;
        box-shadow: 0px 0px 16em 6em rgba(255,0,0, 0.8);
      }

      .card__background{
        width: 100%;
        height: auto;
        background-color: none;
      }

      .card__background > img{
        width: 100%;
        height: 9rem;
        position:relative;
        opacity: 0.5;
        transition: 0.6s linear;
        
      }

      .card__background > img:hover{
        transition: 0.6s linear;
        opacity: 0.9;
        
      }

      .card__background > h1{
        font-size: 50px;
        color: white;
        text-decoration: none;
        font-weight: bold;
        position:relative;
        height: 0px;
      }


      @media (max-width: 600px){
        .card__header{
          margin-left: 0;
          width: 100%;
        }
        .card__background > img{
          width: 100%;
          height: 5em;
          position:relative;
          
        }
      }
    `;

    return style;
  }

}

customElements.define("card-header", CardHeader);