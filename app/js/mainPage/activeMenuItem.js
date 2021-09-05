//активный пункт главного меню
$(function () {

	var pathname_url = window.location.pathname;
	var href_url = window.location.href;

	$(".header__menu-list li").each(function () {

		var link = $(this).find("a").attr("href");

		if (pathname_url == link || href_url == link) {

			$(this).addClass("active");

		}

	});

});