app.burger = {
    name: 'burger',
    description: 'burger-btn and burger-menu logic',
    init() {
        $('.burger-btn').on('click', function () {
            $('body').addClass('_lock');
            $('.burger-menu').addClass('active');
        });

        $('.burger-menu__close').on('click', function () {
            $('body').removeClass('_lock');
            $('.burger-menu').removeClass('active');
        });

        $('.burger-menu__list-toggle').on('click', function () {
            const $burgerMenuListToggle = $(this);
            const $burgerMenuListItem = $burgerMenuListToggle.closest('.burger-menu__list-item');
            const $burgerMenuListItemNotActive = $burgerMenuListItem.siblings();
            const $burgerMenuListItemNotActiveToggle = $burgerMenuListItemNotActive.find('.burger-menu__list-toggle');
            const $burgerMenuListItemNotActiveList = $burgerMenuListItemNotActive.find('ul');
            const $burgerMenuSublist = $burgerMenuListItem.find('ul');

            $burgerMenuListItemNotActiveToggle.attr('aria-expanded', false);
            $burgerMenuListItemNotActiveList.slideUp();

            if ($burgerMenuListToggle.attr('aria-expanded') === 'false') {
                $burgerMenuListToggle.attr('aria-expanded', true);
                $burgerMenuSublist.slideDown();
            } else {
                $burgerMenuListToggle.attr('aria-expanded', false);
                $burgerMenuSublist.slideUp();
            }
        });

        $('.header__search-btn').on('click', function () {
            const $searchBtn = $(this);
            const $headerMainBottom = $('.header__main-bottom');
            const $searchFormInput = $headerMainBottom.find('.search-form__input');

            if ($searchBtn.attr('aria-expanded') === 'false') {
                $searchBtn.attr('aria-expanded', true);
                $headerMainBottom.addClass('active');
                $searchFormInput.addClass('active');
            } else {
                $searchBtn.attr('aria-expanded', false);
                $headerMainBottom.removeClass('active');
                $searchFormInput.removeClass('active');
            }
        });

        $('.header-info-line__close').on('click', function () {
            const $marqueeCloseBtn = $(this);
            const $marquee = $marqueeCloseBtn.parent();
            $marquee.slideUp();
        })
    },
};
