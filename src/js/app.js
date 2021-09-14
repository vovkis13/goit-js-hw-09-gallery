import galleryItems from './source';
import renderGallery from './render-gallery';
import openOriginalImage from './open-modal';
import closeOriginalImg from './close-modal';
import turnImage from './turn-image';

const lightboxRef = document.querySelector('div.lightbox');
const lightboxImgRef = document.querySelector('img.lightbox__image');
const lightboxBtnRef = document.querySelector("button[data-action='close-lightbox']");
const overlayRef = document.querySelector('div.lightbox__overlay');
const galleryRef = document.querySelector('ul.js-gallery');

let currentImg;

renderGallery(galleryItems, galleryRef);

//Open original image
galleryRef.addEventListener('click', e => {
  if (e.target.nodeName === 'IMG') currentImg = openOriginalImage(e, lightboxImgRef, lightboxRef);
});

//Close original image on x-button click
lightboxBtnRef.addEventListener('click', e => closeOriginalImg(lightboxImgRef, lightboxRef));

//Close original image on overlay click
overlayRef.addEventListener('click', e => closeOriginalImg(lightboxImgRef, lightboxRef));

window.addEventListener('keydown', e => {
  if (!lightboxRef.classList.contains('is-open')) return;
  //Close original image on Escape keydown
  if (e.key === 'Escape') closeOriginalImg(lightboxImgRef, lightboxRef);
  //Change image on Left-Right keydown
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight')
    currentImg = turnImage(e.key, currentImg, lightboxImgRef);
});
