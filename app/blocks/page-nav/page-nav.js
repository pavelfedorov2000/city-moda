app.pageNav = {
    name: 'pageNav',
    description: 'pageNav',
    init() {
        const pageNav = document.querySelector('.page-nav');

        function fixPageNav() {
            if (window.innerWidth > 1024) {
                new StickySidebar('.page-nav', {
                    topSpacing: 20,
                    bottomSpacing: 20,
                    containerSelector: '.profile-page__inner',
                    innerWrapperSelector: '.page-nav__list',
                    //scrollContainer: '#main-viewport'
                });
            }
        }

        if (!pageNav) return;
        fixPageNav();
        window.addEventListener('resize', () => {
            fixPageNav();
        });
    },
};