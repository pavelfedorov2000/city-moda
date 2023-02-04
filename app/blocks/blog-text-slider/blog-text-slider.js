app.blogTextSlider = {
    name: 'blogTextSlider',
    description: 'your script description',
    init() {
        new Swiper('.blog-text__slider', {
            loop: true,
            spaceBetween: 27,
            speed: 1000,
            lazy: true,
            navigation: {
                nextEl: '.blog-text__slider .swiper-button-next',
                prevEl: '.blog-text__slider .swiper-button-prev',
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
