app.counter = {
    name: 'counter',
    description: 'counter',
    init() {
        $('.minus-btn').on('click', function (e) {
            e.preventDefault();
            const $this = $(this);
            const $input = $this.next();
            let value = parseInt($input.val());

            while (value > 0) {
                value -= 1;
                break;
            }

            $input.val(value);
        });

        $('.plus-btn').on('click', function (e) {
            e.preventDefault();
            const $this = $(this);
            const $input = $this.prev();
            let value = parseInt($input.val());

            value += 1;

            $input.val(value);
        });
    },
};
