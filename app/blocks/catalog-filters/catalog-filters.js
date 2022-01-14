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

		$('.catalog-drop-filter__item input[type="checkbox"]').on('click', function () {
			/* if ($(this).is(':checked')) {
				checkedItems += 1;
			} else {
				checkedItems -= 1;
			}
			console.log(checkedItems); */
			let className = $(this).parents('.catalog-drop-filter__item').attr('class');
			console.log(className);
			let checkedItems = $(`.${className} input:checkbox:checked`).length;
			console.log(checkedItems);
			if (checkedItems > 0) {
				$(this).parents('.catalog-drop-filter').prev().find('span').text(`(${checkedItems})`);
				$(this).parents('.catalog-drop-filter').prev().css('font-weight', '600');
			} else {
				$(this).parents('.catalog-drop-filter').prev().css('font-weight', '400');
				$(this).parents('.catalog-drop-filter').prev().find('span').text('');
			}
		});
	},
};
