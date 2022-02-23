app.productCard = {
  name: 'productCard',
  description: 'your script description',
  init() {

    $('.minus-btn').on('click', function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.next();
      var value = parseInt($input.val());

      while (value > 0) {
        value -= 1;
        break;
      }

      $input.val(value);

    });

    $('.plus-btn').on('click', function (e) {
      e.preventDefault();
      var $this = $(this);
      var $input = $this.prev();
      var value = parseInt($input.val());

      value += 1;

      $input.val(value);
    });

    $('.product-color__item .radio-box').on('change', function () {
      if ($(this).is(':checked')) {
        $(this).next().addClass('radio-style--checked');
        $(this).parent().siblings().find('span.radio-style').removeClass('radio-style--checked');
      }
    });

    $(".scroll-link").on('click', function () {
      $('.product-card__tab').removeClass('tab--active');
      $('.tabs-content').removeClass('tabs-content--active');
      $(`.product-card__tab[href="#${$(this).data('link')}"]`).addClass('tab--active');
      $(`#${$(this).data('link')}`).addClass('tabs-content--active');
      $("html, body").animate({
        scrollTop: $('.product-card__info').offset().top + "px"
      });
      return false;
    });
  },
};
