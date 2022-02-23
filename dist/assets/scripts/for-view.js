$(document).ready(function () {
  // Открытие попапа скидки через 2 мин
  setTimeout(() => {
    $.fancybox.open({
      src: '#discount-popup',
      type: 'inline',
    });
  }, 120000);

  // Логика строки поиска
  $('.search-form__input').on('input', function () {
    $(this).next().fadeIn('slow');
  });
  $('.search-form__input').on('input change', function () {
    if ($(this).val() === '') {
      $(this).next().fadeOut('slow');
    } else {
      $(this).next().fadeIn('slow');
    }
  });
  $('.search-form__input').on('focus', function () {
    if ($(this).val() !== '') {
      $(this).next().fadeIn('slow');
    }
  });
  $('.search-form__input').on('focusout', function () {
    $(this).next().fadeOut('slow');
  });

  // Открытие выезжающей справа корзины
  $('.js-cart-btn').on('click', function () {
    $('body').addClass('_lock');
    $('html').addClass('disable-fix');
    $('.overlay').fadeIn('slow');
    $('#drop-basket').addClass('active');
  });

  // Открытие выезжающей справа авторизации
  $('.js-auth-btn').on('click', function () {
    $('body').addClass('_lock');
    $('html').addClass('disable-fix');
    $('.overlay').fadeIn('slow');
    $('#auth-popup').addClass('active');
  });

  // Если в корзине нет продуктов, то появится надпись Вы еще не добавили товары в корзину
  if ($('.drop-basket__products').length == 0) {
    $('.drop-basket__empty').show();
  } else {
    $('.drop-basket__empty').hide();
  }

  // Демонстрация выезжающей авторизации
  if ($('main').hasClass('auth')) {
    $('body').addClass('_lock');
    $('.overlay').show('slow');
    $('#auth-popup').fadeIn('slow');
    $('#auth-popup').addClass('active');
  }

  // Демонстрация выезжающей корзины
  if ($('main').hasClass('drop-basket-page')) {
    $('body').addClass('_lock');
    $('.overlay').show('slow');
    $('#drop-basket').fadeIn('slow');
    $('#drop-basket').addClass('active');
  }

  // Кнопка добавить в избранное
  $('.product-favorite-btn').on('click', function () {
    $(this).toggleClass('favorite');
  });

  // выбор города в попапе
  $('.region-popup__city .radio-text').on('click', function () {
    $.fancybox.close();
    $('.header__region').text($(this).text());
  });

  // Восстановление пароля форма успешно отправлена
  $('#password-recovery form').submit(function (e) {
    e.preventDefault();
    $(this).append('<div class="form-success aside-popup__form-success">Письмо отправлено. Для восстановления пароля перейдите по ссылке в письме</div>');
  });

  // Клик на задизейбенный размер - открытие попапа подписаться на размер
  $('.product-sizes__item').on('click', function () {
    if ($(this).find('input[type=radio]').prop('disabled')) {
      $.fancybox.open({
        src: '#size-subscribe-popup',
        type: 'inline',
      });
    }
  });


  // Промокод (оформление заказа)
  $('input[name=promocode]').on('change', function () {
    if ($(this).val() !== 0) {
      $(this).addClass('valid');
    }
  });
});

