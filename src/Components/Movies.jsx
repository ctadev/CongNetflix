import axios from "./axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "./movies.scss";

function Movies({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const baseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="movies_list">
      <h1>{title}</h1>
      <div className="movies_container">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <div className="cards" key={movie.id}>
                <img
                  src={`${baseURL}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                  className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                />
                <p className="title">{movie?.title || movie?.name || movie?.original_name}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Movies;
