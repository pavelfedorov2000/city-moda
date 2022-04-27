app.basketTotal = {
  name: 'basketTotal',
  description: 'your script description',
  init() {

    function fixBasketTable() {
      if (window.innerWidth > 1024) {
        new StickySidebar('.basket-total', {
          topSpacing: 20,
          bottomSpacing: 20,
          containerSelector: '.basket-page__body',
          innerWrapperSelector: '.basket-total__inner',
          //scrollContainer: '#main-viewport'
        });
      }
    }
    fixBasketTable();
    window.addEventListener('resize', () => {
      fixBasketTable();
    });
  },
};
