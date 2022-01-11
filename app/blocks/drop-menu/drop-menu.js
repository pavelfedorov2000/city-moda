app.dropMenu = {
	name: 'dropMenu',
	description: 'your script description',
	init() {
		if ($(window).width() >= 1025) {
			$('.header__list-link[data-category-link="clothes"]').on('mouseover', function () {
				$(this).toggleClass('header__list-link--active');
				$('.drop-menu').slideToggle('500');
			});

			/* $('.header__list-link[data-category-link="clothes"]').on('mouseleave ', function () {
				let dropLink = $(this);
				let dropMenu = $('.drop-menu');
				if (!dropMenu.is(e.target) && !dropLink.is(e.target) && dropMenu.has(e.target).length === 0) {
					$('.drop-menu').slideUp('300');
					$(this).removeClass('header__list-link--active');
				}
			}); */
		}
	},
};
