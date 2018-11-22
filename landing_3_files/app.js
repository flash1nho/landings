$(document).ready(function() {
  $('a[href="#"]').click(function(event) {
    event.preventDefault();
  });

  function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }

  function setPicSize() {
    var
      $header = $('header.header'),
      $headerPicture = $('.header-photo'),
      headerData = $header.data(),
      headerPictureData = $headerPicture.data();

    if ($headerPicture.length) {
      if (headerPictureData.hasOwnProperty('imageSize') && headerPictureData.imageSize === 'full') {
        $headerPicture.addClass('wide');
      }

      if (headerPictureData.hasOwnProperty('opacity')) {
        $headerPicture.css('opacity', headerPictureData.opacity);
      }
    } else {
      if (headerData.hasOwnProperty('backcolor')) {
        $header.css('background-color', headerData.backcolor);
      }

      if (headerData.hasOwnProperty('opacity') && headerData.hasOwnProperty('backcolor')) {
        $header.css('background-color', hexToRGB(headerData.backcolor, headerData.opacity));
      }
    }

  }

  function setStyles(containers) {
    containers.forEach(function (container) {
      if (container.length > 1) {
        $(container).each(function (i, item) {
          setBackground(item);
        });
      } else {
        setBackground(container);
      }
    });
  }

  function setBackground(container) {
    var data = $(container).data();
    if (data.hasOwnProperty('img') && !!data.img) {
      $(container).addClass('with-back-image');
      $(container).prepend($('<div/>').addClass('back-image'));
      $(container).find('.back-image').css({background: 'url("'+ data.img +'")', opacity: data.opacity});
    } else if (data.hasOwnProperty('backcolor')) {
      if ($(container).find('.main-photo-title').length) {
        $(container).find('.main-photo-title').css('background', hexToRGB(data.backcolor, data.opacity));
      } else {
        $(container).css('background', hexToRGB(data.backcolor, data.opacity));
      }
    }
  }

  function hideContent() {
    var
      $containers = $('.text-zone-container'),
      data;

    $containers.each(function (i, container) {
      data = $(container).data();

      if (!!data.hide) {
        $(container).addClass('hide-content').append($('<div/>').addClass('show-more').append($('<span/>').text('Показать полностью')));
        $(container).find('.text-zone').addClass('short');
      }
    });

    $('.show-more').on('click', function () {
      $(this).hide();
      $(this).closest($containers).removeClass('hide-content');
      $(this).closest($containers).find('.text-zone').removeClass('short');
    });
  }

  setPicSize();
  hideContent();
  setStyles(['.main-photo', '.hor-article-box', '.ver-articles-wrapper', '.footer .main', '.text-zone-container']);
});
