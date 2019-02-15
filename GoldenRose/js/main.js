$(document).ready(function () {
    $('.the-room-slider').slick({
        infinite: true,
        arrows:true,
        dots: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows:false,
                }
            }
        ]
    });
    $(".fa-bars").click(function(){
        $(".lower-nav").slideToggle();
    });
    $(".dropdown").click(function () {
        //$(".dropdown-menu").slideToggle();
    });
});