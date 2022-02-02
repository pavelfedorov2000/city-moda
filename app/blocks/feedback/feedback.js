app.feedback = {
	name: 'feedback',
	description: 'your script description',
    init() {
		$('.feedback__form input').on('change', function () {
			if ($(this).val() !== '' && $(this).parents('form').find('input').val() !== '' && $(this).parents('form').find('input[name=politics_agree]').is(':checked') && $(this).parents('form').find('input[name=personal_agree]').is(':checked')) {
				$(this).parents('form').find('button[type="submit"]').prop('disabled', false);
			} else {
				$(this).parents('form').find('button[type="submit"]').prop('disabled', true);
			}
		});
	},
};
