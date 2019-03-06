$(document).ready(function () {
    $('.the-room-slider').slick({
        infinite: true,
        arrows:true,
        dots: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows:false,
                    dots:true
                }
            }
        ]
    });
    $(".fa-bars").click(function(){
        $(".nav-wrapper").slideToggle();
    });
    $(".dropdown").click(function () {
        //$(".dropdown-menu").slideToggle();
    });
});