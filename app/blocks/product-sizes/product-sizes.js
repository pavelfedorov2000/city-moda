app.productSizes = {
	name: 'productSizes',
	description: 'your script description',
	init() {
		$('.product-sizes__item').on('click', function () {
			if ($(this).find('input[type=radio]').prop('disabled')) {
				$.fancybox.open({
					src: '#size-subscribe-popup',
					type: 'inline',
				});
			}
		});
	},
};
