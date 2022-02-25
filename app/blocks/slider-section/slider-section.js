app.sliderSections = {
  name: 'sliderSections',
  description: 'your script description',
  init() {
    new Swiper('.popular-goods-slider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 1000,
      navigation: {
        nextEl: '.popular-goods-slider-arrow-next',
        prevEl: '.popular-goods-slider-arrow-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1025: {
          slidesPerView: 4,
          spaceBetween: 52,
        }
      },
      on: {
        slideChange: function () {
          new LazyLoad();
        },
      },
    });

    new Swiper('.catalog-new-slider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 1000,
      navigation: {
        nextEl: '.catalog-new-slider-arrow-next',
        prevEl: '.catalog-new-slider-arrow-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1025: {
          slidesPerView: 4,
          spaceBetween: 52,
        }
      },
      on: {
        slideChange: function () {
          new LazyLoad();
        },
      },
    });

    new Swiper('.recommend-slider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 1000,
      navigation: {
        nextEl: '.recommend-slider-btn-next',
        prevEl: '.recommend-slider-btn-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1025: {
          slidesPerView: 4,
          spaceBetween: 52,
        }
      },
      on: {
        slideChange: function () {
          new LazyLoad();
        },
      },
    });

    new Swiper('.similar-goods-slider', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 1000,
      navigation: {
        nextEl: '.similar-goods-btn-next',
        prevEl: '.similar-goods-btn-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1025: {
          slidesPerView: 4,
          spaceBetween: 52,
        }
      },
      on: {
        slideChange: function () {
          new LazyLoad();
        },
      },
    });
  },
};
