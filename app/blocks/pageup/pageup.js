app.pageup = {
    name: 'pageup',
    description: 'your script description',
    init() {
        const pageUp = document.querySelector('.pageup');

        if (!pageUp) return;

        pageUp.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });

        const footer = document.querySelector('.footer');
        const footerOffset = footer.offsetTop;
        const footerHeight = footer.getBoundingClientRect().height;
        const page = document.querySelector('.page');

        window.addEventListener('scroll', function () {
            if (window.scrollY > window.innerHeight) {
                pageUp.classList.add('active');
            } else {
                pageUp.classList.remove('active');
            }
            if (window.scrollY >= footerOffset - footerHeight - page.children[page.children.length - 1].getBoundingClientRect().height) {
                pageUp.classList.add('in-footer');
            } else {
                pageUp.classList.remove('in-footer');
            }
        });
    },
};
