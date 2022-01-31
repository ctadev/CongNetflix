import axios from "./axios";
import React, { useEffect } from "react";
import { useState, useRef } from "react";
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

  const moviesRef = useRef(null);

  const left = () => {
    moviesRef.current.scrollBy(-500, 0);
  };

  const right = () => {
    moviesRef.current.scrollBy(500, 0);
  };

  return (
    <div className="movies_list">
      <h1>{title}</h1>
      <div className="movies_container">
        <button className="left-btn" onClick={() => left()}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="wrapper" ref={moviesRef}>
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
                  <p className="title">
                    {movie?.title || movie?.name || movie?.original_name}
                  </p>
                </div>
              )
          )}
        </div>
        <button className="right-btn" onClick={() => right()}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Movies;
