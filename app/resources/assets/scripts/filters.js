$(function () {
    $('.catalog-filters__item-title').on('click', function () {
        const $catalogFiltersItemTitle = $(this);
        const $catalogFiltersItem = $catalogFiltersItemTitle.parent();
        const $catalogFiltersItemDrop = $catalogFiltersItem.find('.catalog-filters__item-drop');
        const $catalogFiltersItemNotActive = $catalogFiltersItem.siblings();
        const $catalogFiltersItemTitleNotActive = $catalogFiltersItemNotActive.find('.catalog-filters__item-title');
        const $catalogFiltersItemDropNotActive = $catalogFiltersItemNotActive.find('.catalog-filters__item-drop');

        $catalogFiltersItemTitleNotActive.removeClass('active');
        $catalogFiltersItemDropNotActive.slideUp();
        $catalogFiltersItemTitle.toggleClass('active');
        $catalogFiltersItemDrop.slideToggle();
    });

    // Подсчет отмеченных чекбоксом
    $('.catalog-filters__item--material input[type="checkbox"], .catalog-filters__item--color input[type="checkbox"], .catalog-filters__item--brand input[type="checkbox"], .catalog-filters__item--details input[type="checkbox"], .catalog-filters__item--style input[type="checkbox"], .catalog-filters__item--decor input[type="checkbox"]').on('click', function () {
        const $checkbox = $(this);
        const className = $checkbox.closest('.catalog-filters__item').attr('class').split(' ').join('.');
        const checkedItems = $(`.${className} input:checkbox:checked`).length;
        const $catalogFiltersItemTitle = $checkbox.closest('.catalog-filters__item').find('.catalog-filters__item-title');
        const $filterOutput = $catalogFiltersItemTitle.find('.filter-output');

        if (checkedItems > 0) {
            $filterOutput.text(`(${checkedItems})`);
            $catalogFiltersItemTitle.css('font-weight', '600');
        } else {
            $catalogFiltersItemTitle.css('font-weight', '400');
            $filterOutput.text('');
        }
    });

    // Кнопка сброса общая
    $('.catalog-filters__reset-btn').on('click', function () {
        const $catalogFiltersResetBtn = $(this);
        const $catalogFilters = $catalogFiltersResetBtn.closest('.catalog-filters');
        const $catalogFiltersItemTitle = $catalogFilters.find('.catalog-filters__item-title');
        const $catalogFiltersItemDrop = $catalogFilters.find('.catalog-filters__item-drop');

        $('.catalog-filters__item--sort').find('.catalog-filters__item-title').text('Сортировать');
        $catalogFiltersItemTitle.css('font-weight', '400');
        $catalogFiltersItemTitle.find('.filter-output').text('');
        $catalogFiltersItemTitle.removeClass('active');
        $catalogFiltersItemDrop.slideUp();
    });

    // Кнопка сброса в отдельном фильтре
    $('.catalog-drop-filter__btn[type=reset]').on('click', function () {
        const $catalogDropFilterResetBtn = $(this);
        const $catalogFiltersItemTitle = $catalogDropFilterResetBtn.closest('.catalog-filters__item').find('.catalog-filters__item-title');
        const $filterOutput = $catalogFiltersItemTitle.find('.filter-output');
        $catalogFiltersItemTitle.css('font-weight', '400');
        $filterOutput.text('');
    });

    // Открытие фильтров (тач-скрины)
    $('.filters-btn').on('click', function () {
        const $filtersBtn = $(this);
        const $catalogFilters = $body.find('.catalog-filters');

        $filtersBtn.attr('aria-expanded', true);
        $('body').addClass('_lock');
        $catalogFilters.addClass('active');
    });

    // Закрытие фильтров (тач-скрины)
    $('.catalog-filters__close').on('click', function () {
        const $catalogFiltersClose = $(this);
        const $catalogFilters = $catalogFiltersClose.closest('.catalog-filters');

        $('body').removeClass('_lock');
        $catalogFilters.removeClass('active');
        $('.filters-btn').attr('aria-expanded', false);
    });

    $('.catalog-filters__item-title').on('click', function () {
        if ($(window).width() < 1025) {
            const $catalogFiltersItemTitle = $(this);
            const $catalogFiltersItemTitleText = $catalogFiltersItemTitle.children().first().text();
            const $catalogFiltersItem = $catalogFiltersItemTitle.closest('.catalog-filters__item');
            const $catalogFiltersItemNotActive = $catalogFiltersItem.siblings();
            const $catalogFiltersItemDrop = $catalogFiltersItem.find('.catalog-filters__item-drop');
            const $catalogFilters = $catalogFiltersItem.closest('.catalog-filters');
            const $catalogFiltersBackBtn = $catalogFilters.find('.catalog-filters__back-btn');
            const $catalogFiltersTitle = $catalogFilters.find('.catalog-filters__title');

            $catalogFiltersBackBtn.show();
            $catalogFiltersTitle.text($catalogFiltersItemTitleText);
            $catalogFiltersItemNotActive.hide();
            $catalogFiltersItemTitle.hide();
            $catalogFiltersItemDrop.show();
        }
    });

    // Кнопка назад на мобиле
    $('.catalog-filters__back-btn').on('click', function () {
        const $catalogFiltersBackBtn = $(this);
        const $catalogFilters = $catalogFiltersBackBtn.closest('.catalog-filters');
        const $catalogFiltersTitle = $catalogFilters.find('.catalog-filters__title');
        const $catalogFiltersItem = $catalogFilters.find('.catalog-filters__item');
        const $catalogFiltersItemTitle = $catalogFiltersItem.find('.catalog-filters__item-title');
        const $catalogFiltersItemDrop = $catalogFiltersItem.find('.catalog-filters__item-drop');

        $catalogFiltersBackBtn.hide();
        $catalogFiltersTitle.text('Фильтры');
        $catalogFiltersItem.show();
        $catalogFiltersItemTitle.show();
        $catalogFiltersItemTitle.removeClass('active');
        $catalogFiltersItemDrop.hide();
    });

    // Фильтр размер
    let checkedSizes = [];
    $('.catalog-filters__item--size input[type="checkbox"]').on('click', function () {
        const $sizeCheckbox = $(this);
        const $sizeCheckboxVal = $sizeCheckbox.closest('.catalog-drop-filter__item').find('.check-text').text();
        const $catalogFiltersItemTitle = $sizeCheckbox.closest('.catalog-filters__item').find('.catalog-filters__item-title');
        const $filterOutput = $catalogFiltersItemTitle.find('.filter-output');

        if ($sizeCheckbox.is(':checked')) {
            checkedSizes.push($sizeCheckboxVal);
        } else {
            checkedSizes.splice(checkedSizes.indexOf($sizeCheckboxVal), 1);
        }
        if (checkedSizes.length > 0) {
            $filterOutput.text(`(${checkedSizes.sort().join(', ')})`);
            $catalogFiltersItemTitle.css('font-weight', '600');
        } else {
            $catalogFiltersItemTitle.css('font-weight', '400');
            $filterOutput.text('');
        }
    });

    // Фильтр сортировка
    $('.catalog-filters__item--sort .catalog-drop-filter__item').on('click', function () {
        const $catalogDropFilterItem = $(this);
        const $catalogDropFilterItemRadioText = $catalogDropFilterItem.find('.radio-text').text();
        const $catalogDropFilter = $catalogDropFilterItem.closest('.catalog-drop-filter');
        const $catalogFiltersItemTitle = $catalogDropFilterItem.closest('.catalog-filters__item').find('.catalog-filters__item-title');

        $catalogFiltersItemTitle.css('font-weight', '600');
        $catalogFiltersItemTitle.text($catalogDropFilterItemRadioText);

        if ($(window).width() > 1024) {
            $catalogDropFilter.slideUp();
            $catalogFiltersItemTitle.removeClass('active');
            $catalogFiltersItemTitle.removeClass('catalog-filters__item-title--bold');
        }
    });

    // Фильтр цены
    $('input[name=price_from]').on('input change', function () {
        const $input = $(this);
        const inputVal = $input.val();
        const $catalogFiltersItemTitle = $input.closest('.catalog-filters__item').find('.catalog-filters__item-title');

        if (inputVal !== '') {
            $('#price_from').text(`${inputVal} -`);
            $catalogFiltersItemTitle.css('font-weight', '600');
        } else {
            $('#price_from').text('');
        }
    });
    $('input[name=price_to]').on('input change', function () {
        const $input = $(this);
        const inputVal = $input.val();

        if (inputVal !== '') {
            $('#price_to').text(`${inputVal}`);
        } else {
            $('#price_to').text('');
        }
    });
});