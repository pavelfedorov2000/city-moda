//let lazyLoadInstance = new LazyLoad();
new WOW().init();
/* Fancybox.bind("[data-fancybox]", {
	panOnlyZoomed: true,
	baseScale: 1.25,
}); */
/* $('.popup-link').fancybox(); */
//lightGallery(document.getElementById('lightgallery'));
/* $(".popup-link").on('click', function (e) {
	e.preventDefault();
	$("#product-popup").trigger();
}); */
//lightGallery(document.querySelector('.popup'));
//const plugin = lightGallery(lg);

$('.tab').on('click', function (e) {
	e.preventDefault();

	$(this).siblings().removeClass('tab--active');
	$('.tabs-content').removeClass('tabs-content--active');

	$(this).addClass('tab--active');
	$(this).attr('href').addClass('tabs-content--active');
});
app.burger.init();
app.dropMenu.init();
app.promoSale.init();
app.iconsSlider.init();
app.sliderSections.init();
app.catalogCard.init();
app.asideFilters.init();
app.catalogFilters.init();
app.productCard.init();
app.productDetails.init();
app.popups.init();
/* document.querySelector('.page-up').addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}); */
