$(function () {

  const menuBtn = document.querySelector('.menu__btn');
  const menuClose = document.querySelector('.menu__close');
  const menuList = document.querySelector('.header__menu');
  const menuShadow = document.querySelector('.menu-close');

  menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('header__menu--active');
    menuShadow.classList.toggle('menu--open');
  });

  menuClose.addEventListener('click', () => {
    menuList.classList.remove('header__menu--active');
    menuShadow.classList.remove('menu--open');
  });


  $('.js-collapse-btn').on('click', function () {
    $(this).parent().siblings().find('.js-collapse-box').slideUp();
    $(this).parent().siblings().find('.js-collapse-btn').removeClass('js-collapse-btn--active');

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


  $('.certificat-slider__items').slick({
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
        breakpoint: 765,
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
    nextArrow: '<button type="button" class="slick-next slick-next--review slick-disabled slick-disabled--review"></button>',
    dotsClass: 'slick-dots slick-dots--review',
    infinite: false,
    centerMode: false,
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
        breakpoint: 640,
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