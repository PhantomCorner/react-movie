import React from "react";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // if anything updates in array, re render the component

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        alert(err);
        setError("Failed");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);
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
