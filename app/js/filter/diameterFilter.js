//====================================diameterFilter.js========================
const $diameterFrom = data => document.querySelector('#diameterFrom').value = data;
const $diameterTo = data => document.querySelector('#diameterTo').value = data;

let $selectorsDiameter = document.querySelectorAll('.filter__diameter-radio');
$selectorsDiameter.forEach($radio => {
	$radio.addEventListener('change', function () {
		$diameterFrom(this.getAttribute('data-diameter-from'));
		$diameterTo(this.getAttribute('data-diameter-to'));
	});
});
//====================================diameterFilter.js========================