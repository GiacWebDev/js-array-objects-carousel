// // Creo array per immagini
// const images = [
//   'img/01.webp',
//   'img/02.webp',
//   'img/03.webp',
//   'img/04.webp',
//   'img/03.webp',
// ];

// array di oggetti
const images = [
  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
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
// for (let i = 0; i < images.length; i++) {
//   const image = images[i];
//   itemsWrapperEl.innerHTML += `<img class="item hide" src="${images[i]}">`;
//   // posso stampare le thumb con lo stesso modo delle img del itemsWrapper
//   // thumbsWrapperEl.innerHTML += ` <img class="thumb" src="${images[i]}">`;
//   console.log(image);

//   // thumb
//   // Oppure creare un nuovo elemento IMG per le thumb laterali (altro metodo)
//   const thumb = new Image();
//   thumb.src = image;
//   thumb.classList.add('thumb');
//   //stampo in pagina
//   thumbsWrapperEl.append(thumb);
// }

images.forEach(imageObj => {
  const item = document.createElement('div');
  item.classList.add('item');
  item.classList.add('hide');
  item.classList.add('image-style');

  const image = document.createElement('img');
  image.src = imageObj.image;
  image.alt = imageObj.title;

  const title = document.createElement('h2');
  title.textContent = imageObj.title;

  const text = document.createElement('p');
  text.textContent = imageObj.text;

  item.appendChild(image);
  item.appendChild(title);
  item.appendChild(text);

  itemsWrapperEl.appendChild(item);

  // Creo gli elementi HTML per le thumb delle immagini
  const thumb = new Image();
  thumb.src = imageObj.image;
  thumb.alt = imageObj.title;
  thumb.classList.add('thumb');
  thumbsWrapperEl.appendChild(thumb);
});


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
  // ad ogni cambio counter verifico e poi modifico
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
    // ad ogni cambio counter verifico e poi modifico
    if (counterImg < 0) counterImg = images.length - 1;
    itemCollection[counterImg].classList.remove('hide');
    thumbCollection[counterImg].classList.add('active');
    });