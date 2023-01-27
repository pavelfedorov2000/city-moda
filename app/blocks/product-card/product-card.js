app.productCard = {
    name: 'productCard',
    description: 'your script description',
    init() {
        $('.product-color__item .radio-box').on('change', function () {
            const $productColorRadioCheckbox = $(this);
            const $productColorRadio = $productColorRadioCheckbox.closest('.radio');
            const $productColorRadioStyle = $productColorRadio.find('.radio-style');
            const $productColorRadioStyleNotActive = $productColorRadio.siblings().find('.radio-style');

            if ($productColorRadioCheckbox.is(':checked')) {
                $productColorRadioStyle.addClass('radio-style--checked');
                $productColorRadioStyleNotActive.removeClass('radio-style--checked');
            }
        });
    },
};
