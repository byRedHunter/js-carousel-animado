const $sliders = document.querySelectorAll('.carousel-item')
const $prev = document.querySelector('#prev')
const $next = document.querySelector('#next')

const nextSlider = (sliders) => {
	const totalSliders = sliders.length - 1
	let indice

	sliders.forEach((slider, i) => {
		if (slider.classList.contains('active')) {
			slider.classList.remove('active')
			indice = i + 1
			if (indice > totalSliders) indice = 0
		}
	})

	sliders[indice].classList.add('active')
}

const prevSlider = (sliders) => {
	const totalSliders = sliders.length - 1
	let indice

	sliders.forEach((slider, i) => {
		if (slider.classList.contains('active')) {
			slider.classList.remove('active')
			indice = i - 1
			if (indice < 0) indice = totalSliders
		}
	})

	sliders[indice].classList.add('active')
}

$next.addEventListener('click', () => {
	nextSlider($sliders)
})
$prev.addEventListener('click', () => {
	prevSlider($sliders)
})

document.onload = setInterval(() => {
	nextSlider($sliders)
}, 5000)
