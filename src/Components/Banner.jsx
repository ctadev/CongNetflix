import React, { useEffect } from "react";
import "./banner.scss";
import axios from "./axios";
import { useState } from "react";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
        return request;
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  if (movie.length === 0 || movie === null || movie === "undefined") {
    return (
      <div className="banner">
        <h1>loading</h1>
      </div>
    );
  } else {
    return (
      <header
        className="banner"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${
            movie ? movie.backdrop_path : movie.poster_path
          }')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="banner_content">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className="banner_btn">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>
          <p className="banner_description">{truncate(movie.overview, 200)}</p>
        </div>

        <div className="overlay"></div>
      </header>
    );
  }
}

export default Banner;
