app.catalogCard = {
    name: 'catalogCard',
    description: 'your script description',
    init() {
        // Кнопка добавить в избранное
        $('.favorite-btn:not(:disabled):not(.disabled)').on('click', function () {
            const $favoriteBtn = $(this);

            $favoriteBtn.toggleClass('favorite');
            $favoriteBtn.addClass('animated');

            if ($favoriteBtn.hasClass('favorite')) {
                $favoriteBtn.attr('aria-label', 'Убрать из избранного');
            } else {
                $favoriteBtn.attr('aria-label', 'Добавить в избранное');
            }

            setTimeout(() => {
                $favoriteBtn.removeClass('animated');
            }, 300);
        });

        $('.catalog-view__btn').on('click', function () {
            const $catalogViewBtn = $(this);
            const $catalogViewBtnNotActive = $catalogViewBtn.siblings();
            const $catalogList = $('.catalog-list');

            $catalogViewBtnNotActive.removeClass('active');
            $catalogViewBtn.addClass('active');

            if ($('.col-btn').hasClass('active')) {
                $catalogList.addClass('catalog-list--two-cols');
            } else {
                $catalogList.removeClass('catalog-list--two-cols');
            }

            if ($('.row-btn').hasClass('active')) {
                $catalogList.addClass('catalog-list--row');
            } else {
                $catalogList.removeClass('catalog-list--row');
            }
        });

        if ($(window).width() < 768) {
            $('.catalog-list').addClass('catalog-list--two-cols');
            $('.col-btn').addClass('active');
        }

        $(window).resize(function () {
            if ($(window).width() < 768) {
                $('.catalog-list').addClass('catalog-list--two-cols');
                $('.col-btn').addClass('active');
            }
        });
    },
};
