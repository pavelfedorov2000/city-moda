app.pickupFilters = {
  name: 'pickupFilters',
  description: 'your script description',
  init() {
    $('.pickup-filters__item-remove').on('click', function () {
      $(this).prev().find('input[type=checkbox]').prop('checked', false);
      $(this).remove();
    });
    $('.pickup-filters__item-box .check-box').on('click', function () {
      if ($(this).is(':checked')) {
        $(this).parent().after('<button class="pickup-filters__item-remove" type="button"><svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M10 1L9 0L5 4L1 0L0 1L4 5L0 9L1 10L5 6L9 10L10 9L6 5L10 1Z" fill="white" /></svg></button>');
      } else {
        $(this).parent().next().remove();
      }
    });
  },
};