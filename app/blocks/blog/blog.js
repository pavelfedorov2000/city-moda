app.blog = {
	name: 'blog',
	description: 'your script description',
	init() {
		new Swiper('.blog-text__slider', {
			loop: true,
			spaceBetween: 27,
			speed: 1000,
			/* pagination: {
				el: '.swiper-pagination',
				clickable: true,
			}, */
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				576: {
					slidesPerView: 2,
				},
			}
		});
	},
};
