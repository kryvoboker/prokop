const sortList = document.querySelector('.filter__sort-list');
const sortBtn = document.querySelectorAll('.filter__sort-btn');

sortList.addEventListener("click", addActiveSortBtn, addActiveSaleBtn);

function addActiveSortBtn(e) {
	const targetElement = e.target;
	for (let i = 0; i < sortBtn.length; i++) {
		const el = sortBtn[i];
		if (el.classList.contains('active')) {
			el.classList.remove('active');
		}
		if (!targetElement.classList.contains('active')) {
			targetElement.classList.add('active');
		}
	}
}

const saleMethods = document.querySelector('.filter__sale-methods');
const saleBtn = document.querySelectorAll('.filter__sale-btn');

saleMethods.addEventListener("click", addActiveSaleBtn);

function addActiveSaleBtn(e) {
	const targetElement = e.target;
	for (let i = 0; i < saleBtn.length; i++) {
		const el = saleBtn[i];
		if (el.classList.contains('active')) {
			el.classList.remove('active');
		}
		if (!targetElement.classList.contains('active')) {
			targetElement.classList.add('active');
		}
	}
}
