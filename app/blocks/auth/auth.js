app.auth = {
    name: 'auth',
    description: 'your script description',
    init() {
        // Логика задизейбленной кнопки
        $('#auth input').on('keyup', function () {
            const $input = $(this);
            const inputVal = $input.val();
            const $form = $input.closest('form');
            const $inputs = $form.find('input');
            const $submitBtn = $form.find('button[type="submit"]');

            if (inputVal !== '' && $inputs.val() !== '') {
                $submitBtn.prop('disabled', false);
            } else {
                $submitBtn.prop('disabled', true);
            }
        });

        // password input visibility toggle
        $('.pass-btn').on('click', function () {
            const $passBtn = $(this);
            const $inputWrap = $passBtn.closest('.input-wrap');
            const $input = $inputWrap.find('input');

            if ($passBtn.hasClass('show')) {
                $input.attr('type', 'text');
                $passBtn.removeClass('show');
                $passBtn.addClass('hide');
            } else {
                $input.attr('type', 'password');
                $passBtn.removeClass('hide');
                $passBtn.addClass('show');
            }
        });

        // toogle phone / email enter
        $('.aside-popup__link-btn').on('click', function () {
            const $linkBtn = $(this);
            const attr = $linkBtn.data('enter');
            const $tabsContent = $linkBtn.parent();

            $tabsContent.hide();
            $(`#${attr}`).show();
        });

        // Восстановление пароля открыть
        $('.remind-password').on('click', function () {
            const $remindPassBtn = $(this);
            const $asidePopup = $remindPassBtn.closest('.aside-popup');

            $asidePopup.removeClass('active');
            $('#password-recovery').addClass('active');
        });

        // Восстановление пароля закрыть
        $('#password-recovery .aside-popup__back-btn').on('click', function () {
            $('#password-recovery').removeClass('active');
            $('#auth-popup').addClass('active');
        });
    },
};
