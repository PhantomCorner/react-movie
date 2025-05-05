import React from "react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css";
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    {
      id: 1,
      title: "Movie 1",
      release_date: "2020",
    },
    {
      id: 2,
      title: "Movie 2",
      release_date: "2013",
    },
    {
      id: 3,
      title: "Movie 3",
      release_date: "1980",
    },
  ];
  const handleSeach = function (e) {
    e.preventDefault();
    console.log(searchQuery);
    setSearchQuery("");
  };
  return (
    <div>
      <form onSubmit={handleSeach} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search movies here"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((item) => (
          <MovieCard Movie={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
