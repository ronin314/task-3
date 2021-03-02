import refs from './refs';
import fetchUniversities from './fetchUniversities';
import updateMarkup from './templating';

const search = e => {
  e.preventDefault();
  const inputValue = refs.input.value;
  if (!inputValue) {
    return;
  }
  refs.universitiesList.innerHTML = '';
  fetchUniversities(inputValue).then(universities =>
    updateMarkup(universities),
  );
  refs.input.value = '';
};
const clean = e => {
  e.preventDefault();
  refs.universitiesList.innerHTML = '';
  refs.input.value = '';
};

refs.submitBtn.addEventListener('click', search);
refs.cleanBtn.addEventListener('click', clean);
