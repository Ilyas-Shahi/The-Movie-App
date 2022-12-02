import fetchData from '../../modules/fetchData.mjs';

const trailerIframe = document.getElementById('trailer-iframe');

async function trailer(method, page, extraQuery) {
  const data = await fetchData(method, page, extraQuery);
  // 'Trailer'
  data.results.forEach((video) => {
    if (video.type === 'Trailer') {
      trailerIframe.setAttribute(
        'src',
        `https://www.youtube.com/embed/${video.key}`
      );
    }
  });
}

export default trailer;
