$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


const boxGame = document.getElementsByClassName("box-movie");
const mainGame = document.querySelector(".main-game");
const gameName = document.querySelector(".game-name")
const gameDescription = document.querySelector(".game-description")

var clickedImage = '';

for(var elemento of boxGame){
    elemento.addEventListener('click', function(){
        console.log(this.currentSrc)
        clickedImage = this.currentSrc
        mainGame.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%),
        url(${clickedImage})`;
        mainGame.style.backgroundSize= "cover"

        gameName.style.opacity = 0
        gameDescription.style.opacity = 0
        

    })
}




