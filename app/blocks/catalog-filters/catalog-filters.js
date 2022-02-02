app.catalogFilters = {
	name: 'catalogFilters',
	description: 'your script description',
	init() {
        $('.catalog-filters__item-title').on('click', function () {
            $(this).parent().siblings().find('legend').removeClass('catalog-filters__item-title--active');
            $(this).parent().siblings().find('div.catalog-drop-filter').slideUp('300');
            $(this).toggleClass('catalog-filters__item-title--active');
            $(this).next().slideToggle('300');
        });


		$('.catalog-filters__item--material input[type="checkbox"], .catalog-filters__item--color input[type="checkbox"], .catalog-filters__item--brand input[type="checkbox"], .catalog-filters__item--details input[type="checkbox"], .catalog-filters__item--style input[type="checkbox"], .catalog-filters__item--decor input[type="checkbox"]').on('click', function () {
			let className = $(this).parents('.catalog-filters__item').attr('class').split(' ').join('.');
			let checkedItems = $(`.${className} input:checkbox:checked`).length;
			if (checkedItems > 0) {
				$(this).parents('.catalog-drop-filter').prev().find('span.filter-output').text(`(${checkedItems})`);
				$(this).parents('.catalog-drop-filter').prev().css('font-weight', '600');
			} else {
				$(this).parents('.catalog-drop-filter').prev().css('font-weight', '400');
				$(this).parents('.catalog-drop-filter').prev().find('span.filter-output').text('');
			}
		});

		$('.catalog-filters__reset-btn').on('click', function () {
			$('.catalog-filters__item--sort').find('.catalog-filters__item-title').text('Сортировать');
			$('.catalog-filters__item-title').css('font-weight', '400');
			$('.catalog-filters__item-title').find('span.filter-output').text('');
			$('.catalog-filters__item-title').removeClass('catalog-filters__item-title--active');
			$('.catalog-drop-filter').slideUp('300');
		});

		$('.catalog-drop-filter__btn[type=reset]').on('click', function () {
			$(this).parents('.catalog-drop-filter').prev().css('font-weight', '400');
			$(this).parents('.catalog-drop-filter').prev().find('span.filter-output').text('');
		});

		$('.filters-btn').on('click', function () {
			$('.catalog-filters').addClass('catalog-filters--active');
		});

		$('.catalog-filters__close').on('click', function () {
			$('.catalog-filters').removeClass('catalog-filters--active');
		});

		$('.catalog-filters__item-title').on('click', function () {
			if ($(window).width() < 1025) {
				$('.catalog-filters__back-btn').show();
				$('.catalog-filters__title').text($(this).children().first().text());
				$(this).parent().siblings().hide();
				$(this).hide();
				$(this).next().show();
			}
		});
		$('.catalog-filters__back-btn').on('click', function () {
			$('.catalog-filters__back-btn').hide();
			$('.catalog-filters__title').text('Фильтры');
			$('.catalog-filters__item').show();
			$('.catalog-filters__item-title').show();
			$('.catalog-filters__item-title').removeClass('catalog-filters__item-title--active');
			$('.catalog-drop-filter').hide();
		});
	},
};
