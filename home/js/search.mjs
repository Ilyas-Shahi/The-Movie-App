import cardsUI from './cardsUI.mjs';
import globalValues from './globalValues.mjs';

const cancelSearch = document.getElementById('cancel-search');
const page = document.getElementById('page');
const moviesListTitle = document.getElementById('movies-list-title');
const otherMovies = document.getElementById('other-movies-option');
const orSlash = document.getElementById('or-option');

export function formEvent(e) {
  e.preventDefault();
  cardsUI(globalValues.method, `&page=${page.textContent}`, globalValues.query);
}

export function searchEvent() {
  page.textContent = '1';

  if (search.value) {
    globalValues.method = 'search/movie';
    globalValues.query = `&query=${search.value}`;
    cardsUI(
      globalValues.method,
      `&page=${page.textContent}`,
      globalValues.query
    );

    cancelSearch.style.display = 'inline';

    document.title = `Search Movies`;

    moviesListTitle.textContent = `Search Result's for \`${search.value}\``;
    otherMovies.style.display = 'none';
    orSlash.style.display = 'none';
  } else {
    resetState();
  }
}

export function cancelSearchEvent() {
  search.value = '';

  resetState();
}

function resetState() {
  globalValues.method = 'trending/movie/week';
  globalValues.query = '';
  cardsUI(globalValues.method, '&page=1', globalValues.query);

  page.textContent = '1';
  document.title = `The Movie App`;

  cancelSearch.style.display = 'none';

  moviesListTitle.textContent = 'Trending Now';
  otherMovies.textContent = 'Popular Now';
  otherMovies.style.display = 'unset';
  orSlash.style.display = 'unset';
}
