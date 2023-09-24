// Creo array per immagini
const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/03.webp',
];

// counter per prendere le immagini one by one
let counterImg = 0

// porto gli elementi da HTML a JS
const itemsWrapperEl = document.querySelector('.items-wrapper');
const thumbsWrapperEl = document.querySelector('.thumbs-wrapper');

// anche i bottoni
const nextBtnEl = document.querySelector('.next');
const prevBtnEl = document.querySelector('.prev');

// resetto la struttura HTML 
itemsWrapperEl.innerHTML = '';
thumbsWrapperEl.innerHTML = '';

// stampo in pagina con metodo for (da modificare quando inserisco array di oggetti)
for (let i = 0; i < images.length; i++) {
  const image = images[i];
  itemsWrapperEl.innerHTML += `<img class="item hide" src="${images[i]}">`;
  // posso stampare le thumb con lo stesso modo delle img del itemsWrapper
  // thumbsWrapperEl.innerHTML += ` <img class="thumb" src="${images[i]}">`;
  console.log(image);

  // thumb
  // Oppure creare un nuovo elemento IMG per le thumb laterali (altro metodo)
  const thumb = new Image();
  thumb.src = image;
  thumb.classList.add('thumb');
  //stampo in pagina
  thumbsWrapperEl.append(thumb);
}

// colleziono tutte le item in una variabile
const itemCollection = document.getElementsByClassName('item');
// e nascondo la classe hide ad ogni singola immagine che appare grazie al counterImg
itemCollection[counterImg].classList.remove('hide');

// colleziono tutte le thumb e mostro la classe active
const thumbCollection = document.getElementsByClassName('thumb');
thumbCollection[counterImg].classList.add('active');

// PULSANTI

// con il pulsante next (down):
    // - aggiungo classe 'hide' a items
    // - rimuovo classe 'active' a thumb

nextBtnEl.addEventListener('click', function(){
  itemCollection[counterImg].classList.add('hide');
  thumbCollection[counterImg].classList.remove('active');
  // aumenta il contatore e cambia immagine (da 0 a 1, 2 ecc...)
  counterImg++
    // loop infinito
    // - rimuovo classe 'hide' a items
    // - aggiungo classe 'active' a thumb
  if (counterImg === images.length) counterImg = 0;
  itemCollection[counterImg].classList.remove('hide');
  thumbCollection[counterImg].classList.add('active');
  });
  
  // con il pulsante prev (up):
  // - aggiungo classe 'hide' a items
  // - rimuovo classe 'active' a thumb
  
  prevBtnEl.addEventListener('click', function(){
    itemCollection[counterImg].classList.add('hide');
    thumbCollection[counterImg].classList.remove('active');
    // aumenta il contatore e cambia immagine (da 2 a 1, 0)
    counterImg--
    // loop infinito
    // - rimuovo classe 'hide' a items
    // - aggiungo classe 'active' a thumb
    if (counterImg < 0) counterImg = images.length - 1;
    itemCollection[counterImg].classList.remove('hide');
    thumbCollection[counterImg].classList.add('active');
    });