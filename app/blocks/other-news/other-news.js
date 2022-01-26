app.otherNews = {
	name: 'otherNews',
	description: 'your script description',
	init() {
		new Swiper('.other-news__slider', {
			loop: true,
			spaceBetween: 20,
			speed: 1000,
			lazy: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 52,
				},
			}
		});
	},
};
