import axios from "axios";
import type { Movie } from "../types/movie";

interface FetchMovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const myToken = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (
  query: string,
  page: number
): Promise<FetchMovieResponse> => {
  const response = await axios.get<FetchMovieResponse>(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params: {
        query,
        language: "en-US",
        page,
      },
      headers: {
        Authorization: `Bearer ${myToken}`,
        accept: "application/json",
      },
    }
  );
  return response.data;
};
