app.productCard = {
    name: 'productCard',
    description: 'your script description',
    init() {
        $('.minus-btn').on('click', function (e) {
            e.preventDefault();
            const $this = $(this);
            const $input = $this.next();
            let value = parseInt($input.val());

            while (value > 0) {
                value -= 1;
                break;
            }

            $input.val(value);
        });

        $('.plus-btn').on('click', function (e) {
            e.preventDefault();
            const $this = $(this);
            const $input = $this.prev();
            let value = parseInt($input.val());

            value += 1;

            $input.val(value);
        });

        $('.product-color__item .radio-box').on('change', function () {
            const $productColorRadioCheckbox = $(this);
            const $productColorRadioStyle = $productColorRadioCheckbox.next();
            const $productColorRadioStyleNotActive = $productColorRadioCheckbox.parent().siblings().find('.radio-style');

            if ($productColorRadioCheckbox.is(':checked')) {
                $productColorRadioStyle.addClass('radio-style--checked');
                $productColorRadioStyleNotActive.removeClass('radio-style--checked');
            }
        });

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
