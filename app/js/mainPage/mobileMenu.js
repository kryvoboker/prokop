window.onload = function () {
	document.addEventListener("click", documentActions);

	function documentActions(e) {

		const targetElement = e.target;
		if (isMobile.any()) {
			if (window.innerWidth > 1025) {
				if (targetElement.classList.contains('header__menu-item-btn')) {
					if (!$('.header__menu-item').hasClass('show-menu')) {
						$('.header__menu-item').addClass('show-menu');
						$('.header__menu-sub-list').show();
					} else {
						$('.header__menu-item').removeClass('show-menu');
						$('.header__menu-sub-list').hide();
					}
					targetElement.classList.toggle('rotate');
				}
				if (!targetElement.closest('.header__menu-item') && document.querySelectorAll('.header__menu-item.show-menu').length > 0) {
					removeClasses(document.querySelectorAll('.header__menu-item.show-menu'), "show-menu");
					removeClasses(document.querySelectorAll('.header__menu-item-btn.rotate'), "rotate");
					$('.header__menu-sub-list').hide();
				}
				if (targetElement.classList.contains('header__menu-sub-item-btn')) {
					targetElement.closest('.header__menu-sub-item').classList.toggle('show-sub-menu');
					targetElement.classList.toggle('rotate');
				}
				if (!targetElement.closest('.header__menu-sub-item') && document.querySelectorAll('.header__menu-sub-item.show-sub-menu').length > 0) {
					removeClasses(document.querySelectorAll('.header__menu-sub-item.show-sub-menu'), "show-sub-menu");
					removeClasses(document.querySelectorAll('.header__menu-sub-item-btn.rotate'), "rotate");
				}

			}
			if (window.innerWidth <= 1025) {
				if (targetElement.classList.contains('header__menu-item-btn')) {
					targetElement.closest('.header__menu-item').classList.toggle('show-menu');
					targetElement.classList.toggle('rotate');
					$('.header__menu-sub-list').slideToggle(1000);
				}
				if (!targetElement.closest('.header__menu-item') && document.querySelectorAll('.header__menu-item.show-menu').length > 0) {
					removeClasses(document.querySelectorAll('.header__menu-item.show-menu'), "show-menu");
					removeClasses(document.querySelectorAll('.header__menu-item-btn.rotate'), "rotate");
					$('.header__menu-sub-list').slideToggle(1000);
				}
				if (targetElement.classList.contains('header__menu-sub-item-btn')) {
					targetElement.closest('.header__menu-sub-item').classList.toggle('show-sub-menu');
					targetElement.classList.toggle('rotate');
				}
				if (!targetElement.closest('.header__menu-sub-item') && document.querySelectorAll('.header__menu-sub-item.show-sub-menu').length > 0) {
					removeClasses(document.querySelectorAll('.header__menu-sub-item.show-sub-menu'), "show-sub-menu");
					removeClasses(document.querySelectorAll('.header__menu-sub-item-btn.rotate'), "rotate");
				}
				if (targetElement.classList.contains('burger-input')) {
					if (!$('.header__menu-list').hasClass('active')) {
						$('.header__menu-list').addClass('active');
					} else {
						$('.header__menu-list').removeClass('active');
						$('.header__menu-sub-list').hide();
					}
				}
				if ((!targetElement.closest('.burger') && document.querySelectorAll('.burger').length > 0) &&
					(!targetElement.closest('.header__menu-sub-item')) &&
					(!targetElement.closest('.header__menu-item'))) {
					removeClasses(document.querySelectorAll('.header__menu-list.active'), "active");
					$('.burger-input').prop('checked', false);
				}
			}
		} else if (!isMobile.any()) {
			if (window.innerWidth > 1025) {
				if (targetElement.classList.contains('header__menu-item-btn')) {
					if (!$('.header__menu-item').hasClass('show-menu')) {
						$('.header__menu-item').addClass('show-menu');
						$('.header__menu-sub-list').show();
					} else {
						$('.header__menu-item').removeClass('show-menu');
						$('.header__menu-sub-list').hide();
					}
					targetElement.classList.toggle('rotate');
				}
				if (!targetElement.closest('.header__menu-item') && document.querySelectorAll('.header__menu-item.show-menu').length > 0) {
					removeClasses(document.querySelectorAll('.header__menu-item.show-menu'), "show-menu");
					removeClasses(document.querySelectorAll('.header__menu-item-btn.rotate'), "rotate");
					$('.header__menu-sub-list').hide();
				}
				if (targetElement.classList.contains('header__menu-sub-item-btn')) {
					targetElement.closest('.header__menu-sub-item').classList.toggle('show-sub-menu');
					targetElement.classList.toggle('rotate');
				}
				if (!targetElement.closest('.header__menu-sub-item') && document.querySelectorAll('.header__menu-sub-item.show-sub-menu').length > 0) {
					removeClasses(document.querySelectorAll('.header__menu-sub-item.show-sub-menu'), "show-sub-menu");
					removeClasses(document.querySelectorAll('.header__menu-sub-item-btn.rotate'), "rotate");
				}

			}
			if (window.innerWidth <= 1025) {
				if (targetElement.classList.contains('header__menu-item-btn')) {
					targetElement.closest('.header__menu-item').classList.toggle('show-menu');
					targetElement.classList.toggle('rotate');
					$('.header__menu-sub-list').slideToggle(1000);
				}
				if (!targetElement.closest('.header__menu-item') && document.querySelectorAll('.header__menu-item.show-menu').length > 0) {
					removeClasses(document.querySelectorAll('.header__menu-item.show-menu'), "show-menu");
					removeClasses(document.querySelectorAll('.header__menu-item-btn.rotate'), "rotate");
					$('.header__menu-sub-list').slideToggle(1000);
				}
				if (targetElement.classList.contains('header__menu-sub-item-btn')) {
					targetElement.closest('.header__menu-sub-item').classList.toggle('show-sub-menu');
					targetElement.classList.toggle('rotate');
				}
				if (!targetElement.closest('.header__menu-sub-item') && document.querySelectorAll('.header__menu-sub-item.show-sub-menu').length > 0) {
					removeClasses(document.querySelectorAll('.header__menu-sub-item.show-sub-menu'), "show-sub-menu");
					removeClasses(document.querySelectorAll('.header__menu-sub-item-btn.rotate'), "rotate");
				}
				if (targetElement.classList.contains('burger-input')) {
					if (!$('.header__menu-list').hasClass('active')) {
						$('.header__menu-list').addClass('active');
					} else {
						$('.header__menu-list').removeClass('active');
						$('.header__menu-sub-list').hide();
					}
				}
				if ((!targetElement.closest('.burger') && document.querySelectorAll('.burger').length > 0) &&
					(!targetElement.closest('.header__menu-sub-item')) &&
					(!targetElement.closest('.header__menu-item'))) {
					removeClasses(document.querySelectorAll('.header__menu-list.active'), "active");
					$('.burger-input').prop('checked', false);
				}
			}
		}
	}
}