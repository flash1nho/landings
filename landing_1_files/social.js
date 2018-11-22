// Facebook
  $('.js-share-fb').livequery(function() {
    var $this = $(this);

    $this.click(function() {
      shareOverrideOGMeta($this.data('url'), $this.data('title'), $this.data('text'), $this.data('image'));
    });
  });

$('.js-counter-fb').livequery(function() {
  var $this = $(this);

  $this.ShareCounter({
    url: $this.data('url'),
    increment: true
  });
});

// Vkontakte
$('.js-share-vk').livequery(function() {
  var $this = $(this);

  $this.ShareLink({
    image: $this.data('image'),
    title: $this.data('title'),
    url: $this.data('url'),
    text: $this.data('text')
  });
});

$('.js-counter-vk').livequery(function() {
  var $this = $(this);

  $this.ShareCounter({
    url: $this.data('url'),
    increment: true
  });
});

// Odnkoklassniki
$('.js-share-ok').livequery(function() {
  var $this = $(this);

  $this.ShareLink({
    image: $this.data('image'),
    title: $this.data('title'),
    url: $this.data('url'),
    text: $this.data('text')
  });
});

$('.js-counter-ok').livequery(function() {
  var $this = $(this);

  $this.ShareCounter({
    url: $this.data('url'),
    increment: true
  });
});

// Twitter
$('.js-share-tw').livequery(function() {
  var $this = $(this);

  $this.ShareLink({
    text: $this.data('text'),
    url: $this.data('url')
  });
});

// Whatsapp
$('.js-share-wp').livequery(function() {
  var $this = $(this);

  $this.ShareLink({
    title: $this.data('title'),
    url: $this.data('url')
  });
});

// Viber
$('.js-share-vb').livequery(function() {
  var $this = $(this);

  $this.ShareLink({
    title: $this.data('title'),
    url: $this.data('url')
  });
});

// Telegram
$('.js-share-tg').livequery(function() {
  var $this = $(this);

  $this.ShareLink({
    title: $this.data('title'),
    url: $this.data('url')
  });
});

function shareOverrideOGMeta(overrideLink, overrideTitle, overrideDescription, overrideImage) {
  FB.ui({
    method: 'share_open_graph',
    action_type: 'og.shares',
    action_properties: JSON.stringify({
      object: {
        'og:url': overrideLink,
        'og:title': overrideTitle,
        'og:description': overrideDescription,
        'og:image': overrideImage
      }
    })
  });
}
