export default function turnImage(key, curImg, ImgRef) {
  let sibling = false;

  if (key === "ArrowLeft")
    sibling = curImg.parentNode.parentNode.previousElementSibling;
  if (key === "ArrowRight")
    sibling = curImg.parentNode.parentNode.nextElementSibling;
  if (sibling) curImg = sibling.querySelector("img.gallery__image");
  ImgRef.setAttribute("src", curImg.dataset.source);
  return curImg;
}
