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