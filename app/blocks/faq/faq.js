app.faq = {
    name: 'faq',
    description: 'your script description',
    init() {
        $('.accordion-item__toggle').on('click', function () {
            const $accordionItemToggle = $(this);
            const $accordionItem = $accordionItemToggle.closest('.accordion-item');
            const $accordionItemContent = $accordionItem.find('.accordion-item__content');

            if ($accordionItemToggle.attr('aria-expanded') === 'false') {
                $accordionItemToggle.attr('aria-expanded', true);
                $accordionItemContent.slideDown();
            } else {
                $accordionItemToggle.attr('aria-expanded', false);
                $accordionItemContent.slideUp();
            }
        });
    },
};
