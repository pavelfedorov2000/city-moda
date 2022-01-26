app.productCard = {
	name: 'productCard',
	description: 'your script description',
	init() {
		new Swiper('.product-popup__slider', {
			loop: true,
			slidesPerView: 1,
			speed: 1000,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.product-popup__slider-arrow--next',
				prevEl: '.product-popup__slider-arrow--prev',
			},
			breakpoints: {
				576: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1025: {
					slidesPerView: 1,
				}
			}
		});

		$('.minus-btn').on('click', function (e) {
			e.preventDefault();
			var $this = $(this);
			var $input = $this.next();
			var value = parseInt($input.val());

			while (value > 0) {
				value -= 1;
				break;
			}

			$input.val(value);

		});

		$('.plus-btn').on('click', function (e) {
			e.preventDefault();
			var $this = $(this);
			var $input = $this.prev();
			var value = parseInt($input.val());

			value += 1;

			$input.val(value);
		});

		$('.product-color__item .radio-box').on('change', function () {
			if ($(this).is(':checked')) {
				$(this).next().addClass('radio-style--checked');
				$(this).parent().siblings().find('span.radio-style').removeClass('radio-style--checked');
			}
		});

		$('.product-favorite-btn').on('click', function () {
			$(this).toggleClass('favorite');
		});
	},
};
