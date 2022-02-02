app.pricefilter = {
	name: 'pricefilter',
	description: 'your script description',
	init() {
		$('input[name=price_from]').on('input change', function () {
			if ($(this).val() !== 0) {
				$('#price_from').text(`${$(this).val()} -`);
				$(this).parents('.catalog-filters__item').find('.catalog-filters__item-title').css('font-weight', '600');
			} else {
				$('#price_from').text('');
			}
		});
		$('input[name=price_to]').on('input change', function () {
			if ($(this).val() !== 0) {
				$('#price_to').text(`${$(this).val()}`);
			} else {
				$('#price_to').text('');
			}
		});
	},
};
