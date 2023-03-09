app.tabs = {
    name: 'tabs',
    description: 'your script description',
    init() {
        $('.tab').on('click', function () {
            const $tab = $(this);
            const $otherTabs = $tab.siblings();
            const $tabsContentActive = $(`#${$tab.attr('aria-controls')}`);

            $otherTabs.removeClass('active');
            $otherTabs.attr('tabindex', -1);
            $otherTabs.attr('aria-selected', false);
            $('.tabs-content').attr('tabindex', -1);
            $('.tabs-content').removeClass('active');

            $tab.addClass('active');
            $tab.attr('aria-selected', true);
            $tab.attr('tabindex', 0);
            $tabsContentActive.attr('tabindex', 0);
            $tabsContentActive.addClass('active');
        });
    },
};
