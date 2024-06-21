// QFPscript.js
document.addEventListener('DOMContentLoaded', () => {
    const card = document.querySelector('.card1');
    const svgHolder = document.querySelector('.svg-holder');
    const svgHolderBack = document.querySelector('.svg-holder-back');

    svgHolder.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });

    svgHolderBack.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

