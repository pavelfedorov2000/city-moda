$(function () {
    // Открытие попапа скидки через 2 мин
    setTimeout(() => {
        $.fancybox.open({
            src: '#discount-popup',
            type: 'inline',
        });
    }, 120000);

    // Логика строки поиска
    /* $('.search-form__input').on('input', function () {
        const $searchInput = $(this);
        const $searchResults = $searchInput.next();
        $searchResults.fadeIn('slow');
    }); */
    $('.search-form__input').on('input change', function () {
        const $searchInput = $(this);
        const $searchResults = $searchInput.next();

        if ($searchInput.val() === '') {
            $searchResults.fadeOut('slow');
        } else {
            $searchResults.fadeIn('slow');
        }
    });

    $('.search-form__input').on('focus', function () {
        const $searchInput = $(this);
        const $searchResults = $searchInput.next();

        if ($searchInput.val() !== '') {
            $searchResults.fadeIn('slow');
        }
    });

    $('.search-form__input').on('focusout', function () {
        const $searchInput = $(this);
        const $searchResults = $searchInput.next();

        $searchResults.fadeOut('slow');
    });

    // Если в корзине нет продуктов, то появится надпись Вы еще не добавили товары в корзину
    if ($('.drop-basket__products').length == 0) {
        $('.drop-basket__empty').show();
    } else {
        $('.drop-basket__empty').hide();
    }

    // Демонстрация выезжающей авторизации
    if ($('main').hasClass('auth')) {
        $('body').addClass('_lock');
        $('.overlay').show('slow');
        $('#auth-popup').addClass('active');
    }

    if ($('main').hasClass('password-recovery')) {
        $('body').addClass('_lock');
        $('.overlay').show('slow');
        $('#password-recovery').addClass('active');
    }

    // Демонстрация выезжающей корзины
    if ($('main').hasClass('drop-basket-page')) {
        $('body').addClass('_lock');
        $('.overlay').show('slow');
        $('#cart').addClass('active');
    }

    // Кнопка добавить в избранное
    $('.product-favorite-btn').on('click', function () {
        const $favoriteBtn = $(this);
        $favoriteBtn.toggleClass('favorite');
    });

    // выбор города в попапе
    $('.region-popup__city .radio-text').on('click', function () {
        $.fancybox.close();
        $('.header__region').text($(this).text());
    });

    // Восстановление пароля форма успешно отправлена
    $('#password-recovery form').submit(function (e) {
        e.preventDefault();
        const $form = $(this);
        $form.append('<div class="form-success aside-popup__form-success">Письмо отправлено. Для восстановления пароля перейдите по ссылке в письме</div>');
    });

    // Клик на задизейбенный размер - открытие попапа подписаться на размер
    $('.product-sizes__item').on('click', function () {
        const $productSizesItem = $(this);
        const $productSizesItemRadio = $productSizesItem.find('input[type=radio]');

        if ($productSizesItemRadio.prop('disabled')) {
            $.fancybox.open({
                src: '#size-subscribe-popup',
                type: 'inline',
            });
        }
    });


    // Промокод (оформление заказа)
    $('input[name=promocode]').on('change', function () {
        const $promocodeInput = $(this);
        const $promocodeInputVal = $promocodeInput.val();

        if ($promocodeInputVal !== '') {
            $promocodeInput.addClass('valid');
        }
    });

    // Попап подписка
    $('.subscribe-item__change-btn').on('click', function () {
        const $subscribeItemChangeBtn = $(this);
        const $subscribeItemTitle = $subscribeItemChangeBtn.closest('.subscribe-item').find('.subscribe-item__title');

        $('.sale-popup__title').text($subscribeItemTitle.text());
    });

    // форма подписки в футере
    $('.form-row__input').on('change', function () {
        const $formRowInput = $(this);
        const $formRowBtn = $formRowInput.closest('form-row').find('.form-row__btn');

        if ($('#email-error').attr('style') === 'display: none;') {
            $formRowBtn.css('background-color', '#101112');
            $formRowBtn.css('border-color', '#101112');
        }
    });

    // Бренды алфавит
    $('.brands-index-list__item').on('click', function (e) {
        e.preventDefault();

        const $brandsIndexListItem = $(this);
        const $brandsIndexListItemHref = $brandsIndexListItem.attr('href');
        const $brandsIndexListItemNotActive = $brandsIndexListItem.closest('li').siblings().find('.brands-index-list__item');

        $('.cancel-brand-letter').css('display', 'flex');
        $brandsIndexListItemNotActive.removeClass('active');
        $('.brands-alphabet__item').css('display', 'none');
        $brandsIndexListItem.addClass('active');
        $($brandsIndexListItemHref).css('display', 'flex');
    });

    // Кнопка отменить
    $('.cancel-brand-letter').on('click', function () {
        const $cancelBrandLetter = $(this);
        const $brandsIndexListItem = $cancelBrandLetter.closest('.brands-wrap').find('.brands-index-list__item');

        $cancelBrandLetter.hide();
        $brandsIndexListItem.removeClass('active');
        $('.brands-alphabet__item').css('display', 'flex');
    });
});

