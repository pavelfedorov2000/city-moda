app.productCard = {
	name: 'productCard',
	description: 'your script description',
	init() {
		new Swiper('.product-popup__slider', {
			loop: true,
			slidesPerView: 1,
			//spaceBetween: 20,
			speed: 1000,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
		new Swiper('.product-card__slider', {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 23,
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
				768: {
					slidesPerView: 1,
				},
				1025: {
					slidesPerView: 2,
					spaceBetween: 52,
				}
			}
		});


		$('.product-color__item .radio-box').on('change', function () {
			if ($(this).is(':checked')) {
				$(this).next().addClass('radio-style--checked');
				$(this).parent().siblings().find('span.radio-style').removeClass('radio-style--checked');
			}
		});
	},
};
