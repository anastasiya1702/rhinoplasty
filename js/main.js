$(function () {

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
    draggable: false
  });

  $('.services-slide__big').slick({
    asNavFor: '.services-slide__thumb',
    draggable: true,
    arrows: false,
    fade: false,
    responsive: [
    {
        breakpoint: 1051,
        settings: {
          draggable: true,
        }
      },
     ]
   });

  $('.certificat-slider').slick({
    dots: true,
    arrows: true,
    fade: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1600,
    prevArrow: '<button type="button" class="slick-prev slick-prev--certificat"></button>',
    nextArrow: '<button type="button" class="slick-next slick-next--certificat slick-disabled slick-disabled--certificat"></button>',
    infinite: false,
    dotsClass: 'slick-dots slick-dots--certificat',
  });

  $('.details-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.details-tabs__top-item').removeClass('details-tabs__top-item--active');
    $(this).addClass('details-tabs__top-item--active');

    $('.details-tabs__content-item').removeClass('details-tabs__content-item--active');
    $($(this).attr('href')).addClass('details-tabs__content-item--active');
  });

  $('.slider').slick({
    dots: true,
    arrows: true,
    fade: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1600,
    infinite: false,
  });

});


$(function () {

  $('.review-slider').slick({
    dots: true,
    autoplay: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 3,
    autoplaySpeed: 1600,
    prevArrow: '<button type="button" class="slick-prev slick-prev--review"></button>',
    nextArrow: '<button type="button" class="slick-next slick-next--review"></button>',
    infinite: false,
  });

});