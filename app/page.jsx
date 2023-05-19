import Hero from "@components/Hero";
import MovieGallery from "@components/MovieGallery";
import getPopularMovies from "@services/getPopularMovies";
import getRandomFeaturedMovie from "@services/getRandomFeaturedMovie";

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
