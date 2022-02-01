$(document).ready(function () {

	new LazyLoad();
	new WOW().init();

	$('.header__cart-num').text(`(${$('.drop-basket__product').length})`);

	$('.select__title').on('click', function () {
		$(this).parents('.select').siblings().find('div.select__title').removeClass('select__title--active');
		$(this).parents('.select').siblings().find('div.select__content').slideUp('300');
		$(this).toggleClass('select__title--active');
		$(this).next().slideToggle('300');
	});

	$('.select__option').on('click', function () {
		$(this).parent().prev().text($(this).find('span.select__option-text').text());
		$(this).parent().prev().removeClass('select__title--active');
		$(this).parent().slideUp('300');
	});

	$('.subscribe-item__btn').on('click', function () {
		$('body').addClass('_lock');
		$('.overlay').fadeIn('slow');
		$('#sale-popup').fadeIn('slow');
	});

	// Открытие попапа через 2 мин
	/* setTimeout(() => {
		$.fancybox.open({
			src: '#discount-popup',
			type: 'inline',
		});
	}, 120000); */

	if ($('main').hasClass('auth')) {
		$('body').addClass('_lock');
		$('.overlay').show('slow');
		$('#auth-popup').fadeIn('slow');
		$('#auth-popup').addClass('active');
	}

	if ($('main').hasClass('drop-basket-page')) {
		$('body').addClass('_lock');
		$('.overlay').show('slow');
		$('#drop-basket').fadeIn('slow');
		$('#drop-basket').addClass('active');
	}

	$('.tab').on('click', function (e) {
		e.preventDefault();

		$(this).siblings().removeClass('tab--active');
		$('.tabs-content').removeClass('tabs-content--active');

		$(this).addClass('tab--active');
		$($(this).attr('href')).addClass('tabs-content--active');
	});
	app.validation.init();
	app.burger.init();
	app.dropMenu.init();
	app.dropBasket.init();
	app.promoSale.init();
	app.iconsSlider.init();
	app.sliderSections.init();
	app.instagram.init();
	app.catalogCard.init();
	app.asideFilters.init();
	app.catalogFilters.init();
	app.productCard.init();
	app.productDetails.init();
	app.popups.init();
	app.checkout.init();
	app.blog.init();
	app.otherNews.init();
	app.faq.init();
	app.basketTotal.init();
	app.feedback.init();
	app.pageup.init();
	app.auth.init();
	if ($('main').hasClass('contacts-page')) {
		app.contacts.init();
	}
	if ($('main').hasClass('basket-page')) {
		app.pickupPopup.init();
	}
});
