app.productDetails = {
	name: 'productDetails',
	description: 'your script description',
	init() {
		$('.product-details__hide-btn').on('click', function () {
			$(this).toggleClass('product-details__hide-btn--active');
			$(this).parent().next().slideToggle('300');
			if (!$(this).hasClass('product-details__hide-btn--active')) {
				$(this).text('раскрыть');
			} else {
				$(this).text('скрыть');
			}
		});

		$('.tooltip__btn').hover(function () {
			$(this).next().fadeToggle('slow');
		});
	},
};
