import getRandomItem from "@utils/arrays";

const getRandomFeaturedMovie = async () => {
  const API_KEY = process.env.API_KEY;
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

export default getRandomFeaturedMovie;
