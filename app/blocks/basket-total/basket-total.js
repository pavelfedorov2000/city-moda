app.basketTotal = {
    name: 'basketTotal',
    description: 'basketTotal',
    init() {
        const basketTotal = document.querySelector('.basket-total');

        function fixBasketTable() {
            if (window.innerWidth > 1024) {
                new StickySidebar('.basket-total', {
                    topSpacing: 20,
                    bottomSpacing: 20,
                    containerSelector: '.basket-page__inner',
                    innerWrapperSelector: '.basket-total__inner',
                    //scrollContainer: '#main-viewport'
                });
            }
        }

        if (!basketTotal) return;
        fixBasketTable();
        window.addEventListener('resize', () => {
            fixBasketTable();
        });
    },
};