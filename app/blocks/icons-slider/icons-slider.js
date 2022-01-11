app.iconsSlider = {
	name: 'iconsSlider',
	description: 'your script description',
	init() {
		// ================ ICONS-SLIDER ============== //
		new Swiper('.icons-slider__swiper', {
			slidesPerView: 'auto',
			freeMode: true,
			//freeModeMomentum: true,
			//spaceBetween: 52,
		});
	},
};
