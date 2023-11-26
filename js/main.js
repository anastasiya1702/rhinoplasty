$(function () {

  $('.menu__btn').on('click', function () {
    $('.header__menu').toggleClass('header__menu--active');
  });

  $('.burger, .menu a').click(function (event) {
    $('.burger,.menu__list').toggleClass('active');
  });

  $('.js-collapse-btn').on('click', function () {
    $(this).siblings('.js-collapse-box').slideToggle();
    $(this).toggleClass('js-collapse-btn--active');
  });

  $('.services-slide__thumb').slick({
    asNavFor: '.services-slide__big',
    focusOnSelect: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: false,
    draggable: false,
    arrows:false,
    responsive: [
      {
        breakpoint: 665,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  });

  $('.services-slide__big').slick({
    asNavFor: '.services-slide__thumb',
    draggable: true,
    arrows: false,
    fade: false,
   });

  $('.certificat-slider').slick({
    dots: true,
    arrows: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 1600,
    prevArrow: '<button type="button" class="slick-prev slick-prev--certificat"></button>',
    nextArrow: '<button type="button" class="slick-next slick-next--certificat slick-disabled slick-disabled--certificat"></button>',
    infinite: false,
    dotsClass: 'slick-dots slick-dots--certificat',
    responsive: [
      {
        breakpoint: 988,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
        }
      },
    ]
  });

  $('.details-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.details-tabs__top-item').removeClass('details-tabs__top-item--active');
    $(this).addClass('details-tabs__top-item--active');

    $('.details-tabs__content-item').removeClass('details-tabs__content-item--active');
    $($(this).attr('href')).addClass('details-tabs__content-item--active');
  });

  $('.slider-difference').slick({
    dots: true,
    arrows: true,
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 1600,
    infinite: false,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 741,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  });

  $('.review-slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 3,
    autoplaySpeed: 1600,
    prevArrow: '<button type="button" class="slick-prev slick-prev--review"></button>',
    nextArrow: '<button type="button" class="slick-next slick-next--review"></button>',
    dotsClass: 'slick-dots slick-dots--review',
    infinite: false,
    responsive: [
      {
        breakpoint: 1430,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
    ]
  });

});

$(document).ready(function () {
  $('body').append('<a href="#" id="go-top"></a>');
});

$(function () {
  $.fn.scrollToTop = function () {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
    var scrollDiv = $(this);
    $(window).scroll(function () {
      if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
      else $(scrollDiv).fadeIn("slow")
    });
    $(this).click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow")
    })
  }
});

$(function () {
  $("#go-top").scrollToTop();
});