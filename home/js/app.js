import cardsUI from './cardsUI.mjs';
import globalValues from './globalValues.mjs';
import { cancelSearchEvent, formEvent, searchEvent } from './search.mjs';

const page = document.getElementById('page');
const prevPage = document.getElementById('prev-page');
const nextPage = document.getElementById('next-page');

const form = document.querySelector('form');
const search = document.getElementById('search');
const cancelSearch = document.getElementById('cancel-search');

const moviesListTitle = document.getElementById('movies-list-title');
const otherMovies = document.getElementById('other-movies-option');

cardsUI(globalValues.method, `&page=${page.textContent}`, globalValues.query);

prevPage.addEventListener('click', () => {
  page.textContent--;
  pageChangeEffect();
});

nextPage.addEventListener('click', () => {
  page.textContent++;
  pageChangeEffect();
});

function pageChangeEffect() {
  scroll(0, 0);

  setTimeout(() => {
    document.title = `Page: ${page.textContent} | The Movie App`;
    cardsUI(
      globalValues.method,
      `&page=${page.textContent}`,
      globalValues.query
    );
  }, 500);
}

// Search Functions
form.addEventListener('submit', formEvent);

search.addEventListener('keyup', searchEvent);

cancelSearch.addEventListener('click', cancelSearchEvent);

// Change movies list
otherMovies.addEventListener('click', () => {
  if (globalValues.method === 'trending/movie/week') {
    globalValues.method = 'discover/movie';
  } else {
    globalValues.method = 'trending/movie/week';
  }

  let temp;
  temp = moviesListTitle.textContent;
  moviesListTitle.textContent = otherMovies.textContent;
  otherMovies.textContent = temp;

  page.textContent = '1';
  document.title = moviesListTitle.textContent;

  cardsUI(globalValues.method, '&page=1', globalValues.query);
});
