$(document).ready(function() {
  $('.featured-slider').slick({
    // autoplay: true,
    // autoplaySpeed: 3000,
  });
  $('.trending-now-slider').slick({
    // autoplay: true,
    // autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
  });
  $('.related-article-slider').slick({
    // autoplay: true,
    // autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
  $(".menu-icon").click(function() {
    $(this).toggleClass("menu-visible");
    $('.navigation-links').toggleClass("open");
  });
});
