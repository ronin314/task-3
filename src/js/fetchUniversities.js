function fetchUniversities(searchQuery) {
  const url = `http://universities.hipolabs.com/search?country=${searchQuery}`;
  return fetch(url)
    .then(response => response.json())
    .then(universities => universities);
}

export default fetchUniversities;
