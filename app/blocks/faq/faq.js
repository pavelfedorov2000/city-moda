app.faq = {
	name: 'faq',
	description: 'your script description',
	init() {
		$('.faq__item-summary').on('click', function () {
			$(this).parent().siblings().find('div.faq__item-summary').removeClass('faq__item-summary--active');
			$(this).parent().siblings().find('div.faq__item-details').slideUp('300');
			$(this).toggleClass('faq__item-summary--active');
			$(this).next().slideToggle('300');
		});
	},
};
