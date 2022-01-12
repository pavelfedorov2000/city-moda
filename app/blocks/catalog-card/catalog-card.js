app.catalogCard = {
	name: 'catalogCard',
	description: 'your script description',
	init() {
		$('.catalog-card__favorite').on('click', function () {
			$(this).parent().toggleClass('favorite');
			$(this).addClass('animated');
			setTimeout(() => {
				$(this).removeClass('animated');
			}, 300);
		});
	},
};
