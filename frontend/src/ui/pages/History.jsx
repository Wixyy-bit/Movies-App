import { useEffect, useState } from "react"
import { useHistory } from "../../hooks/useHistory"
import MovieCard from "../components/MovieCard"

function History(){

  const { getHistory } = useHistory()

  const [movies,setMovies] = useState([])

  useEffect(()=>{

    async function fetchHistory(){

      const data = await getHistory()

      const formattedMovies = data.map(movie => ({
        id: movie.movieId,
        title: movie.title,
        poster_path: movie.poster
      }))

      setMovies(formattedMovies)
    }

    fetchHistory()

  },[])

  return(

    <div className="movie-grid">

      {movies.map(movie=>(
        <MovieCard key={movie.id} movie={movie}/>
      ))}

    </div>

  )

}

export default History