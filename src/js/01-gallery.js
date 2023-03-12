// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryBoxEl = document.querySelector('.gallery');
galleryBoxEl.insertAdjacentHTML('afterbegin', createGalleryItemsMarkup(galleryItems));
function createGalleryItemsMarkup(imgItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`}).join('');
}
   const lightBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
console.log(galleryItems);
