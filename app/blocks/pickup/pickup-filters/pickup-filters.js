app.pickupFilters = {
    name: 'pickupFilters',
    description: 'your script description',
    init() {
        $(document).on('click', '.pickup-filters__item-remove', function () {
            const $removeBtn = $(this);

            $removeBtn.prev().find('input[type=checkbox]').prop('checked', false);
            $removeBtn.remove();
        });
        $('.pickup-filters__item-box .check-box').on('change', function () {
            const $checkbox = $(this);

            if ($checkbox.is(':checked')) {
                $checkbox.parent().after('<button class="pickup-filters__item-remove" type="button"><svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fill-rule="evenodd" clip-rule="evenodd" d="M10 1L9 0L5 4L1 0L0 1L4 5L0 9L1 10L5 6L9 10L10 9L6 5L10 1Z" /></svg></button>');
            } else {
                $checkbox.parent().next().remove();
            }
        });
    },
};