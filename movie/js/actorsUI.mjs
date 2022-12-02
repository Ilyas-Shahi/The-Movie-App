import fetchData from '../../modules/fetchData.mjs';

const actorsGrid = document.getElementById('actors-grid');

async function actorsUI(method, page, extraQuery) {
  const data = await fetchData(method, page, extraQuery);

  data.cast.forEach((cast) => {
    if (cast.order < 12) {
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
      <img
      src="${
        cast.profile_path
          ? `http://image.tmdb.org/t/p/w154${cast.profile_path}`
          : '../../no_image.jpg'
      }"
      class="actor-img"/>

      <p class="actor-name">${cast.name}</p>
      <p class="character">${cast.character}</p>
    `;

      actorsGrid.appendChild(card);
    }
  });
}

export default actorsUI;
