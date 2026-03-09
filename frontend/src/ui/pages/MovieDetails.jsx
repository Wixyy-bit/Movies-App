import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useFavorites } from "../../hooks/useFavorites"
import { useHistory } from "../../hooks/useHistory"
import "../styles/moviedetail.css"

const IMG = "https://image.tmdb.org/t/p/w500"
const BACKDROP = "https://image.tmdb.org/t/p/original"

const API_KEY = "c58f21dbd250fe5ca73f83736cfb274d"

function MovieDetails() {

  const { id } = useParams()

  const { favorites, fetchFavorites, addFavorite, removeFavorite, isFavorite } = useFavorites()
  const { addHistory } = useHistory()

  const [movie, setMovie] = useState(null)
  const [trailer, setTrailer] = useState(null)
  const [showTrailer, setShowTrailer] = useState(false)

  useEffect(() => {

    async function fetchMovie() {

      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      )

      const data = await res.json()
        
      
      setMovie(data)

        if(data){
            addHistory(data)
        }
    }

    async function fetchTrailer() {

      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
      )

      const data = await res.json()

      const trailerVideo = data.results.find(
        vid => vid.type === "Trailer" && vid.site === "YouTube"
      )

      if (trailerVideo) {
        setTrailer(trailerVideo.key)
      }

    }

    fetchMovie()
    fetchTrailer()
    fetchFavorites()
  }, [id])


  if (!movie) return <p style={{ color: "white", padding: "40px" }}>Loading...</p>

  return (

    <div className="details-container">

      <div
        className="backdrop"
        style={{
          backgroundImage: movie.backdrop_path
            ? `url(${BACKDROP + movie.backdrop_path})`
            : "none"
        }}
      />

      <div className="details-content">

        <img
          className="poster"
          src={movie.poster_path ? IMG + movie.poster_path : "/no-image.png"}
          alt={movie.title}
        />

        <div className="info">

          <h1>{movie.title}</h1>

          <p className="meta">
            ⭐ {movie.vote_average?.toFixed(1)}
            <span>{movie.release_date}</span>
          </p>

          <div className="genres">
            {movie.genres?.map(g => (
              <span key={g.id}>{g.name}</span>
            ))}
          </div>

          <p className="overview">
            {movie.overview || "Description not available"}
          </p>

          <div className="buttons">

            {trailer && (
              <button
                className="play-btn"
                onClick={() => setShowTrailer(true)}
              >
                ▶ Play Trailer
              </button>
            )}

            {isFavorite(movie.id) ? (

            <button
                className="fav-btn"
                onClick={() => removeFavorite(movie.id)}
            >
                ❌ Remove Favorite
            </button>

        ) : (

        <button
            className="fav-btn"
            onClick={() => addFavorite(movie)}
         >
                ❤️ Add Favorite
        </button>

)}

          </div>

        </div>

      </div>

      {/* Trailer Modal */}

      {showTrailer && trailer && (

        <div className="trailer-modal">

          <div className="trailer-content">

            <button
              className="close-btn"
              onClick={() => setShowTrailer(false)}
            >
              ✕
            </button>

            <iframe
              width="900"
              height="500"
              src={`https://www.youtube.com/embed/${trailer}`}
              title="Trailer"
              allowFullScreen
            />

          </div>

        </div>

      )}

    </div>

  )

}

export default MovieDetails