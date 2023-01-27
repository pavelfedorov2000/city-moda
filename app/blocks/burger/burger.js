app.burger = {
    name: 'burger',
    description: 'burger-btn and burger-menu logic',
    init() {
        $('.burger-btn').on('click', function () {
            $('body').addClass('_lock');
            $('.burger-menu').addClass('active');
            $(this).attr('aria-expanded', true);
        });

        $('.burger-menu__close').on('click', function () {
            $('body').removeClass('_lock');
            $('.burger-menu').removeClass('active');
            $('.burger-btn').attr('aria-expanded', false);
        });

        $('.burger-menu__list-item span').on('click', function () {
            const $burgerMenuListItem = $(this);
            const $burgerMenuListItemNotActive = $burgerMenuListItem.parent().siblings();
            const $burgerMenuListItemNotActiveTitle = $burgerMenuListItemNotActive.find('span');
            const $burgerMenuListItemNotActiveList = $burgerMenuListItemNotActive.find('ul');
            const $burgerMenuSublist = $burgerMenuListItem.next();

            $burgerMenuListItemNotActiveTitle.removeClass('active');
            $burgerMenuListItemNotActiveList.slideUp();
            $burgerMenuListItem.toggleClass('active');
            $burgerMenuSublist.slideToggle();
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
