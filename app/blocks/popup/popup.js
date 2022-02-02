app.popup = {
	name: 'popup',
	description: 'your script description',
	init() {

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

		//&& $('input[name="user-agreement"]').is(':checked')
	},
};
