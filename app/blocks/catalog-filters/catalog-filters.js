app.catalogFilters = {
	name: 'catalogFilters',
	description: 'your script description',
	init() {
		$('.catalog-filters__item-title').on('click', function () {
			$(this).parent().siblings().find('legend').removeClass('catalog-filters__item-title--active');
			$(this).parent().siblings().find('div.catalog-drop-filter').slideUp('300');
			$(this).toggleClass('catalog-filters__item-title--active');
			$(this).next().slideToggle('300');
		});
	},
};
