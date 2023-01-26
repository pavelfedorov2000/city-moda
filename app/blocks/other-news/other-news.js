app.otherNews = {
    name: 'otherNews',
    description: 'your script description',
    init() {
        new Swiper('.other-news-slider', {
            loop: true,
            spaceBetween: 20,
            speed: 1000,
            //lazy: true,
            navigation: {
                nextEl: '.other-news .swiper-button-next',
                prevEl: '.other-news .swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 52,
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
