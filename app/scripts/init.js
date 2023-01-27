(function ($) {
    $(function () {
        new LazyLoad();

        // prevent gallery slider crashing after fancybox close
        $('[data-fancybox="gallery"]').fancybox({
            backFocus: false
        });

        app.select.init();
        app.tabs.init();
        app.validation.init();
        app.burger.init();
        app.promoSale.init();
        app.iconsSlider.init();
        app.sliderSections.init();
        app.instagram.init();
        app.otherNews.init();
        app.blogTextSlider.init();
        app.catalogCard.init();
        app.catalogFilters.init();
        app.asideFilters.init();
        app.productCard.init();
        app.counter.init();
        app.productPopup.init();
        app.productDetails.init();
        app.popup.init();
        app.checkout.init();
        app.faq.init();
        app.feedback.init();
        app.pageup.init();
        app.auth.init();
        app.pickupFilters.init();
        app.basketTotal.init();
        app.pageNav.init();
        app.scrollLink.init();
        app.tooltip.init();
    });
})(jQuery)
