import React from "react";
import Nav from "../Components/Nav";
import Banner from "../Components/Banner";
import Movie from "../Components/Movies";
import requests from "../Components/requests";

function Home() {
  return (
    <div className="home_container">
      <Nav />
      <Banner />
      <Movie
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Movie title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Movie title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Movie title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Movie title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Movie title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    </div>
  );
}

export default Home;
