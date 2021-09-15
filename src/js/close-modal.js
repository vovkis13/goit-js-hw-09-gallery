export default function closeOriginalImg(ImgRef, modalRef) {
  ImgRef.setAttribute("src", "");
  modalRef.classList.toggle("is-open");
}
