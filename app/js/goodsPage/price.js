const priceBox = document.querySelectorAll('.goods__prices');
const price = document.querySelectorAll('.goods__price');
const priceDiscount = document.querySelectorAll('.goods__discount');

// for (let i = 0; i < priceBox.length; i++) {
// 	const e = priceBox[i];
// 	for (let j = 0; j < priceDiscount.length; j++) {
// 		const el = priceDiscount[j];
// 		for (let k = 0; k < price.length; k++) {
// 			const elem = price[k];
// 			if (e.contains(el) && e.contains(elem)) {
// 				elem.classList.add('without-discount');
// 			}
// 		}
// 	}
// }

for (const i of priceBox) {
	for (const k of priceDiscount) {
		for (const j of price) {
			if (i.contains(k) && i.contains(j)) {
				j.classList.add('with-discount');
			}
		}
	}
}