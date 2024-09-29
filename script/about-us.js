var carouselWidth = $('.carousel-inner1')[0].scrollWidth;
var cardWidth = $('.carousel-item1').width();
// console.log(cardWidth);
var scrollPostition = 0;

$('.carousel-control-next1').on('click', function(){
    if (scrollPostition < (carouselWidth - (cardWidth*2))){
        console.log('next');
        scrollPostition = scrollPostition + cardWidth;
        $('.carousel-inner1').animate({scrollLeft:
            scrollPostition},600)
    }
})

$('.carousel-control-prev1').on('click', function(){
    if (scrollPostition > 0){
        console.log('prev');
        scrollPostition = scrollPostition - cardWidth;
        $('.carousel-inner1').animate({scrollLeft:
            scrollPostition},600)
    }
})


var carouselWidth2 = $('.AKP .akpCarousel1 .carousel-inner')[0].scrollWidth;
var cardWidth2 = $('.AKP .akpCarousel1 .carousel-item').width();
// console.log("cardWidth2: "+cardWidth2);
var scrollPostition2 = 0;

$('.carousel-control-next2').on('click', function(){
    if (scrollPostition2 < (carouselWidth2 - (cardWidth2*4))){
        console.log('next2'); 
        scrollPostition2 = scrollPostition2 + cardWidth2;
        $('.AKP .akpCarousel1 .carousel-inner').animate({scrollLeft:
            scrollPostition2},600)
    }
})

$('.carousel-control-prev2').on('click', function(){
    if (scrollPostition2 > 0){
        console.log('prev2');
        scrollPostition2 = scrollPostition2 - cardWidth2;
        $('.AKP .akpCarousel1 .carousel-inner').animate({scrollLeft:
            scrollPostition2},600)
    }
})

var carouselWidth3 = $('.AKP .akpCarousel2 .carousel-inner')[0].scrollWidth;
var cardWidth3 = $('.AKP .akpCarousel2 .carousel-item').width();
// console.log("cardWidth3: "+cardWidth3);
var scrollPostition3 = 0;

$('.carousel-control-next3').on('click', function(){
    if (scrollPostition3 < (carouselWidth3 - (cardWidth3*4))){
        console.log('next3'); 
        scrollPostition3 = scrollPostition3 + cardWidth3;
        $('.AKP .akpCarousel2 .carousel-inner').animate({scrollLeft:
            scrollPostition3},600)
    }
})

$('.carousel-control-prev3').on('click', function(){
    if (scrollPostition3 > 0){
        console.log('prev3');
        scrollPostition3 = scrollPostition3 - cardWidth3;
        $('.AKP .akpCarousel2 .carousel-inner').animate({scrollLeft:
            scrollPostition3},600)
    }
})
