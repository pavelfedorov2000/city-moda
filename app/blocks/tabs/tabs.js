app.tabs = {
    name: 'tabs',
    description: 'your script description',
    init() {
        $('.tab').on('click', function (e) {
            e.preventDefault();

            const $tab = $(this);

            $tab.siblings().removeClass('active');
            $('.tabs-content').removeClass('active');

            $tab.addClass('active');
            $($tab.attr('href')).addClass('active');
        });
    },
};
