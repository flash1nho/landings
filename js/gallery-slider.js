(function () {
  var thumbClass = '.js-gallery-thumbnail';

  $('.js-gallery')
    .on('init', function(event, slick) {
      var thumbHeight = slick.$slides[slick.options.initialSlide].querySelector(thumbClass).offsetHeight;
      if (thumbHeight) setNavContainerHeight($(this), thumbHeight);
    })
    .slick({
      lazyLoad: "ondemand",
      initialSlide: 1,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      nextArrow: '.js-gallery-next',
      prevArrow: '.js-gallery-prev',
      appendDots: '.js-gallery-dots'
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      var nextThumbHeight = slick.$slides[nextSlide].querySelector(thumbClass).offsetHeight;
      setNavContainerHeight($(this), nextThumbHeight);
    })
    .on('afterChange', function(event, slick, currentSlide) {
      // handler for change social share links
      // call slick.$slides[currentSlide] to get the currentSlide 
    });

  function setNavContainerHeight(self, height) {
    var $navContainer = self.parent().find('.js-gallery-navigation');

    $navContainer.height(height);
  }

})();
