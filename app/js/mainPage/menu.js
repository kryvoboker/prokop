//====================================menu.js============================
window.onload = function () {
	document.addEventListener("click", documentActions);

	function documentActions(e) {
		const targetElement = e.target;

		if (!isMobile.any()) {
			if (targetElement.classList.contains('header__menu-btn')) {
				targetElement.closest('.header__menu-item').classList.toggle('active');
			}
			if (!targetElement.closest('.header__menu-item') && document.querySelectorAll('.header__menu-item.active').length > 0) {
				removeClasses(document.querySelectorAll('.header__menu-item.active'), "active");
			}
			if (targetElement.classList.contains('header__body-btn')) {
				// $('.header__menu').classList.toggle('active');
				$('.header__menu').toggleClass('active');
			}
			if (!targetElement.classList.contains('header__body-btn')
				&& document.querySelectorAll('.header__menu.active').length > 0
				&& !targetElement.closest('.header__menu-item')) {
				removeClasses(document.querySelectorAll('.header__menu.active'), "active");
			}
		}
	}
}
//====================================menu.js============================