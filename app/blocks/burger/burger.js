app.burger = {
	name: 'burger',
	description: 'burger-btn and burger-menu logic',
	init() {

		// jquery
		/* $('.burger-btn').on('click', function () {
			$('body').toggleClass('_lock');
			$('.burger-btn').toggleClass('burger-btn--active');
			$('.burger-menu').toggleClass('burger-menu--active');
		}); */

		$('.burger-btn').on('click', function () {
			$('body').addClass('_lock');
			$('.burger-menu').addClass('burger-menu--active');
		});

		$('.burger-menu__close').on('click', function () {
			$('body').removeClass('_lock');
			$('.burger-menu').removeClass('burger-menu--active');
		});

		$('.header__menu-link').on('click', function () {
			$('body').removeClass('_lock');
			$('.burger-menu').removeClass('burger-menu--active');
		});

		$('.burger-menu__list-item span').on('click', function () {
			$(this).parent().siblings().find('span').removeClass('active');
			$(this).parent().siblings().find('ul').slideUp('300');
			$(this).toggleClass('active');
			$(this).next().slideToggle('300');
		});
	},
};
