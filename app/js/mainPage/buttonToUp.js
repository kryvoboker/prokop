// Получить кнопку:
buttonUp = document.getElementById("btn-up");

// Когда пользователь прокручивает вниз 170px от верхней части документа, покажите кнопку
window.onscroll = function () {
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