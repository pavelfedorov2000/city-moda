app.productDetails = {
    name: 'productDetails',
    description: 'your script description',
    init() {
        const productDetailsButtonTextMap = new Map();
        productDetailsButtonTextMap.set(true, 'скрыть');
        productDetailsButtonTextMap.set(false, 'раскрыть');

        $('.product-details-section__toggle').on('click', function () {
            const $productDetailsSectionToggle = $(this);
            const $productDetailsSectionContent = $productDetailsSectionToggle.closest('.product-details-section__heading').next();

            if ($productDetailsSectionToggle.attr('aria-expanded') === 'false') {
                $productDetailsSectionToggle.attr('aria-expanded', true);
                $productDetailsSectionToggle.text(productDetailsButtonTextMap.get(true));
                $productDetailsSectionContent.slideDown();
            } else {
                $productDetailsSectionToggle.attr('aria-expanded', false);
                $productDetailsSectionToggle.text(productDetailsButtonTextMap.get(false));
                $productDetailsSectionContent.slideUp();
            }
        });
    },
};
