export default function createItems(galleryItems) {
  return galleryItems
    .map((elem) => {
      const { preview, original, description } = elem;
      return `
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
  `;
    })
    .join("");
}
