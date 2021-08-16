document.querySelector('.header__phone-icon-phone').onclick = function () {
	const elemOne = document.querySelector('.header__phone');
	elemOne.classList.toggle('activated');
	this.classList.toggle('activated');
};

//change header
$(window).on("scroll", function () {
	var scrolled = $(this).scrollTop();
	if (scrolled > 170 && window.innerWidth > 1025) {
		$('.hidden').addClass('active');
	}
	if (scrolled <= 170 && window.innerWidth > 1025) {
		$('.hidden').removeClass('active');
		$('.hidden').removeClass('activated');
	}
});

// checked change header size (width)
window.onresize = function (event) {
	if (window.innerWidth <= 1024) {
		$('.hidden').addClass('active');
	} else {
		$('.hidden').removeClass('active');
	}
};
window.onresize();