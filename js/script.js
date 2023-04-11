$(function () {
  // about slick slider

  $('.about_slider').slick({
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,

    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // about slick slider end

  //back to top

  $(window).on('scroll', function () {

  var winscroll = $(window).scrollTop();

    if (winscroll > 1000) {
      $('.backtop p').fadeIn(1000);
    }else{
      $('.backtop p').fadeOut(1000);
    }
  });

  $('.backtop').on('click',function(){
    $('html,body').animate({
      scrollTop: 0  
      },1000);
  });

});


// preloader js

$(function () {
  $(window).on('load', function () {
    $(".preloader_main").delay(1000).fadeOut(1000);
  });
});