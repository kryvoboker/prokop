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
		sticky.style.padding = "0 20px";
	} else {
		sticky.style.position = "static";
		sticky.style.padding = "0";
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

//====================================subCat-page=======================
var $range = $(".js-range-slider"),
	$inputFrom = $(".js-input-from"),
	$inputTo = $(".js-input-to"),
	instance,
	min = 0,
	max = 1000,
	from = 0,
	to = 0;

$range.ionRangeSlider({
	skin: "square",
	type: "double",
	min: min,
	max: max,
	from: 200,
	to: 600,
	onStart: updateInputs,
	onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
	from = data.from;
	to = data.to;

	$inputFrom.prop("value", from);
	$inputTo.prop("value", to);
}

$inputFrom.on("input", function () {
	var val = $(this).prop("value");

	// validate
	if (val < min) {
		val = min;
	} else if (val > to) {
		val = to;
	}

	instance.update({
		from: val
	});
});

$inputTo.on("input", function () {
	var val = $(this).prop("value");

	// validate
	if (val < from) {
		val = from;
	} else if (val > max) {
		val = max;
	}

	instance.update({
		to: val
	});
});
const $totLengFrom = data => document.querySelector('#totLengFrom').value = data;
const $totLengTo = data => document.querySelector('#totLengTo').value = data;

let $selectorsTotLeng = document.querySelectorAll('.filter__total-length-radio');
$selectorsTotLeng.forEach($radio => {
	$radio.addEventListener('change', function () {
		$totLengFrom(this.getAttribute('data-totLeng-from'));
		$totLengTo(this.getAttribute('data-totLeng-to'));
	});
});
const $diameterFrom = data => document.querySelector('#diameterFrom').value = data;
const $diameterTo = data => document.querySelector('#diameterTo').value = data;

let $selectorsDiameter = document.querySelectorAll('.filter__diameter-radio');
$selectorsDiameter.forEach($radio => {
	$radio.addEventListener('change', function () {
		$diameterFrom(this.getAttribute('data-diameter-from'));
		$diameterTo(this.getAttribute('data-diameter-to'));
	});
});
// для фильтра по стране производителя
var dotsManufacturerCont = document.getElementById("dotsManufacturerCont");
var lookMoreManufacturerCont = document.getElementById("lookMoreManufacturerCont");
var moreManufacturerContBtn = document.getElementById("moreManufacturerContBtn");

// для фильтра по производителю
var dotsManufacturer = document.getElementById("dotsManufacturer");
var lookMoreManufacturer = document.getElementById("lookMoreManufacturer");
var moreManufacturerBtn = document.getElementById("moreManufacturerBtn");

// для фильтра по цвету
var dotsColor = document.getElementById("dotsColor");
var lookMoreColor = document.getElementById("lookMoreColor");
var moreColorBtn = document.getElementById("moreColorBtn");

// поиск производителя
function searchManufFunction() {
	var input, filter, label, i;
	input = document.getElementById("searchManufFilt");
	filter = input.value.toUpperCase();
	div = document.getElementById("manufacturerFilt");
	label = div.getElementsByTagName("label");
	for (i = 0; i < label.length; i++) {
		if (label[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
			label[i].style.display = "block";
			dotsManufacturer.style.display = "none";
			lookMoreManufacturer.style.display = "block";
			moreManufacturerBtn.innerHTML = "Показать меньше";
			moreManufacturerBtn.classList.add('active');
		} else {
			label[i].style.display = "none";
		}
	}
}

// поиск цвета
function searchColorFunction() {
	var input, filter, label, i;
	input = document.getElementById("searchColorFilt");
	filter = input.value.toUpperCase();
	div = document.getElementById("colorFilt");
	label = div.getElementsByTagName("label");
	for (i = 0; i < label.length; i++) {
		if (label[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
			label[i].style.display = "block";
			dotsColor.style.display = "none";
			lookMoreColor.style.display = "block";
			moreColorBtn.innerHTML = "Показать меньше";
			moreColorBtn.classList.add('active');
		} else {
			label[i].style.display = "none";
		}
	}
}

// поиск страны производителя
function searchManufacturerContFunction() {
	var input, filter, label, i;
	input = document.getElementById("searchManufacturerContFilt");
	filter = input.value.toUpperCase();
	div = document.getElementById("manufacturerContFilt");
	label = div.getElementsByTagName("label");
	for (i = 0; i < label.length; i++) {
		if (label[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
			label[i].style.display = "block";
			dotsManufacturerCont.style.display = "none";
			lookMoreManufacturerCont.style.display = "block";
			moreManufacturerContBtn.innerHTML = "Показать меньше";
			moreManufacturerContBtn.classList.add('active');
		} else {
			label[i].style.display = "none";
		}
	}
}

// для кнопки по стране производителя
function moreManufacturerCont() {
	if (dotsManufacturerCont.style.display === "none") {
		dotsManufacturerCont.style.display = "inline";
		moreManufacturerContBtn.innerHTML = "Показать больше";
		lookMoreManufacturerCont.style.display = "none";
	} else {
		dotsManufacturerCont.style.display = "none";
		moreManufacturerContBtn.innerHTML = "Показать меньше";
		lookMoreManufacturerCont.style.display = "block";
	}
	moreManufacturerContBtn.classList.toggle('active');
}

// для кнопки по производителю
function moreManufacturer() {
	if (dotsManufacturer.style.display === "none") {
		dotsManufacturer.style.display = "inline";
		moreManufacturerBtn.innerHTML = "Показать больше";
		lookMoreManufacturer.style.display = "none";
	} else {
		dotsManufacturer.style.display = "none";
		moreManufacturerBtn.innerHTML = "Показать меньше";
		lookMoreManufacturer.style.display = "block";
	}
	moreManufacturerBtn.classList.toggle('active');
}

// для кнопки по цвету
function moreColor() {
	if (dotsColor.style.display === "none") {
		dotsColor.style.display = "inline";
		moreColorBtn.innerHTML = "Показать больше";
		lookMoreColor.style.display = "none";
	} else {
		dotsColor.style.display = "none";
		moreColorBtn.innerHTML = "Показать меньше";
		lookMoreColor.style.display = "block";
	}
	moreColorBtn.classList.toggle('active');
}
const sortList = document.querySelector('.filter__sort-list');
const sortBtn = document.querySelectorAll('.filter__sort-btn');

sortList.addEventListener("click", addActiveSortBtn, addActiveSaleBtn);

function addActiveSortBtn(e) {
	const targetElement = e.target;
	for (let i = 0; i < sortBtn.length; i++) {
		const el = sortBtn[i];
		if (el.classList.contains('active')) {
			el.classList.remove('active');
		}
		if (!targetElement.classList.contains('active')) {
			targetElement.classList.add('active');
		}
	}
}

const saleMethods = document.querySelector('.filter__sale-methods');
const saleBtn = document.querySelectorAll('.filter__sale-btn');

saleMethods.addEventListener("click", addActiveSaleBtn);

function addActiveSaleBtn(e) {
	const targetElement = e.target;
	for (let i = 0; i < saleBtn.length; i++) {
		const el = saleBtn[i];
		if (el.classList.contains('active')) {
			el.classList.remove('active');
		}
		if (!targetElement.classList.contains('active')) {
			targetElement.classList.add('active');
		}
	}
}

//====================================subCat-page=======================