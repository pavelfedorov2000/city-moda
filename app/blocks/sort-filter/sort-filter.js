app.sortFilter = {
	name: 'sortFilter',
	description: 'your script description',
	init() {
		$('.catalog-filters__item--sort .catalog-filters__item-title').on('click', function () {
			$(this).toggleClass('catalog-filters__item-title--bold');
		});
		$('.catalog-filters__item--sort .catalog-drop-filter__item').on('click', function () {
			$(this).parents('.catalog-drop-filter').prev().text($(this).find('span.radio-text').text());
			if ($(window).width() > 1024) {
				$(this).parents('.catalog-drop-filter').slideUp('300');
				$(this).parents('.catalog-drop-filter').prev().removeClass('catalog-filters__item-title--active');
				$(this).parents('.catalog-drop-filter').prev().removeClass('catalog-filters__item-title--bold');
			}
		});
	},
};
