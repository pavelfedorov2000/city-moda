app.validation = {
	name: 'validation',
	description: 'your script description',
	init() {
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
					subscribe_email: {
						required: true,
						email: true,
					},
					password: "required",
					repeat_password: {
						required: true,
						equalTo: '#password',
					},
					new_password: "required",
					repeat_new_password: {
						required: true,
						equalTo: '#new_password',
					},
					city: "required",
					index: "required",
					street: "required",
					home: "required",
					flat: "required",
				},
				messages: {
					name: "Пожалуйста, заполните обязательное поле.",
					surname: "Пожалуйста, заполните обязательное поле.",
					phone: {
						requiredphone: "Пожалуйста, заполните обязательное поле."
					},
					email: "Пожалуйста, заполните поле.",
					subscribe_email: {
						required: "Пожалуйста, заполните электронную почту.",
						email: "Пожалуйста, проверьте, правильно ли указан адрес электронной почты.",
					},
					password: "Пожалуйста, заполните поле.",
					repeat_password: {
						required: "Пожалуйста, заполните поле.",
						equalTo: "Пароли не совпадают",
					},
					city: "Пожалуйста, заполните обязательное поле.",
					index: "Пожалуйста, заполните поле.",
					street: "Пожалуйста, заполните поле.",
					home: "Пожалуйста, заполните поле.",
					flat: "Пожалуйста, заполните поле.",
				}
			});
		}

		validateForms('.footer__subscribe form');
		validateForms('#auth form');
		validateForms('#register form');
		validateForms('.basket-page form');

		$('.form-row__input').on('change', function () {
			if ($('#subscribe_email-error').attr('style') === 'display: none;') {
				$(this).parent().find('button').css('background-color', '#101112');
				$(this).parent().find('button').css('border-color', '#101112');
			}
		});

		/* $('.subscibe-form button[type=submit]').on('click', function () {
			if ($('#subscribe_email-error')) {
				$(this).addClass('error');
			}
		});

		$('.form-row__input').on('change', function () {
			if ($('#subscribe_email-error')) {
				$(this).parent().find('button').addClass('error');
			}
		}); */


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
	},
};
