app.asideFilters = {
	name: 'asideFilters',
	description: 'your script description',
	init() {
		// Аккордеон
		$('.aside-filters__item-drop').on('click', function () {
			$(this).toggleClass('aside-filters__item-drop--active');
			$(this).parent().next().slideToggle('300');
			if ($(this).hasClass('aside-filters__item-drop--active')) {
				$(this).attr('aria-label', 'Свернуть');
			} else {
				$(this).attr('aria-label', 'Развернуть');
			}
		});
	},
};
