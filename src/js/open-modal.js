export default function openOriginalImage(e, lightboxImgRef, lightboxRef) {
  e.preventDefault();
  lightboxImgRef.setAttribute('src', e.target.dataset.source);
  lightboxRef.classList.toggle('is-open');
  return e.target;
}
