app.sizeFilter = {
	name: 'sizeFilter',
	description: 'your script description',
	init() {
		let checkedSizes = [];
		$('.catalog-filters__item--size input[type="checkbox"]').on('click', function () {
			if ($(this).is(':checked')) {
				checkedSizes.push($(this).next().next().text());
			} else {
				checkedSizes.pop();
			}
			if (checkedSizes.length > 0) {
				$(this).parents('.catalog-drop-filter').prev().find('span.filter-output').text(`(${checkedSizes.sort().join(', ')})`);
				$(this).parents('.catalog-drop-filter').prev().css('font-weight', '600');
			} else {
				$(this).parents('.catalog-drop-filter').prev().css('font-weight', '400');
				$(this).parents('.catalog-drop-filter').prev().find('span.filter-output').text('');
			}
		});
	},
};
