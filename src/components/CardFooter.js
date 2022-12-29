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

        const githubImg = document.createElement("img");
        githubImg.src = "src/assets/socialmedia/github.png";
        githubImg.addEventListener("click", function(){
            window.open('https://github.com/Cecato', '_blank');
        });
        componentRoot.appendChild(githubImg);

        const instagramImg = document.createElement("img");
        instagramImg.src = "src/assets/socialmedia/instagram.png";
        instagramImg.addEventListener("click", function(){
            window.open('https://www.instagram.com/gu.cecato/', '_blank');
        });
        componentRoot.appendChild(instagramImg);

        const linkedinImg = document.createElement("img");
        linkedinImg.src = "src/assets/socialmedia/linkedin.png";
        linkedinImg.addEventListener("click", function(){
            window.open('https://www.linkedin.com/in/gustavo-cecato-b1b9821b8/', '_blank');
        });
        componentRoot.appendChild(linkedinImg);

        const beecrowdImg = document.createElement("img");
        beecrowdImg.src = "src/assets/socialmedia/beecrowd.png";
        beecrowdImg.addEventListener("click", function(){
            window.open('https://www.beecrowd.com.br/judge/pt/profile/432392', '_blank');
        });
        componentRoot.appendChild(beecrowdImg);


        return componentRoot;
    }
  
    styles(){
        const style = document.createElement("style");
        style.textContent = `

            .card__footer{
                width: 100%;
                height: auto;
                bottom: 0;
                margin-left: 0;
                background-color: var(--two-color);
                margin-top: 8%;
                text-align: center;
                
            }

            .card__footer > img{
                width: 4em;
                height: 4em;
                padding: 1em;
                border-top: 2px solid var(--four-color);
                transition: all 0.5s ease-in-out;
                border-height: thin;
                margin-left: 1em;
                margin-right: 1em;
                opacity: 0.8;
                
            }

            .card__footer > img:hover{
                transition: all 0.7s ease-in-out;
                background-color: var(--four-color);
                border-radius: 5%;
                opacity: 0.8;
                cursor: pointer;
            }

            @media (max-width: 600px){
                .card__footer{
                    margin-left: 0;
                    width: 100%;
                    
                }

                .card__footer > img{
                    width: 3em;
                    height: 3em;
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

function openLink(link){
    window.open(link, '_blank');
}
  
customElements.define("card-footer", CardFooter);