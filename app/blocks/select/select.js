app.select = {
    name: 'select',
    description: 'your script description',
    init() {
        $('.select__title').on('click', function () {
            const $selectTitle = $(this);
            const $selectContent = $selectTitle.closest('.select').find('.select__content');
            const $salePopupFormItems = $selectTitle.closest('.sale-popup__form-item').siblings();

            $salePopupFormItems.find('.select__title').removeClass('active');
            $salePopupFormItems.find('.select__content').slideUp();

            $selectContent.toggleClass('active');
            $selectContent.slideToggle();
        });

        $('.select__option').on('click', function () {
            const $selectOption = $(this);
            const $selectContent = $selectOption.closest('.select__content');
            const $selectTitle = $selectContent.closest('.select').find('.select__title');

            $selectTitle.text($selectOption.find('span.select__option-text').text());
            $selectTitle.removeClass('active');
            $selectContent.slideUp();
        });

        // Переключение списка магазинов в зависимости от выбранного города (карточка товара)
        $(`#${$('.shops-availability__select .select__content').children().first().data('city')}`).show();
        $('.shops-availability .select__option').on('click', function () {
            $('.shops-availability__content').hide();
            $(`#${$(this).data('city')}`).show();
        });
    },
};
