function showBlocks($this) {
  if ($this.length > 0) {
    var dataArchived = $this.data('landing-client-archived');

    if (dataArchived) {
      htmlHash = {'center_section': '', 'right_section': ''};

      $('div[data-landing-client-anchor-name="' + $this.attr('id') + '"]').each(function() {
        $block = $(this);

        if ($block.closest('.js-content').hasClass('center-section')) {
          htmlHash['center_section'] += $block[0].outerHTML;
        } else if ($block.closest('.js-content').hasClass('right-section')) {
          htmlHash['right_section'] += $block[0].outerHTML;
        }
      });

      $body = $('body');

      $body.find('.js-content').each(function() {
        $content = $(this);

        if ($content.hasClass('center-section')) {
          $content.html(htmlHash['center_section']);
        } else if ($content.hasClass('right-section')) {
          $content.html(htmlHash['right_section']);
        }
      });

      setTimeout(function() {
        document.getElementById($this.attr('id')).scrollIntoView();
      }, 100)
    }
  }
}

$(document).ready(function() {
  showBlocks($(location.hash));
});
