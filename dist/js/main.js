// alert(window.innerWidth);
//====================================main-page=========================
//====================================functions.js============================
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
//====================================functions.js============================
//====================================buttonTuUp.js========================
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
//====================================buttonTuUp.js========================
//====================================sticky.js============================
const sticky = document.getElementById("sticky");
const zIndex = 'z-index';
const mainSection = document.querySelector('.main');

function scrollSticky() {
	if (document.body.scrollTop > 58 || document.documentElement.scrollTop > 58) {
		sticky.style.position = "fixed";
		sticky.style.left = "0";
		sticky.style.width = "100%";
		sticky.style.zIndex = "6";
		sticky.style.padding = "0 20px";
		mainSection.classList.add('active');
	} else {
		sticky.style.position = "static";
		sticky.style.padding = "0";
		mainSection.classList.remove('active');
	}
}
//====================================sticky.js============================
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
//====================================main-page=========================

//====================================filter============================
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
//====================================totalLengthFilter.js==================
const $totLengFrom = data => document.querySelector('#totLengFrom').value = data;
const $totLengTo = data => document.querySelector('#totLengTo').value = data;

let $selectorsTotLeng = document.querySelectorAll('.filter__total-length-radio');
$selectorsTotLeng.forEach($radio => {
	$radio.addEventListener('change', function () {
		$totLengFrom(this.getAttribute('data-totLeng-from'));
		$totLengTo(this.getAttribute('data-totLeng-to'));
	});
});
//====================================totalLengthFilter.js==================
//====================================diameterFilter.js========================
const $diameterFrom = data => document.querySelector('#diameterFrom').value = data;
const $diameterTo = data => document.querySelector('#diameterTo').value = data;

let $selectorsDiameter = document.querySelectorAll('.filter__diameter-radio');
$selectorsDiameter.forEach($radio => {
	$radio.addEventListener('change', function () {
		$diameterFrom(this.getAttribute('data-diameter-from'));
		$diameterTo(this.getAttribute('data-diameter-to'));
	});
});
//====================================diameterFilter.js========================
//====================================searchFilter.js============================
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
//====================================searchFilter.js============================
//====================================addActiveBtn.js=========================
const sortList = document.querySelector('.filter__sort-list');
const sortBtn = document.querySelectorAll('.filter__sort-btn');

if (sortList) {
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
}

const saleMethods = document.querySelector('.filter__sale-methods');
const saleBtn = document.querySelectorAll('.filter__sale-btn');

if (saleMethods) {
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
}
//====================================addActiveBtn.js=========================
//====================================filterBtn.js============================
const filterShow = document.querySelector('.filter-btn__show');
const filterClose = document.querySelector('.filter-btn__close');
const filterBtnShow = document.getElementById('filterShow');
const filterBtnClose = document.getElementById('filterClose');

if (filterShow && filterClose) {
	filterShow.onclick = function () {
		filterBtnShow.classList.add('active');
		filterBtnClose.classList.add('active');
		$('.body-grid, .filter, .body-grid-inner').addClass('active');
	};

	filterClose.onclick = function () {
		filterBtnShow.classList.remove('active');
		filterBtnClose.classList.remove('active');
		$('.body-grid, .filter, .body-grid-inner').removeClass('active');
	};
}
//====================================filterBtn.js============================
//====================================filter============================

//====================================goods=============================
//====================================price.js============================
const priceBox = document.querySelectorAll('.goods__prices');
const price = document.querySelectorAll('.goods__price');
const priceDiscount = document.querySelectorAll('.goods__discount');

// for (let i = 0; i < priceBox.length; i++) {
// 	const e = priceBox[i];
// 	for (let j = 0; j < priceDiscount.length; j++) {
// 		const el = priceDiscount[j];
// 		for (let k = 0; k < price.length; k++) {
// 			const elem = price[k];
// 			if (e.contains(el) && e.contains(elem)) {
// 				elem.classList.add('without-discount');
// 			}
// 		}
// 	}
// }

for (const i of priceBox) {
	for (const k of priceDiscount) {
		for (const j of price) {
			if (i.contains(k) && i.contains(j)) {
				j.classList.add('with-discount');
			}
		}
	}
}
//====================================price.js============================
//====================================goods=============================

//====================================productPage=======================
$(function () {
	if ($('.product__slider-for') && $('.product__slider-nav')) {
		$('.product__slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			nextArrow: '<button class="product__slider-btn-next" type="button"></button>',
			prevArrow: '<button class="product__slider-btn-prev" type="button"></button>',
			asNavFor: '.product__slider-nav'
		});
		$('.product__slider-nav').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.product__slider-for',
			dots: false,
			centerMode: true,
			focusOnSelect: true,
			arrows: false
		});
	}

	const navImgSlider = document.querySelectorAll('.product__slider-nav-img');
	const forImgItem = document.querySelectorAll('.product__slider-for-item');
	const closestClass = '.slick-slide';
	const getClosestClass = document.querySelectorAll('.slick-slide');
	const classAddOne = 'slick-current';
	const classAddTwo = 'slick-active';
	const classCenter = 'slick-center';
	let getStyleClosestClass;

	function addSlickActiveNav(el, classNav, classAddOne, classCenter) {
		el.closest(classNav).classList.add(classAddOne, classCenter);
	}
	function addSlickActiveFor(el, classFor, classAddOne, classAddTwo, getClosestClass) {
		el.closest(classFor).classList.add(classAddOne, classAddTwo);

		for (let i = 0; i < getClosestClass.length / 2; i++) {
			const element = getClosestClass[i];
			getStyleClosestClass = getComputedStyle(element).opacity;

			if (getStyleClosestClass == 1) {
				element.style.opacity = 0;
				element.style.zIndex = 998;
				el.closest(classFor).style.opacity = 1;
				el.closest(classFor).style.zIndex = 999;
			}
		}
	}
	function removeSlickActiveNav(el, classFor, classAddOne, classAddTwo) {
		el.closest(classFor).classList.remove(classAddOne);
		el.closest(classFor).classList.remove(classAddTwo);
	}

	if (getClosestClass) {
		for (let i = 0; i < navImgSlider.length; i++) {
			const el = navImgSlider[i];
			const elFor = forImgItem[i];

			el.onmouseenter = function () {
				addSlickActiveNav(el, closestClass, classAddOne, classCenter);
				addSlickActiveFor(elFor, closestClass, classAddOne, classAddTwo, getClosestClass);
			};
			el.onmouseleave = function () {
				removeSlickActiveNav(el, closestClass, classAddOne, classCenter);
			};
		}
	}
});
//====================================productPage=======================