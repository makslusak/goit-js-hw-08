// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');

addMarkup(galleryItems);

function createMarkup(items) {
  return items
    .map(item => {
      return `<a class="gallery__item gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
      title="${item.description}"
    />
  </a>`;
    })
    .join('');
}

function addMarkup(arr) {
  galleryRef.insertAdjacentHTML('beforeend', createMarkup(arr));
}

let gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
gallery.on('show.simplelightbox', function () {});
console.log(gallery);
