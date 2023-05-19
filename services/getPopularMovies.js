const getPopularMovies = async () => {
  const API_KEY = process.env.API_KEY;
  if (typeof API_KEY !== "string" || API_KEY.trim().length === 0) {
    throw new Error("Invalid API key");
  }
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch [popular] movie data");
    }

    const data = await response.json();
    const results = data?.results;

    if (!Array.isArray(results) || results.length === 0) {
      throw new Error("No movie results found");
    }

    const last4Movies = results.slice(0, 4);

    return last4Movies;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getPopularMovies;