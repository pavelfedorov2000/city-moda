app.blog = {
  name: 'blog',
  description: 'your script description',
  init() {
    new Swiper('.blog-text__slider', {
      loop: true,
      spaceBetween: 27,
      speed: 1000,
      lazy: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
      },
      on: {
        slideChange: function () {
          new LazyLoad();
        },
      },
    });
  },
};
