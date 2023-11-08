$(function () {

  // $('.product-slide__thumb').slick({
  //   asNavFor: '.product-slide__big',
  //   focusOnSelect: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   vertical: true,
  //   draggable: false
  // });

  // $('.product-slide__big').slick({
  //   asNavFor: '.product-slide__thumb',
  //   draggable: false,
  //   arrows: false,
  //   fade: true,
  //   responsive: [
  //     {
  //       breakpoint: 1051,
  //       settings: {
  //         draggable: true,
  //       }
  //     },
  //   ]
  // });

  $('.certificat-slider').slick({
    dots: true,
    arrows: true,
    fade: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1600,
    infinite: false,
  });

  $('.review-slider').slick({
    dots: true,
    arrows: true,
    fade: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1600,
    infinite: false,
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