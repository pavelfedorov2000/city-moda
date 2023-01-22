app.feedback = {
    name: 'feedback',
    description: 'your script description',
    init() {
        $('.feedback__form input').on('change', function () {
            const $input = $(this);
            const inputVal = $input.val();
            const $form = $input.closest('form');
            const $inputs = $form.find('input');
            const $submitBtn = $form.find('button[type="submit"]');
            const $agreeCheckboxes = $form.find('input[type="checkbox"]');

            if (inputVal !== '' && $inputs.val() !== '' && $agreeCheckboxes.is(':checked')) {
                $submitBtn.prop('disabled', false);
            } else {
                $submitBtn.prop('disabled', true);
            }
        });
    },
};
