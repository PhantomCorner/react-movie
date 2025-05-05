import "../css/MovieCard.css";
import { useMovieContext } from "../context/MovieContext";
function MovieCard({ Movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(Movie.id);
  function favoriteOnclick(e) {
    e.preventDefault();
    favorite ? removeFromFavorites(Movie.id) : addToFavorites(Movie);
  }
  return (
    <div className="movie-card">
      <div className="mover-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}
          alt={Movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={favoriteOnclick}
          >
            ♡
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{Movie.title}</h3>
        <p>{Movie.release_date}</p>
      </div>
    </div>
  );
}
export default MovieCard;
