app.popups = {
	name: 'popups',
	description: 'your script description',
	init() {
		$('.region-popup__city .radio-text').on('click', function () {
			$.fancybox.close();
			$('.header__region').text($(this).text());
		});

		$('#auth input').on('change', function () {
			if ($(this).val() !== '' && $(this).parents('form').find('input[type=password]').val() !== '') {
				$(this).parents('form').find('button[type="submit"]').prop('disabled', false);
			} else {
				$(this).parents('form').find('button[type="submit"]').prop('disabled', true);
			}
		});

		$('#password-change input[type=password]').on('change', function () {
			if ($(this).val() !== '' && $(this).parents('form').find('input[type=password]').val() !== '') {
				$(this).parents('form').find('button[type="submit"]').prop('disabled', false);
			} else {
				$(this).parents('form').find('button[type="submit"]').prop('disabled', true);
			}
		});

		$('.aside-popup__close').on('click', function () {
			$(this).parent().removeClass('active');
			$('.overlay').fadeOut('300');
			$('body').removeClass('_lock');
		});

		$(document).ready(function () {
			if ($('.aside-popup').hasClass('active')) {
				$('body').addClass('_lock');
			}
		});

		//&& $('input[name="user-agreement"]').is(':checked')

		// password input eye toggle
		$('.pass-btn').on('click', function () {
			if ($(this).hasClass('show')) {
				$(this).parent().find('input[type=password]').attr('type', 'text');
				$(this).removeClass('show');
				$(this).addClass('hide');
			} else {
				$(this).parent().find('input[type=password]').attr('type', 'password');
				$(this).removeClass('hide');
				$(this).addClass('show');
			}
		});

		// ymaps
	},
};
