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
const mainGame = document.getElementsByClassName("main-game");
var clickedImage = '';

for(var elemento of boxGame){
    elemento.addEventListener('click', function(){
        console.log(this.currentSrc)
        clickedImage = `src('${this.currentSrc}')`
        mainGame.style.backgroundImage = clickedImage
        

    })
}




