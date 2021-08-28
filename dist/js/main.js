// alert(window.innerWidth);
//====================================main-page=========================
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

function removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}

if (isMobile.any()) {
	$('.main-list-cats .main-list__sub-title, ' +
		'.main-sections .main-sections__item-title').css('color', '#fff');
}
// Получить кнопку:
buttonUp = document.getElementById("btn-up");
// stickyy = document.getElementById("sticky");

// Когда пользователь прокручивает вниз 170px от верхней части документа, покажите кнопку
window.onscroll = function () {
	scrollSticky()
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 170 || document.documentElement.scrollTop > 170) {
		buttonUp.style.display = "block";
	} else {
		buttonUp.style.display = "none";
	}
}

// Когда пользователь нажимает на кнопку, прокрутите до верхней части документа
// плавная прокрутка
// document.body.scrollTop // Для Safari
// document.documentElement.scrollTop // Для Chrome, Firefox, IE и Opera
const scrollToTop = () => {
	const c = document.documentElement.scrollTop || document.body.scrollTop;
	if (c > 0) {
		window.requestAnimationFrame(scrollToTop);
		window.scrollTo(0, c - c / 8);
	}
};
// scrollToTop();
sticky = document.getElementById("sticky");

// window.onscroll = function () {
// 	scrollSticky()
// 	scrollFunction()
// };

function scrollSticky() {
	if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
		sticky.style.position = "fixed";
		sticky.style.left = "0";
		sticky.style.width = "100%";
		sticky.style.padding = "0 40px";
	} else {
		sticky.style.position = "static";
	}
}
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
//====================================main-page=========================