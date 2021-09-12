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