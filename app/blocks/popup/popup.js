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

		$('.region-header__value').on('click', function () {
			$(this).toggleClass('region-header__value--active');
			$(this).next().slideToggle('300');
		});

		$('.region-header__drop-item').on('click', function () {
			$(this).parent().prev().removeClass('region-header__value--active');
			$(this).parent().prev().text($(this).text());
			$(this).siblings().removeClass('region-header__drop-item--active');
			$(this).addClass('region-header__drop-item--active');
			$(this).parent().slideUp('300');
		});

		//&& $('input[name="user-agreement"]').is(':checked')
	},
};
