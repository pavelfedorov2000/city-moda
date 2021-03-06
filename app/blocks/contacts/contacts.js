app.contacts = {
	name: 'contacts',
	description: 'your script description',
	init() {

		ymaps.ready(init);

		function init() {

			var myMap = new ymaps.Map("moscow-map", {
				center: [55.650150, 37.539626],
				zoom: 15,
				controls: ['zoomControl']
			});


			var myGeoObjects = [];

			myGeoObjects[0] = new ymaps.Placemark([55.650150, 37.539626], {
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
				//iconImageOffset: [-3, -42]
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
