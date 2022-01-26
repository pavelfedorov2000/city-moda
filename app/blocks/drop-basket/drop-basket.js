app.dropBasket = {
	name: 'dropBasket',
	description: 'your script description',
	init() {
		if ($('.drop-basket__products').length == 0) {
			$('.drop-basket__empty').show();
		} else {
			$('.drop-basket__empty').hide();
		}
	},
};
