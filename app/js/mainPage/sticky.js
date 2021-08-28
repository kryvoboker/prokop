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