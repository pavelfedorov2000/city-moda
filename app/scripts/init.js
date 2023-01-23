(function ($) {
    $(function () {
        new LazyLoad();

        // prevent gallery slider crashing after fancybox close
        $('[data-fancybox="gallery"]').fancybox({
            backFocus: false
        });

        // Селект
        $('.select__title').on('click', function () {
            const $selectTitle = $(this);
            const $selectContent = $selectTitle.closest('.select').find('.select__content');
            const $salePopupFormItems = $selectTitle.closest('.sale-popup__form-item').siblings();

            $salePopupFormItems.find('.select__title').removeClass('select__title--active');
            $salePopupFormItems.find('.select__content').slideUp();

            $selectContent.toggleClass('active');
            $selectContent.slideToggle();
        });

        $('.select__option').on('click', function () {
            const $selectOption = $(this);
            const $selectContent = $selectOption.closest('.select__content');
            const $selectTitle = $selectContent.closest('.select').find('.select__title');

            $selectTitle.text($selectOption.find('span.select__option-text').text());
            $selectTitle.removeClass('active');
            $selectContent.slideUp();
        });

        // Переключение списка магазинов в зависимости от выбранного города (карточка товара)
        $(`#${$('.shops-availability__select .select__content').children().first().data('city')}`).show();
        $('.shops-availability .select__option').on('click', function () {
            $('.shops-availability__content').hide();
            $(`#${$(this).data('city')}`).show();
        });

        $('.tab').on('click', function (e) {
            e.preventDefault();

            const $tab = $(this);

            $tab.siblings().removeClass('active');
            $('.tabs-content').removeClass('active');

            $tab.addClass('active');
            $($tab.attr('href')).addClass('active');
        });

        app.validation.init();
        app.burger.init();
        app.promoSale.init();
        app.iconsSlider.init();
        app.sliderSections.init();
        app.instagram.init();
        app.otherNews.init();
        app.blog.init();
        app.catalogCard.init();
        app.asideFilters.init();
        app.productCard.init();
        app.productPopup.init();
        app.productDetails.init();
        app.popup.init();
        app.checkout.init();
        app.faq.init();
        app.feedback.init();
        app.pageup.init();
        app.auth.init();
        app.pickupFilters.init();
    });
})(jQuery)
