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
        
        $('.catalog__view-btn').on('click', function () {
			$(this).addClass('catalog__view-btn--active');
			$(this).siblings().removeClass('catalog__view-btn--active');
			if ($('.col-btn').hasClass('catalog__view-btn--active')) {
				$('.catalog__cards').addClass('catalog__cards--two-cols');
			} else {
				$('.catalog__cards').removeClass('catalog__cards--two-cols');
            }
            if ($('.row-btn').hasClass('catalog__view-btn--active')) {
				$('.catalog__cards').addClass('catalog__cards--row');
			} else {
				$('.catalog__cards').removeClass('catalog__cards--row');
			}
        });
        
        if ($(window).width() < 768) {
            $('.catalog__cards').addClass('catalog__cards--two-cols');
            $('.col-btn').addClass('catalog__view-btn--active');
        }

        $(window).resize(function () {
            if ($(window).width() < 768) {
                $('.catalog__cards').addClass('catalog__cards--two-cols');
                $('.col-btn').addClass('catalog__view-btn--active');
            }
        });
	},
};
