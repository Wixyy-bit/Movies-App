import { Link } from "react-router-dom"
import '../styles/moviecard.css'
import { useFavorites } from "../../hooks/useFavorites"

const IMG = "https://image.tmdb.org/t/p/w500"

function MovieCard({ movie }) {
    

  const {
    title,
    poster_path,
    vote_average,
    release_date,
    overview
  } = movie

  return (
    <Link to={`/movie/${movie.movieId || movie.id}`} className="movie-card">

    <div className="movie-card">

      <img
        src={poster_path ? IMG + poster_path : "/no-image.png"}
        alt={title}
      />

      <div className="movie-info">

        <h3>{title}</h3>

        <span className="rating">
          ⭐ {vote_average ? vote_average.toFixed(1) : "N/A"}
        </span>

      </div>

      <p className="year">
        {release_date ? release_date.slice(0,4) : "N/A"}
      </p>

      <div id="overview">
        <h4>Overview</h4>
        <p>{overview || "No description available."}</p>
      </div>

    </div>
    </Link>

  )

}

export default MovieCard