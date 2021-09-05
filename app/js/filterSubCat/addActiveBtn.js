const sortBtn = document.querySelectorAll('.filter__sort-btn');
const sortList = document.querySelector('.filter__sort-list');

sortList.addEventListener("click", addActiveSortBtn);

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