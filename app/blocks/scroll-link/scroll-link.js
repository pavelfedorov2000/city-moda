app.scrollLink = {
    name: 'scrollLink',
    description: 'your script description',
    init() {
        $(".scroll-link").on('click', function () {
            const $scrollLink = $(this);
            const scrollLinkDataAttr = $scrollLink.attr('data-link');
            const $productCard = $scrollLink.closest('.product-card');
            const $productCardInfo = $productCard.find('.product-card__info');
            const productCardInfoOffsetTop = $productCardInfo.offset().top;
            const $productCardTabNotActive = $productCardInfo.find('.product-card__tab');
            const $productCardTabsContentNotActive = $productCardInfo.find('.tabs-content');

            $productCardTabNotActive.removeClass('active');
            $productCardTabsContentNotActive.removeClass('active');
            $(`.product-card__tab[href="#${scrollLinkDataAttr}"]`).addClass('active');
            $(`#${scrollLinkDataAttr}`).addClass('active');
            $("html, body").animate({
                scrollTop: productCardInfoOffsetTop + "px"
            });
            return false;
        });
    },
};