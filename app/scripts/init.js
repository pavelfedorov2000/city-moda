$(document).ready(function () {

  new LazyLoad();
  new WOW().init();

  $('.select__title').on('click', function () {
    $(this).parents('.sale-popup__form-item').siblings().find('.select__title').removeClass('select__title--active');
    $(this).parents('.sale-popup__form-item').siblings().find('.select__content').slideUp('300');
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

  $('a[data-fancybox').on('click', function () {
    $('html').addClass('disable-fix');
  });

  $('.fancybox-close-small').on('click', function () {
    $('html').removeClass('disable-fix');
  });

  $('.tab').on('click', function (e) {
    e.preventDefault();

    $(this).siblings().removeClass('tab--active');
    $('.tabs-content').removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
  });
  app.validation.init();
  app.burger.init();
  //app.searchForm.init();
  app.promoSale.init();
  app.iconsSlider.init();
  app.sliderSections.init();
  app.instagram.init();
  app.catalogCard.init();
  app.asideFilters.init();
  //app.catalogFilters.init();
  //app.sortFilter.init();
  app.sizeFilter.init();
  app.pricefilter.init();
  app.productCard.init();
  app.productPopup.init();
  app.productDetails.init();
  app.popup.init();
  //app.regionPopup.init();
  app.checkout.init();
  app.blog.init();
  app.otherNews.init();
  app.faq.init();
  app.feedback.init();
  app.pageup.init();
  app.auth.init();
  //app.productSizes.init();
  if ($('main').hasClass('basket-page')) {
    app.basketTotal.init();
  }
});
