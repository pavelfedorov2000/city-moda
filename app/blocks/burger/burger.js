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

		$('.header__search-btn').on('click', function () {
			$('.header__main-bottom').toggleClass('header__main-bottom--active');
			$('.header__main-bottom').find('input.search-form__input').toggleClass('search-form__input--active');
		});

		$('.header__current-region').on('click', function () {
			$(this).toggleClass('header__current-region--active');
			$(this).next().slideToggle('300');
			$('.header-info-line').slideToggle('300');
		});

		$('.header__region-options a').on('click', function (e) {
			e.preventDefault();
			$(this).parents('ul').prev().removeClass('header__current-region--active');
			$(this).parents('ul').append(`<li><a href="#">${$(this).parents('ul').prev().text()}</a></li>`);
			$(this).parents('ul').prev().text($(this).text());
			$(this).parents('ul').slideUp('300');
			$(this).parent().remove();
			$('.header-info-line').slideDown('300');
		});

		$('.header-info-line__close').on('click', function () {
			$(this).parent().slideUp('300');
		})
	},
};
