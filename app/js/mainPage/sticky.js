sticky = document.getElementById("sticky");

window.onscroll = function () {
	scrollSticky()
};

function scrollSticky() {
	if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
		sticky.style.position = "fixed";
		sticky.style.width = "calc(100vw - 55px)";
	} else {
		sticky.style.position = "static";
	}
}