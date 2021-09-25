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