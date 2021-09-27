const fancyboxPopup = document.querySelector('#dialog-content');
if (fancyboxPopup) {
	Fancybox.show(
		[
			{
				src: "#dialog-content", type: "inline"
			}
		]
	);
}