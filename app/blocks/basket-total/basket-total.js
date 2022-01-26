app.basketTotal = {
  name: 'basketTotal',
  description: 'your script description',
  init() {
    $('input[name=promocode]').on('change', function () {
      if ($(this).val() !== 0) {
        $(this).addClass('valid');
      }
    });
  },
};
