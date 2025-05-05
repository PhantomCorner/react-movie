import React from "react";
import MovieCard from "../components/MovieCard";

export default function Home() {
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
  return (
    <div>
      <div className="movies-grid">
        {movies.map((item) => (
          <MovieCard Movie={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
