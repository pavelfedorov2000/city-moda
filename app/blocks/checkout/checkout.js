app.checkout = {
    name: 'checkout',
    description: 'your script description',
    init() {
        $('.checkout-radio').on('click', function () {
            const $checkoutRadio = $(this);
            const $checkoutRadioNotActive = $checkoutRadio.siblings();
            $checkoutRadioNotActive.removeClass('checkout-radio--checked');
            $checkoutRadio.addClass('checkout-radio--checked');
            $checkoutRadioNotActive.find('.checkout-radio__hidden').slideUp('300');
            $checkoutRadio.find('.checkout-radio__hidden').slideDown('300');
        });
    },
};
