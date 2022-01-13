app.asideFilters = {
	name: 'asideFilters',
	description: 'your script description',
	init() {
		$('.aside-filters__item-title').on('click', function () {
			$(this).toggleClass('aside-filters__item-title--active');
			$(this).next().slideToggle('300');
		});
		$('.aside-filters__item-label--drop').on('click', function () {
			$(this).toggleClass('aside-filters__item-label--active');
			$(this).next().slideToggle('300');
		});
	},
};
