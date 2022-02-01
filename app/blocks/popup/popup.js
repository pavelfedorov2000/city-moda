app.popups = {
	name: 'popups',
	description: 'your script description',
	init() {
		$('.region-popup__city .radio-text').on('click', function () {
			$.fancybox.close();
			$('.header__region').text($(this).text());
		});

		$('.js-cart-btn').on('click', function () {
			$('body').addClass('_lock');
			$('.overlay').fadeIn('slow');
			$('#drop-basket').fadeIn('slow');
			$('#drop-basket').addClass('active');
		});

		$('.js-auth-btn').on('click', function () {
			$('body').addClass('_lock');
			$('.overlay').fadeIn('slow');
			$('#auth-popup').fadeIn('slow');
			$('#auth-popup').addClass('active');
		});

		$('.aside-popup__close').on('click', function () {
			$(this).parents('.aside-popup').removeClass('active');
			$(this).parent().fadeOut('slow');
			$('.overlay').fadeOut('300');
			$('body').removeClass('_lock');
		});

		//&& $('input[name="user-agreement"]').is(':checked')
	},
};
