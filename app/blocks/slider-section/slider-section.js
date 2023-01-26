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
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-next',
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
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-next',
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
                nextEl: '#recommended-goods .swiper-button-next',
                prevEl: '#recommended-goods .swiper-button-next',
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
                nextEl: '#similar-goods .swiper-button-next',
                prevEl: '#similar-goods .swiper-button-next',
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
