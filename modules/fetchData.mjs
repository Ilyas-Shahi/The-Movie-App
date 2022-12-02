const apiKey = 'd18484538f966527fc6c1a364c9d3b08';

async function fetchData(method, page, extraQuery) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/${method}?api_key=${apiKey}&language=en-US&page=${page}${extraQuery}`
    );

    if (!response.ok) {
      throw new Error('Error: ' + response.status);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export default fetchData;
