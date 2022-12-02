import fetchData from '../../modules/fetchData.mjs';

const moviesList = document.getElementById('movies-list');
const pageNum = document.getElementById('page');
const prevPage = document.getElementById('prev-page');

async function cardsUI(method, page, extraQuery) {
  const data = await fetchData(method, page, extraQuery);

  // resting movies list and previous page btn
  moviesList.innerHTML = '';

  if (pageNum.textContent <= 1) {
    prevPage.setAttribute('disabled', '');
  } else {
    prevPage.removeAttribute('disabled');
  }

  // creating a card for each movie and appending it into the movies list
  data.results.forEach((movie) => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <a href="./movie/?id=${movie.id}"><img
        class="card-img"
        src="${
          movie.poster_path
            ? `http://image.tmdb.org/t/p/w500${movie.poster_path}`
            : '../no_image.jpg'
        }"
      /></a>
      <div class="card-content">
        <p class="card-content_rating">
          <span class="sub-text">Rating:</span> ${Number(
            movie.vote_average
          ).toFixed(1)}
        </p>

        <a href="./movie/?id=${movie.id}"><h5 class="card-content_title">${
      movie.title
    }</h5></a>
      </div>
    `;

    moviesList.appendChild(card);
  });
}

export default cardsUI;
