app.popups = {
	name: 'popups',
	description: 'your script description',
	init() {
		$('.region-popup__city .radio-text').on('click', function () {
			$.fancybox.close();
			$('.header__region').text($(this).text());
		});

		$('#auth input').on('change', function () {
			if ($(this).val() !== '' && $(this).parents('form').find('input[type=password]').val() !== '') {
				$(this).parents('form').find('button[type="submit"]').prop('disabled', false);
			} else {
				$(this).parents('form').find('button[type="submit"]').prop('disabled', true);
			}
		});

		$('#password-change input[type=password]').on('change', function () {
			if ($(this).val() !== '' && $(this).parents('form').find('input[type=password]').val() !== '') {
				$(this).parents('form').find('button[type="submit"]').prop('disabled', false);
			} else {
				$(this).parents('form').find('button[type="submit"]').prop('disabled', true);
			}
		});

		$('.aside-popup__close').on('click', function () {
			$(this).parent().removeClass('active');
			$('.overlay').fadeOut('300');
			$('body').removeClass('_lock');
		});

		$(document).ready(function () {
			if ($('.aside-popup').hasClass('active')) {
				$('body').addClass('_lock');
			}
		});

		//&& $('input[name="user-agreement"]').is(':checked')

		// password input eye toggle
		$('.pass-btn').on('click', function () {
			if ($(this).hasClass('show')) {
				$(this).parent().find('input[type=password]').attr('type', 'text');
				$(this).removeClass('show');
				$(this).addClass('hide');
			} else {
				$(this).parent().find('input[type=password]').attr('type', 'password');
				$(this).removeClass('hide');
				$(this).addClass('show');
			}
		});

		// validation
		$.validator.addMethod("minlenghtphone", function (value, element) {
			return value.replace(/\D+/g, '').length > 10;
		});
		$.validator.addMethod("requiredphone", function (value, element) {
			return value.replace(/\D+/g, '').length > 1;
		});


		function validateForms(form) {
			$(form).validate({
				rules: {
					name: "required",
					surname: "required",
					phone: {
						requiredphone: true,
						minlenghtphone: true,
					},
					email: "required",
					password: "required",
					repeat_password: {
						required: true,
						equalTo: '#password',
					},
					new_password: "required",
					repeat_new_password: {
						required: true,
						equalTo: '#new_password',
					}
				},
				messages: {
					name: "Пожалуйста, заполните обязательное поле.",
					surname: "Пожалуйста, заполните обязательное поле.",
					phone: {
						requiredphone: "Пожалуйста, заполните обязательное поле."
					},
					email: "Пожалуйста, заполните поле.",
					password: "Пожалуйста, заполните поле.",
					repeat_password: {
						required: "Пожалуйста, заполните поле.",
						equalTo: "Пароли не совпадают",
					},
				}
			});
		}

		validateForms('#auth form');
		validateForms('#register form');


		/* $('form').on('sumbit', function (e) {
			e.preventDefault();

			$.ajax({
				type: "POST",
				url: "send.php",
				data: $(this).serialize(),
			});
			$('.form__input').removeClass('valid');
			$(this).find("input").val("");
			$('form').trigger('reset');
			return false;
		}); */

		$.fn.setCursorPosition = function (pos) {
			if ($(this).get(0).setSelectionRange) {
				$(this).get(0).setSelectionRange(pos, pos);
			} else if ($(this).get(0).createTextRange) {
				var range = $(this).get(0).createTextRange();
				range.collapse(true);
				range.moveEnd('character', pos);
				range.moveStart('character', pos);
				range.select();
			}
		};

		//mask
		$("input[name=phone]").on('click', function () {
			$(this).setCursorPosition(4);
		}).mask("+7 (999) 999-99-99");

		// ymaps
		//ymaps.ready(init);

		function init() {

			var myMap = new ymaps.Map("pickup-map", {
				center: [59.925299, 30.358448],
				zoom: 15,
				controls: ['zoomControl']
			});


			var myGeoObjects = [];

			myGeoObjects[0] = new ymaps.Placemark([59.925299, 30.358448], {
				clusterCaption: 'Заголовок',
				//balloonContentBody: 'Текст в балуне',
			}, {
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				iconImageHref: 'assets/images/icons/black-pin.svg',
				// Размеры метки.
				iconImageSize: [32, 32],
				// Смещение левого верхнего угла иконки относительно
				// её «ножки» (точки привязки).
				//iconImageOffset: [-3, -42]
			});

			myGeoObjects[1] = new ymaps.Placemark([59.922585, 30.348252], {
				clusterCaption: 'Заголовок',
				//balloonContentBody: 'Текст в балуне',
			}, {
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				iconImageHref: 'assets/images/icons/red-pin.svg',
				// Размеры метки.
				iconImageSize: [50, 50],
				// Смещение левого верхнего угла иконки относительно
				// её «ножки» (точки привязки).
				//iconImageOffset: [-23, -42]
			});

			/* myGeoObjects[2] = new ymaps.Placemark([45.035470, 38.975313], {
				clusterCaption: 'Заголовок',
				//balloonContentBody: 'Текст в балуне',
			}, {
				// Необходимо указать данный тип макета.
				iconLayout: 'default#image',
				iconImageHref: 'img/icons/pin.svg',
				// Размеры метки.
				iconImageSize: [45, 50],
				// Смещение левого верхнего угла иконки относительно
				// её «ножки» (точки привязки).
				iconImageOffset: [-16, -42]
			}); */

			/* var clusterIcons = [{
				href: '/images/pointer.png',
				size: [31, 40],
				offset: [0, 0]
			}]; */

			var clusterer = new ymaps.Clusterer({
				clusterDisableClickZoom: false,
				clusterOpenBalloonOnClick: false,
				// Устанавливаем стандартный макет балуна кластера "Карусель".
				clusterBalloonContentLayout: 'cluster#balloonCarousel',
				// Устанавливаем собственный макет.
				//clusterBalloonItemContentLayout: customItemContentLayout,
				// Устанавливаем режим открытия балуна. 
				// В данном примере балун никогда не будет открываться в режиме панели.
				clusterBalloonPanelMaxMapArea: 0,
				// Устанавливаем размеры макета контента балуна (в пикселях).
				clusterBalloonContentLayoutWidth: 300,
				clusterBalloonContentLayoutHeight: 200,
				// Устанавливаем максимальное количество элементов в нижней панели на одной странице
				clusterBalloonPagerSize: 5
				// Настройка внешего вида нижней панели.
				// Режим marker рекомендуется использовать с небольшим количеством элементов.
				// clusterBalloonPagerType: 'marker',
				// Можно отключить зацикливание списка при навигации при помощи боковых стрелок.
				// clusterBalloonCycling: false,
				// Можно отключить отображение меню навигации.
				// clusterBalloonPagerVisible: false
			});

			clusterer.add(myGeoObjects);
			myMap.geoObjects.add(clusterer);
		}
	},
};
