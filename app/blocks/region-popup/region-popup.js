app.regionPopup = {
  name: 'regionPopup',
  description: 'your script description',
  init() {
    $('.region-popup__city .radio-text').on('click', function () {
		$.fancybox.close();
		$('.header__region').text($(this).text());
    });
  },
};
