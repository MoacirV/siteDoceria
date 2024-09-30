const slides = document.querySelectorAll('[data-js="carousel__item"]');
const nextButton = document.querySelector('[data-js="carousel__button--next"]'); // Corrigido para o seletor correto
const prevButton = document.querySelector('[data-js="carousel__button--prev"]'); // Corrigido para o seletor correto

const lastSlideIndex = slides.length - 1
let currentSlidesIndex = 0

const manipulateSlidesClass = () => {
    slides.forEach(slide => slide.classList.remove('carousel__item--visible')); // Corrigido o nome da classe
    slides[currentSlidesIndex].classList.add('carousel__item--visible'); // Usar currentSlidesIndex
}

nextButton.addEventListener('click', () => {
    currentSlidesIndex = (currentSlidesIndex === lastSlideIndex) ? 0 : ++currentSlidesIndex; // Atualização do índice
    manipulateSlidesClass(); // Chamada da função
})

prevButton.addEventListener('click', () => {
    currentSlidesIndex = (currentSlidesIndex === 0) ? lastSlideIndex : --currentSlidesIndex; // Atualização do índice
    manipulateSlidesClass(); // Chamada da função
});