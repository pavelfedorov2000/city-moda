app.searchForm = {
	name: 'searchForm',
	description: 'your script description',
	init() {
		$('.search-form__input').on('input', function () {
			$(this).next().fadeIn('slow');
		});
		$('.search-form__input').on('input change', function () {
			if ($(this).val() === '') {
				$(this).next().fadeOut('slow');
			} else {
				$(this).next().fadeIn('slow');
			}
		});
		$('.search-form__input').on('focus', function () {
			if ($(this).val() !== '') {
				$(this).next().fadeIn('slow');
			}
		});
		$('.search-form__input').on('focusout', function () {
			$(this).next().fadeOut('slow');
		});
	},
};
