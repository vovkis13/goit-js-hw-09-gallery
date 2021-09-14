export default function turnImage(key, currentImg, lightboxImgRef) {
  let sibling = false;

  if (key === 'ArrowLeft') sibling = currentImg.parentNode.parentNode.previousElementSibling;
  if (key === 'ArrowRight') sibling = currentImg.parentNode.parentNode.nextElementSibling;
  if (sibling) currentImg = sibling.querySelector('img.gallery__image');
  lightboxImgRef.setAttribute('src', currentImg.dataset.source);
  return currentImg;
}
