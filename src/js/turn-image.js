export default function changeImage(keyCode, curImg, ImgRef) {
  let sibling = false;

  if (keyCode === "ArrowLeft")
    sibling = curImg.parentNode.parentNode.previousElementSibling;
  if (keyCode === "ArrowRight")
    sibling = curImg.parentNode.parentNode.nextElementSibling;
  if (sibling) curImg = sibling.querySelector("img.gallery__image");
  ImgRef.setAttribute("src", curImg.dataset.source);
  return curImg;
}
