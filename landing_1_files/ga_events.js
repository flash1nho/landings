$(document).ready(function() {
  $(document).on('click', '.js-ga-event', function() {
    $this = $(this);

    _gaq.push(['_trackEvent', $this.data('category'), $this.data('action')]);
  });
});
