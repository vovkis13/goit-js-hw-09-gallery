export default function openOriginalImage(e, ImgRef, modalRef) {
  e.preventDefault();
  ImgRef.setAttribute("src", e.target.dataset.source);
  modalRef.classList.toggle("is-open");
  return e.target;
}
