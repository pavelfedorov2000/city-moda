app.sliderSections = {
	name: 'sliderSections',
	description: 'your script description',
	init() {
		new Swiper('.instagram-slider', {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 52,
			speed: 1000,
			/* autoplay: {
				delay: 3000,
			}, */
			/* pagination: {
				el: '.swiper-pagination',
				clickable: true,
			}, */
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				501: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1025: {
					slidesPerView: 4,
					spaceBetween: 52,
				}
			}
		});
		new Swiper('.catalog-slider', {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 20,
			speed: 1000,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				/* 501: {
					slidesPerView: 2,
				}, */
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1025: {
					slidesPerView: 4,
					spaceBetween: 52,
				}
			}
		});
		new Swiper('.catalog-new-slider', {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 20,
			speed: 1000,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1025: {
					slidesPerView: 4,
					spaceBetween: 52,
				}
			}
		});
	},
};
