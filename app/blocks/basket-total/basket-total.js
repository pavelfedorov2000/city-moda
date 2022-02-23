app.basketTotal = {
  name: 'basketTotal',
  description: 'your script description',
  init() {

    const headerHeight = document.querySelector('.header').getBoundingClientRect().height;
    const basketTotalFixedTable = document.querySelector('.basket-total');
    const basketPageBody = document.querySelector('.basket-page__body');
    const basketPageBodyHeight = basketPageBody.getBoundingClientRect().height;
    const breadcrumbsHeight = document.querySelector('.breadcrumbs').getBoundingClientRect().height;
    const h1 = document.querySelector('h1');

    function fixBasketTable() {
      window.addEventListener('scroll', () => {
        if (window.innerWidth >= 1025 && window.scrollY > headerHeight + breadcrumbsHeight + h1.getBoundingClientRect().height && window.scrollY <= basketPageBodyHeight - headerHeight) {
          basketTotalFixedTable.classList.add('fixed');
          basketPageBody.classList.add('scroll-grid');
          basketTotalFixedTable.style.top = '30px';
        } else {
          basketTotalFixedTable.classList.remove('fixed');
          basketPageBody.classList.remove('scroll-grid');
          basketTotalFixedTable.style.top = `${headerHeight + basketPageBody.offsetTop - window.scrollY}px`;
        }
      });
    }
    fixBasketTable();

    window.addEventListener('resize', () => {
      fixBasketTable();
    });
  },
};
