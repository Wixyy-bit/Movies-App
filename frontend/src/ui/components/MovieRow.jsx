import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import "../styles/movierow.css"

const API_KEY = "c58f21dbd250fe5ca73f83736cfb274d"

function MovieRow({ title, endpoint }) {

  const [movies,setMovies] = useState([])

  useEffect(()=>{

    async function fetchMovies(){

      const res = await fetch(
        `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}`
      )

      const data = await res.json()

      setMovies(data.results)

    }

    fetchMovies()

  },[endpoint])

  return (

    <div className="movie-row">

      <h2>{title}</h2>

      <div className="row-posters">

        {movies.map(movie=>(
          <MovieCard key={movie.id} movie={movie}/>
        ))}

      </div>

    </div>

  )

}

export default MovieRow