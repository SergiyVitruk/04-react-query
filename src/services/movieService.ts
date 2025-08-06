import axios from "axios";
import type { Movie } from "../types/movie";

export interface SearchResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const myToken = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<SearchResponse>(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params: {
        query,
        language: "en-US",
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${myToken}`,
        accept: "application/json",
      },
    }
  );
  return response.data.results;
};
