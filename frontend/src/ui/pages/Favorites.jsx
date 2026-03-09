import { useEffect } from "react"
import { useFavorites } from "../../hooks/useFavorites"
import { Link } from "react-router-dom"
import "../styles/favoritecard.css"

const IMG = "https://image.tmdb.org/t/p/w500"

function Favorites(){

  const { favorites, fetchFavorites, removeFavorite } = useFavorites()

  useEffect(()=>{
    fetchFavorites()
  },[])

  return(

    <div className="movie-grid">

      {favorites.map(movie=>(

        <>

        <div className="movie-card" key={movie.movieId}>

        <Link to={`/movie/${movie.movieId}`}>
          <img
            src={IMG + movie.poster}
            alt={movie.title}
          />

          <h3>{movie.title}</h3>

          </Link>
        
          <button
            className="remove-btn"
            onClick={()=>removeFavorite(movie.movieId)}
            >
            Remove ❤️
          </button>

        </div>

        </>

      ))}

        </div>

  )

}

export default Favorites