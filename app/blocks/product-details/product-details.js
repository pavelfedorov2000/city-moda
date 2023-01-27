app.productDetails = {
    name: 'productDetails',
    description: 'your script description',
    init() {
        const productDetailsButtonTextMap = new Map();
        productDetailsButtonTextMap.set(true, 'скрыть');
        productDetailsButtonTextMap.set(false, 'раскрыть');

        $('.product-details__hide-btn').on('click', function () {
            const $productDetailsHideBtn = $(this);
            const $productDetailsContent = $productDetailsHideBtn.closest('.product-details__section-title').next();

            if ($productDetailsHideBtn.attr('aria-expanded') === 'false') {
                $productDetailsHideBtn.attr('aria-expanded', true);
                $productDetailsHideBtn.text(productDetailsButtonTextMap.get(true));
                $productDetailsContent.slideDown();
            } else {
                $productDetailsHideBtn.attr('aria-expanded', false);
                $productDetailsHideBtn.text(productDetailsButtonTextMap.get(false));
                $productDetailsContent.slideUp();
            }
        });
    },
};
