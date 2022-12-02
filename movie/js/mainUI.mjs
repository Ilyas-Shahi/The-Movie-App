import fetchData from '../../modules/fetchData.mjs';

const poster = document.getElementById('poster');
const title = document.getElementById('title');
const rating = document.getElementById('rating');
const description = document.getElementById('description');
const genres = document.getElementById('genres');

const releaseData = document.getElementById('release-date');
const duration = document.getElementById('duration');
const budget = document.getElementById('budget');
const revenue = document.getElementById('revenue');

const id = new URL(window.location).searchParams.get('id');

async function mainUI(method, page, extraQuery) {
  const data = await fetchData(method, page, extraQuery);

  document.title = data.title;

  document.body.style.background = `
  linear-gradient(0deg, #202020 70%, #202020b3 80%), 
  url('https://image.tmdb.org/t/p/w1280${data.backdrop_path}')
  `;
  document.body.style.backgroundSize = '100%';
  document.body.style.backgroundRepeat = 'no-repeat';

  poster.setAttribute(
    'src',
    data.poster_path
      ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
      : './no_image.jpg'
  );

  title.textContent = data.title;
  rating.textContent = Number(data.vote_average).toFixed(1);
  description.textContent = data.overview;

  data.genres.forEach((genre) => {
    const li = document.createElement('li');
    li.textContent = genre.name;

    genres.appendChild(li);
  });

  releaseData.textContent = data.release_date;

  let runTime = data.runtime;
  let hours = 0;
  while (runTime >= 60) {
    runTime = runTime - 60;
    hours++;
  }
  duration.textContent = `${hours}h ${runTime}m`;

  budget.textContent = Number(data.budget).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: '0',
  });

  revenue.textContent = Number(data.revenue).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: '0',
  });
}

export default mainUI;
