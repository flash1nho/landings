(function () {
  var thumbClass = '.js-gallery-thumbnail';

  $('.js-gallery')
    .slick({
      lazyLoad: "ondemand",
      initialSlide: 0,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      nextArrow: '.js-gallery-next',
      prevArrow: '.js-gallery-prev',
      appendDots: '.js-gallery-dots'
    })
    .on('afterChange', function(event, slick, currentSlide) {
      var $currentSlideEl = $(slick.$slides[currentSlide]);
      var $figureTitle = $currentSlideEl.closest('.js-gallery-parent').find('.js-figure-title');
      var $figureText = $currentSlideEl.closest('.js-gallery-parent').find('.js-figure-text');
      var $galleryItem = $currentSlideEl.find('.js-gallery-item');

      $figureTitle.html($galleryItem.data('title'))
      $figureText.html($galleryItem.data('text'))
    });
})();
