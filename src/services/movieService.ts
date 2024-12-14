import axios, { AxiosResponse } from "axios";
import { DetailMovie } from "../types/types";

const API_KEY = "da5300c2";
const BASE_URL = "https://www.omdbapi.com/";

// Get Movies base in use input
export const getSearchMovies = async (query: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        s: query,
        apikey: API_KEY,
      },
    });
    console.log("response", response);

    return response.data.Search;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

// Get movie detials base imdbID
export const getMovieDetails = async (id: string): Promise<AxiosResponse<DetailMovie>> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        i: id,
        apikey: API_KEY,
      },
    });
    console.log("response", response);
    console.log("responseData", response.data);

    return response;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw new Error("Failed to fetch movie details");
  }
};
