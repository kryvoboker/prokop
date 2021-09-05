// поиск производителя
function searchManufFunction() {
	var input, filter, label, i;
	input = document.getElementById("searchManufFilt");
	filter = input.value.toUpperCase();
	div = document.getElementById("manufacturerFilt");
	label = div.getElementsByTagName("label");
	for (i = 0; i < label.length; i++) {
		if (label[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
			label[i].style.display = "";
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
			label[i].style.display = "";
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
			label[i].style.display = "";
		} else {
			label[i].style.display = "none";
		}
	}
}