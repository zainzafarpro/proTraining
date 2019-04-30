$(document).ready(function () {
  $('.collapsible').collapsible();
  $('select').formSelect();
  $('.stars li').on('click', function () {
    var onStar = parseInt($(this).data('value'), 10);
    var stars = $(this).parent().children('li.star');

    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('star-color');
    }

    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('star-color');
    }
  });
  $('.stars li').on('mouseover', function () {
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function (e) {
      if (e < onStar) {
        $(this).addClass('star-color');
      }
      else {
        $(this).removeClass('star-color');
      }
    });

  }).on('mouseout', function () {
    $(this).parent().children('li.star').each(function (e) {
      $(this).removeClass('star-color');
    });
  });
  if ($(window).width() < 767) {
    $('.sidenav').sidenav();
    $('.header-wrapper .fa-bars').click(function(){
      $(".sidenav").css("transform", "translateX(0%)");
    });
    $('.header-wrapper .fa-times').click(function () {
      $(".sidenav").css("transform", "translateX(-105%)");
    });
  }
});