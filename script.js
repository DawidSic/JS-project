const arrowBtn = document.querySelector('.arrow')
const arrowIcon = document.querySelector('.fas')
const img = document.querySelector('.item1')

// 1. Listening for click on arrow
// 2. adding class 'hide'
// 3. turning the arrow

const showImg = () => {
	img.classList.toggle('hide')

	if (img.classList.contains('hide')) {
		arrowIcon.style.transform = 'rotate(180deg)'
	} else {
		arrowIcon.style.transform = 'rotate(0deg)'
	}
}

arrowBtn.addEventListener('click', showImg)
