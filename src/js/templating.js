import refs from './refs';
import universitiesTpl from '../template/universitiesTpl.hbs';

function updateMarkup(array) {
  if (!array) {
    return;
  }
  const universitiesInfo = universitiesTpl(array);
  refs.universitiesList.insertAdjacentHTML('beforeend', universitiesInfo);
}

export default updateMarkup;
