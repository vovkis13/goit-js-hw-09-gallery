import galleryItems from "./data";
import refs from "./refs";
import createItems from "./render-gallery";
import openOriginalImage from "./open-modal";
import closeOriginalImg from "./close-modal";
import turnImage from "./turn-image";
const { lightboxRef, lightboxImgRef, lightboxBtnRef, overlayRef, galleryRef } =
  refs;
let currentImg;

galleryRef.insertAdjacentHTML("afterbegin", createItems(galleryItems));
//Open original image
galleryRef.addEventListener("click", (e) => {
  if (e.target.nodeName === "IMG")
    currentImg = openOriginalImage(e, lightboxImgRef, lightboxRef);
});

//Close original image on x-button click
lightboxBtnRef.addEventListener("click", (e) =>
  closeOriginalImg(lightboxImgRef, lightboxRef)
);

//Close original image on overlay click
overlayRef.addEventListener("click", (e) =>
  closeOriginalImg(lightboxImgRef, lightboxRef)
);

window.addEventListener("keydown", (e) => {
  if (!lightboxRef.classList.contains("is-open")) return;
  //Close original image on Escape keydown
  if (e.key === "Escape") closeOriginalImg(lightboxImgRef, lightboxRef);
  //Change image on Left-Right keydown
  if (e.key === "ArrowLeft" || e.key === "ArrowRight")
    currentImg = turnImage(e.key, currentImg, lightboxImgRef);
});
