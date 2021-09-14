export default function closeOriginalImg(lightboxImgRef, lightboxRef) {
  lightboxImgRef.setAttribute('src', '');
  lightboxRef.classList.toggle('is-open');
}
