app.catalogFilters = {
    name: 'catalogFilters',
    description: 'your script description',
    init() {
        $('.catalog-filter__toggle').on('click', function () {
            const $catalogFilterToggle = $(this);
            const $catalogFilter = $catalogFilterToggle.closest('.catalog-filter');
            const $catalogFilterDrop = $catalogFilter.find('.catalog-filter__drop');
            const $catalogFilterNotActive = $catalogFilter.siblings();
            const $catalogFilterToggleNotActive = $catalogFilterNotActive.find('.catalog-filter__toggle');
            const $catalogFilterDropNotActive = $catalogFilterNotActive.find('.catalog-filter__drop');

            $catalogFilterToggleNotActive.attr('aria-expanded', false);
            $catalogFilterDropNotActive.slideUp();

            if ($catalogFilterToggle.attr('aria-expanded') === 'false') {
                $catalogFilterToggle.attr('aria-expanded', true);
                $catalogFilterDrop.slideDown();
            } else {
                $catalogFilterToggle.attr('aria-expanded', false);
                $catalogFilterDrop.slideUp();
            }
        });

        $(document).on('mouseup', function (e) {
            const $catalogFilterToggleActive = $('.catalog-filter__toggle[aria-expanded="true"]');
            const $catalogFilter = $catalogFilterToggleActive.closest('.catalog-filter');
            const $catalogFilterDrop = $catalogFilter.find('.catalog-filter__drop');

            if (!$catalogFilter.is(e.target) && $catalogFilter.has(e.target).length === 0) {
                $catalogFilterToggleActive.attr('aria-expanded', false);
                $catalogFilterDrop.slideUp();
            }
        });

        // Подсчет отмеченных чекбоксом
        $('.catalog-filters__item--material input[type="checkbox"], .catalog-filters__item--color input[type="checkbox"], .catalog-filters__item--brand input[type="checkbox"], .catalog-filters__item--details input[type="checkbox"], .catalog-filters__item--style input[type="checkbox"], .catalog-filters__item--decor input[type="checkbox"]').on('click', function () {
            const $checkbox = $(this);
            const $catalogFilter = $checkbox.closest('.catalog-filter');
            const className = $catalogFilter.attr('class').split(' ').join('.');
            const checkedItems = $(`.${className} input:checkbox:checked`).length;
            const $catalogFilterToggle = $catalogFilter.find('.catalog-filter__toggle');
            const $filterOutput = $catalogFilterToggle.find('.filter-output');

            if (checkedItems > 0) {
                $filterOutput.text(`(${checkedItems})`);
                $catalogFilterToggle.css('font-weight', '600');
            } else {
                $catalogFilterToggle.css('font-weight', '400');
                $filterOutput.text('');
            }
        });

        // Кнопка сброса общая
        $('.catalog-filters__reset-btn').on('click', function () {
            const $catalogFiltersResetBtn = $(this);
            const $catalogFilters = $catalogFiltersResetBtn.closest('.catalog-filters');
            const $catalogFilterToggle = $catalogFilters.find('.catalog-filter__toggle');
            const $catalogFilterDrop = $catalogFilters.find('.catalog-filter__drop');

            $('.catalog-filters__item--sort').find('.catalog-filter__title').text('Сортировать');
            $catalogFilterToggle.css('font-weight', '400');
            $catalogFilterToggle.find('.filter-output').text('');
            $catalogFilterToggle.attr('aria-expanded', false);
            $catalogFilterDrop.slideUp();
        });

        // Кнопка сброса в отдельном фильтре
        $('.catalog-drop-filter__btn[type=reset]').on('click', function () {
            const $catalogDropFilterResetBtn = $(this);
            const $catalogFilterToggle = $catalogDropFilterResetBtn.closest('.catalog-filter').find('.catalog-filter__toggle');
            const $filterOutput = $catalogFilterToggle.find('.filter-output');
            $catalogFilterToggle.css('font-weight', '400');
            $filterOutput.text('');
        });

        // Открытие фильтров (тач-скрины)
        $('.filters-btn').on('click', function () {
            const $filtersBtn = $(this);
            const $catalogFilters = $('body').find('.catalog-filters');

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

        $('.catalog-filter__toggle').on('click', function () {
            if ($(window).width() < 1025) {
                const $catalogFilterToggle = $(this);
                const $catalogFilterTitle = $catalogFilterToggle.closest('.catalog-filter__title');
                const $catalogFilterToggleText = $catalogFilterToggle.children().first().text();
                const $catalogFilter = $catalogFilterToggle.closest('.catalog-filter');
                const $catalogFilterNotActive = $catalogFilter.siblings();
                const $catalogFilterDrop = $catalogFilter.find('.catalog-filter__drop');
                const $catalogFilters = $catalogFilter.closest('.catalog-filters');
                const $catalogFiltersBackBtn = $catalogFilters.find('.catalog-filters__back-btn');
                const $catalogFiltersTitle = $catalogFilters.find('.catalog-filters__title');

                $catalogFiltersBackBtn.show();
                $catalogFiltersTitle.text($catalogFilterToggleText);
                $catalogFilterNotActive.hide();
                $catalogFilterTitle.hide();
                $catalogFilterDrop.show();
            }
        });

        // Кнопка назад на мобиле
        $('.catalog-filters__back-btn').on('click', function () {
            const $catalogFiltersBackBtn = $(this);
            const $catalogFilters = $catalogFiltersBackBtn.closest('.catalog-filters');
            const $catalogFiltersTitle = $catalogFilters.find('.catalog-filters__title');
            const $catalogFiltersItem = $catalogFilters.find('.catalog-filters__item');
            const $catalogFiltersItemTitle = $catalogFiltersItem.find('.catalog-filter__title');
            const $catalogFiltersItemDrop = $catalogFiltersItem.find('.catalog-filter__drop');

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
            const $catalogFiltersItemTitle = $sizeCheckbox.closest('.catalog-filters__item').find('.catalog-filter__title');
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
            const $catalogFilterToggle = $catalogDropFilterItem.closest('.catalog-filter').find('.catalog-filter__toggle');

            $catalogFilterToggle.css('font-weight', '600');
            $catalogFilterToggle.children().first().text($catalogDropFilterItemRadioText);

            if ($(window).width() > 1024) {
                $catalogDropFilter.slideUp();
                $catalogFilterToggle.attr('aria-expanded', false);
                $catalogFilterToggle.removeClass('catalog-filter__toggle--bold');
            }
        });

        // Фильтр цены
        $('input[name=price_from]').on('input change', function () {
            const $input = $(this);
            const inputVal = $input.val();
            const $catalogFilterToggle = $input.closest('.catalog-filter').find('.catalog-filter__toggle');

            if (inputVal !== '') {
                $('#price_from').text(`${inputVal} -`);
                $catalogFilterToggle.css('font-weight', '600');
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
    },
};