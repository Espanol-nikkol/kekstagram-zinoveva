import { isEscapeKey, isEnterKey } from './util.js';
import { showBigPicture } from './big-picture.js';
import { renderBigComments } from './big-picture-comments.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureExit = document.querySelector('#picture-cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

function openBigPicture (data) {
  showBigPicture(data);
  renderBigComments(data.comments);
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

bigPictureExit.addEventListener('click', () => {
  closeBigPicture();
});

bigPictureExit.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeBigPicture();
  }
});

export { openBigPicture, closeBigPicture };
