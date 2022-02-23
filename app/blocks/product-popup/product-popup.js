app.productPopup = {
    name: 'productPopup',
    description: 'your script description',
    init() {
        new Swiper('.product-popup__slider', {
            loop: true,
            slidesPerView: 1,
            speed: 1000,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.product-popup__slider-arrow--next',
                prevEl: '.product-popup__slider-arrow--prev',
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1025: {
                    slidesPerView: 1,
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
