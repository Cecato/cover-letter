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

    const cardImgBackground = document.createElement("img");
    cardImgBackground.src = randomImg();
    componentRoot.appendChild(cardImgBackground);


    return componentRoot;
  }

  styles(){
    const style = document.createElement("style");
    style.textContent = `
      .card__header{
        width: 100%;
        height: auto;  
        text-align: center;         
      }

      .card__header > img{
        width: 80%;
        height: auto;
      
        opacity: 0.5;
        transition: 0.6s linear;
        
      }

      .card__header > img:hover{
        transition: 0.8s linear;
        opacity: 1;
        
      }


      @media (max-width: 640px){
        .card__header{
          margin-left: 0;
          width: 100%;
        }
        .card__header>img{
          width: 100%;
          height: auto;
          
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