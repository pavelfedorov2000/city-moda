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

  // Закрытие выезжающей корзины и авторизации
  $('.aside-popup__close').on('click', function () {
    $(this).parents('.aside-popup').removeClass('active');
    $('.overlay').fadeOut('300');
    $('body').removeClass('_lock');
    $('html').removeClass('disable-fix');
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
    $('#auth-popup').addClass('active');
  }

  if ($('main').hasClass('password-recovery')) {
    $('body').addClass('_lock');
    $('.overlay').show('slow');
    $('#password-recovery').addClass('active');
  }

  // Демонстрация выезжающей корзины
  if ($('main').hasClass('drop-basket-page')) {
    $('body').addClass('_lock');
    $('.overlay').show('slow');
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

  // Попап подписка
  $('.subscribe-item__change-btn').on('click', function () {
    $('.sale-popup__title').text($(this).parent().parent().prev().text());
  });

  // форма подписки в футере
  $('.form-row__input').on('change', function () {
    if ($('#email-error').attr('style') === 'display: none;') {
      $(this).parent().find('button').css('background-color', '#101112');
      $(this).parent().find('button').css('border-color', '#101112');
    }
  });

  // Бренды алфавит
  $('.brands-index-list__item').on('click', function (e) {
    e.preventDefault();
    $('.cancel-brand-letter').css('display', 'flex');
    $(this).siblings().removeClass('brands-index-list__item--active');
    $('.brands-alphabet__item').css('display', 'none');
    $(this).addClass('brands-index-list__item--active');
    $($(this).attr('href')).css('display', 'flex');
  });

  // Кнопка отменить
  $('.cancel-brand-letter').on('click', function (e) {
    $(this).hide();
    $(this).siblings().removeClass('brands-index-list__item--active');
    $('.brands-alphabet__item').css('display', 'flex');
  });


  // Логика работы инпутов в личном кабинете
  $('.input input').on('focus', function () {
    $(this).parent().addClass('focus');
    $(this).prev().addClass('focus');
  });

  $('.input input').on('focusout', function () {
    if ($(this).val() == '') {
      $(this).parent().removeClass('focus');
      $(this).prev().removeClass('focus');
    }
  });

  if ($('.input input').prop('disabled') === true) {
    $(this).parent().addClass('disabled');
  }
});

