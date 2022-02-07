app.burger = {
	name: 'burger',
	description: 'burger-btn and burger-menu logic',
	init() {

		$('.burger-btn').on('click', function () {
			$('body').addClass('_lock');
			$('.burger-menu').addClass('burger-menu--active');
		});

		$('.burger-menu__close').on('click', function () {
			$('body').removeClass('_lock');
			$('.burger-menu').removeClass('burger-menu--active');
		});

		$('.burger-menu__list-item span').on('click', function () {
			$(this).parent().siblings().find('span').removeClass('active');
			$(this).parent().siblings().find('ul').slideUp('300');
			$(this).toggleClass('active');
			$(this).next().slideToggle('300');
		});

		$('.header__search-btn').on('click', function () {
			$('.header__main-bottom').toggleClass('header__main-bottom--active');
			$('.header__main-bottom').find('input.search-form__input').toggleClass('search-form__input--active');
		});

		$('.header-info-line__close').on('click', function () {
			$(this).parent().slideUp('300');
		})
	},
};
