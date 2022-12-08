 
$(function() {
    $(".imgDiv").vegas({
        delay:4000,
        slides:[
            {src:"https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background.jpg"},
            {src:"https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-2.jpg"},
            {src:"https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-slider-background-3.jpg"}
         ],
        overlay:"overlays/01.png",
        animation:"kenburnsUp"
    })


 
    $('.footerSlider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});



