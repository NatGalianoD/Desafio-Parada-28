let slidesIndex = 1;
showSlides(slidesIndex);

function passarSlide(n) {
    showSlides(slidesIndex += n);
}

function carrossel(n){
    showSlides(slidesIndex = n)
}

function showSlides(n){
    let i;
    let slide = document.getElementsByClassName('slide-personagens');
    let ponto = document.getElementsByClassName('ponto');

    if(n > slide.length){
        slidesIndex = 1;
    }
    if(n < 1){
        slidesIndex = slide.length
    }
    for( i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
    for( i = 0; i < ponto.length; i++){
        ponto[i].className = ponto[i].className.replace(" active", "")
    }
    slide[slidesIndex-1].style.display = "block"
    ponto[slidesIndex -1].className += " active"

}