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
   

    const cardImg = document.createElement("div");
    cardImg.setAttribute("class", "card__background");
    componentRoot.appendChild(cardImg);
    

    const cardImgBackground = document.createElement("img");
    cardImgBackground.src = randomImg();
    cardImg.appendChild(cardImgBackground);



    return componentRoot;
  }

  styles(){
    const style = document.createElement("style");
    style.textContent = `
      .card__header{
        width: 70%;
        height: auto;
        margin-left: 15%;
        text-align: center; 
               
      }
      
      .card__header > img{
        width: 7em;
        height: 7em;
        border-radius: 50%;
        margin-top: 2%;
        transition: 0.8s linear;
        opacity: 0.2;
        
      }

      .card__header > img:hover{
        transition: 0.8s linear;
        opacity: 0.6;
      }

      .card__header > .card__icons{
        width: 100%;
        height: 5em;
        background-color: green;
        border-bottom: 2px solid white;
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
        transition: 0.8s linear;
        opacity: 1;
        
      }


      @media (max-width: 600px){
        .card__header{
          margin-left: 0;
          width: 100%;
          
        }
        .card__header>img{
          width: calc(10rem/1.3);
          height: calc(10rem/1.3);
          
        }
        .card__background > img{
          width: 100%;
          height: 6em;
          position:relative;
          
        }
      }
    `;

    return style;
  }

}

function randomImg(){
  const pathImg = [
    "src/assets/cards/cards.png",
    "src/assets/cards/cards1.png",
    "src/assets/cards/cards2.png"];
  
  return pathImg[Math.floor(Math.random()*3)];
}

customElements.define("card-header", CardHeader);