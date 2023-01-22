app.asideFilters = {
    name: 'asideFilters',
    description: 'your script description',
    init() {
        // Аккордеон
        $('.aside-filters__item-drop').on('click', function () {
            const $asideFiltersItemDrop = $(this);
            const $asideFiltersItemContent = $asideFiltersItemDrop.closest('.aside-filters__item').find('.aside-filters__sublist');

            if ($asideFiltersItemDrop.attr('aria-expanded') === 'false') {
                $asideFiltersItemDrop.attr('aria-expanded', true);
                $asideFiltersItemDrop.attr('aria-label', 'Свернуть');
                $asideFiltersItemContent.slideDown();
            } else {
                $asideFiltersItemDrop.attr('aria-expanded', false);
                $asideFiltersItemDrop.attr('aria-label', 'Развернуть');
                $asideFiltersItemContent.slideUp();
            }
        });
    },
};
