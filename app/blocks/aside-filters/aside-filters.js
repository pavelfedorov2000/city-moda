app.asideFilters = {
    name: 'asideFilters',
    description: 'your script description',
    init() {
        const asideFiltersItemDropTextMap = new Map();
        asideFiltersItemDropTextMap.set(true, 'Свернуть');
        asideFiltersItemDropTextMap.set(false, 'Развернуть');

        // Аккордеон
        $('.aside-filters__item-drop').on('click', function () {
            const $asideFiltersItemDrop = $(this);
            const $asideFiltersItemContent = $asideFiltersItemDrop.closest('.aside-filters__item').find('.aside-filters__sublist');

            if ($asideFiltersItemDrop.attr('aria-expanded') === 'false') {
                $asideFiltersItemDrop.attr('aria-expanded', true);
                $asideFiltersItemDrop.attr('aria-label', asideFiltersItemDropTextMap.get(true));
                $asideFiltersItemContent.slideDown();
            } else {
                $asideFiltersItemDrop.attr('aria-expanded', false);
                $asideFiltersItemDrop.attr('aria-label', asideFiltersItemDropTextMap.get(false));
                $asideFiltersItemContent.slideUp();
            }
        });

        const catalogAside = document.querySelector('.catalog__aside');

        function fixAsideFilters() {
            if (window.innerWidth > 1024) {
                new StickySidebar('.catalog__aside', {
                    topSpacing: 20,
                    bottomSpacing: 20,
                    containerSelector: '.catalog__inner',
                    innerWrapperSelector: '.aside-filters',
                });
            }
        }

        if (!catalogAside) return;
        fixAsideFilters();
        window.addEventListener('resize', () => {
            fixAsideFilters();
        });
    },
};
