import "../css/MovieCard.css";
function MovieCard({ Movie }) {
  function favoriteOnclick() {
    console.log("clicked");
  }
  return (
    <div className="movie-card">
      <div className="mover-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`}
          alt={Movie.title}
        />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={favoriteOnclick}>
            Like
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
