app.popup = {
    name: 'popup',
    description: 'your script description',
    init() {
        $('.region-header__value').on('click', function () {
            const $regionHeaderValue = $(this);
            const $regionHeaderDrop = $regionHeaderValue.next();

            $regionHeaderValue.toggleClass('active');
            $regionHeaderDrop.slideToggle();
        });

        $('.region-header__drop-item').on('click', function () {
            const $regionHeaderDropItem = $(this);
            const regionHeaderDropItemText = $regionHeaderDropItem.text();
            const $regionHeaderDropItemNotActive = $regionHeaderDropItem.siblings();
            const $regionHeaderDrop = $regionHeaderDropItem.parent();
            const $regionHeaderValue = $regionHeaderDrop.prev();

            $regionHeaderValue.removeClass('active');
            $regionHeaderValue.text(regionHeaderDropItemText);
            $regionHeaderDropItemNotActive.removeClass('active');
            $regionHeaderDropItem.addClass('active');
            $regionHeaderDrop.slideUp();
        });

        // Открытие выезжающей справа корзины
        $('[data-popup]').on('click', function () {
            const $btn = $(this);

            $('body').addClass('_lock');
            $('html').addClass('disable-fix');
            $('.overlay').fadeIn('slow');
            $btn.attr('aria-expanded', true);
            $(`#${$btn.attr('data-popup')}`).addClass('active');
        });

        // Закрытие выезжающей корзины и авторизации
        $('.aside-popup__close').on('click', function () {
            const $asidePopupClose = $(this);
            const $asidePopup = $asidePopupClose.closest('.aside-popup');

            $(`[data-popup="${$asidePopup.attr('id')}"]`).attr('aria-expanded', false);
            $asidePopup.removeClass('active');
            $('.overlay').fadeOut('300');
            $('body').removeClass('_lock');
            $('html').removeClass('disable-fix');
        });
    },
};
