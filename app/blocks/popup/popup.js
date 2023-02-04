app.popup = {
    name: 'popup',
    description: 'your script description',
    init() {
        $('.region-header__value').on('click', function () {
            const $regionHeaderValue = $(this);
            const $regionHeaderDrop = $regionHeaderValue.next();

            if ($regionHeaderValue.attr('aria-expanded') === 'false') {
                $regionHeaderValue.attr('aria-expanded', true);
                $regionHeaderDrop.slideDown();
            } else {
                $regionHeaderValue.attr('aria-expanded', false);
                $regionHeaderDrop.slideUp();
            }
        });

        $('.region-header__drop-item').on('click', function () {
            const $regionHeaderDropItem = $(this);
            const regionHeaderDropItemText = $regionHeaderDropItem.text();
            const $regionHeaderDropItemNotActive = $regionHeaderDropItem.siblings();
            const $regionHeaderDrop = $regionHeaderDropItem.parent();
            const $regionHeaderValue = $regionHeaderDrop.prev();

            $regionHeaderValue.attr('aria-expanded', false);
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
            $('.overlay').fadeOut();
            $('body').removeClass('_lock');
            $('html').removeClass('disable-fix');
        });

        $(document).on('mouseup', function (e) {
            const $asidePopupActive = $('.aside-popup.active');
            if (!$asidePopupActive.is(e.target) && $asidePopupActive.has(e.target).length === 0) {
                $(`[data-popup="${$asidePopupActive.attr('id')}"]`).attr('aria-expanded', false);
                $asidePopupActive.removeClass('active');
                $('.overlay').fadeOut();
                $('body').removeClass('_lock');
                $('html').removeClass('disable-fix');
            }
        });
    },
};
