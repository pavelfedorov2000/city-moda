app.tooltip = {
    name: 'tooltip',
    description: 'your script description',
    init() {
        $('.tooltip__btn').hover(function () {
            const $tooltipBtn = $(this);
            const $tooltip = $tooltipBtn.closest('.tooltip');
            const $tooltipContent = $tooltip.find('.tooltip__content');

            $tooltipContent.fadeToggle('slow');
        });
    },
};
