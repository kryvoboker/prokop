const filterShow = document.querySelector('.filter-btn__show');
const filterClose = document.querySelector('.filter-btn__close');
const filterBtnShow = document.getElementById('filterShow');
const filterBtnClose = document.getElementById('filterClose');

filterShow.onclick = function () {
	filterBtnShow.classList.add('active');
	filterBtnClose.classList.add('active');
	$('.body-grid, .filter, .body-grid-inner').addClass('active');
}

filterClose.onclick = function () {
	filterBtnShow.classList.remove('active');
	filterBtnClose.classList.remove('active');
	$('.body-grid, .filter, .body-grid-inner').removeClass('active');
}