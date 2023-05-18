import Hero from "@components/Hero";
import MovieGallery from "@components/MovieGallery";
import getRandomItem from "@utils/arrays";
const API_KEY = process.env.API_KEY;

const getRandomFeaturedMovie = async () => {
  if (typeof API_KEY !== "string" || API_KEY.trim().length === 0) {
    throw new Error("Invalid API key");
  }
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch [now playing] movie data");
    }

    const data = await response.json();
    const results = data?.results;

    if (!Array.isArray(results) || results.length === 0) {
      throw new Error("No movie results found");
    }

    return getRandomItem(results);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getPopularMovies = async () => {
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

const HomePage = async () => {
  const nowPlayingMovieData = getRandomFeaturedMovie();
  const popularMoviesData = getPopularMovies();
  const [nowPlaying, popularMovies] = await Promise.all([
    nowPlayingMovieData,
    popularMoviesData,
  ]);
  return (
    <section className="flex flex-col lg:flex-row w-full relative bg-liteflix-grey lg:bg-transparent">
      <Hero nowPlaying={nowPlaying} />
      <MovieGallery popularMovies={popularMovies} />
    </section>
  );
};

export default HomePage;
