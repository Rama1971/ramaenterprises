AOS.init({
    startEvent: 'load',
    duration: 700,
    offset: 50
  });

  //Loader
$(window).on('load', function() {
    //$('#status').fadeOut();
    $('#preloader').delay(10).fadeOut('fast'); 
    $('body').delay(10).css({'overflow':'visible'});
    })

  // sticky Menu//
  $window = $(window);
  $window.scroll(function () {
    $scroll_position = $window.scrollTop();
    if ($scroll_position > 0) {
      $('.topMenu').addClass('sticky');
      header_height = $('.topMenu').innerHeight();
    } else {
      $('.topMenu').removeClass('sticky');
    }
   
  });
  //End sticky Menu//

  function scrollNav() {
    $('.nav-link').click(function(){ 
      
      var linkHref = $(this).attr('href').replace("index.php", "");
      console.log(linkHref);
      $('html, body').stop().animate({
          scrollTop: $( linkHref ).offset().top - 150
      }, 900);
      
  });
    $(".nav-item").click(function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");   
    });

    $(".nav-link").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });
}
scrollNav();

//   $(document).ready(function () {
//     $('a[href^="#"]').on('click', function (e) {
//       e.preventDefault();
//       var target = this.hash;
//       var $target = $(target);
//       var scroll;
//       if ($(window).scrollTop() == 0) {
//         scroll = ($target.offset().top) - 160
//       } else {
//         scroll = ($target.offset().top) - 60
//       }
//       $('html, body').stop().animate({
//         'scrollTop': scroll
//       }, 500, 'swing', function () {
//       });
//     });
//   });

//   $(window).on('scroll', function () {
//     var sections = $('section')
//       , nav = $('nav')
//       , nav_height = nav.outerHeight()
//       , cur_pos = $(this).scrollTop();
//     sections.each(function () {
//       var top = $(this).offset().top - nav_height,
//         bottom = top + $(this).outerHeight();

//       if (cur_pos >= top && cur_pos <= bottom) {
//         nav.find('li a').removeClass('active');
//         sections.removeClass('active');

//         $(this).addClass('active');
//         nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
//       }
//     });
//   });

  //Header Slider//
  $('.hero_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    fade: true,
  });
  //End Header Slider//
  $('.service_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.gallery_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.client_logo_slider').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".top").offset().top},"1000");return false})})