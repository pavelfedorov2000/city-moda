app.dropMenu = {
	name: 'dropMenu',
	description: 'your script description',
	init() {
		$('.tab').on('click', function (e) {
			e.preventDefault();
			$(this).siblings().removeClass('tab--active');
			$(this).addClass('tab--active');
		});

		if ($(window).width() >= 1025) {
			$('.header__list-link').not('.header__list-link--red').on('mouseover', function () {
				$(this).parent().siblings().find('a').removeClass('header__list-link--active');
				$(this).toggleClass('header__list-link--active');
				$('.drop-menu').hide();
				$(`#${$(this).attr('data-category-link')}`).slideToggle('500');
			});

			$(document).on('mouseup ', function (e) {
				let dropLink = $(this);
				let dropMenu = $(`#${$(this).attr('data-category-link')}`);
				if (!dropMenu.is(e.target) && !dropLink.is(e.target) && dropMenu.has(e.target).length === 0) {
					$('.drop-menu').slideUp('300');
					$(this).parent().siblings().find('a').removeClass('header__list-link--active');
				}
			});
		}

		window.addEventListener('scroll', function () {
			if (window.scrollY > window.innerHeight) {
				$('.drop-menu').hide();
				$('.header__list-link--active').removeClass('header__list-link--active');
			}
		});
	},
};
