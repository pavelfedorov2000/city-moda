app.catalogCard = {
    name: 'catalogCard',
    description: 'your script description',
    init() {
        // Кнопка добавить в избранное
        $('.catalog-card__favorite:not(:disabled)').on('click', function () {
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

            $catalogViewBtnNotActive.removeClass('active');
            $catalogViewBtn.addClass('active');

            if ($('.col-btn').hasClass('active')) {
                $('.catalog__cards').addClass('catalog__cards--two-cols');
            } else {
                $('.catalog__cards').removeClass('catalog__cards--two-cols');
            }

            if ($('.row-btn').hasClass('active')) {
                $('.catalog__cards').addClass('catalog__cards--row');
            } else {
                $('.catalog__cards').removeClass('catalog__cards--row');
            }
        });

        if ($(window).width() < 768) {
            $('.catalog__cards').addClass('catalog__cards--two-cols');
            $('.col-btn').addClass('active');
        }

        $(window).resize(function () {
            if ($(window).width() < 768) {
                $('.catalog__cards').addClass('catalog__cards--two-cols');
                $('.col-btn').addClass('active');
            }
        });
    },
};
