// Creo array per immagini
const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/03.webp',
];

// porto gli elementi da HTML a JS
const itemsWrapperEl = document.querySelector('.items-wrapper');
const thumbsWrapperEl = document.querySelector('.thumbs-wrapper');

// anche i bottoni
const nextBtnEl = document.querySelector('.next');
const prevBtnEl = document.querySelector('.prev');

// resetto la struttura HTML 

itemsWrapperEl.innerHTML = '';
thumbsWrapperEl.innerHTML = '';