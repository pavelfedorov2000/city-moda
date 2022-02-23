app.auth = {
    name: 'auth',
    description: 'your script description',
    init() {

        // Логика задизейбленной кнопки
        $('#auth input').on('change', function () {
            if ($(this).val() !== '' && $(this).parents('form').find('input[type=email]').val() !== '' && $(this).parents('form').find('input[type=password]').val() !== '') {
                $(this).parents('form').find('button[type="submit"]').prop('disabled', false);
            } else {
                $(this).parents('form').find('button[type="submit"]').prop('disabled', true);
            }
        });

        // Логика задизейбленной кнопки
        $('#password-recovery input, #password-change input').on('change', function () {
            if ($(this).val() !== '') {
                $(this).parents('form').find('button[type="submit"]').prop('disabled', false);
            } else {
                $(this).parents('form').find('button[type="submit"]').prop('disabled', true);
            }
        });

        // Логика задизейбленной кнопки
        $('#password-change input[type=password]').on('change', function () {
            if ($(this).val() !== '' && $(this).parents('form').find('input[type=password]').val() !== '') {
                $(this).parents('form').find('button[type="submit"]').prop('disabled', false);
            } else {
                $(this).parents('form').find('button[type="submit"]').prop('disabled', true);
            }
        });

        // password input eye toggle
        $('.pass-btn').on('click', function () {
            if ($(this).hasClass('show')) {
                $(this).parent().find('input[type=password]').attr('type', 'text');
                $(this).removeClass('show');
                $(this).addClass('hide');
            } else {
                $(this).parent().find('input[type=text]').attr('type', 'password');
                $(this).removeClass('hide');
                $(this).addClass('show');
            }
        });

        // toogle phone / email enter
        $('.aside-popup__link-btn').on('click', function () {
            $(this).parent().hide();
            $(`#${$(this).data('enter')}`).show();
        });

        // Восстановление пароля открыть
        $('.remind-password').on('click', function () {
            $(this).parents('.aside-popup').removeClass('active');
            $(this).parents('.aside-popup').hide();
            $('#password-recovery').fadeIn('slow');
            $('#password-recovery').addClass('active');
        });

        // Восстановление пароля закрыть
        $('#password-recovery .aside-popup__back-btn').on('click', function () {
            $(this).parents('.aside-popup').removeClass('active');
            $(this).parents('.aside-popup').hide();
            $('#auth-popup').fadeIn('slow');
            $('#auth-popup').addClass('active');
        });
    },
};
