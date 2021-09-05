const $totLengFrom = data => document.querySelector('#totLengFrom').value = data;
const $totLengTo = data => document.querySelector('#totLengTo').value = data;

let $selectorsTotLeng = document.querySelectorAll('.filter__total-length-radio');
$selectorsTotLeng.forEach($radio => {
	$radio.addEventListener('change', function () {
		$totLengFrom(this.getAttribute('data-totLeng-from'));
		$totLengTo(this.getAttribute('data-totLeng-to'));
	});
});