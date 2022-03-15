app.instagram = {
    name: 'instagram',
    description: 'your script description',
    init() {
        new Swiper('.instagram-slider', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 52,
            speed: 1000,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                501: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
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
