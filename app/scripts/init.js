$(document).ready(function () {

	new LazyLoad();
	new WOW().init();

	$('.header__cart-num').text(`(${$('.drop-basket__product').length})`);

	$('.select__title').on('click', function () {
		$(this).parents('.sale-popup__form-item').siblings().find('.select__title').removeClass('select__title--active');
		$(this).parents('.select').siblings().find('.select__content').slideUp('300');
		$(this).toggleClass('select__title--active');
		$(this).next().slideToggle('300');
	});

	$('.select__option').on('click', function () {
		$(this).parent().prev().text($(this).find('span.select__option-text').text());
		$(this).parent().prev().removeClass('select__title--active');
		$(this).parent().slideUp('300');
	});

	// Переключение списка магазинов в зависимости от выбранного города (карточка товара)
	$(`#${$('.shops-availability__select .select__content').children().first().data('city')}`).show();
	$('.shops-availability .select__option').on('click', function () {
		$('.shops-availability__content').hide();
		$(`#${$(this).data('city')}`).show();
	});

	$('.subscribe-item__change-btn').on('click', function () {
		$('.sale-popup__title').text($(this).parent().parent().prev().text());
	});

	// Открытие попапа через 2 мин
	/* setTimeout(() => {
		$.fancybox.open({
			src: '#discount-popup',
			type: 'inline',
		});
	}, 3000); */

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
	app.searchForm.init();
	app.dropBasket.init();
	app.promoSale.init();
	app.iconsSlider.init();
	app.sliderSections.init();
	app.instagram.init();
	app.catalogCard.init();
	app.asideFilters.init();
	app.catalogFilters.init();
	app.sortFilter.init();
	app.sizeFilter.init();
	app.pricefilter.init();
	app.productCard.init();
	app.productPopup.init();
	app.productDetails.init();
	app.popup.init();
	app.regionPopup.init();
	app.checkout.init();
	app.blog.init();
	app.otherNews.init();
	app.faq.init();
	app.feedback.init();
	app.pageup.init();
	app.auth.init();
	if ($('main').hasClass('basket-page')) {
		app.basketTotal.init();
	}
	/* if ($('main').hasClass('basket-page')) {
		app.pickupPopup.init();
	} */
});
