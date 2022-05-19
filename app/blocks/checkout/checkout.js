app.checkout = {
  name: 'checkout',
  description: 'your script description',
  init() {
    $('.checkout-radio').on('click', function () {
      $(this).siblings().removeClass('checkout-radio--checked');
      $(this).addClass('checkout-radio--checked');
      $(this).siblings().find('.checkout-radio__hidden').slideUp('300');
      $(this).find('.checkout-radio__hidden').slideDown('300');
    });
  },
};
