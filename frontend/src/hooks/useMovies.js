import { useDispatch } from "react-redux"
import { setTrendingMovies } from "../state/slices/movieSlice"

const API_KEY = "c58f21dbd250fe5ca73f83736cfb274d"

export const useMovies = () => {

  const dispatch = useDispatch()

  const fetchTrendingMovies = async (page = 1) => {

    const res = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${page}`
    )

    const data = await res.json()

    dispatch(setTrendingMovies(data.results))

  }

  return { fetchTrendingMovies }

}