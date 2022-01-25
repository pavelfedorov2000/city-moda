let lazyLoadInstance = new LazyLoad();
new WOW().init();

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

//app.contacts.init();
/* document.querySelector('.page-up').addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
}); */
