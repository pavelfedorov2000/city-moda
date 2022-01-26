$(document).ready(function () {
	let lazyLoadInstance = new LazyLoad();
	new WOW().init();

	/* setTimeout(() => {
		$.fancybox.open({
			src: '#discount-popup',
			type: 'inline',
			opts: {
				beforeShow: function (instance, current) {
					$(".popup form").attr('tabindex', '-1');
					$(".popup form").attr('autofocus', 'false');
				},
				afterShow: function (instance, current) {
					$(".popup form").attr('tabindex', '-1');
					$(".popup form").attr('autofocus', 'false');
				}
			}
		});
	}, 120000); */

	if ($('main').hasClass('auth')) {
		$('body').addClass('_lock');
		$('.overlay').show('slow');
		$('#auth-popup').addClass('active');
	}

	if ($('main').hasClass('drop-basket-page')) {
		$('body').addClass('_lock');
		$('.overlay').show('slow');
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
	if ($('main').hasClass('contacts-page')) {
		app.contacts.init();
	}
	if ($('main').hasClass('basket-page')) {
		app.pickupPopup.init();
	}
});
