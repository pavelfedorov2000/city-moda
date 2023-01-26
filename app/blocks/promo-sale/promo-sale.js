app.promoSale = {
  name: 'promoSale',
  description: 'your script description',
  init() {
    new Swiper('.promo-sale__slider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.promo-sale .swiper-button-next',
        prevEl: '.promo-sale .swiper-button-prev',
      },
    });
  },
};
