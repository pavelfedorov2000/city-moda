# City Moda

http://pavfed.com/city-moda/

<img src="https://github.com/pavelfedorov2000/city-moda/assets/66357864/11d4a041-eea4-4d12-b041-11970265422b" />
<img src="https://github.com/pavelfedorov2000/city-moda/assets/66357864/dcbdd2b2-1d5f-4aad-a3c2-5b1325949666" />
<img src="https://github.com/pavelfedorov2000/city-moda/assets/66357864/cd3961c2-ac5e-4ce1-ad72-1809ac02e8bc" />
<img src="https://github.com/pavelfedorov2000/city-moda/assets/66357864/a6560fcb-7694-41d4-992a-fc8e1f14205a" />
<img src="https://github.com/pavelfedorov2000/city-moda/assets/66357864/84993b08-6949-48ca-bf23-890d33581b53" />
<img src="https://github.com/pavelfedorov2000/city-moda/assets/66357864/2f874bae-0b08-4387-b01a-efdb8821d899" />
<img src="https://github.com/pavelfedorov2000/city-moda/assets/66357864/736d8fb6-ccee-4ca6-b779-dadfc8f72999" />
<img src="https://github.com/pavelfedorov2000/city-moda/assets/66357864/bef73959-74d3-4d97-933f-171dbaa17f2f" />
<img src="https://github.com/pavelfedorov2000/city-moda/assets/66357864/57eff3b2-7979-40b6-a8cd-73fb71bae638" />
<img src="https://github.com/pavelfedorov2000/city-moda/assets/66357864/cb7fa946-c610-455f-80a2-a7370aa89ae5" />
<img src="https://github.com/pavelfedorov2000/city-moda/assets/66357864/ed0c86bc-888d-4951-846e-e7df997e6304" />
<img src="https://github.com/pavelfedorov2000/city-moda/assets/66357864/163e10fc-79cf-4fcf-9625-04f745f27723" />
<img src="https://github.com/pavelfedorov2000/city-moda/assets/66357864/1d809a58-d094-4124-bb60-28e3d5a45028" />
<img src="https://github.com/pavelfedorov2000/city-moda/assets/66357864/0faffbe3-362c-4236-9c2e-2085716a9130" />
<img src="https://github.com/pavelfedorov2000/city-moda/assets/66357864/8518a1d4-f903-451c-8ac7-029655d2a218" />
<img src="https://github.com/pavelfedorov2000/city-moda/assets/66357864/ea7e59cc-1dd7-475f-aaa4-fc72bbcc888c" />
<img src="https://github.com/pavelfedorov2000/city-moda/assets/66357864/a67f8fda-2e10-4a03-a108-4a469f0457c8" />

```
git clone https://github.com/pavelfedorov2000/city-moda.git
```

### Устанавливаем модули

```
yarn
```

## Команды для запуска

### Запуск с отслеживанием изменений

```
npm run dev
```

Эту команду запускаем при **разработке**

### Финальная (production) сборка

```
npm run deploy
```

## Структура папок и файлов

```
├── app/                              # Исходники
│   ├── blocks/                       # Блоки
│   │   ├── block/                    # Блок
│   │   │    ├── block.html           # Разметка блока
│   │   │    ├── block.js             # Скрипт блока
│   │   │    └── block.scss           # Стили блока
│   │   ├── footer/                   # Футер сайта
│   │   │    ├── footer.html          # Начальная разметка футера сайта
│   │   │    └── footer.scss          # Начальные стили футера сайта
│   │   ├── head/                     # Секция head
│   │   │    └── head.html            # Разметка секции head и открывающие тэги документа
│   │   ├── header/                   # Шапка сайта
│   │   │    ├── header.html          # Начальная разметка шапки сайта
│   │   │    └── header.scss          # Начальные стили шапки сайта
│   │   └── link/                     # Подключение скриптов
│   │        └── link.html            # Разметка с подключаемыми скриптами и закрывающе тэги документа
│   ├── data/                         # Данные в формате JSON
│   ├── images/                       # Изображения
│   │   └── sprite-icons /            # SVG иконки для генерации векторного спрайта
│   ├── pages/                        # Страницы
│   │   └── index.html                # Разметка страницы
│   ├── resources/                    # Статические файлы для копирования в dist
│   ├── scripts/                      # Скрипты
│   │   ├── common/                   # Вспомогательные функции проекта
│   │   │   └── addLibs.js            # Файл содержащий методы для динамического добавления библиотек
│   │   ├── app.js                    # Главный скрипт
│   │   └── init.js                   # Подключение модулей проекта
│   └── styles/                       # Стили
│       ├── common/                   # Общие стили
│       │   └── common.scss           # Общие стили сайта
│       ├── helpers/                  # Помощники
│       │   ├── fonts.scss            # Подключение шрифтов
│       │   ├── mixins.scss           # Примеси
│       │   ├── nojs.scss             # Сообщение об отключенном js
│       │   ├── optimize.scss         # Сброс стилей и фиксы
│       │   ├── sprite_template.scss  # Переменные с размерами SVG иконок (автосборка)
│       │   └── variables.scss        # Переменные
│       └── app.scss                  # Главный стилевой файл
├── dist/                             # Сборка (автогенерация)
│   ├── assets/                       # Подключаемые ресурсы
│   │   ├── libs/                     # Файлы сторонних библиотек
│   │   │   ├── js/                   # JS файлы библиотек
│   │   │   └── css/                  # CSS файлы библиотек
│   │   ├── fonts/                    # Шрифты
│   │   ├── images/                   # Изображения
│   │   │   └── sprites/              # Спрайты (автогенерация)
│   │   ├── scripts/                  # Скрипты
│   │   └── styles/                   # Стили
│   └── index.html                    # Страница
├── tasks/                            # Подключаемые скрипты с задачами для gulpfile.babel.js
│   ├── config.js                     # Конфигурация
│   ├── copy.js                       # Копирование
│   ├── images.js                     # Сборка картинок
│   ├── libs.js                       # Сборка сторонних библиотек
│   ├── rename-predist.js             # Переименование dist папки при production-сборке
│   ├── scripts.js                    # Сборка скриптов
│   ├── sprite.js                     # Сборка векторного спрайта
│   ├── styles.js                     # Сборка стилей
│   ├── templates.js                  # Сборка страниц из шаблонов
│   ├── watch.js                      # Отслеживание изменений и запуск задач
│   └── zip.js                        # Архивация папки dist
├── .babelrc                          # Конфигурация babel
├── browserlist                       # Список версий браузеров для задач Gulp
├── .editorconfig                     # Конфигурация настроек редактора кода
├── .eslintignore                     # Список исключений для проверки JavaScript в ESLint
├── .eslintrc                         # Конфигурация проверки JavaScript в ESLint
├── .gitignore                        # Список исключённых файлов из Git
├── .lintstagedrc                     # Конфикугация lint-staged для husky
├── .sass-lint.yml                    # Конфигурация проверки SCSS в StyleLint
├── .stylelintrc                      # Конфигурация проверки SCSS в StyleLint
├── gulpfile.babel.js                 # Файл для запуска Gulp.js
├── make-block.js                     # Утилита создания новых блоков
├── libs-links.js                     # Пути к сторонним библиотекам
├── make-block.js                     # Скрипт создания структурных модулей проекта
├── package.json                      # Список модулей и прочей информации
└── README.md                         # Документация шаблона
```
