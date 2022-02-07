app.sliderSections = {
	name: 'sliderSections',
	description: 'your script description',
	init() {
		const catalogSlider = new Swiper('.popular-goods-slider', {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 20,
			speed: 1000,
			navigation: {
				nextEl: '.popular-goods-slider-arrow-next',
				prevEl: '.popular-goods-slider-arrow-prev',
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
		catalogSlider.on('slideChange', function () {
			new LazyLoad();
		});
		const catalogNewSlider = new Swiper('.catalog-new-slider', {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 20,
			speed: 1000,
			navigation: {
				nextEl: '.catalog-new-slider-arrow-next',
				prevEl: '.catalog-new-slider-arrow-prev',
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
		catalogNewSlider.on('slideChange', function () {
			new LazyLoad();
		});
		const recommendSlider = new Swiper('.recommend-slider', {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 20,
			speed: 1000,
			navigation: {
				nextEl: '.recommend-slider-btn-next',
				prevEl: '.recommend-slider-btn-prev',
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
		recommendSlider.on('slideChange', function () {
			new LazyLoad();
		});
		const similarGoodsSlider = new Swiper('.similar-goods-slider', {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 20,
			speed: 1000,
			navigation: {
				nextEl: '.similar-goods-btn-next',
				prevEl: '.similar-goods-btn-prev',
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
		similarGoodsSlider.on('slideChange', function () {
			new LazyLoad();
		});
	},
};
