export default function renderGallery(galleryItems, galleryRef) {
  let listOfImagesText = '';
  galleryItems.forEach(
    ({ preview, original, description }) =>
      (listOfImagesText += `
  <li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
  `),
  );
  galleryRef.insertAdjacentHTML('afterbegin', listOfImagesText);
}
